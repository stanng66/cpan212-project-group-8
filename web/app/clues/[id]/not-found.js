import Link from "next/link";

export default function NotFound() {
    return (
        <div className="clues-page clue-details-page">
            <h1>Investigation Dashboard</h1>
            <p>Clue not found.</p>
            <Link href="/clues">Back to Clues</Link>
        </div>
    );
}