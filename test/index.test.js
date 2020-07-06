'use strict';
const router = require('../src/router');

const useSpy = jest.fn();
const listenSpy = jest.fn();

jest.doMock('express', () => {
    return () => ({
        use: useSpy,
        listen: listenSpy
    });
});

describe('should test server configuration', () => {
    test('should use router', () => {
        require('../src/index');
        expect(useSpy).toHaveBeenCalledWith(router);
    });

    test('should calle listen()', () => {
        require('../src/index');
        expect(listenSpy).toHaveBeenCalled();
    });
});