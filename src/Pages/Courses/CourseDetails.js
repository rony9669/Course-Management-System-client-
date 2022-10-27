import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";

const CourseDetails = () => {
  const details = useLoaderData();

  const { name, img, description, credit, author, book, id, download_link } =
    details[0];
  return (
    <Container>
      <Row>
        <Card className="mx-auto" style={{ width: "800px", margin: "25px" }}>
          <div className="row row-cols-auto ">
            <div className=" mb-2 justify-content-end">
              <a href={download_link} target="_blank" rel="noreferrer" download>
                <Button variant="outline-success">Download Book PDF</Button>
              </a>
              {/* <Link to={download_link}>
                <Button variant="outline-success">Download Book PDF</Button>
              </Link> */}
            </div>
            <Card.Title className=" mx-5  mb-2">
              <span className=" text-primary font-bolder">Title:</span>
              {name}
            </Card.Title>
            <div></div>
          </div>

          <Card.Img variant="top" style={{ height: "350px" }} src={img} />
          <Card.Body>
            <Card.Text>
              {" "}
              <span className="text-danger">Course Details: </span>{" "}
              {description}
            </Card.Text>
            <Card.Title>
              <span className="text-danger">Course Credit: </span> {credit}
            </Card.Title>
            <Card.Text>
              {" "}
              <span className="text-danger">Reference Book: </span> {book}
            </Card.Text>
            <Card.Text>
              <span className="text-danger">Book Author: </span>
              {author}
            </Card.Text>
            <div className=" row row-cols-auto ">
              <div>
                <Link to={`/checkout/${id}`}>
                  <Button variant="outline-warning">Get Premium Access</Button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default CourseDetails;
