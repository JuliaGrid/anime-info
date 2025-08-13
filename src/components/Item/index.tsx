import { BookmarkIcon } from '../../assets/icon/bookmark';
import { StarIcon } from '../../assets/icon/star';
import { UserIcon } from '../../assets/icon/user';
import classes from './style.module.css';

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
  const { title, image_url, status, year, score, genres, members, episodes } =
    animeItem;

  return (
    <div className={classes.item}>
      {image_url && <img className={classes.image} src={image_url} />}
      <div className={classes.content}>
        <div className={classes.test}>
          <p className={classes.aired}>{status}</p>
          <BookmarkIcon />
        </div>
        <div className={classes.info}>
          <p>{year}</p>
          <p>{episodes} episodes</p>
        </div>

        <b className={classes.title}>{title}</b>

        <div className={classes.rank}>
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

        <div className={classes.genres}>
          {genres.map((name) => (
            <div key={name} className={classes.label}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
