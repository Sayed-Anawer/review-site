import React from "react";
import ContactImage from "../../images/contactImage.png";
const Contact = () => {
  return (
    <div>
      <section
        className="text-center"
        style={{
          paddingTop: "40px",
          backgroundColor: "#046DEC",
          height: "15vh",
          opacity: "0.7",
          width: "100%",
        }}
      >
        <h1 className="text-light fw-bold">Contact US </h1>
      </section>
      <section
        className="container row row-cols-1 row-cols-md-2 my-5"
        style={{ height: "80vh" }}
      >
        <div className="img col-md-8">
          <img src={ContactImage} className="img-fluid" alt="" />
        </div>
        <div className="contact col-md-4">
          <div className="mb-3 text-start">
            <label for="exampleFormControlInput1" className="form-label ">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-3 text-start">
            <label for="exampleFormControlInput2" className="form-label ">
              Subject
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Enter Your Subject"
            />
          </div>
          <div className="mb-3 text-start">
            <label for="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          <button type="button" class="btn btn-lg btn-danger my-3">
            Send
          </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
