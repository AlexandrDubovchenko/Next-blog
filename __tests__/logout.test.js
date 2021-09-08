import { initializeStore } from '../store';
import { logout } from '../store/ducks/auth/actions'

describe('logout', () => {
  describe('user must be null', () => {
    it('dispatches success', async () => {
      const store = initializeStore({ auth: { user: { email: "test" } } })
      store.dispatch(logout());
      const state = store.getState().auth.user;
      expect(state).toBeNull();
    });
  });

});