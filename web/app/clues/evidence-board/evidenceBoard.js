import Link from "next/link";
import styles from "./evidenceBoard.module.css";

const characters = [
    { id: 1, name: "Bastien Moreau", image: "bastien.jpeg", role: "Victim",jobTitle:"Head Museum Curator" },
    { id: 2, name: "Julian Croft", image: "julian.jpeg", role: "Suspect",jobTitle:"Head Museum Registrar" },
    { id: 3, name: "James Donavan", image: "james.jpeg", role: "Suspect",jobTitle:"Night-Shift Security Supervisor" },
    { id: 4, name: "Arthur Boucher", image: "arthur.jpeg", role: "Suspect",jobTitle:"Director of Facilities & Operations" },
    { id: 5, name: "Chloe Sterling", image: "chloe.jpeg", role: "Suspect",jobTitle:"Lead Exhibition Designer" },
    { id: 6, name: "Dr. Elena Rostova", image: "elena.jpeg", role: "Suspect",jobTitle:"Chief Paintings Conservator" },
    { id: 7, name: "Marcus Brennan", image: "marcus.jpeg", role: "Suspect",jobTitle:"Digital Collection Manager" }
];

const suspectClues = {
    2: [4, 9],   // Julian
    3: [1, 5],   // James
    4: [8, 11],  // Arthur
    5: [3, 6],   // Chloe
    6: [10, 12], // Elena
    7: [2, 7]    // Marcus
};

export default async function EvidenceBoard() {
    let clues = [];
    let error = "";

    try {
        const apiUrl = process.env.API_ORIGIN;
        const response = await fetch(apiUrl + "/api/clues");

        if (response.ok) {
            const result = await response.json();
            clues = Array.isArray(result.data) ? result.data : [];
        } else {
            error = "Could not load clues.";
        }
    } catch (err) {
        error = "Could not connect to the server.";
    }

    return (
        <div className={styles["clues-page"]}>
            <h1>Investigation Board</h1>

            <div className={styles["evidence-board"]}>
                <div className={styles["victim-section"]}>

                    <div className={styles["timeline-note"]}>
                        <h3>TIMELINE</h3>
                        <p>
                            On October 23, 2026, Bastien Moreau was murdered in front of the ticket booth. 
                            He triggered the museum alarm before dying, locking 6 people inside. 
                            His watch stopped at 2:36 AM—broken during the struggle. 
                            That puts the time of death at 2:36 AM.
                        </p>
                    </div>

                    <Link
                        href="/characters?characterID=1"
                        className={`${styles["character-card"]} ${styles["victim-card"]}`}
                    >
                        <img
                            src="/assets/characterImages/bastien.jpeg"
                            alt="Bastien Moreau"
                        />
                        <p>Bastien Moreau</p>
                        <span>VICTIM - Head Museum Curator </span>
                    </Link>

                    <div className={styles["cause-note"]}>
                        <h3>CAUSE OF DEATH</h3>
                        <p>Stabbed to death with a restoration spatula.</p>
                    </div>

                    <div className={styles["weapon-card"]}>
                        <img
                            src="/assets/murderWeapon.jpg"
                            alt="Restoration spatula murder weapon"
                        />
                        <p>MURDER WEAPON - RESTORATION SPATULA</p>
                    </div>

                    <div className={styles["blue-string-left"]}></div>
                    <div className={styles["blue-string-right"]}></div>
                    <div className={styles["blue-string-weapon"]}></div>

                </div>
                    <img className={styles.ferryTicket}
                        src={"/assets/ferryTicket.png"}
                        alt="ferry ticket"
                    />
                <div className={styles["suspects-grid"]}>
                    {characters
                        .filter(character => character.role === "Suspect")
                        .map(character => (
                            <div className={styles["suspect-section"]} key={character.id}>

                                <Link
                                href={"/characters?characterID=" + character.id}
                                className={`${styles["character-card"]} ${styles["suspect-card"]}`}
                                >
                                    <div className={styles.suspectTitle}>SUSPECT</div>
                                    <img
                                        src={"/assets/characterImages/" + character.image}
                                        alt={character.name}
                                    />
                                    <p>{character.name}</p>
                                    <h6>{character.jobTitle}</h6>
                                    
                                    
                               </Link>

                                <div className={styles["suspect-clues"]}>
                                    {clues
                                        .filter(clue =>
                                            suspectClues[character.id].includes(Number(clue.id))
                                        )
                                        .map(clue => (
                                            <Link
                                                href={"/clues/" + clue.id}
                                                className={styles["sticky-note"]}
                                                key={clue.id}
                                            >
                                                <div className={styles.titleClueNumber}>
                                                <span>CLUE #{clue.id}  </span>
                                                <h3>{clue.title}</h3></div>
                                                <p>{clue.description}</p>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
            </div>
        </div>

            { error && <p>{error}</p> }

    {
        !error && clues.length === 0 && (
            <p>No clues available.</p>
        )
    }
        </div >
    );
}