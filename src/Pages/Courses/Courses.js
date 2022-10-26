import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import "./Courses.css";
import CoursesDetails from "./CoursesDetails";

const Courses = () => {
  const courses = useLoaderData();
  //   console.log(courses.name);

  return (
    <div className="mb-5">
      <Container>
        <Row>
          <Col md="3">
            <h5 className="text-center mt-2 text-bold ">Course Details</h5>
            {courses.map((course) => (
              <div key={course.id}>
                <ListGroup className="mb-2 mt-2 text-decoration-none">
                  <ListGroup.Item>
                    <Link
                      to={`/courseDetails/${course.id}`}
                      className=" text-decoration-none"
                    >
                      {course.name}
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            ))}
          </Col>
          <Col md="9">
            <h3 className="text-center">Courses</h3>
            <div className="details row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 ">
              {courses.map((course) => (
                <CoursesDetails
                  key={course.id}
                  course={course}
                ></CoursesDetails>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
