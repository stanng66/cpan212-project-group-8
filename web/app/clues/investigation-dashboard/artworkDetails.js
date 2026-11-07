import styles from "../investigation-dashboard/investigationDashboard.module.css";

export default async function ArtworkDetails({ clue }) {
    const apiUrl = process.env.API_ORIGIN;

    let artwork = null;
    let artworkError = "";

    if (clue.linkedArtworkId) {
        try {
            const response = await fetch(
                apiUrl + "/api/clues/artwork/" + clue.linkedArtworkId
            );

            if (response.ok) {
                artwork = await response.json();
            } else {
                artworkError = "Could not load artwork.";
            }
        } catch (err) {
            artworkError = "Could not connect to the server.";
        }
    }

    return (
        <section className={`${styles["investigation-panel"]} ${styles["painting-panel"]}`}>
            <h2>{artwork?.title}</h2>

            {artworkError && <p>{artworkError}</p>}

            {artwork ? (
                <div className={styles["painting-content"]}>
                    <img
                        src={"/assets/artworks/" + clue.linkedArtworkId + ".jpg"}
                        alt={artwork.title}
                        className={styles["investigation-artwork-image"]}
                    />

                    <p><strong>Artist:</strong> {artwork.artist_display}</p>
                    <p><strong>Date:</strong> {artwork.date_display}</p>
                    <p><strong>Medium:</strong> {artwork.medium_display}</p>

                    <div className={styles["painting-footnote"]}>
                        <h3>Footnote:</h3>
                        <p>{clue.footnote}</p>
                    </div>
                </div>
            ) : (
                !artworkError && <p>No artwork information available.</p>
            )}
        </section>
    );
}
