import { Item, type IAnimeItem } from '../../components/Item';
import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';
import classes from './index.module.css';

interface IResult {
  isLoading: boolean;
  isError: boolean;
  result: IAnimeItem[];
}

export const Result = (props: IResult) => {
  const { isLoading, isError, result } = props;

  if (isLoading) {
    return (
      <div className={classes.result}>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={classes.result}>
        <Error />
      </div>
    );
  }

  return (
    <div className={classes.result}>
      {result.map((item) => (
        <div key={item.title} className={classes.result__item}>
          <Item animeItem={item} />
        </div>
      ))}
    </div>
  );
};
