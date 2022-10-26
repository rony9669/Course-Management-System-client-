import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row } from "react-bootstrap";

const FaqPage = () => {
  return (
    <Container className="mt-3 mb-5">
      <Row>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Can a Computer Scientist Find a Role in the Field of Education?
            </Accordion.Header>
            <Accordion.Body>
              Within the field of education, computers and software are used for
              a number of different tasks in order to support student learning,
              staff development, and instructional delivery. School districts at
              the primary and secondary levels, as well as colleges and
              universities, employ professionals for a number of information
              technology positions. A computer science degree helps candidates
              to meet the qualifications for these types of positions. Many of
              the job position possibilities in education will involve
              curriculum design, incorporating various elements of online
              instructional delivery for alternative programs or to enhance
              in-seat instruction. This continues to grow in demand as more and
              more facets of education rely on online delivery. Information
              security is also a necessity in order to keep student records
              private and to manage and protect networks. This is particularly
              essential when working with students to ensure that none of their
              information is released that might compromise safety.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How Can Computer Science Help the Environment?
            </Accordion.Header>
            <Accordion.Body>
              Computer science affects nearly every aspect of our lives today.
              It impacts community planning, medical procedures, nutrition, and
              drinking water supplies, and even the ingredients in our
              toothpaste. It isn’t surprising, then, that computer science is
              being used to help preserve and protect the environment. Here are
              some exciting ways that the earth where we live is being tended by
              computers and their human operators
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How Does Artificial Intelligence Work?
            </Accordion.Header>
            <Accordion.Body>
              The mimicking of human reasoning led to machine learning, which
              was the immediate precursor to today’s artificial intelligence.
              Machine learning focused on the automation of handling data. It is
              based on the idea that computers could make decisions when given
              directions in a code. Computers would be able to identify patterns
              and use those patterns to provide a prediction about what another
              piece of data would do based on the past pieces of data input into
              the system. Machine learning required a minimal level of human
              intervention.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How is the Career Outlook for IT Jobs?
            </Accordion.Header>
            <Accordion.Body>
              As of 2018, about 5,100,000 people in the United States were
              employed in computer and IT jobs. The BLS estimates that between
              2018 and 2028, there will be a 12 percent rate of growth in these
              occupations. This amounts to about 546,000 more jobs in IT. The
              occupations under the umbrella of IT include computer and
              information research scientists, computer network architects,
              computer programmers, computer support specialists, computer
              systems analysts, database administrators, information security
              analysts, network and computer systems administrators, software
              developers and web developers.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
};

export default FaqPage;
