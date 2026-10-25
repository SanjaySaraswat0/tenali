'use strict';

const request = require('supertest');

const REMOVED = [
  '/matrixmystics-api',
  '/linearalgebra-api',
  '/la-mission-quiz-api',
];

const SURVIVING_ADVANCED = [
  '/matrix-api',
  '/dotprod-api',
  '/vectors-api',
  '/bases-api',
  '/stdform-api',
  '/binomial-api',
  '/complex-api',
  '/section-api',
];

describe('removed linear algebra routes', () => {
  let app;
  beforeAll(() => { app = require('../../index'); });

  test.each(REMOVED)('%s/question returns 404', async (route) => {
    const res = await request(app).get(`${route}/question?difficulty=easy`);
    expect(res.status).toBe(404);
  });

  test.each(SURVIVING_ADVANCED)('%s/question responds', async (route) => {
    const res = await request(app).get(`${route}/question?difficulty=easy`);
    expect(res.status).toBe(200);
  });
});
