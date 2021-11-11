import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { photoService } from '../services/photoService';

export const AddScreen = () => {
  const history = useHistory();
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const handleSubmit = async () => {
    console.log({ photoTitle, photoUrl });
    try {
      if (!photoTitle || !photoUrl) {
        alert('PhotoTitle or PhotoUrl is required.');
        return;
      }
      const photo = {
        photoTitle,
        photoUrl,
      };
      await photoService.addPhoto(photo);
      alert('Photo added successfully');
      history.replace('/');
    } catch (error) {
      alert('Add Photo failed');
    }
  };

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
                Add
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
