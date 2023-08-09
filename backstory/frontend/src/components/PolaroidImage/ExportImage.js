import styles from './ExportImage.module.css';

export const ExportImage = ({ imageURL, caption }) => {
  return (
    <div className={styles.polaroid}>
      <div className={styles['polaroid-inner']}>
        <div className={styles['polaroid-front']}>
          <img src={imageURL} alt="Polaroid" />
          <p className={styles.caption}>{caption}</p>
        </div>
      </div>
    </div>
  );
};
