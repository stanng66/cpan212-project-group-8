import characters from '../characters/characterData.js';
import styles from './accusation.module.css';

export default function AccusationCard() {

    return (
        <div className={styles.employeeBadgeContainer}>
            {characters.map((character) => (
                <div
                    key={character.characterID}
                    className={styles.employeeBadge}
                >
                    <div className={styles.name}>
                        {character.name}
                    </div>

                    <div className={styles.employeeID}>
                        {character.employeeID}
                    </div>

                    <div className={styles.department}>
                        Department: {character.department}
                    </div>

                    <div className={styles.jobTitle}>
                        {character.jobTitle}
                    </div>

                    
                    <div className="expirationDate">EXP: 01 05 2028</div>
                </div>
            ))}
        </div>
    );
}