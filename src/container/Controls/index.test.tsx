import { render } from '@testing-library/react';
import { Controls } from '.';

describe('Controls', () => {
  const setResult = jest.fn();
  const setIsLoading = jest.fn();
  const setIsError = jest.fn();

  it('render component', () => {
    render(
      <Controls
        setResult={setResult}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
      />
    );
  });
});
