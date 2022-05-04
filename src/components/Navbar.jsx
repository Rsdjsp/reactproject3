import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";

const Nav = styled.nav`
  background-color: #ffffff;
  color: #363636;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #e7e6e6;
  height: 70px;
  max-height: 70px;
`;

const Category = styled.div`
  background-color: #ffffff;
  height: 50px;
  max-height: 50px;
  box-shadow: 0px 11px 11px 0px rgba(50, 50, 50, 0.17);
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: #363636;
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
  font-size: 16px;
`;

export default function Navbar() {
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
          <Links to="/">
            <AiOutlineUser />
            Sign In
          </Links>
          <Links to="/">
            <AiOutlineShoppingCart />
            Cart
          </Links>
        </LinkContainer>
      </Nav>
      <Category>
        <Section to="/">Best Sellers</Section>
        <Section to="/">Offers</Section>
        <Section to="/">New Collection</Section>
        <Section to="/">Liquidation</Section>
      </Category>
    </>
  );
}
