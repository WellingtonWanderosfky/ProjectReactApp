import { useEffect, useState } from "react";
import styles from "./Coutdown.module.scss";

let countdownTimeout: NodeJS.Timeout;

const Coutdown = () => {
  const [time, setTime] = useState(0.1*60);
  const [isActive, setisActive] = useState(false);
  const [hasFinished, sethasFinished] = useState(false);


  const minutes = Math.floor(time/60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft,secondRight] = String(seconds).padStart(2, '0').split('');

  function startContdown() {
    setisActive(true);
    setTime(0.1*60);
  }


  function pauseContdown() {
    clearTimeout(countdownTimeout);
    setisActive(false);
    setTime(0.1*60);
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if(isActive && time === 0) {
      setisActive(false);
      sethasFinished(true);
    }
  } , [isActive,time])  

  return (
    <>
      <div className={styles.countdownContainer}>
          <div>
              <span>{minuteLeft}</span>
              <span>{minuteRight}</span>
          </div>
          <span>:</span>
          <div>
              <span>{secondLeft}</span>
              <span>{secondRight}</span>
          </div>
      </div>

      {hasFinished ? (
        <button
          className={styles.coutdownButton}
          disabled
        >
        Ciclo encerrado
      </button>
      ) : (
        <>
        {isActive? (
          <button
          type="button"
          className={`${styles.coutdownButton} ${styles.coutdownButtonActive}`}
          onClick={pauseContdown}
          >
          Abandonar Ciclo
        </button>
        ) : (
          <button
          type="button"
          className={styles.coutdownButton}
          onClick={startContdown}
          >
          Iniciar um ciclo
        </button>
        )}</>
      )}

      
      
    </>
  )
}

export default Coutdown;