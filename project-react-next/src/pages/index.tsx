import Head from 'next/head';
import CompletedChallenges from '../Components/CompletedChallenges/CompletedChallenges';
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
          </div>

          <div>

          </div>

        </section>
      </div>
    </>
  )
}
