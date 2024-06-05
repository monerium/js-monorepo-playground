/* eslint-env jest */
import fetch from 'node-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import service, { getBaseUrl, handleError } from './rest';

const handlers = [
  rest.get('http://localhost/api/error-invalid-json', async (req, res, ctx) => {
    return res(ctx.status(401), ctx.text('invalid JSON'));
  }),
  rest.get('http://localhost/api/get', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ key: 'value' }));
  }),
  rest.post('http://localhost/api/post', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.body));
  }),
  rest.put('http://localhost/api/put', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.body));
  }),

  rest.delete('http://localhost/api/del', async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

const server = setupServer(...handlers);
const prevFetch = global.fetch;
const prevWindow = global.window;

class FormDataMock {
  append = jest.fn();
}

const prevFormData = global.FormData;
describe('getBaseUrl', () => {
  beforeAll(() => {
    global.window = (<unknown>{
      App: {
        apiUrl: 'http://localhost',
      },
    }) as typeof global.window;
    server.listen();
  });

  it('should use the URL passed via configuration if no baseUrl is passed in options', () => {
    expect(getBaseUrl({})).toBe('http://localhost');
  });

  it('should use the URL passed via options', () => {
    expect(getBaseUrl({ baseUrl: 'http://asdf' })).toBe('http://asdf');
  });

  afterAll(() => {
    global.window = prevWindow;
  });
});

describe('handleError', () => {
  beforeAll(() => {
    global.fetch = (<unknown>fetch) as typeof global.fetch;
    global.window = (<unknown>{
      App: {
        apiUrl: 'http://localhost',
      },
    }) as typeof global.window;
    server.listen();
  });

  it('should return unknown error when API returns non JSON response', () => {
    expect.assertions(2);
    const res = (<unknown>{
      ok: false,
      statusText: 'asdf',
      json: jest.fn().mockRejectedValue('invalid JSON'),
    }) as Response;

    return handleError(res).catch((error) => {
      expect(res.json).toBeCalled();
      expect(error.message).toBe(
        'Could not connect with server, please try reloading the page.',
      );
    });
  });

  it('should return unknown error when API returns non JSON response (api call)', async () => {
    expect.assertions(1);
    return service.get('/api/error-invalid-json').catch((error) => {
      expect(error.message).toBe(
        'Could not connect with server, please try reloading the page.',
      );
    });
  });

  it('should return the the same response passed as parameter if no error found', () => {
    expect.assertions(2);
    const res = (<unknown>{
      ok: true,
      json: jest.fn().mockResolvedValue({ key: 'value' }),
    }) as Response;

    return handleError(res).then((resReturn) => {
      expect(res.json).not.toBeCalled();
      expect(resReturn).toBe(res);
    });
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
    global.fetch = prevFetch;
    global.window = prevWindow;
  });
});

describe('get, post, put and del', () => {
  beforeAll(() => {
    global.fetch = (<unknown>fetch) as typeof global.fetch;
    global.FormData = (<unknown>FormDataMock) as typeof global.FormData;
    global.window = (<unknown>{
      App: {
        apiUrl: 'http://localhost',
      },
    }) as typeof global.window;
    server.listen();
  });

  it('get should return json values', async () => {
    expect.assertions(1);
    return service.get('/api/get').then((res) => {
      expect(res).toEqual({ key: 'value' });
    });
  });

  it('post should return json values', async () => {
    expect.assertions(1);
    return service.post('/api/post', { key: 'value2' }).then((res) => {
      expect(res).toEqual({ key: 'value2' });
    });
  });
  it('put should return json values', async () => {
    expect.assertions(1);
    return service.put('/api/put', { key: 'value3' }).then((res) => {
      expect(res).toEqual({ key: 'value3' });
    });
  });

  it('del should return the response', async () => {
    expect.assertions(1);
    return service.del('/api/del', { key: 'value4' }).then((res) => {
      expect(res.status).toEqual(200);
    });
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
    global.fetch = prevFetch;
    global.window = prevWindow;
    global.FormData = prevFormData;
  });
});
