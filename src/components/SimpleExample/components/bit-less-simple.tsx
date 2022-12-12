import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const BitLessSimple = () => {
  const [myValue, setMyValue] = useState("potato");
  //const [totalChanges, setTotalChanges] = useState(0);
  const totalChanges = useRef<number>(0);

  useEffect(() => {
    // setTotalChanges((total) => total + 1);
    console.log("Value changed");
  }, [myValue]);

  const updateTotal = () => {
    //setTotalChanges(totalChanges + 1);
    totalChanges.current = totalChanges.current + 1;
  };

  console.log("I am re-rendering");
  return (
    <Wrapper>
      What is my current value? {myValue}
      <br />
      How many changes did I get? {totalChanges.current}
      <ul>
        <li>
          <button
            onClick={() => {
              setMyValue("potato");
              updateTotal();
            }}
          >
            Change to "potato"
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMyValue("cat");
              updateTotal();
            }}
          >
            Change to "cat"
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMyValue("dog");
              updateTotal();
            }}
          >
            Change to "dog"
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMyValue("pouet");
              updateTotal();
            }}
          >
            Change to "pouet"
          </button>
        </li>
      </ul>
    </Wrapper>
  );
};
