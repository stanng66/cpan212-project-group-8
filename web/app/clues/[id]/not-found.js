import Link from "next/link";
import styles from "../investigation-dashboard/investigationDashboard.module.css";

export default function NotFound() {
    return (
        <div className={styles["clue-details-page"]}>
            <h1>Investigation Dashboard</h1>
            <p>Clue not found.</p>
            <Link href="/clues">Back to Clues</Link>
        </div>
    );
}