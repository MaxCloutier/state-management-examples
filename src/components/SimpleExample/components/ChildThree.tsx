import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
`;

export const ChildThree = () => {
  console.log("ChildThree re-rendering");
  return <Wrapper>Actually part of the first child</Wrapper>;
};
