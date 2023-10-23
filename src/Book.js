import React from "react";
import "./App.css";

let Book = (props) => {
  return (
    <div className="App">
      <h1 onClick = {props.change}>
        {props.bookname} Book Return By {props.author}
      </h1>
    </div>
  );
};

export default Book;
