import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PhotoItem } from '../components/PhotoItem';
import { photoService } from '../services/photoService';

export const HomeScreen = () => {
  const [photos, setPhotos] = useState(null);

  const fetchPhotos = async () => {
    try {
      const response = await photoService.getAllPhotos();
      setPhotos(response.data);
    } catch (error) {
      alert('Failed to fetch photos =/');
    }
  };

  const removePhoto = async (id) => {
    try {
      //await photoService.deletePhoto(photoId);
      //alert('Photo deleted!');
      console.log('Delete acionado', id);
    } catch (error) {
      alert('Failed to remove photo.');
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (!photos) {
    return (
      <Container style={{ padding: 16, textAlign: 'center' }}>
        <Col>
          <p>Loading photos</p>
        </Col>
      </Container>
    );
  }

  return (
    <Container style={{ padding: 16 }}>
      <Row>
        {photos
          .reverse()
          .slice(0, 50)
          .map((photoItem) => (
            <PhotoItem
              key={photoItem.id}
              id={photoItem.id}
              title={photoItem.title}
              url={photoItem.url}
              thumbnailUrl={photoItem.thumbnailUrl}
              removePhoto={removePhoto}
            />
          ))}
      </Row>
    </Container>
  );
};
