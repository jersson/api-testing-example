'use strict';
const axios = require('axios');
const sinon = require('sinon');
const { get } = require('express/lib/request');
const Service = require('../src/service');


describe('should test Service', () => {
    let axiosStub; 
    beforeAll(() => {
        axiosStub = sinon.stub(axios, 'get');
    });

    afterAll(() => {
        axiosStub.restore();
    });

    test('when #list method succeeds', async() => {
        const responseData = { data: [{}, {}]};
        axiosStub.returns(responseData);
        const response = await Service.list();
        expect(response).toEqual(responseData.data);
    });

    test('when #list method fails', async() => {
        const error = new Error('error');
        axiosStub.rejects(error);
        try {
            const response = await Service.list();
            console.log(response);
            throw new Error('default error to invalidate a false positive test case');
        } catch (error) {
            expect(error.message).toEqual('error');
        }
    });
});