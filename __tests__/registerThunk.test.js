import { registerThunk } from '../store/ducks/auth/thunks'
import { mockStore } from '../__mocks__/store';

const register = require('../axios/auth').register; // Do this
jest.mock('../axios/auth', () => ({
  register: jest.fn(),
}));

describe('registerThunk', () => {
  describe('when register succeeds', () => {
    beforeEach(() => {
      register.mockResolvedValue({ data: { accessToken: "test" } });
    });
    it('dispatches success', async () => {
      const store = mockStore
      await store.dispatch(registerThunk({ email: "test", password: "test" }));
      const state = store.getState().auth.token;
      expect(state).toEqual("test");
    });
  });

});