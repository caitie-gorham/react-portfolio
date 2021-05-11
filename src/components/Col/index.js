import React from "react";

function Col(props) {
  let className = ""
  className += props.size?.split(" ").map(size => "col-" + size).join(" ");
  className += props.className ? ` ${props.className}` : "";
  return (
    <div className={className}>
      {props.children}
    </div>
  );
}

export default Col;