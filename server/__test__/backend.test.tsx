// import React from 'React';
// import "@testing-library/jest-dom";
const { describe, it, afterEach, expect } = require('@jest/globals');
// import * as jest from '@jest/globals';
// import {jest} from '@jest/globals'
const request = require('supertest');
const server = 'http://localhost:3000';

//request(server).post('/api/signup').send({ username: testUser, password: testPass, arn: testArn, region: testRegion }).expect(200)
describe('Testing Suite for Routes', () => {
  const testUser = 'jest';
  const testPassword = 'jest';

  describe('POST/signup', () => {
    // afterEach(()=> request(server).delete('/api/user').send({username: testUser}));
    const response = request(server)
      .post('/signup')
      .send({ username: testUser, password: testPassword });
    it('Gives a status code of 200', () => expect(response.status).toBe(200));

    it('Successfully creating a user in the database', () =>
      expect(response.body.username).toEqual(testUser));
  });

  describe('POST/login', () => {
    const response = request(server)
      .post('/login')
      .send({ username: testUser, password: testPassword });
    it('Gives a status code of 200', () => expect(response.status).toBe(200));

    // it('Successfully matches ');
  });

  //   describe('GET/get flashcards', () => {});

  //   describe('POST/make flashcards', () => {});

  //   describe('GET/check answers', () => {});

  //   describe('DELETE/delete a flashcard', () => {});

  //   describe('PUT/update a flashcard', () => {});

  //   describe('GET/user data/streak on login', () => {});

  //   describe('PUT/update the user data/streak', () => {});
});
