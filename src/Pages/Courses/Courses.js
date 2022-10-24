import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CoursesDetails from "../CoursesDetails";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();
  //   console.log(courses.name);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            {courses.map((course) => (
              <div key={course.id}>
                <ListGroup className="mb-2 mt-2 text-decoration-none">
                  <ListGroup.Item>
                    <Link>{course.name}</Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            ))}
          </Col>
          <Col className="grid-system">
            {courses.map((course) => (
              <CoursesDetails key={course.id} course={course}></CoursesDetails>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
