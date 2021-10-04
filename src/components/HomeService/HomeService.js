import React from "react";
import { Link } from "react-router-dom";

const HomeService = ({ title, price, img }) => {
  return (
    <div className="col-sm-6 my-4 ">
      <div className=" d-flex align-items-start shadow-lg h-100 rounded">
        <div className="w-50 mx-4">
          <img src={img} className="img-fluid" alt="" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <div className="d-flex align-items-center justify-content-evenly">
            <h4 className="py-3">Price : {price} </h4>
            <h5>
              <span className="text-danger bg-warning p-1 px-2 rounded">
                13% off
              </span>
            </h5>
          </div>
          <Link to="/services">
            <p className="btn btn-primary">View Courses</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
