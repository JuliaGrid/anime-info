import { Item } from '../../components/Item';
import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';

interface IResult {
  isLoading: boolean;
  isError: boolean;
  result: string[];
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
    <div>
      {result.map((title) => (
        <Item key={title} title={title} />
      ))}
    </div>
  );
};
