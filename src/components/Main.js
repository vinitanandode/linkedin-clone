import styled from "styled-components";
import PostModal from "./PostModal";
import { useEffect, useState } from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import {
  getArticlesAPI,
  likeArticleAPI,
  postCommentAPI,
  deleteArticleCommentAPI,
} from "../actions";
import ReactPlayer from "react-player";
import imgUser from "../images/user.svg";
import imgPhotoIcon from "../images/photo-icon.svg";
import imgVideoIcon from "../images/video-icon.svg";
import imgEventIcon from "../images/event-icon.svg";
import imgArticleIcon from "../images/article-icon.svg";
import imgLoading from "../images/loading.svg";
import imgEllipsis from "../images/ellipsis1.svg";
import imgLikeIcon from "../images/like-icon.svg";
import imgCommentsIcon from "../images/comments-icon.svg";
import imgShareIcon from "../images/share-icon.svg";
import imgSendIcon from "../images/send-icon.svg";
import imgSaveIcon from "../images/save.svg";
import imgDeleteIcon from "../images/delete.svg";
import imgEditIcon from "../images/edit.svg";
import { getAllByPlaceholderText } from "@testing-library/react";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");
  const [postComment, setPostComment] = useState("");
  const [menuCommentToggle, setMenuCommentToggle] = useState(false);
  const [showComments, setShowComments] = useState({});

  useEffect(() => {
    props.getArticles();
    console.log("articles", props.articles);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  const handleLikeClick = (key) => {
    props.likeArticle(key);
  };

  const handleCommentClick = (key) => {
    setShowComments((prevShowComments) => ({
      ...prevShowComments,
      [key]: !prevShowComments[key],
    }));
  };

  const handleDeleteCommentClick = (articleId, commentId) => {
    console.log("delete article id", articleId);
    console.log("delete comment id", commentId);
    props.deleteComment(articleId, commentId);
  };

  const handleCommentOptionsClick = (key) => {
    console.log("menu option click before", menuCommentToggle);
    setMenuCommentToggle(!menuCommentToggle);
    console.log("menu option click after", menuCommentToggle);
  };

  const handlePostCommentClick = (e, id) => {
    e.preventDefault();
    const dateNow = new Date();
    const timeNow = dateNow.getDate();

    const payload = {
      articleId: id,
      img: props.user.photoURL,
      user: props.user.displayName,
      comment: postComment,
      timestamp: firebase.firestore.Timestamp.now(),
      likes: 0,
    };

    props.postComment(payload);
    setPostComment("");
  };

  return (
    <>
      {props.articles.length === 0 ? (
        <p>There ar no articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} />
              ) : (
                <img src={imgUser} />
              )}
              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a post
              </button>
            </div>
            <div>
              <button>
                <img src={imgPhotoIcon} />
                <span>Photo</span>
              </button>
              <button>
                <img src={imgVideoIcon} />
                <span>Video</span>
              </button>
              <button>
                <img src={imgEventIcon} />
                <span>Event</span>
              </button>
              <button>
                <img src={imgArticleIcon} />
                <span>Article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props.loading && <img src={imgLoading} />}
            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key} id={article.id}>
                  <SharedActor>
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span className="title">{article.actor.title}</span>
                        {/* <span>{article.actor.description}</span> */}
                        <span>Software Developer</span>
                        <span>
                          {article.actor.date
                            .toDate()
                            .toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            })}
                        </span>
                      </div>
                    </a>
                    <ArticleOptions>
                      <button>
                        <img src={imgEllipsis} alt="" />
                      </button>
                      <ArticleMenu>
                        <li>
                          <img src={imgSaveIcon} />
                          <a>
                            Save
                            <span></span>
                          </a>
                        </li>
                        <li>
                          <img src={imgDeleteIcon} />
                          <a>
                            Delete post
                            <span></span>
                          </a>
                        </li>
                        <li>
                          <img src={imgEditIcon} />
                          <a>
                            Edit post
                            <span></span>
                          </a>
                        </li>
                      </ArticleMenu>
                    </ArticleOptions>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImg>
                    <a>
                      {!article.shareImg && article.video ? (
                        <ReactPlayer width={"100%"} url={article.video} />
                      ) : (
                        article.sharedImg && <img src={article.sharedImg} />
                      )}
                    </a>
                  </SharedImg>
                  <SocialCounts>
                    <li>
                      <button>
                        <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
                        {/* <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" /> */}
                        <span>{article.likes}</span>
                      </button>
                    </li>
                    <li>
                      <a>{`${article.comments} comments`}</a>
                    </li>
                  </SocialCounts>
                  <SocialActions>
                    <button onClick={() => handleLikeClick(article.id)}>
                      <img src={imgLikeIcon}></img>
                      <span>Like</span>
                    </button>
                    <button
                      id={article.id}
                      onClick={(id) => handleCommentClick(article.id)}
                    >
                      <img src={imgCommentsIcon}></img>
                      <span>Comments</span>
                    </button>
                    <button>
                      <img src={imgShareIcon}></img>
                      <span>Share</span>
                    </button>
                    <button>
                      <img src={imgSendIcon}></img>
                      <span>Send</span>
                    </button>
                  </SocialActions>
                  {showComments[article.id] ? (
                    <SocialComments>
                      <AddComment>
                        {props.user && props.user.photoURL ? (
                          <img src={props.user.photoURL} />
                        ) : (
                          <img src={imgUser} />
                        )}
                        <div>
                          <textarea
                            value={postComment}
                            onChange={(e) => setPostComment(e.target.value)}
                            placeholder="Add a comment"
                            autoFocus={true}
                          />
                        </div>
                        <button
                          onClick={(e, id) =>
                            handlePostCommentClick(e, article.id)
                          }
                        >
                          Post
                        </button>
                      </AddComment>
                      {article.commentList &&
                        article.commentList.length > 0 &&
                        article.commentList.map((com, key) => (
                          <Comments key={key}>
                            {com.user && com.img ? (
                              <img src={com.img} />
                            ) : (
                              <img src={imgUser} />
                            )}
                            <CommentDetails>
                              <RowOne>
                                <User>{com.user}</User>
                                <CommentWrapper>
                                  <CommentTime>
                                    {com.timestamp
                                      .toDate()
                                      .toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                        hour: "numeric",
                                        minute: "numeric",
                                      })}
                                  </CommentTime>
                                  <CommentOptions
                                    onClick={(id) =>
                                      handleCommentOptionsClick(article.id)
                                    }
                                  >
                                    <button>
                                      <img src={imgEllipsis} alt="" />
                                    </button>
                                    <CommentMenu
                                      menuCommentToggle={menuCommentToggle}
                                    >
                                      <li>
                                        <a
                                          onClick={(articleId, commentId) =>
                                            handleDeleteCommentClick(
                                              article.id,
                                              com.id
                                            )
                                          }
                                        >
                                          Delete a Comment
                                        </a>
                                      </li>
                                      <li>
                                        <a>Update Comment</a>
                                      </li>
                                    </CommentMenu>
                                  </CommentOptions>
                                </CommentWrapper>
                              </RowOne>
                              <RowTwo>Software Developer</RowTwo>
                              <RowThree>{com.comment}</RowThree>
                            </CommentDetails>
                          </Comments>
                        ))}
                    </SocialComments>
                  ) : null}
                </Article>
              ))}
          </Content>
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  padding-bottom: 5px;
  margin: 0 0 8px;
  overflow: visible;
  position: relative;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      padding-left: 8px;
      flex-grow: 1;
      flex-basis: 0;
      margin-right: 8px;
      overflow: hidden;

      span {
        text-align: left;
        padding-top: 2px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);

        &:first-child {
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 10px;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const Description = styled.div`
  padding: 2px 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  display: block;
  position: relative;
  background-color: #f9fafb;
  width: 100%;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  /* align-items: flex-start; */
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(1, 1, 1, 0.6);
    cursor: pointer;

    a {
      &:hover {
        text-decoration: underline;
        color: #0a66c2;
      }
    }
    button {
      display: flex;
      border: none;
      background-color: white;
      cursor: pointer;
      color: rgba(1, 1, 1, 0.6);
      &:hover {
        text-decoration: underline;
        color: #0a66c2;
      }
      img {
        padding: 0 3px;
      }
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: flex;
    justify-content: center;
    width: 150px;
    align-items: center;
    padding: 8px;
    color: #5e5e5e;
    border: none;
    background-color: white;

    span {
      padding-left: 3px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 5px;
    }

    @media (min-width: 768px) {
      span {
        margin-left: 2px;
      }
    }
  }
`;

const SocialComments = styled.div``;

const AddComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  margin: 10px;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    padding-left: 5px;
    padding-right: 3px;
  }

  div {
    width: 100%;
    height: auto;
    padding-left: 5px;
    textarea {
      width: 100%;
      min-height: 30px;
      padding-top: 7px;
      padding-left: 15px;
      padding-bottom: 7px;
      font: inherit;
      font-size: 12px;
      text-align: left;
      overflow: hidden;
      border: 1px solid rgba(0, 0, 0, 0.4);
      border-radius: 30px;
      resize: none;
      outline: none;
      overflow: hidden;
    }
  }
  button {
    width: 12%;
    margin-left: 25px;
    height: 30px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.09)" : "#0a66c2")};
    color: ${(props) => (props.disabled ? "rgba(1,1,1,0.4)" : "white")};
  }
