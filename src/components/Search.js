import React, { useState } from "react";

const Search = ({ SearchText }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    SearchText(text);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="input-group w-75 ">
          <input
            type="text"
            name=""
            id=""
            className="form-control text-capitalize"
            placeholder="search"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button type="button" className="btn btn-success d-flex align-items-center">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
