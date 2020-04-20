import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";

const Bold = styled.div`
  color: red;
`;

const lists = ["jack", "levi", "mary"];
const name = 123;
console.log(1);

const Child = function () {
  return (
    <>
      {lists.map((item) => (
        <Bold key={item}>{item}</Bold>
      ))}
    </>
  );
};

export default hot(Child);
