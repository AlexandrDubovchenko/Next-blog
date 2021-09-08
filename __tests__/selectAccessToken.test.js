import { initializeStore } from '../store';
import { selectAccessToken } from '../store/ducks/auth/selectors';

describe('selectAccessToken', () => {
  describe('token must be selected', () => {
    it('selected success', async () => {
      const store = initializeStore({ auth: { token: "test" } })
      const token = selectAccessToken(store.getState());
      expect(token).toEqual("test");
    });
  });

});