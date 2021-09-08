import { getUserSsr } from '../utils/getUserSsr';

const fetchMe = require('../axios').axios; // Do this
jest.mock('../axios', () => ({
  axios: jest.fn(),
}));

describe('getUserSsr', () => {
  describe('when user exist', () => {
    beforeEach(() => {
      fetchMe.mockResolvedValue({ data: { email: "test" } });
    });
    it('success', async () => {
      const context = {req: {cookies: {accessToken: "test"}}}
      const result = await getUserSsr()(context)
      expect(result.props.initialReduxState.auth.user.email).toEqual("test");
    });
  });

});