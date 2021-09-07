import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/auth/me';

describe('/api/me', () => {
    test('should returna an object with an user', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            headers: {authorization: ""}
        });

        await handler(req, res);
        expect(res._getStatusCode()).toBe(
            401
        );
    });
});