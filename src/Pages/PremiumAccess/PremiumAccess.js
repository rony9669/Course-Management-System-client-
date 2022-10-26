import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";

const PremiumAccess = () => {
  const details = useLoaderData();
  console.log(details);
  const { name, id, price } = details[0];

  const handleBuyNow = () => {
    toast.success("Thank for purchasing");
  };
  return (
    <Container>
      <Row>
        <Card className="mx-auto" style={{ width: "400px", margin: "25px" }}>
          <Card.Title className=" mb-2">
            <span className=" text-primary font-bolder">Course Title:</span>
            {name}
          </Card.Title>

          <Card.Body>
            <Card.Text>
              {" "}
              <span className="text-danger">Course ID: </span>
              {id}
            </Card.Text>
            <Card.Text>
              {" "}
              <span className="text-success">Course Amount: </span> {price}
            </Card.Text>
            <div className=" mx-auto " >
              
                <Button onClick={handleBuyNow} variant="outline-warning">
                  Buy Now
                </Button>
              
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default PremiumAccess;
