interface IErrorPage {
  error: Error;
}

export const ErrorPage = (props: IErrorPage) => {
  const { error } = props;
  const reloadPage = () => {
    location.reload();
  };

  return (
    <>
      <p>{error.message}</p>
      <button onClick={reloadPage}>Reload page</button>
    </>
  );
};
