import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/auth/login';

describe('/api/login', () => {
    test('should returna an object with an accessToken', async () => {
        const { req, res } = createMocks({
            method: 'POST',
            body: {email: "Test", password: "test"}
        });

        await handler(req, res);
        expect(res._getStatusCode()).toBe(
            200
        );
        expect(
            JSON.parse(res._getData())
        ).toHaveProperty("accessToken");
    });
});