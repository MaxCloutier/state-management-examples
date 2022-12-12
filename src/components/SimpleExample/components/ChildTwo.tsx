import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
`;

export const ChildTwo = () => {
  console.log("ChildTwo re-rendering");
  return <Wrapper>I don't have dependencies, just happy to be here</Wrapper>;
};
