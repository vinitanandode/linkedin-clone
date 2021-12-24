import styled from "styled-components";
import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../actions";
import imgUser from "../images/user.svg";
import imgShareImg from "../images/share-image.svg";
import imgShareVideo from "../images/share-video.svg";
import imgShareComment from "../images/share-comment.svg";
import imgClose from "../images/close.svg";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImgae] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [asssetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert("Not an image the files is a ${typeof image}");
    }
    setShareImgae(image);
  };

  const switchAssetArea = (area) => {
    setShareImgae("");
    setVideoLink("");
    setAssetArea(area);
  };

  const postArticle = (e) => {
    e.preventDefault();

    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    props.postArticle(payload);
    reset(e);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImgae("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h1>Create a post</h1>
              <button onClick={(event) => reset(event)}>
                <img src={imgClose} alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} />
                ) : (
                  <img src={imgUser} alt="" />
                )}
                <span>{props.user.displayName}</span>
              </UserInfo>
              <Editer>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                />
                {asssetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="images/gif, image/jpeg, image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </UploadImage>
                ) : (
                  asssetArea === "media" && (
                    <>
                      <input
                        type="text"
                        placeholder="Please input video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editer>
            </SharedContent>
            <SharedCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  <img src={imgShareImg} alt="" />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("media")}>
                  <img src={imgShareVideo} alt="" />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src={imgShareComment} alt="" />
                  <span>Anyone</span>
                </AssetButton>
              </ShareComment>
              <PostButton
                disabled={!editorText ? true : false}
                onClick={(e) => postArticle(e)}
              >
                Post
              </PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 21px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 19px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    border: none;
    background: transparent;

    &:hover {
      border: 0 solid rgba(0, 0, 0, 0.9);
      background: rgba(0, 0, 0, 0.09);
      border-radius: 50%;
    }

    svg,
    img {
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12 px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: auto;
  margin: 0 3px;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    border: 0 solid rgba(0, 0, 0, 0.9);
    background: rgba(0, 0, 0, 0.09);
    border-radius: 20%;
  }

  img {
    padding: 0 5px;
  }
`;

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    svg {
      margin-left: 5px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  font-weight: bold;
  height: 30px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  border: none;
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.09)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgba(1,1,1,0.4)" : "white")};

  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
  }
`;

const Editer = styled.div`
  padding: 12px 24px;

  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    border: none;
    outline: none;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
