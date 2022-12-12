import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChildOne } from "./ChildOne";
import { ChildTwo } from "./ChildTwo";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const BitComplex = () => {
  const [myValue, setMyValue] = useState("potato");

  console.log("I am re-rendering");
  return (
    <Wrapper>
      What is my current value? {myValue}
      <ChildOne value={myValue}>
        <ChildTwo />
      </ChildOne>
      <br />
      <ul>
        <li>
          <button
            onClick={() => {
              setMyValue("potato");
            }}
          >
            Change to "potato"
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMyValue("cat");
            }}
          >
            Change to "cat"
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMyValue("dog");
            }}
          >
            Change to "dog"
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMyValue("pouet");
            }}
          >
            Change to "pouet"
          </button>
        </li>
      </ul>
    </Wrapper>
  );
};
