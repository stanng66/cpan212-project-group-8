import Link from "next/link";
import InvestigationDashboard from "./investigationDashboard";

export default async function ClueDetailsPage({ params }) {
    const { id } = await params;
    const apiUrl = process.env.API_ORIGIN;

    let clue = null;
    let error = "";
    let artwork = null;
    let artworkError = "";

    try {
        const response = await fetch(apiUrl + "/api/clues/" + id);

        if (response.ok) {
            clue = await response.json();
        } else if (response.status === 404) {
            error = "Clue not found.";
        } else {
            error = "Could not load clue.";
        }
    } catch (err) {
        error = "Could not connect to the server.";
    }

    if (error || !clue) {
        return (
            <div className="clues-page clue-details-page">
                <h1>Investigation Dashboard</h1>
                <p>{error || "No Clue Information Available."}</p>
                <Link href="/clues">Back to Clues</Link>
            </div>
        );
    }

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

    const galleries = ["Gallery 107", "Gallery 143", "Gallery 206", "Gallery 272"];

    return (
        <div className="investigation-page">

            <h1 className="investigation-title">Investigation Dashboard</h1>

            <div className="investigation-dashboard">
                <div className="investigation-layout">
                    <div className="investigation-sidebar">
                        <section className="investigation-panel">
                            <h2>Current Location</h2>

                            <div className="gallery-list">
                                {galleries.map((gallery) => (
                                    <div className="gallery-item" key={gallery}>
                                        <span className="gallery-marker">
                                            {clue.locationName === gallery ? "[X]" : "[ ]"}
                                        </span>

                                        <span>{gallery}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <InvestigationDashboard clue={clue} />

                    </div>

                    <section className="investigation-panel painting-panel">
                        <h2>{artwork?.title}</h2>

                        {artworkError && <p>{artworkError}</p>}

                        {artwork ? (
                            <div className="painting-content">
                                <img
                                    src={"/assets/artworks/" + clue.linkedArtworkId + ".jpg"}
                                    alt={artwork.title}
                                    className="investigation-artwork-image"
                                />

                                <p><strong>Artist:</strong> {artwork.artist_display}</p>
                                <p><strong>Date:</strong> {artwork.date_display}</p>
                                <p><strong>Medium:</strong> {artwork.medium_display}</p>

                                <div className="painting-footnote">
                                    <h3>Footnote:</h3>
                                    <p>{clue.footnote}</p>
                                </div>
                            </div>
                        ) : (
                            !artworkError && <p>No artwork information available.</p>
                        )}
                    </section>
                </div>

                <div className="investigation-footer">
                    <div className="investigation-navigation">
                        {clue.id > 1 && (
                            <Link href={"/clues/" + (clue.id - 1)}>
                                Previous Clue
                            </Link>
                        )}

                        <Link href="/clues">Back to Clues</Link>

                        {clue.id < 12 && (
                            <Link href={"/clues/" + (clue.id + 1)}>
                                Next Clue
                            </Link>
                        )}
                    </div>

                    <Link href="/notebook" className="notebook-link">
                        Add Note to Notebook +
                    </Link>
                </div>
            </div>
        </div>
    );
}