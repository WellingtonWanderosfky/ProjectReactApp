import styles from "./Challegebox.module.scss";

const ChallegenBox = () => {

  const hasActiveChallenge = true;


  return (
    <div className={styles.ChallegeBoxConteiner}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>
            Ganhe 400 xp
          </header>

          <main>
            <img src="icons/body.svg" alt="Body" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>

            <footer>
              <button type="button" className={styles.challengeFailedButton}>
                Falhei
              </button>
              <button type="button" className={styles.challengeSucceededButton}>
                Completei
              </button>
            </footer>
          </main>
        </div>
      )
          : <div className={styles.ChallegeBoxNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/Up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      } 
    </div>
  )
}

export default ChallegenBox;