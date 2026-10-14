import test, { expect } from 'playwright/test';

test('req test', async ({ request }) => {
  const response = await request.get(
    'https://aiqa.su/api/course/v1/shop/products?'
  );
  const responseJson = await response.json();

  expect(responseJson).toMatchObject({
    items: expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(String),
      }),
    ]),
  });

  expect(responseJson.items[0]).toMatchObject({
    id: 'pizza-margherita',
  });
});
