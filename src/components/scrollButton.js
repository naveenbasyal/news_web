import React from "react";

const goToHome = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollButton = () => {
  return (
    <button
      onClick={goToHome}
      type="button"
      className=" scroll btn btn-success float-end position-fixed bottom-4 end-0"
    >
      <i className="fas fa-search"></i>
    </button>
  );
};

export default scrollButton;
