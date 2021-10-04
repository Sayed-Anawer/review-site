import React from "react";
import "./Service.css";
const Service = (props) => {
  const { img, title, author, price, rating } = props.course;
  return (
    <div className="col my-5">
      <div className="card h-100">
        <img src={img} className="card-img-top img-fluid h-75" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Author : {author}</p>
          <h5 className="card-text d-flex align-items-center">
            <h5>Rating : {rating} </h5>{" "}
            <p>
              {" "}
              <i class="bi bi-star mx-1 text-warning"></i>
            </p>
          </h5>
          <h4 className="card-text">Price : {price}</h4>
        </div>
      </div>
    </div>
  );
};

export default Service;
