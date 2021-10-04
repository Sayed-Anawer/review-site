import React, { useState, useEffect } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <main>
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
        <h1 className="text-light fw-bold">Our Courses </h1>
      </section>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course) => (
            <Service key={course.id} course={course}></Service>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