`;

const Comments = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px;
  img {
    top: 0;
    padding-left: 5px;
    padding-right: 3px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;

const CommentDetails = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  padding-left: 15px;
  background: #f2f2f2;
  padding: 10px;
  margin-left: 5px;
  border-radius: 0 10px 10px 10px;
`;

const RowOne = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
`;

const User = styled.a`
  color: black;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommentTime = styled.span`
  color: grey;
  font-size: 12px;
`;

const CommentMenu = styled.ul`
  position: absolute;
  visibility: hidden;
  font-size: 14px;
  z-index: 2;
  border-radius: 5px 0 5px 5px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.3) 0px 4px 4px 0px;
  top: 26px;
  right: 10px;
  width: auto;
  height: auto;
  list-style: none;
  margin-top: 2px;
  margin-bottom: 2px;
  opacity: 0;
  background-color: white;
  transition: opacity 0.5s, margin-top 0.2s;

  li {
    display: flex;
    justify-content: left;
    padding: 10px;
    margin: 0;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      cursor: pointer;
    }
  }
`;

const CommentOptions = styled.div`
  display: flex;
  align-items: center;
  color: grey;

  &:hover {
    ${CommentMenu} {
      visibility: visible;
      opacity: 1;
    }
  }

  button {
    border: none;
    background: transparent;

    img {
      top: 0;
      width: 20px;
      height: 15px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const ArticleOptions = styled(CommentOptions)``;

const ArticleMenu = styled(CommentMenu)`
  li {
    img {
      width: 20px;
      height: 20px;
    }
    a {
      padding-left: 5px;
    }
  }
`;

const RowTwo = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  display: flex;
  justify-content: left;
  padding-top: 2px;
  padding-bottom: 10px;
`;

const RowThree = styled.span`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
  likeArticle: (key) => dispatch(likeArticleAPI(key)),
  postComment: (payload) => dispatch(postCommentAPI(payload)),
  deleteComment: (articleId, commentId) =>
    dispatch(deleteArticleCommentAPI(articleId, commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
