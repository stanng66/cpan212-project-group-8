import { Suspense } from "react";
import EvidenceBoard from "./evidence-board/evidenceBoard";
import styles from "./evidence-board/evidenceBoard.module.css";

export default function CluesPage() {
    return (
        <Suspense fallback={
            <div className={styles["clues-page"]}>
                <h1>Investigation Clues</h1>
                <p>Loading clues and artwork information...</p>
            </div>
        }>
            <EvidenceBoard />
        </Suspense>
    );
}
