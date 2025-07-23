import { Item, type IAnimeItem } from '../../components/Item';
import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';
import './style.css';

interface IResult {
  isLoading: boolean;
  isError: boolean;
  result: IAnimeItem[];
}

export const Result = (props: IResult) => {
  const { isLoading, isError, result } = props;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="result">
      {result.map((item) => (
        <Item key={item.title} animeItem={item} />
      ))}
    </div>
  );
};
