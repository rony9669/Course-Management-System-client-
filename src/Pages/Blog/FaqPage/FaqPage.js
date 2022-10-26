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
          <Accordion.Item eventKey="4">
            <Accordion.Header>What is Data Mining?</Accordion.Header>
            <Accordion.Body>
              Data mining refers to extracting or mining knowledge from large
              amounts of data. In other words, Data mining is the science, art,
              and technology of discovering large and complex bodies of data in
              order to discover useful patterns.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Why is machine learning important?
            </Accordion.Header>
            <Accordion.Body>
              Machine learning is important because it gives enterprises a view
              of trends in customer behavior and business operational patterns,
              as well as supports the development of new products. Many of
              today's leading companies, such as Facebook, Google and Uber, make
              machine learning a central part of their operations. Machine
              learning has become a significant competitive differentiator for
              many companies.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>What is network programming?</Accordion.Header>
            <Accordion.Body>
              Computer network programming involves writing computer programs
              that enable processes to communicate with each other across a
              computer network. Connection-oriented and connection less
              communications Very generally, most of communications can be
              divided into connection-oriented, and connection less. Whether a
              communication is a connection-oriented, or connection less, is
              defined by the communication protocol, and not by application
              programming interface (API). Examples of the connection-oriented
              protocols include Transmission Control Protocol (TCP) and
              Sequenced Packet Exchange (SPX).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>What is Bio-informatics</Accordion.Header>
            <Accordion.Body>
              Bio-informatics is the application of computer technology to the
              understanding and effective use of biological and biomedical data.
              It is the discipline that stores, analyses and interprets the Big
              Data generated by life-science experiments, or collected in a
              clinical context. This multidisciplinary field is driven by
              experts from a variety of backgrounds: biologists, computer
              scientists, mathematicians, statisticians and physicists.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
};

export default FaqPage;
