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
          <h1 className="border-bottom">About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <img alt="Drake DeMuyt profile" className="float-left col-sm-4 " src="/img/drakedemuytprofile.jpg"  ></img>
          <div className="text-wrap col-sm-8">Hey, I'm Drake! I was born and raised in a small town in Indiana and went to the University of Saint Francis in Fort Wayne, IN. My degree is a Bachelor of Arts in Communication, but I am going back to school with George Washington University's Full-Stack Coding Bootcamp. After six months, I am knowledgable in HTML, CSS, JavaScript, MySQL, Progressive Working Applications, and MERN (MongoDB, Expressm, React,and Node.js). My goals are to work hard in this bootcamp, develop my skills to the utmost ability, and show future employers how dedicated I am to this switch in career paths.</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
