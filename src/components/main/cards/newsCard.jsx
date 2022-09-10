import { createRef, useEffect, useState } from "react";
import { Col, Card, Stack } from "react-bootstrap";
import newsImage from "../../../assets/news.jpg";

function NewsCard({
  highlighted,
  index,
  bg,
  article: { description, publishedAt, source, title, url, urlToImage },
}) {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) =>
    window.scroll({
      top: ref.current.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (index === highlighted && elRefs[highlighted]) {
      scrollToRef(elRefs[highlighted]);
    }
  }, [highlighted, elRefs]);

  return (
    <Col ref={elRefs[index]}>
      <Card
        className={highlighted === index ? "h-100 highlighted" : "h-100"}
        bg={bg === "dark" ? "dark" : "light"}
      >
        <Card.Img
          variant="top"
          style={{ minHeight: "200px" }}
          src={!urlToImage ? newsImage : urlToImage}
        />

        <Card.Body>
          <div
            className={
              bg === "dark"
                ? "d-flex justify-content-between text-white"
                : "d-flex justify-content-between text-muted"
            }
          >
            <small className="mr-auto mb-2">
              {new Date(publishedAt).toDateString()}
            </small>
            <small className="mb-2">{source.name}</small>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{!description ? null : description}</Card.Text>
        </Card.Body>

        <Card.Footer>
          <Stack direction="horizontal" gap={3}>
            <Card.Link href={url}>Learn More</Card.Link>
            <div className="ms-auto">{index + 1}</div>
          </Stack>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default NewsCard;
