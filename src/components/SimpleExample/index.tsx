import { useEffect, useState } from "react";
import styled from "styled-components";
import { BitComplex } from "./components/bit-complex";
import { BitLessSimple } from "./components/bit-less-simple";
import { Simple } from "./components/simple";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Buttons = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 10px;
  padding: 0;
`;

const Button = styled.button`
  border: 1px solid #252525;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;

  &.current {
    background: #252525;
    color: #fff;
  }
`;

export const SimpleExample = () => {
  const [showExample, setShownExample] = useState("first");

  useEffect(() => {
    console.clear();
  }, [showExample]);

  return (
    <Wrapper>
      <Buttons>
        <li>
          <Button
            className={showExample === "first" ? "current" : ""}
            onClick={() => {
              setShownExample("first");
            }}
          >
            First example
          </Button>
        </li>
        <li>
          <Button
            className={showExample === "second" ? "current" : ""}
            onClick={() => {
              setShownExample("second");
            }}
          >
            Second example
          </Button>
        </li>
        <li>
          <Button
            className={showExample === "third" ? "current" : ""}
            onClick={() => {
              setShownExample("third");
            }}
          >
            Third example
          </Button>
        </li>
      </Buttons>
      {showExample === "first" && <Simple />}
      {showExample === "second" && <BitLessSimple />}
      {showExample === "third" && <BitComplex />}
    </Wrapper>
  );
};
