import styles from "./TopBar.module.scss";

const TopBar = () => {
  return (
    <header className={styles.TopBarConteiner}>
        <span>0 xp</span>
        <div className={styles.ProgressBar}>
          <div className={styles.ProgressSucess} style={{ width : "20%"}}></div>
          <span className={styles.currentExperience} style={{ left: '50%' }}>
            300 xp
          </span>
        </div>
        <span>600 xp</span>
    </header>
  )
}

export default TopBar;