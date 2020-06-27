import React from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
  return (
    <div>
    
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <h1 className="border-bottom">Contact Me</h1>
          <form action="mailto:drakedemuyt@gmail.com" method="post" enctype="text/plain">
            <div className="form-group">
              <label for="exampleInputName1">Name</label>
              <input type="name" className="form-control" id="exampleInputName1" placeholder="John Doe"/>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
              <label for="exampleInputMessage1">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            </div>
            
            <input className="btn btn-color" type="submit" value="Submit"/>
          </form>

          </Col>
        </Row>
        <Row>
          <Col size="md-6">
              
              <a  href="https://github.com/ddemuyt"><img alt="GitHub Link" src={"/img/github.png"} style={{height: 200}}/></a>
          </Col>
          <Col size="md-6">
              <a href="https://www.linkedin.com/in/drake-demuyt/"><img alt="LinkedIn Link" style={{height: 175}} src="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0?e=2159024400&v=beta&t=itrwplyUUwPAVxqxN8THySQds9p401UaOtZIurSBVnA"/></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;