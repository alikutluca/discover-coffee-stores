import styles from "./banner.module.css";

function Banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Kahve</span>
        <span className={styles.title2}>Mekanları</span>
      </h1>
      <p className={styles.subtitle}>Yerel Kahve Marketlerini Keşfet</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default Banner;
