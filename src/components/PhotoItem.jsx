/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';

//export const PhotoItem = ({ id, title, thumbnailUrl, removePhoto }) => {
export const PhotoItem = (props) => {
  const { id, title, thumbnailUrl, removePhoto } = props;

  function cropText(title, chars = 10) {
    if (title.length >= chars) {
      title = title.substring(0, chars) + '...';
    }
    return title;
  }

  return (
    <Col md='auto' style={{ marginTop: 16 }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={thumbnailUrl} />
        <Card.Body>
          <Card.Title>{cropText(title, 40)}</Card.Title>
          <Link to={`/edit/${id}`}>
            <Button variant='primary'>Edit</Button>
          </Link>
          <Button
            onClick={removePhoto(id)}
            variant='danger'
            style={{ marginLeft: 10 }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
