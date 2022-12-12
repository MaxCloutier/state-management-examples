import "./App.css";
import styled from "styled-components";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { SimpleExample } from "./components/SimpleExample";
import { ComplexExample } from "./components/ComplexExample";
import { ContextExample } from "./components/ContextExample";

const Nav = styled.ul`
  padding: 20px 0;
  max-width: 300px;
  list-style: none;
  text-align: left;
  background: #e1e2e3;
  margin: 0;

  a {
    display: block;
    padding: 10px 25px;
    color: #353535;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s, background 0.3s;

    &.current,
    &:hover {
      background: #9f9f9f;
      color: #fff;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
`;

const RoutesWrapper = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

const App = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Nav>
        <li>
          <Link className={pathname === "/" ? "current" : ""} to="/">
            Simple Example
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/complex-example" ? "current" : ""}
            to="/complex-example"
          >
            Complex Example
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/context-example" ? "current" : ""}
            to="/context-example"
          >
            Context Example
          </Link>
        </li>
      </Nav>

      <RoutesWrapper>
        <Routes>
          <Route path="/" element={<SimpleExample />}></Route>
          <Route path="/complex-example" element={<ComplexExample />}></Route>
          <Route path="/context-example" element={<ContextExample />}></Route>
        </Routes>
      </RoutesWrapper>
    </Wrapper>
  );
};

export default App;
