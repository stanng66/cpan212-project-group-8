"use client";

import { useState } from "react";

export default function InvestigationDashboard({ clue }) {
    const [showClue, setShowClue] = useState(false);

    const investigationActions = [
        "Search for Physical Evidence",
        "Examine Hidden Messages",
        "Analyze Traces and Residue",
        "Review Records and Statements"
    ];

    const clueActions = {
        1: "Search for Physical Evidence",
        2: "Examine Hidden Messages",
        3: "Analyze Traces and Residue",
        4: "Search for Physical Evidence",
        5: "Examine Hidden Messages",
        6: "Analyze Traces and Residue",
        7: "Examine Hidden Messages",
        8: "Search for Physical Evidence",
        9: "Review Records and Statements",
        10: "Search for Physical Evidence",
        11: "Analyze Traces and Residue",
        12: "Examine Hidden Messages"
    };

    function investigate(action) {
        if (action === clueActions[clue.id]) {
            setShowClue(true);
        }
    }

    return (
        <>
            <section className="investigation-panel">
                <h2>Investigate Further</h2>

                <div className="investigation-actions">
                    {investigationActions.map((action) => (
                        <button
                            key={action}
                            type="button"
                            className="investigation-action-button"
                            onClick={() => investigate(action)}
                        >
                            [ {action} ]
                        </button>
                    ))}
                </div>
            </section>

            {showClue && (
                <div className="clue-popup-overlay">
                    <div className="clue-popup">
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
