import { Suspense } from "react";
import CluesList from "./cluesList";

export default function CluesPage() {
    return (
        <Suspense fallback={
            <div className="clues-page">
                <h1>Investigation Clues</h1>
                <p>Loading clues and artwork information...</p>
            </div>
        }>
            <CluesList />
        </Suspense>
    );
}
