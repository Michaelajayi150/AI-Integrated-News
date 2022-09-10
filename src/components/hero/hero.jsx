import robot from "../../assets/robot-face.png";
import "./hero.css";
import { Container, Col } from "react-bootstrap";

function Hero() {
  return (
    <div className="hero-section">
      <Container>
        <div className="align-items-center justify-content-center hero-container">
          <Col sm={6} className="hero-content">
            <p>With</p>
            <h1>ALAN</h1>
            <p>Your news just got smarter.</p>
          </Col>
          <Col sm={6} className="hero-image">
            <img src={robot} alt="Robot" width="100%" height="auto" />
          </Col>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
