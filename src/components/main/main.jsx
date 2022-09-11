import NewsCard from "./cards/newsCard";
import TipCard from "./cards/TipCard";

import { Container, Row, Col, Card } from "react-bootstrap";

function Main({ articles, active, mode }) {
  const Tips = [
    { color: "success", text: "Read article five" },
    {
      color: "primary",
      text: "Open number two",
    },
    {
      color: "danger",
      text: "Go back",
    },
  ];
  return (
    <div className="main">
      {!articles.length ? (
        <TipCard />
      ) : (
        <Container className="overflow-hidden">
          <Row xs={0.5} sm={2} md={3} lg={5} className="gy-5 gx-3 mb-4">
            {Tips.map((tip, index) => (
              <Col key={index}>
                <Card className="h-100" bg={tip.color}>
                  <Card.Body>
                    <Card.Subtitle>- Say: {tip.text} </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row xs={1} sm={2} md={3} lg={4} className="gy-5 gx-3">
            {articles.map((article, index) => (
              <NewsCard
                article={article}
                key={index}
                bg={mode}
                index={index}
                highlighted={active}
              />
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Main;
