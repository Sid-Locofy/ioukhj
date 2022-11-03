import { FunctionComponent } from "react";
import styles from "./RecCard1.module.css";

type RecCard1Type = {
  unsplash5MV818tzxeo?: string;
  bali?: string;
  d3N?: string;
  component?: string;
};

const RecCard1: FunctionComponent<RecCard1Type> = ({
  unsplash5MV818tzxeo,
  bali,
  d3N,
  component,
}) => {
  return (
    <button className={styles.recCard1}>
      <img
        className={styles.unsplash5MV818tzxeoIcon}
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className={styles.holidayDetailsDiv}>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.baliDiv}>{bali}</div>
            <div className={styles.d3NDiv}>{d3N}</div>
          </div>
          <div className={styles.div}>{component}</div>
        </div>
      </div>
    </button>
  );
};

export default RecCard1;
