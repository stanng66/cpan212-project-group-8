import Link from "next/link";

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
                <h1>Clue Details</h1>
                <p>{error || "No Clue Information Available."}</p>
                <Link href="/clues">Back to Clues</Link>
            </div>
        );
    }

    if (clue.linkedArtworkId) {
        try {
            const artworkResponse = await fetch(
                apiUrl + "/api/clues/artwork/" + clue.linkedArtworkId
            );

            if (artworkResponse.ok) {
                artwork = await artworkResponse.json();
            } else {
                artworkError = "Could not load artwork.";
            }
        } catch (err) {
            artworkError = "Could not connect to the server.";
        }
    }

    return (
        <div className="clues-page clue-details-page">
            <h1>{clue.title}</h1>

            <div className="clue-details">
                <p><strong>Description:</strong> {clue.description}</p>
                <p><strong>Forensic Action:</strong> {clue.forensicAction}</p>
                <p><strong>Footnote:</strong> {clue.footnote}</p>
                <p><strong>Location:</strong> {clue.locationName}</p>
                <p><strong>Artwork ID:</strong> {clue.linkedArtworkId}</p>
                <p><strong>Suspect ID:</strong> {clue.linkedSuspectId}</p>
            </div>

            <div className="artwork-details">
                <h2>Linked Artwork</h2>

                {artworkError && <p>{artworkError}</p>}

                {!artwork && !artworkError && (
                    <p>No artwork information available.</p>
                )}

                {artwork && (
                    <div className="artwork-card">
                        <div className="artwork-image-section">
                            {artwork.image_url ? (
                                <img
                                    src={artwork.image_url}
                                    alt={artwork.title}
                                    className="clue-artwork-image"
                                />
                            ) : (

                                <p>Artwork image unavailable.</p>
                            )}
                        </div>

                        <h3>{artwork.title}</h3>
                        <p><strong>Artist:</strong> {artwork.artist_display}</p>
                        <p><strong>Date:</strong> {artwork.date_display}</p>
                        <p><strong>Medium:</strong> {artwork.medium_display}</p>
                        <p><strong>Gallery:</strong> {artwork.gallery_title}</p>
                    </div>
                )}
            </div>

            <div className="clue-navigation">
                {clue.id > 1 && (
                    <Link href={"/clues/" + (clue.id - 1)}>
                        Previous Clue
                    </Link>
                )}

                <Link href="/clues">
                    Back to Clues
                </Link>

                {clue.id < 12 && (
                    <Link href={"/clues/" + (clue.id + 1)}>
                        Next Clue
                    </Link>
                )}
            </div>
        </div>
    );
}