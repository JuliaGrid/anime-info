import test, { expect } from '@playwright/test';

test('api test', async ({ request }) => {
  const response = await request.get(
    'https://hacker-news.firebaseio.com/v0/item/8863.json'
  );
  const data = await response.json();
  console.log(data);
  expect(response.ok()).toBeTruthy();
  expect(data).toMatchObject(
    expect.objectContaining({
      id: 8863,
      score: 104,
      time: 1175714200,
      title: 'My YC app: Dropbox - Throw away your USB drive',
    })
  );
  expect(data.id).toEqual(expect.any(Number));
  expect(data.title).toEqual(expect.any(String));
  expect(data.score).toEqual(expect.any(Number));
});
