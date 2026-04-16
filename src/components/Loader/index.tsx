import styles from './style.module.css';

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
      <p className={styles.label}>Loading</p>
    </div>
  );
};
