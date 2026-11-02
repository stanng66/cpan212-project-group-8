import Link from "next/link";
import InvestigationDashboard from "./investigationDashboard";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ArtworkDetails from "./artworkDetails";

export default async function ClueDetailsPage({ params }) {
    const { id } = await params;
    const apiUrl = process.env.API_ORIGIN;

    let clue = null;
    let error = "";
    let clueNotFound = false;

    try {
        const response = await fetch(apiUrl + "/api/clues/" + id);

        if (response.ok) {
            clue = await response.json();
        } else if (response.status === 404) {
            clueNotFound = true;
        } else {
            error = "Could not load clue.";
        }
    } catch (err) {
        error = "Could not connect to the server.";
    }

    if (clueNotFound) {
        notFound();
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

                    <Suspense fallback={
                        <section className="investigation-panel painting-panel">
                            <h2>Artwork Information</h2>
                            <p>Loading artwork information...</p>
                        </section>
                    }>
                        <ArtworkDetails clue={clue} />
                    </Suspense>
                    
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