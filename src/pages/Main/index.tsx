import { useState } from 'react';
import { Controls } from '../../container/Controls';
import { Result } from '../../container/Result';
import './style.css';
import { Api, type Anime } from '../../../jikan-client/Api';

interface Result {
  title: string;
}

export function Main() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const api = new Api();

  const buttonHandler = (input: string) => {
    if (!input.trim()) return;

    setIsLoading(true);

    api.anime
      .getAnimeSearch({ q: input })
      .then((response) => response.json())
      .then((result) => {
        setResult(
          result.data.map((item: Anime) => ({
            title: item.title,
            image_url: item.images?.jpg?.image_url,
            status: item.status,
            year: item.aired?.prop?.from?.year,
            score: item.score,
            members: item.members,
            episodes: item.episodes,
            genres: item.genres?.map(({ name }) => name),
          }))
        );
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <div className="header">
        <h1 className="title-h1">Anime</h1>
        <Controls buttonHandler={buttonHandler} />
      </div>
      <Result isLoading={isLoading} isError={isError} result={result} />
    </div>
  );
}
