import type { Anime } from '../../../jikan-client/Api';
import type { IAnimeItem } from '../../components/Item';

export const apiMock: Anime = {
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
  image_url: 'https://example.com/naruto.jpg',
  status: 'Finished Airing',
  year: 2002,
  score: 7.9,
  members: 123456,
  episodes: 220,
  genres: ['Action', 'Adventure'],
};
