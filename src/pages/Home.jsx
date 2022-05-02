import React from "react";
import styled from "styled-components";

const Cover = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-self: center;
  align-items: center;
  width: 100%;
  height: 82vh;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Playfair Display", serif;
  margin-left: 78px;
  font-size: 48px;
  & > h3 {
    font-weight: lighter;
    text-shadow: 0px 16px 7px rgba(150, 150, 150, 0.33);
    text-align: center;
  }
  & > button {
    width: 40%;
    height: 1.9rem;
    border: none;
    margin-left: 2%;
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
`;

export default function Home() {
  return (
    <Cover>
      <Intro>
        <h3>Save 20 % in your Second pruduct whit Your credit card</h3>
        <button>shop now</button>
      </Intro>
      <img src="https://i.imgur.com/YVfZTT0.png" alt="promotion" />
    </Cover>
  );
}
