import styles from "./Coutdown.module.scss";

const Coutdown = () => {
  return (
    <div className={styles.countdownContainer}>
        <div>
            <span>2</span>
            <span>5</span>
        </div>
        <span>:</span>
        <div>
            <span>0</span>
            <span>0</span>
        </div>
    </div>
  )
}

export default Coutdown;