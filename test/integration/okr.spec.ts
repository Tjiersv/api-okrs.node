import supertest from 'supertest';
import app from '../../src';

const api = supertest(app);

describe('GET /okr', () => {

  test('Should return all th okr from mongodb', async () => {
    await api
      .get('/api/v1/okr')
      .expect(500);
  });

});