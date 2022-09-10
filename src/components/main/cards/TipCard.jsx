import { Container, Row, Col, Card, Stack } from "react-bootstrap";

function TipCard() {
  const Tips = [
    { color: "success", title: "Latest News", text: "Give me the latest news" },
    {
      color: "primary",
      title: "News by Categories",
      info: "Business, Entertainment, General, Health, Science, Sports, Technology",
      text: "Give me the latest Technology news",
    },
    {
      color: "warning",
      title: "News by Terms",
      info: "Bitcoin, PlayStation 5, Smartphone, Donald Trump...",
      text: "Tell me about Donald Trump",
    },
    {
      color: "info",
      title: "News by Sources",
      info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
      text: "Give me the news from BBC news",
    },
  ];

  return (
    <Container className="overflow-hidden">
      <Row xs={1} sm={2} md={3} lg={4} className="gy-5 gx-3">
        {Tips.map((tip, index) => (
          <Col key={index}>
            <Card className="h-100" bg={tip.color}>
              <Card.Body>
                <Card.Title>{tip.title}</Card.Title>
                {tip.info ? (
                  <Card.Text>
                    {tip.title.split(" ")[2]} Search: <br />
                    {tip.info}
                  </Card.Text>
                ) : null}
              </Card.Body>

              <Card.Footer>
                <Stack direction="vertical" gap={1}>
                  <div>Try saying: </div>
                  <div>{tip.text}</div>
                </Stack>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TipCard;
