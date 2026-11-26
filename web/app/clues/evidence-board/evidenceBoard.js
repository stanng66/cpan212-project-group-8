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
    2: [4],   // Julian
    3: [1],   // James
    4: [8],  // Arthur
    5: [3],   // Chloe
    6: [9], // Elena
    7: [5]    // Marcus
};
const galleries = [
    { id: 107, name: "GALLERY 107", clues: [1, 2, 3] },
    { id: 143, name: "GALLERY 143", clues: [4, 5, 6] },
    { id: 206, name: "GALLERY 206", clues: [7, 8, 9] },
    { id: 272, name: "GALLERY 272", clues: [10, 11, 12] }
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

                <div className={styles["gallery-board"]}>
                    {galleries.map(gallery => {

                        const galleryClues = clues.filter(clue =>
                            gallery.clues.includes(Number(clue.id))
                        );

                        const gallerySuspects = characters.filter(character =>
                            character.role === "Suspect" &&
                            (suspectClues[character.id] || []).some(clueId =>
                                gallery.clues.includes(clueId)
                            )
                        );

                        return (
                            <div className={styles["gallery-section"]} key={gallery.id}>

                                <h2 className={styles["gallery-title"]}>
                                    {gallery.name}
                                </h2>

                        {/* strings lead to the gallery they were found in */}
                                <div className={styles["gallery-string-one"]}></div>
                                <div className={styles["gallery-string-two"]}></div>
                                <div className={styles["gallery-string-three"]}></div>

                            
                                {galleryClues.map((clue, index) => (
                                    <Link
                                        href={"/clues/" + clue.id}
                                        className={`${styles["sticky-note"]} ${styles["clue-position-" + index]}`}
                                        key={clue.id}
                                    >
                                        <div className={styles.titleClueNumber}>
                                            <span>CLUE #{clue.id}</span>
                                            <h3>{clue.title}</h3>
                                        </div>

                                        <p>{clue.description}</p>
                                    </Link>
                                ))}

                        
                                {gallerySuspects.map((character, index) => (
                                    <Link
                                        href={"/characters?characterID=" + character.id}
                                        className={`${styles["character-card"]} ${styles["suspect-card"]} ${styles["suspect-position-" + index]}`}
                                        key={character.id}
                                    >
                                        <div className={styles.suspectTitle}>
                                            SUSPECT
                                        </div>

                                        <img
                                            src={"/assets/characterImages/" + character.image}
                                            alt={character.name}
                                        />

                                        <p>{character.name}</p>
                                        <h6>{character.jobTitle}</h6>
                                    </Link>
                                ))}

                            </div>

                            
                        );
                    })}
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