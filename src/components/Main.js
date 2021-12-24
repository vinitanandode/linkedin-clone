import styled from "styled-components";
import PostModal from "./PostModal";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getArticlesAPI, likeArticle } from "../actions";
import ReactPlayer from "react-player";
import imgUser from "../images/user.svg";
import imgPhotoIcon from "../images/photo-icon.svg";
import imgVideoIcon from "../images/video-icon.svg";
import imgEventIcon from "../images/event-icon.svg";
import imgArticleIcon from "../images/article-icon.svg";
import imgLoading from "../images/loading.svg";
import imgEllipsis from "../images/ellipsis.svg";
import imgLikeIcon from "../images/like-icon.svg";
import imgCommentsIcon from "../images/comments-icon.svg";
import imgShareIcon from "../images/share-icon.svg";
import imgSendIcon from "../images/send-icon.svg";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticles();
    console.log("article", props.articles.length  );
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
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img src={imgEllipsis} alt="" />
                    </button>
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
                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a>{article.comments} comments</a>
                    </li>
                  </SocialCounts>
                  <SocialActions>
                    <button onClick={() => handleLikeClick(article.id)}>
                      <img src={imgLikeIcon}></img>
                      <span>Like</span>
                    </button>
                    <button>
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
  margin: 0 0 8px;
  overflow: visible;
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
    }
    & > div {
      display: flex;
      flex-direction: column;
      padding-left: 5px;
      flex-grow: 1;
      flex-basis: 0;
      margin-right: 8px;
      overflow: hidden;

      span {
        text-align: left;
        padding-top: 2px;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    outline: none;
    border: none;
    /* padding-top: 1px; */

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
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
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      border: none;
      background-color: white;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  /* flex-direction: space-between; */
  justify-content: space-between;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
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
  likeArticle: (key) => dispatch(likeArticle(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
