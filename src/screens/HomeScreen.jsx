import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhotoItem from '../components/PhotoItem';
import api from '../services/api';

const HomeScreen = () => {
  const [photos, setPhotos] = useState(null);

  const fetchPhotos = async () => {
    try {
      const response = await api.getAllPhotos();
      setPhotos(response.data);
    } catch (error) {
      alert('Failed to fetch photos =/');
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (!photos) {
    return (
      <Container>
        <Col>
          <p>Loading photos</p>
        </Col>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        {photos.map((item) => (
          <PhotoItem
            key={item.id}
            title={item.title}
            url={item.url}
            thumbnailUrl={item.thumbnailUrl}
          />
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
