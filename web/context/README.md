# Context Folder 
## Shared State
---
This project uses React Context API to manage shared state across multiple pages. Implemented investigationContext.js to store the clues saved by the detective during the investigation. 

The shared state is intended to be used by both the Clues page and the Notebook page. When a user saves a clue from the Clues section, it becomes available immediately available throughout the application without prop drilling.

The context is accessed through the useInvestigation() custom hook and provides the following functionality:
- savedClues: Stores the clues saved by the player
- savedClueCount: Tracks the number of saved clues
- saveClue(): Adds a clue to the investigation
- removeClue(): Removes a saved clue
- isClueSaved(): Checks whether a clue has already been saved