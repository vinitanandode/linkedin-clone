import { auth, provider, storage } from "../firebase";
import {
  SET_USER,
  SET_LOADING_STATUS,
  GET_ARTICLES,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "./actionType";
import db from "../firebase";
import firebase from "firebase/app";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});

export const addComment = (payload) => ({
  type: ADD_COMMENT,
  payload: payload,
});

export const deleteComment = (articleId, commentId) => ({
  type: DELETE_COMMENT,
  articleId: articleId,
  commentId: commentId,
});

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));

    if (payload.image != "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      //upload
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.byteTransferred / snapshot.totalBytes) * 100;

          console.log(`Progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            // commentsList: db.collection("commentsList").add(),
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            likes: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getCommentList(id) {}

export function getArticlesAPI() {
  return (dispatch) => {
    let payload;
    const list = [];

    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            commentList: getArticleCommentsAPI(doc.id),
            ...doc.data(),
          };
        });
        dispatch(getArticles(payload));
      });
  };
}

export function getArticleCommentsAPI(key) {
  const comments = [];

  db.collection("articles")
    .doc(key)
    .collection("commentsList")
    .orderBy("timestamp", "desc")
    .get()
    .then((subCollections) => {
      subCollections.forEach((sub) => {
        const t1 = { id: sub.id, ...sub.data() };
        comments.push(t1);
      });
    });
  return comments;
}

export function postCommentAPI(payload) {
  return (dispatch) => {
    db.collection("articles")
      .doc(payload.articleId)
      .collection("commentsList")
      .add(payload);
    dispatch(addComment(payload));
  };
}

export function likeArticleAPI(key) {
  return (dispatch) => {
    db.collection("articles")
      .doc(key)
      .update({
        likes: firebase.firestore.FieldValue.increment(1),
      });
  };
}

export function deleteArticleCommentAPI(articleId, commentId) {
  return (dispatch) => {
    db.collection("articles")
      .doc(articleId)
      .collection("commentsList")
      .doc(commentId)
      .delete();
    dispatch(deleteComment(articleId, commentId));
  };
}
