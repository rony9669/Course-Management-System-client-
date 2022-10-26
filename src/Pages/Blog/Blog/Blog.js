import React from "react";
import { Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <Container className="mt-3 mb-5">
      <Row>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>what is cors?</Accordion.Header>
            <Accordion.Body>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why are you using firebase and What other options do you have to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              Easy to implement. You don't really need to do any work to get the
              built in user authentication working. Customizable. There are so
              many ways Firebase lets you authenticate. Twitter, Google,
              Facebook, email, or a custom authentication.
              <br />
              <br />
              <h5>
                Lets start by listing the various ways through which we can
                achieve authentication
              </h5>
              <ul>
                <li>Cookie-Based authentication</li>
                <li>Token-Based authentication</li>
                <li>Third party access(OAuth, API-token)</li>
                <li>OpenId</li>
                <li>SAML</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How does the private route work?
            </Accordion.Header>
            <Accordion.Body>
              Private Routes vary based on the Apps, For example, Dashboard,
              User Profile, App Settings, Home etc. In simple words, These
              routes can be accessed only after login. The private route
              component is similar to the public route, the only change is that
              redirect URL and authenticate condition. If the user is not
              authenticated he will be redirected to the login page and the user
              can only access the authenticated routes If he is authenticated
              (Logged in).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is Node & How does Node work?
            </Accordion.Header>
            <Accordion.Body>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on a JavaScript Engine and executes
              JavaScript code outside a web browser, which was designed to build
              scalable network applications.
              <br />
              <br />
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
};

export default Blog;
