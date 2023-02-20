import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  faInbox,
  faTrophy,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { faStackExchange } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from 'react';

const HeaderContainer = styled.header`
  width: 100%;
  min-width: auto;
  height: 50px;
  position: fixed !important;
  left: 0 !important;
  top: 0 !important;
  border-top: 3px solid #f48225;
  vertical-align: baseline;
  background-color: #f8f9f9;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  .div__header-container {
    width: 1300px;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .h1__stackoverflow {
    height: 100%;
    margin: 0;
    padding: 0 8px;
    display: flex;
    align-items: center;
  }
  .img__stackoverflow-logo {
    display: block;
    width: 150px;
    height: 30px;
    margin-top: -4px;
  }
  .ul__header-list {
    display: flex;
    cursor: pointer;
    position: relative;
    text-align: left;
    align-items: center;
    padding: 2px 0;
    margin: -2px;
    color: #a1a6a9;
    font-size: 13px;
    li {
      padding: 6px 12px;
      margin: 2px;
      white-space: nowrap;
      &:hover {
        background-color: hsl(210deg 8% 90%);
        border-radius: 1000px;
      }
    }
  }
`;

const SearchContainer = styled.form`
  position: relative;
  flex-grow: 1;
  min-width: 184px;
`;

const SearchInput = styled.input`
  display: block;
  padding: 1rem 1rem 1rem 2rem;
  width: 100%;
  height: 2rem;
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 3px;
  outline: none;
  color: hsl(210, 8%, 25%);
  font-size: 13px;
  &:focus {
    box-shadow: 0px 0px 0px 4px hsl(205, 53%, 88%);
    border-color: hsl(206, 100%, 40%);
  }
`;
const OlList = styled.ol`
  display: flex;
  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 3rem;
    color: #727272;
    font-size: 18px;
    &:hover {
      background-color: hsl(210deg 8% 90%);
    }
    &:first-child {
      width: 64px;
      margin: 0 5px;
    }
    &:last-child {
      position: relative;
    }
  }
`;
const UserImg = styled.img`
  width: 30px;
  border-radius: 8px;
`;

export default function HeaderAfterLogin() {
  // const [openModal, setOpenModal] = useState(false);

  // const handlerLogoutModal = () => {
  //   setOpenModal(!openModal);
  // };
  return (
    <HeaderContainer className="header__header">
      <div className="div__header-container">
        <h1 className="h1__stackoverflow">
          <Link to="/">
            <img
              className="img__stackoverflow-logo"
              alt="logo"
              src="img/logo.png"
            />
          </Link>
        </h1>
        <ul className="ul__header-list">
          <li>Products</li>
        </ul>
        <SearchContainer className="form__searchinput">
          <SearchInput className="input__search" placeholder="Search..." />
        </SearchContainer>
      </div>
      <OlList className="ol__header-list">
        <li>
          <UserImg alt="user" src="img/user.png" />
        </li>
        <li>
          <FontAwesomeIcon icon={faInbox} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTrophy} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </li>
        {/* <li onClick={handlerLogoutModal}> */}
        <li>
          <FontAwesomeIcon icon={faStackExchange} />
          {/* {openModal && } */}
        </li>
      </OlList>
    </HeaderContainer>
  );
}
