import { loginThunk } from '../store/ducks/auth/thunks'
import { mockStore } from '../__mocks__/store';

const login = require('../axios/auth').login; // Do this
jest.mock('../axios/auth', () => ({
  login: jest.fn(),
}));

describe('loginThunk', () => {
  describe('when login succeeds', () => {
    beforeEach(() => {
      login.mockResolvedValue({ data: { accessToken: "test" } });
    });
    it('dispatches success', async () => {
      const store = mockStore
      await store.dispatch(loginThunk({ email: "test", password: "test" }));
      const state = store.getState().auth.token;
      expect(state).toEqual("test");
    });
  });

});