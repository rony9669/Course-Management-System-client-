import React from "react";
import { Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Home.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <Container className="mt-2">
      <Row>
        <Image
          style={{ height: "450px" }}
          className="img-responsive image"
          src="https://i.postimg.cc/8P8Jrtxm/computer-2.jpg"
        ></Image>

        <div className="text mt-2">
          <h1>About</h1>
          <p>
            The department of Computer Engineering (CE) since its inception has
            been continuously fostering academic excellence through industry
            academy collaboration especially integrating industry demands of ICT
            skills in the core curriculum of the CE program.Fundamental areas of
            computer science Computer science is the study of computation,
            automation, and information. Computer science spans theoretical
            disciplines to practical disciplines. Computer science is generally
            considered an area of academic research and distinct from computer
            programming.
          </p>
        </div>
        <h2 className="text-center text-info mb-2">Our Facilities</h2>
        <CardGroup className="mb-3">
          <Card className="me-3">
            <Card.Img
              variant="top"
              style={{ height: "280px" }}
              src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            />
            <Card.Body>
              <Card.Title>Personal Computer</Card.Title>
              <Card.Text>
                The computer facilities provided in the library are to be used
                for academic and research purposes only.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="me-3">
            <Card.Img
              variant="top"
              style={{ height: "280px" }}
              src="https://images.unsplash.com/photo-1581092795442-d153057d8e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            />
            <Card.Body>
              <Card.Title>Modern Equipment</Card.Title>
              <Card.Text>
                Modern technology is the advancement of old technology with new
                additions and modifications. Here is everything about Modern
                Technology
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="me-3">
            <Card.Img
              variant="top"
              style={{ height: "280px" }}
              src="https://images.unsplash.com/photo-1581093805071-a04e696db334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvbXB1dGVyJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            />
            <Card.Body>
              <Card.Title>Team Work</Card.Title>
              <Card.Text>
                Teamwork lets you deliver projects on time and on budget - all
                from one organized place.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <ContactUs></ContactUs>
      </Row>
    </Container>
  );
};

export default Home;
