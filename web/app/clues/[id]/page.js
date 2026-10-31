
import Link from "next/link";

export default async function ClueDetailsPage({ params }) {
    const { id } = await params;

    let clue = null;
    let error = "";

    try {
        const response = await fetch("http://localhost:4000/api/clues/" + id);

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

    if (error) {
        return (
            <div className="clues-page">
                <p>{error}</p>
                <Link href="/clues">Back to Clues</Link>
            </div>
        );
    }

    return (
        <div className="clues-page">
            <h1>{clue.title}</h1>

            <p><strong>Description:</strong> {clue.description}</p>
            <p><strong>Forensic Action:</strong> {clue.forensicAction}</p>
            <p><strong>Footnote:</strong> {clue.footnote}</p>
            <p><strong>Location:</strong> {clue.locationName}</p>
            <p><strong>Artwork ID:</strong> {clue.linkedArtworkId}</p>
            <p><strong>Suspect ID:</strong> {clue.linkedSuspectId}</p>

            <Link href="/clues">Back to Clues</Link>
        </div>
    );
}
