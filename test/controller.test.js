'use strict';
const Service = require('../src/service');
const Controller = require('../src/controller');


const mockResponse = () => {
  const response = {};
  response.status = jest.fn().mockReturnValue(response);
  response.json = jest.fn().mockReturnValue(response);

  return response;
};

jest.mock('../src/service');

describe('should test controller', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('when #getPost method method succeeds', async () => {
    const posts = [{}, {}];
    const response = mockResponse();

    Service.list.mockImplementation(() => Promise.resolve(posts));
    await Controller.getPosts(null, response, null);

    expect(Service.list).toBeCalledTimes(1);
    expect(response.status).toBeCalledWith(201);
    expect(response.json).toBeCalledWith(posts);
  });

  test('when #getPost method method fails', async () => {
    const errorMessage = 'Internal Service Error';
    const errorData = new Error(errorMessage);
    const response = mockResponse();
    const next = jest.fn();

    Service.list.mockImplementation(() => Promise.reject(errorData));
    await Controller.getPosts(null, response, next);

    expect(Service.list).toBeCalledTimes(1);
    expect(next).toBeCalledWith(errorData);
    expect(response.status).not.toBeCalled();
    expect(response.json).not.toBeCalled();
  });
});
