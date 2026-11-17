import Link from "next/link";
import styles from "./evidenceBoard.module.css";

const characters = [
    { id: 1, name: "Bastien Moreau", image: "bastien.jpeg", role: "Victim" },
    { id: 2, name: "Julian Croft", image: "julian.jpeg", role: "Suspect" },
    { id: 3, name: "James Donavan", image: "james.jpeg", role: "Suspect" },
    { id: 4, name: "Arthur Boucher", image: "arthur.jpeg", role: "Suspect" },
    { id: 5, name: "Chloe Sterling", image: "chloe.jpeg", role: "Suspect" },
    { id: 6, name: "Dr. Elena Rostova", image: "elena.jpeg", role: "Suspect" },
    { id: 7, name: "Marcus Brennan", image: "marcus.jpeg", role: "Suspect" }
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
            Bastien was murdered in front of the ticket booth.
            
            Triggered alarm, his watch was broken at 2:36 AM. 
            
            It must have been broken during the struggle... that must be the time of death.
        </p>
    </div>

    <div className={styles["character-card"]}>
        <img
            src="/assets/characterImages/bastien.jpeg"
            alt="Bastien Moreau"
        />
        <p>Bastien Moreau</p>
        <span>VICTIM - HEAD MUSEUM CURATOR</span>
    </div>

    <div className={styles["cause-note"]}>
        <h3>CAUSE OF DEATH</h3>
        <p>Stabbed to death with a restoration spatula.</p>
    </div>

    <div className={styles["weapon-card"]}>
        <img
            src="/assets/murderWeapon.jpeg"
            alt="Restoration spatula murder weapon"
        />
        <p>MURDER WEAPON</p>
    </div>

</div>

                <div className={styles["suspects-grid"]}>
                    {characters
                        .filter(character => character.role === "Suspect")
                        .map(character => (
                            <div className={styles["suspect-section"]} key={character.id}>

                                <div className={styles["character-card"]}>
                                    <img
                                        src={"/assets/characterImages/" + character.image}
                                        alt={character.name}
                                    />
                                    <p>{character.name}</p>
                                    <span>SUSPECT</span>
                                </div>

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
                                                <span>CLUE #{clue.id}</span>
                                                <h3>{clue.title}</h3>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>

            </div>
            {error && <p>{error}</p>}

            {!error && clues.length === 0 && (
                <p>No clues available.</p>
            )}

            <div className={styles["clues-grid"]}>
                {clues.map((clue) => (
                    <div className={styles["clue-card"]} key={clue.id}>
                        <p className={styles["clue-number"]}>
                            CLUE #{clue.id}
                        </p>
                        <h3>{clue.title}</h3>

                        <p className={styles["clue-description"]}>
                            {clue.description}
                        </p>

                        <Link href={"/clues/" + clue.id}>
                            Investigate Clue
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}