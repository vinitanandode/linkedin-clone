import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "../actions";
import imgHomeLogo from "../images/home-logo.svg";
import imgSearchIcon from "../images/search-icon.svg";
import imgNavHome from "../images/nav-home.svg";
import imgNavNetwork from "../images/nav-network.svg";
import imgNavJobs from "../images/nav-jobs.svg";
import imgNavMessaging from "../images/nav-messaging.svg";
import imgNavNotification from "../images/nav-notifications.svg";
import imgUser from "../images/user.svg";
import imgNavWork from "../images/nav-work.svg";
import imgDownIcon from "../images/down-icon.svg";
import { CommentMenu, CommentOptions } from "../style/sharedStyles";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="./home">
            <img src={imgHomeLogo} />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src={imgSearchIcon} />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src={imgNavHome} />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={imgNavNetwork} />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={imgNavJobs} />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={imgNavMessaging} />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={imgNavNotification} />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src={imgUser} />
                )}
                {/* <span>
                  Me
                  <img src={imgDownIcon} />
                </span> */}
                <ProfileOptions>
                  <button>
                    Me
                    <img src={imgDownIcon} alt="" />
                  </button>
                  <ProfileMenu>
                    <li>
                      <Profile>
                        {props.user && props.user.photoURL ? (
                          <img src={props.user.photoURL} alt="" />
                        ) : (
                          <img src={imgUser} />
                        )}
                        <div>
                          <RowOne>
                            {props.user && props.user.displayName
                              ? props.user.displayName
                              : ""}
                          </RowOne>
                          <RowTwo>Software Developer</RowTwo>
                        </div>
                      </Profile>
                      <button>View Profile</button>
                    </li>
                    {/* <li>View Profile</li> */}
                    <li>Settings & Privacy</li>
                    <li>Help</li>
                    <li>Language</li>
                    <li>Posts & Activity</li>
                    <li>Job Posting Account</li>
                    <li onClick={() => props.SignOut()}>Sign Out</li>
                  </ProfileMenu>
                </ProfileOptions>
              </a>
            </User>
            <Work>
              <a>
                <img src={imgNavWork} />
                <span>
                  Work
                  <img src={imgDownIcon} />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const ProfileMenu = styled.ul`
  position: absolute;
  visibility: hidden;
  font-size: 14px;
  z-index: 2;
  border-radius: 5px 0 5px 5px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.3) 0px 4px 4px 0px;
  top: 45px;
  right: 10px;
  width: 240px;
  height: auto;
  list-style: none;
  margin-top: 2px;
  margin-bottom: 2px;
  opacity: 0;
  background-color: white;
  transition: opacity 0.5s, margin-top 0.2s;

  li {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    height: auto;
    padding: 10px;

    &:hover:nth-child(1) {
      background-color: white;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      cursor: pointer;
    }

    button {
      border: 1px solid #0a66c2;
      border-radius: 20px;
      padding: 5px;
      margin: 5px;
      cursor: pointer;

      &:hover {
        background-color: #b2cbeb;
      }
    }
  }
`;

const ProfileOptions = styled.div`
  display: flex;
  align-items: center;
  color: grey;

  &:hover {
    ${ProfileMenu} {
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

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  height: 60px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  div {
    padding: 10px;
  }
`;

const RowOne = styled.span`
  color: black;
  font-weight: 700;
  font-size: 14px;
`;

const RowTwo = styled.span`
  color: grey;
  font-size: 12px;
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  SignOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
