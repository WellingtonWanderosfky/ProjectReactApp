import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
        <img src='https://github.com/WellingtonWanderosfky.png' alt='foto-perfil'/>
        <div>
            <strong>Wellington Wanderosky</strong>
            <p>	
              <img src="icons/up.svg" alt="level"/>
              Level 1 </p>
        </div>
    </div>
  )
}

export default Profile;