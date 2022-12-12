import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Simple = () => {
  const [myValue, setMyValue] = useState("potato");

  useEffect(() => {
    console.log("value changed");
  }, [myValue]);

  console.log("I am re-rendering");
  return (
    <Wrapper>
      What is my current value? {myValue}
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
