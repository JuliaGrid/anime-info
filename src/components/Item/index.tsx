interface IItem {
  title: string;
}

export const Item = (props: IItem) => {
  const { title } = props;

  return <p>{title}</p>;
};
