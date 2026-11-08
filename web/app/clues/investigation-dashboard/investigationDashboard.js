"use client";

import { useState } from "react";
import { useInvestigation } from "../../../context/investigationContext";
import styles from "../investigation-dashboard/investigationDashboard.module.css";

export default function InvestigationDashboard({ clue }) {
    const [showClue, setShowClue] = useState(false);
    const { saveClue, savedClueCount } = useInvestigation();

    const investigationActions = [
        "Search For Physical Evidence",
        "Examine Hidden Messages",
        "Analyze Traces and Residue",
        "Review Records and Statements"
    ];

    function investigate(action) {
        if (action === clue.forensicAction) {
            saveClue(clue);
            setShowClue(true);
        }
    }

    return (
        <>
            <section className={styles["investigation-panel"]}>
                <h2>Investigate Further</h2>

                <p>Saved clues: {savedClueCount}</p> {/* Used temporarily to display the number of clues saved in the investigation context */}

                <div className={styles["investigation-actions"]}>
                    {investigationActions.map((action) => (
                        <button
                            key={action}
                            type="button"
                            className={styles["investigation-action-button"]}
                            onClick={() => investigate(action)}
                        >
                            [ {action} ]
                        </button>
                    ))}
                </div>
            </section>

            {showClue && (
                <div className={styles["clue-popup-overlay"]}>
                    <div className={styles["clue-popup"]}>
                        <h2>{clue.title}</h2>
                        <p>{clue.description}</p>

                        <button
                            type="button"
                            onClick={() => setShowClue(false)}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
