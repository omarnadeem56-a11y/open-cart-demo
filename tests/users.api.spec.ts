import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

test.describe('API - Users', () => {
  const API_BASE = 'https://reqres.in/api';
  const API_KEY = process.env.API_KEY;

  test('GET single user returns 200', async ({ request }) => {
    const response = await request.get(`${API_BASE}/users/2`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.first_name).toBe('Janet');
  });
});
