'use strict';
const router = require('../src/router');

const useDisableSpy = jest.fn();
const useSpy = jest.fn();
const listenSpy = jest.fn();

jest.doMock('express', () => {
  return () => ({
    disable: useDisableSpy,
    use: useSpy,
    listen: listenSpy,
  });
});

describe('should test server configuration', () => {
  test('should run the express server', () => {
    require('../src/index');
    expect(useDisableSpy).toHaveBeenCalledWith('x-powered-by');
    expect(useSpy).toHaveBeenCalledWith(router);
    expect(listenSpy).toHaveBeenCalled();
  });
});
