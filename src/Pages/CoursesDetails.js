import React from "react";

import Card from "react-bootstrap/Card";

const CoursesDetails = (props) => {
  const { name, img, time } = props.course;
  return (
    <div>
      <Card style={{ width: "400px", margin: "15px" }}>
        <Card.Img style={{ height: "300px" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <span className="text-danger">Course Title: </span>
            {name}
          </Card.Title>
          <Card.Title>
            <span className="text-success">Course Duration:</span> {time}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CoursesDetails;
