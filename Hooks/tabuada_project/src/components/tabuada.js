import React, { useEffect } from "react";

export default function Tabuada(props) {
  useEffect(() => {
    document.title = `Multiplication table from ${props.number}`;
  });
  return (
    <>
      <h2>Tabuada do número {props.number}</h2>
      <p>
        {props.number} x {0} = {props.number * 0}
      </p>
      <p>
        {props.number} x {1} = {props.number * 1}
      </p>
      <p>
        {props.number} x {2} = {props.number * 2}
      </p>
      <p>
        {props.number} x {3} = {props.number * 3}
      </p>
      <p>
        {props.number} x {4} = {props.number * 4}
      </p>
      <p>
        {props.number} x {5} = {props.number * 5}
      </p>
      <p>
        {props.number} x {6} = {props.number * 6}
      </p>
      <p>
        {props.number} x {7} = {props.number * 7}
      </p>
      <p>
        {props.number} x {8} = {props.number * 8}
      </p>
      <p>
        {props.number} x {9} = {props.number * 9}
      </p>
      <p>
        {props.number} x {10} = {props.number * 10}
      </p>
    </>
  );
}
