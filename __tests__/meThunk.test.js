import { getMeThunk } from '../store/ducks/auth/thunks'
import { mockStore } from '../__mocks__/store';

const fetchMe = require('../axios/auth').fetchMe; // Do this
jest.mock('../axios/auth', () => ({
  fetchMe: jest.fn(),
}));

describe('meThunk', () => {
  describe('when fetchMe succeeds', () => {
    beforeEach(() => {
      fetchMe.mockResolvedValue({ data: { email: "test" } });
    });
    it('dispatches success', async () => {
      const store = mockStore
      await store.dispatch(getMeThunk());
      const state = store.getState().auth.user.email;
      expect(state).toEqual("test");
    });
  });

});