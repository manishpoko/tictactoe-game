import React from "react";

const Square = (props) => {

    return (
      <div
        onClick={props.onClick}
        style={{
          border: "1px solid black",
          height: "120px",
          width: "100%",
          display: "grid",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}

        className="square"
      >
        <h5> {props.value} </h5>
      </div>
    );

}
export default Square;
