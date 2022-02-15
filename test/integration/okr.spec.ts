import supertest from 'supertest';
import express from 'express';
const app = express();
const api = supertest(app);

describe('GET /okr', () => {

  test('Should return all th okr from mongodb', () => {
    api
      .get('/api/v1/okr')
      .expect('Content-Type', /application\/json/)
      .expect('Content-Length', '15')
      .expect(500);
  });

});