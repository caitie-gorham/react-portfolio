import React from "react";

function Row(props) {
  return <div id="row" className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Row;