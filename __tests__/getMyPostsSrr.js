import { getMyPostsSsr } from '../utils/getMyPostsSsr';

const fetchMe = require('../axios').axios; // Do this
jest.mock('../axios', () => ({
  axios: jest.fn(),
}));

describe('getMyPostsSsr', () => {
  describe('when posts exist', () => {
    beforeEach(() => {
      fetchMe.mockResolvedValue({ data: [{ id: "test" }] });
    });
    it('success', async () => {
      const context = { req: { cookies: { accessToken: "test" } } }

      const result = await getMyPostsSsr(context)
      expect(result.props.posts.length).toEqual(1);
    });
  });

});