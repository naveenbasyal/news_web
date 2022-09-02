import React from "react";

const alert = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          className=" w-100 my-2 alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          This is a <strong>Summer Training</strong> Project, Designed by{" "}
          <strong>Naveen Basyal</strong> and <strong>Mukul</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </>
  );
};

export default alert;
