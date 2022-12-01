import Head from 'next/head';
import ChallegenBox from '../Components/ChallengeBox.tsx/ChallegeBox';
import CompletedChallenges from '../Components/CompletedChallenges/CompletedChallenges';
import Coutdown from '../Components/Countdown/Coutdown';
import Profile from "../Components/Profile/Profile";
import TopBar from "../Components/TopBar/TopBar";
import styles from "../styles/main.module.scss";


export default function Home() {
  return (
    <><Head>

    </Head>
      <div className={styles.conteiner}>
          <TopBar />
          <section>
            <div>
              <Profile />
              <CompletedChallenges/>
              <Coutdown/>
            </div>

            <div>
            <ChallegenBox/>

            </div>

          </section>
      </div>
    </>
  )
}
