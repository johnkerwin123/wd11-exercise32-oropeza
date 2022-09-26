import card0 from '../images/slark5.jpg';
import card1 from '../images/pudge.jpg';
import card3 from '../images/dota4.jpg';
// import Card4 from '../images/queen of pain.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CardLayout = () => {
  return (
 
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 6 }).map((_, idx) => (
      <Col>
        <Card className="border-warning mt-5">
          <Card.Img variant="top" src={card0} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  );
}
 
export default CardLayout;