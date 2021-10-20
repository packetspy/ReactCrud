import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const PhotoItem = ({ title, url, thumbnailUrl }) => {
  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={thumbnailUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant='primary'>Edit</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PhotoItem;
