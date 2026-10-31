import Link from "next/link";

export default async function CluesPage() {
    let clues = [];
    let error = "";

    try {
        const response = await fetch("http://localhost:4000/api/clues");

        if (response.ok) {
            const result = await response.json();
            clues = result.data;
        } else {
            error = "Could not load clues.";
        }
    } catch (err) {
        error = "Could not connect to the server.";
    }

    return (
        <div className="clues-page">
            <h1>Investigation Clues</h1>
            <p>Select a clue to view its details.</p>

            {error && <p>{error}</p>}

            {!error && clues.length === 0 && (
                <p>No clues available.</p>
            )}

            <div className="clues-grid">
                {clues.map((clue) => (
                    <div className="clue-card" key={clue.id}>
                        <p className="clue-Number">
                            CLUE #{clue.id}
                        </p>
                        <h2>{clue.title}</h2>

                        <p className="clue-description">
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
