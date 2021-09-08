import { initializeStore } from '../store';
import { selectUser } from '../store/ducks/auth/selectors';

describe('selectUser', () => {
  describe('user must be selected', () => {
    it('selected success', async () => {
      const store = initializeStore({ auth: { user: { email: "test" } } })
      const user = selectUser(store.getState());
      expect(user.email).toEqual("test");
    });
  });

});