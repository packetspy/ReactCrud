import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { photoService } from '../services/photoService';

export const EditScreen = ({ match: { params } }) => {
  const history = useHistory();
  const photoId = params.id;
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const loadPhoto = async () => {
    try {
      const resp = await photoService.getPhoto(photoId);
      const photo = resp.data;
      setPhotoTitle(photo.title);
      setPhotoUrl(photo.thumbnailUrl);
    } catch (error) {
      alert('Failed to get photo.');
    }
  };

  useEffect(() => {
    loadPhoto();
  }, []);

  const handleSubmit = async () => {
    console.log({ photoTitle, photoUrl });
    try {
      if (!photoTitle || !photoUrl) {
        alert('PhotoTitle or PhotoUrl is required.');
        return;
      }
      const photo = {
        photoId,
        photoTitle,
        photoUrl,
      };
      await photoService.updatePhoto(photo);
      alert('Photo updated successfully');
      history.replace('/');
    } catch (error) {
      console.log(error);
      alert('Update Photo failed');
    }
  };

  if (!photoTitle || !photoUrl) {
    return (
      <Container>
        <Row>
          <Col>Loading selected photo ...</Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container style={{ padding: 16 }}>
      <Row>
        <Col>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Photo Titlte</Form.Label>
              <Form.Control
                onChange={(e) => setPhotoTitle(e.target.value)}
                value={photoTitle}
                type='text'
                placeholder='Enter photo title...'
                required
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Photo Url</Form.Label>
              <Form.Control
                onChange={(e) => setPhotoUrl(e.target.value)}
                value={photoUrl}
                type='text'
                placeholder='https://example.com/image.png'
                required
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Button variant='primary' onClick={handleSubmit}>
                Update
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
