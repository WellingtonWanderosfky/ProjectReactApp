import styles from "./Challegebox.module.scss";

const ChallegenBox = () => {
  return (
    <div className={styles.ChallegeBoxConteiner}>
      <div className={styles.ChallegeBoxNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/Up.svg" alt="Level Up" />
          Avance de level completando desafios.
        </p>
      </div>
    </div>
  )
}

export default ChallegenBox;