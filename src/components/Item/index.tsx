import { BookmarkIcon } from '../../assets/icon/bookmark';
import { StarIcon } from '../../assets/icon/star';
import { UserIcon } from '../../assets/icon/user';
import './style.css';

interface IItem {
  animeItem: IAnimeItem;
}

export interface IAnimeItem {
  title: string;
  image_url: string;
  status: string;
  year: number;
  score: number;
  members: number;
  episodes: number;
  genres: string[];
}

export const Item = (props: IItem) => {
  const { animeItem } = props;
  console.log('animeItem', animeItem);
  const { title, image_url, status, year, score, genres, members, episodes } =
    animeItem;

  // if (true) {
  return (
    <div className="item">
      <img className="image" src={image_url} />
      <div className="content">
        <div className="test">
          <p className="aired">{status}</p>
          <BookmarkIcon />
        </div>
        <div className="info">
          <p>{year}</p>
          <p>{episodes} episodes</p>
        </div>

        <b className="title">{title}</b>

        <div className="rank">
          {score && (
            <div>
              <StarIcon />
              <p>{score}</p>
            </div>
          )}
          <div>
            <UserIcon />
            <p>{members}</p>
          </div>
        </div>

        <div className="genres">
          {genres.map((name) => (
            <div key="name" className="label">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  // }

  return <p>{title}</p>;
};
