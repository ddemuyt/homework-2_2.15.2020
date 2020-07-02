import React, { Component } from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import projects from "../projects.json";

class Portfolio extends Component {
  state = {
    projects,
  };

  render() {
    return (
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 className="border-bottom">Portfolio</h1>
          </Col>
        </Row>
        <Row>
          {this.state.projects.map((project) => (
            <Col size="md-4">
              <Card
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                href={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
