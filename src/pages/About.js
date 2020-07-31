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
          <img alt="Drake DeMuyt profile" className="float-left col-sm-4 " src="/img/1headshot.jpg"  ></img>
          <div className="text-wrap col-sm-8">Hey, I'm Drake! I was born and raised in a small town in Indiana and went to the University of Saint Francis in Fort Wayne, IN. My degree is a Bachelor of Arts in Communication and earned a Full-Stack Coding Bootcamp certificate with George Washington University. Through my experience, I have learned how to leverage my leadership and interpersonal communication skills in the field of software development. After six months, I am knowledgable in HTML, CSS, JavaScript, MySQL, Progressive Working Applications, Agile Development, and MERN (MongoDB, Express, React,and Node.js). Through Agile development, I thrive in a full stack team as the organizational manager because of my ability to rally others and seek full understanding of their perspective. My technical knowledge stems off MVC-modeled, Progressive Working, MERN applications. Examples of my work include a Bulma styled concert + food planning app called fatbeats driven by Google Maps, Ticketmaster, and Open Weather APIs, a jQuery and MySQL powered, dungeon crawler / turn-based role-playing game called Name vs. Skeleton using Google’s ES Linter, Travis CLI, and Node.js API bcrypt to organize, and a React, charity application named Exchanging Hands which used PayPal and Charity Navigator APIs to buy, sell, and donate funds to your favorite cause. With my hunger for knowledge, comfortability in this field, and skill with personal connection, I aim to continuously grow and challenge the team and company I am with – big or small.</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
