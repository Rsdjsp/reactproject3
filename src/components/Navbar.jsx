import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../features/userSlice";

const Nav = styled.nav`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #e7e6e6;
  height: 70px;
  max-height: 70px;
  width: 100%;
  position: fixed;
  z-index: 30;
`;

const Category = styled.div`
  background-color: #ffffff;
  height: 50px;
  max-height: 50px;
  box-shadow: 0px 11px 11px 0px rgba(50, 50, 50, 0.17);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  margin-top: 72px;
  z-index: 20;
`;

const Links = styled(Link)`
  color: #363636;
  text-transform: capitalize;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  font-size: 18px;
  margin-left: 40px;

  :hover {
    text-decoration-line: underline;
    text-underline-offset: 4px;
    color: #a6a6a6;
  }
`;

const Section = styled(Links)`
  font-size: 16px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Search = styled.div`
  font-size: 22px;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 70px;
  & > input {
    outline: none;
    border: none;
    border-bottom: 2px solid #000000;
    padding-left: 10px;
    margin-left: 6px;
    ::placeholder {
      font-weight: 700;
      font-size: 16px;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  margin-right: 70px;
  justify-content: end;
  align-items: center;
  cursor: default;

  & > span {
    font-size: 20px;
  }

  & > div {
    position: relative;
    & > p {
      font-weight: 600;
      padding-top: 2px;
      cursor: pointer;
      text-transform: capitalize;
    }

    & > section {
      position: absolute;
      border: 2px solid #a6a6a6;
      border-radius: 5px;
      width: 100%;
      top: 75%;
      height: 45px;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      & > button {
        background-color: transparent;
        border: none;
        font-weight: 600;
        cursor: pointer;
        :hover {
          text-decoration-line: underline;
          text-underline-offset: 4px;
          color: #e4563c;
        }
      }
    }
  }
`;

export default function Navbar() {
  const dispatch = useDispatch();
  const { name, logged } = useSelector((state) => state.user);
  const [modal, setModal] = useState(false);

  const signOut = () => {
    dispatch(logOutUser());
    setModal(false);
  };

  return (
    <>
      <Nav>
        <Search>
          <AiOutlineSearch />
          <input type="text" placeholder={`Search`} />
        </Search>
        <Links to="/">
          <img src="https://i.imgur.com/XXx1F8H.png" alt="Logo" />
        </Links>
        <LinkContainer>
          {logged && (
            <span>
              <AiOutlineUser />
            </span>
          )}
          {logged ? (
            <div
              onMouseEnter={() => setModal(true)}
              onMouseLeave={() => setModal(false)}
            >
              <p>{name}</p>
              {modal && (
                <section>
                  <button onClick={signOut}>Logout</button>
                </section>
              )}
            </div>
          ) : (
            <Links to="/login">Login</Links>
          )}

          <Links to="/cart">
            <AiOutlineShoppingCart />
            Cart
          </Links>
        </LinkContainer>
      </Nav>
      <Category>
        <Section to="/bestSellers">Best Sellers</Section>
        <Section to="/offers">Offers</Section>
        <Section to="/newCollection">New Collection</Section>
        <Section to="/liquidation">Liquidation</Section>
      </Category>
    </>
  );
}
