import {
  SET_LOADING_STATUS,
  GET_ARTICLES,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "../actions/actionType";

export const initState = {
  articles: [],
  loading: false,
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case ADD_COMMENT:
      state.articles[
        state.articles.findIndex((i) => i.id === action.payload.articleId)
      ].commentList.unshift(action.payload);
      return {
        ...state,
      };
    case DELETE_COMMENT:
      const cl = state.articles[
        state.articles.findIndex((i) => i.id === action.articleId)
      ].commentList.filter((item) => item.id !== action.commentId);
      state.articles[
        state.articles.findIndex((i) => i.id === action.articleId)
      ].commentList = cl;
      console.log("udpated comments", cl);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default articleReducer;
