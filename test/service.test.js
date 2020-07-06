'use strict';
const axios = require('axios/index');
const Service = require('../src/service');

jest.mock('axios');

describe('should test Service', () => {
    test('when #list method succeeds', async() => {
        const response = { data: [{}, {}]};
        axios.get.mockImplementation(() => Promise.resolve(response));
        const actual = await Service.list();
        expect(actual).toEqual(response.data);
    });

    test('when #list method fails', async() => {
        const error = new Error();
        axios.get.mockImplementation(() => Promise.reject(error));
        const actual = await Service.list();
        expect(actual).toEqual(error);
    });
});