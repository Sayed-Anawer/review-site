import React, { useEffect, useState } from "react";
import teaching from "../../images/undraw_teaching_f1cm.png";
import HomeService from "../HomeService/HomeService";

const Home = () => {
  const [courses, setCourses] = useState([]);
  // Fetching data from courses.JSON
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <header
        className="text-center"
        style={{
          paddingTop: "40px",
          backgroundColor: "#046DEC",
          height: "45vh",
          opacity: "0.7",
          width: "100%",
        }}
      >
        <div className="pt-5">
          <h1 className="text-light fw-bold" style={{ fontSize: "3rem" }}>
            Learn something new from
            <br />
            Online center
          </h1>
          <h5 className="text-light pt-4">
            Resources on how to find, engage and enroll more families with{" "}
            <br />
            the help of an experienced team.
          </h5>
        </div>
      </header>

      <section className="container d-md-flex align-items-center justify-content-between my-5">
        <div>
          <img className="img-fluid" src={teaching} alt="" />
        </div>
        <div className="text-start mx-5">
          <h2 className="fw-bold py-3">
            Teaching you where, when <br /> and how to connect with families
          </h2>
          <h5>
            Learn to reach new families when and where they’re searching for
            child care. Access our Learning Center and enjoy more than 100 tips,
            tutorials, and strategies on how to market your center online.
          </h5>
        </div>
      </section>
      <section className="">
        <div
          className="text-center container-fluid"
          style={{
            paddingTop: "25px",
            backgroundColor: "#232338",
            height: "20vh",
            width: "100%",
          }}
        >
          <div>
            <h1
              className="text-light fw-bold pt-4"
              style={{ fontSize: "2.5rem" }}
            >
              Ready to Start Learning?
            </h1>
            <p className="text-light py-4">
              Strengthen the skills you need to reach new parents online. Our
              step-by-step guides, <br /> in-depth tutorials and expert support
              help directors, owners and staff reach busy families at home or
              on-the-go.
            </p>
          </div>
        </div>
      </section>
      
      {/* Courses 4 data is showing here */}
      <div className="container">
        <div className="row">
          {courses.slice(0, 4).map((course) => (
            <HomeService key={course.id} {...course}></HomeService>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
