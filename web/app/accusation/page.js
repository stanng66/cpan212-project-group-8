import characters from '../characters/characterData.js';
import styles from './accusation.module.css';

export default function AccusationCard() {

    return (
        <div className={styles.employeeBadgeContainer}>
            {characters.filter((character)=>character.characterID!==1).map((character) => (
                <div
                    key={character.characterID}
                    className={styles.employeeBadge}
                >
                    <div className={styles.badgeHeader} style={{ backgroundColor: character.borderColor }} ></div>

                    <div className={styles.imageContainer}>
                        <img
                            src={character.image}
                            alt={character.name}
                            className={styles.badgeImage}
                            
                        />
                    </div>
                    <div className={styles.museumLogo}></div>
                    <div className={styles.name}>
                        {character.name}
                    </div>

                    <div className={styles.employeeID}>
                        ID: {character.employeeID}
                    </div>



                    <div className={styles.jobTitle} style={{ backgroundColor: character.borderColor }}>
                        {character.jobTitle}
                    </div>
                    <div className={styles.badgeFooter}>
                        <div className={styles.barcode}></div>
                            <div className={styles.footerRight}>
                                <div className={styles.department}>
                                    DEPT: {character.department}
                                </div>
                                <div className={styles.exp}>EXP: 05 01 2028</div>
                            </div>
                    </div>
                    </div>
                
            ))}
            <button id={styles.finalAccusationButton}>ACCUSE</button>
        </div>
    );
}