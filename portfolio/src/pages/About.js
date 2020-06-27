import React from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <h1 className="border-bottom"> About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <img className="float-left col-md-4 " src="../../public/drakedemuytprofile.jpg" max-width="200px" height="100%" ></img>
          <div className="text-wrap col-md-8">Hey, I'm Drake! I was born and raised in a small town in Indiana and went to the University of Saint Francis in Fort Wayne, IN. My degree is a Bachelor of Arts in Communication, but I am going back to school with George Washington University's Full-Stack Coding Bootcamp. So far, I am knowledgable in HTML, CSS, and JavaScript. My goals are to work hard in this bootcamp, develop my skills to the utmost ability, and show future employers how dedicated I am to this switch in career paths.</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
