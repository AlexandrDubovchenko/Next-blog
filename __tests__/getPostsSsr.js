import { getPostsSsr } from '../utils/getPostsSsr';

const fetchMe = require('../axios').axios; // Do this
jest.mock('../axios', () => ({
  axios: jest.fn(),
}));

describe('getPostsSsr', () => {
  describe('when posts exist', () => {
    beforeEach(() => {
      fetchMe.mockResolvedValue({ data: [{ id: "test" }] });
    });
    it('success', async () => {
      const result = await getPostsSsr()
      expect(result.props.posts.length).toEqual(1);
    });
  });

});