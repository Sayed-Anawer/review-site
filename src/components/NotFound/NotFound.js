import React from "react";
import { useHistory } from "react-router";
import NotFoundImage from "../../images/404Image.png";
const NotFound = () => {
  const history = useHistory();
  return (
    <div
      className=""
      style={{ height: "80vh", margin: "0 auto", width: "50%" }}
    >
      <img src={NotFoundImage} className="img-fluid" alt="" />
      <div className="text-center">
        <h3 className="text-danger">This page is not Available</h3>
        <button
          onClick={() => history.push("/home")}
          className="btn btn-primary my-3"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
