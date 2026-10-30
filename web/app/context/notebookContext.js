"use client";

import { createContext, useContext, useState } from "react";

// Create the context that will be shared between pages
const NotebookContext = createContext(null);

// Function helps makes notebook state available to the app
export function NotebookProvider({ children }) {
    // Stores the clues the detective has saved.
    const [savedClues, setSavedClues] = useState([]);

    // Add a clue to the notebook
    const saveClue = (clue) => {
        setSavedClues((previousClues) => {
            // Prevent the same clue from being saved more than once
            const alreadySaved = previousClues.some(
                (savedClue) => savedClue.id === clue.id
            );

            if (alreadySaved) {
                return previousClues;
            }

            return [...previousClues, clue];
        });
    };

    // Remove a clue from the notebook using its ID
    const removeClue = (clueId) => {
        setSavedClues((previousClues) =>
            previousClues.filter((clue) => clue.id !== clueId)
        );
    };

    // Make the state and functions available to other components
    return (
        <NotebookContext.Provider
            value={{ savedClues, saveClue, removeClue }}
        >
            {children}
        </NotebookContext.Provider>
    );
}

// Custom hook for accessing the notebook context
export function useNotebook() {
    const context = useContext(NotebookContext);

    if (!context) {
        throw new Error("useNotebook must be used inside a NotebookProvider");
    }
    return context;
}