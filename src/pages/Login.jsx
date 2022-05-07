import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

const LoginForm = styled.div`
  width: 100%;
  max-height: 100vh;
  max-height: fit-content;
  position: absolute;
  z-index: 10;
  background: linear-gradient(to right, #e9e9e9 50%, #f2f2f2 100%);
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
      text-align: center;
      font-weight: 400;
      font-size: 30px;
      font-family: "Playfair Display", serif;
      margin-bottom: 30px;
    }

    & > input {
      height: 35px;
      width: 45%;
      margin-bottom: 15px;

      outline: none;
      border: 1.5px solid #a6a6a6;
    }

    & > p {
      margin: 0;
      width: 45%;
      font-size: 11px;
      font-weight: 500;
      text-align: end;
      cursor: pointer;
      :hover {
        text-decoration-line: underline;
        text-underline-offset: 4px;
        font-weight: bolder;
      }
    }

    & > button {
      width: 45%;
      height: 35px;
      border: none;
      margin-top: 35px;
      font-size: 15px;
      text-transform: uppercase;
      color: #ffffff;
      background-color: #e4563c;
      border-radius: 0.125rem;
      box-shadow: 0px 11px 11px 0px rgba(50, 50, 50, 0.1);
      cursor: pointer;
      :hover {
        background-color: #f7a293;
        font-size: 16px;
      }
    }
  }
  & > div {
    width: 22.17%;
    display: flex;
    flex-direction: column;

    & > h4 {
      margin-top: 50px;
      font-size: 13px;
      font-weight: 500;
    }

    & > #google {
      height: 50px;
      border: 1.5px solid #a6a6a6;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      color: #363636ba;
      cursor: pointer;

      :hover {
        opacity: 70%;
      }

      & > span {
        margin: auto 5px auto 0px;
        font-size: 40px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 45px;
        width: 45px;
        background-color: #ffffff;
        border-radius: 5%;
      }
    }
  }
  & > #account {
    background-color: transparent;
    border: none;
    margin-top: 70px;
    margin-bottom: 10px;
    cursor: pointer;
    text-decoration-line: underline;
    text-underline-offset: 4px;
    :hover {
      font-weight: 600;
    }
  }
`;

export default function Login() {
  const [login, setLogin] = useState(true);
  return (
    <LoginForm>
      <form>
        <h1>{login ? "Login" : "Create an Account"}</h1>
        {!login && <input type="text" placeholder="Firstname" />}
        {!login && <input type="text" placeholder="Lastname" />}
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        {login && <p>FORGOT PASSWORD?</p>}
        <button>{login ? "SIGN IN" : "SIGN UP"}</button>
      </form>
      {login && (
        <div>
          <h4>Or login with:</h4>
          <button id="google">
            <span>
              <FcGoogle />
            </span>
            Log in with Google
          </button>
        </div>
      )}
      <button onClick={() => setLogin(!login)} id="account">
              {login ? "Create Account" : "Login"}
      </button>
    </LoginForm>
  );
}
