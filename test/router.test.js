'use strict';
const Controller = require('../src/controller');

const getSpy = jest.fn();

jest.doMock('express', () => {
  return {
    Router() {
      return {
        get: getSpy,
      };
    },
  };
});

describe('should test router', () => {
  test('should test get posts', () => {
    require('../src/router');
    expect(getSpy).toHaveBeenCalledWith('/posts', Controller.getPosts);
  });
});
