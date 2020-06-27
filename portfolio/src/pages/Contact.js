import React from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
  return (
    <div>
    
      <Container style={{ marginTop: 30 }}>
        {/* <Row>
          <Col size="md-12">
          <h1 className="border-bottom">Contact Me</h1>
          </Col>
        </Row> */}
        <Row>
          <Col size="md-6">
              
              <a href="https://github.com/ddemuyt"><img src={"/img/github.png"} style={{height: 200}}/></a>
          </Col>
          <Col size="md-6">
              <a href="https://www.linkedin.com/in/drake-demuyt/"><img style={{height: 175}} src="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0?e=2159024400&v=beta&t=itrwplyUUwPAVxqxN8THySQds9p401UaOtZIurSBVnA"/></a>
          </Col>
          {/* <Col size="md-12">
              <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0?e=2159024400&v=beta&t=itrwplyUUwPAVxqxN8THySQds9p401UaOtZIurSBVnA"/>
              <a href="https://www.linkedin.com/in/drake-demuyt/">LinkedIn</a>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Contact;