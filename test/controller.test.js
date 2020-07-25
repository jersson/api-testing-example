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
    test('when #getPost method method succeeds', async() => {
        const posts = [{},{}];
        const response = mockResponse();
        
        Service.list.mockImplementation(() => Promise.resolve(posts));
        await Controller.getPosts(null, response, null);

        expect(response.status).toBeCalledWith(201);
        expect(response.json).toBeCalledWith(posts)
    });

    test('when #getPost method method fails', async() => {
        const error = new Error();
        const response = mockResponse();
        const next = jest.fn();
        
        Service.list.mockImplementation(() => Promise.reject(error));
        await Controller.getPosts(null, response, next);

        expect(next).toBeCalledWith(error);
    });

    afterAll(() => {
        jest.resetAllMocks();
    });
});
