
'use client';

import { useState } from 'react';
import styles from './characters.module.css';
import characters from './characterData';
// b j j a c e m

export default function CharactersCard() {
    const [selectedCharacter, setSelectedCharacter] = useState(0);
    const character = characters[selectedCharacter];


    return (
        <div className={styles.characterPage}>
            <h1>Character Profiles</h1>

            <div className={styles.characterCard}>
                <div className={styles.profileSide}>

                    <img
                        src={character.image}
                        alt={character.name}
                        className={styles.profileImage}
                        
                    />



                    {/* name e-id job title department  */}
                    <h3>NAME/NOM</h3>
                    <p>{character.name}</p>

                    <h3>EMPLOYEE ID</h3>
                    <p>{character.employeeID}</p>

                    <h3>JOB TITLE</h3>
                    <p>{character.jobTitle}</p>

                    <h1 className={styles.department}>DEPARTMENT</h1>
                    <p>{character.department}</p>
                </div>



                <div className={styles.profileInformationContainer}>
                    {/* fingerprint on the top right of each profile */}
                    {/* <div className={styles.fingerprintTitleContainer}> */}
                    <h6 className={styles.confidential}>CONFIDENTIAL EMPLOYEE RECORD</h6>
                        <h2>
                            Musée des Beaux-Arts de l'Éclipse
                            <br />
                            | The Eclipse Fine Arts Museum
                        </h2>
                    {/* </div> */}
                    <div className={styles.profileDetails}>
                        <p><h3>REPORTS TO </h3>{character.reportsTo}</p>
                        <p><h3>SECURITY CLEARANCE</h3> Level 3 (All-Access)</p>

                        <h3>EDUCATION</h3>
                        <p className={styles.education}>{character.education}</p>
                    </div>

                    <h3>NOTES</h3>
                    <div className={styles.characterNotes}>
                        {character.characterNotes}
                    </div>

                </div>
            </div>


            <div className={styles.characterImages}>
                {characters.map((item, index) => (
                    <button

                        key={item.characterID}

                        onClick={() => setSelectedCharacter(index)}
                        className={
                            selectedCharacter === index
                                ? styles.selectedImage
                                : styles.characterButton
                        }
                        style={{ borderColor: item.borderColor }}       

                    >



                        <img src={item.image} alt={item.name} />
                    </button>

                ))}

            </div>

        </div>
    );
}
