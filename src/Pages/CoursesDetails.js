import React from "react";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";

const CoursesDetails = (props) => {
  console.log(props.course.name);
  const { name, img, time } = props.course;
  return (
    <div>
      <Card style={{ width: "400px", margin: "15px" }}>
        <Card.Img style={{ height: "300px" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>Course Title: {name}</Card.Title>
          <Card.Title>Course Duration: {time}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CoursesDetails;
