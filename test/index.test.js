// test/index.test.js
import request from 'supertest';
import { expect } from 'chai';  // Use import instead of require
import server from '../index.js';

describe('GET /', () => {
  it('should return Hello World message', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello, we are from Capstone Project Group 1!');
        done();
      });
  });
});

describe('GET /health', () => {
  it('should return 200 for healthy status', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});