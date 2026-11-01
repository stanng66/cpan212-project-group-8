"use client";

import { createContext, useContext, useState } from "react";

// Create the context that will be shared between pages
const InvestigationContext = createContext(null);

// Function provides shared investigation state to the application
export function InvestigationProvider({ children }) {
    // Stores the clues the detective has saved.
    const [savedClues, setSavedClues] = useState([]);

    // Save a clue for later review in the notebook
    const saveClue = (clue) => {
        setSavedClues((previousClues) => {
            // Prevent the same clue from being saved more than once
            const alreadySaved = previousClues.some(
                (savedClue) => savedClue.id === clue.id || savedClue.title === clue.title
            );

            if (alreadySaved) {
                return previousClues;
            }

            return [...previousClues, clue];
        });
    };

    const isClueSaved = (clueId) => {
        return savedClues.some(
            (clue) => clue.id === clueId
        );
    };

    // Remove a clue from the notebook using its ID
    const removeClue = (clueId) => {
        setSavedClues((previousClues) =>
            previousClues.filter((clue) => clue.id !== clueId)
        );
    };

    const savedClueCount = savedClues.length;

    // Make the state and functions available to other components
    return (
        <InvestigationContext.Provider
            value={{ savedClues, savedClueCount, saveClue, removeClue, isClueSaved }}
        >
            {children}
        </InvestigationContext.Provider>
    );
}

// Custom hook for accessing the investigation context
export function useInvestigation() {
    const context = useContext(InvestigationContext);

    if (!context) {
        throw new Error("useInvestigation must be used inside an InvestigationProvider");
    }
    return context;
}