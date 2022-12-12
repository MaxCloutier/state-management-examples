import { useState } from "react";
import styled from "styled-components";
import { ChildThree } from "./ChildThree";

const Wrapper = styled.div`
  margin: 20px;
`;

export const ChildOne = ({ value, children }: any) => {
  const [state, setState] = useState("potato");
  console.log("ChildOne re-rendering");
  return (
    <Wrapper>
      Parent value: {value}
      <br />
      Current value: {state}
      <ul>
        <li>
          <button
            onClick={() => {
              setState("potato");
            }}
          >
            Change to "potato"
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setState("cat");
            }}
          >
            Change to "cat"
          </button>
        </li>
      </ul>
      <ChildThree />
      {children}
    </Wrapper>
  );
};
