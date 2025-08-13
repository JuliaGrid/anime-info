import type { IAnimeItem } from '../../components/Item';

export const apiMock = {
  title: 'Naruto',
  images: { jpg: { image_url: 'https://example.com/naruto.jpg' } },
  status: 'Finished Airing',
  aired: { prop: { from: { year: 2002 } } },
  score: 7.9,
  members: 123456,
  episodes: 220,
  genres: [{ name: 'Action' }, { name: 'Adventure' }],
};

export const animeMock: IAnimeItem = {
  title: 'Naruto',
  image_url: '',
  status: '',
  year: 0,
  score: 0,
  members: 0,
  episodes: 0,
  genres: [],
};
