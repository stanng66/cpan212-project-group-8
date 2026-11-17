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
                    <div className={styles["character-card"]}>
                        <img
                            src="/assets/characterImages/bastien.jpeg"
                            alt="Bastien Moreau"
                        />
                        <p>Bastien Moreau</p>
                        <span>VICTIM</span>
                    </div>
                </div>

                <div className={styles["suspects-grid"]}>
                    {characters.filter(character => character.role === "Suspect").map(character => (
                        <div className={styles["character-card"]} key={character.id}>
                            <img
                                src={"/assets/characterImages/" + character.image}
                                alt={character.name}
                            />
                            <p>{character.name}</p>
                            <span>SUSPECT</span>
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