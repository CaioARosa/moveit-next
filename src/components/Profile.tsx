import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);


    return(
        <div className={styles.profileContainer}>
            <img src='https://instagram.fsdu12-1.fna.fbcdn.net/v/t51.2885-19/s150x150/109484061_202448714528749_709228686027526500_n.jpg?tp=1&_nc_ht=instagram.fsdu12-1.fna.fbcdn.net&_nc_ohc=-Q9Tp_c7aboAX8iegMO&ccb=7-4&oh=09fc72d52ee4936a7e4ce1e0a3629b3f&oe=60834B26&_nc_sid=7bff83' alt='Caio Augusto'/>
            <div>
                <strong>Caio Augusto</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}