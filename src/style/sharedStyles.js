import styled from "styled-components";

export const CommentMenu = styled.ul`
  position: absolute;
  visibility: hidden;
  font-size: 12px;
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

export const CommentOptions = styled.div`
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
