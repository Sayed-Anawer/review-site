import React from "react";
import aboutImage from "../../images/about.png";
const About = () => {
  return (
    <>
      <div className=" container d-md-flex align-items-center my-5">
        {/* About us content  */}
        <div
          style={{ width: "40%" }}
          className="shadow-lg p-3 mb-5 bg-body rounded "
        >
          <h1 className="text-center mb-4">ABOUT US</h1>
          <h5>
            We are commited to changing the future of learning for the better.
            Did into our original research to learn about the forces that are
            shaping the modern workplace.
          </h5>
        </div>
        {/* About us Image  */}
        <div style={{ width: "60%" }}>
          <img src={aboutImage} className="img-fluid" alt="" />
        </div>
      </div>
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
            <h2
              className="text-light fw-bold pt-4"
              style={{ fontSize: "2rem" }}
            >
              DESIGNS Forged With Passion
            </h2>
            <p className="text-light py-4">
              We perform Direct response marketing for your business
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
