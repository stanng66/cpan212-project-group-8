# Context Folder 
## Shared State
---
This project uses React Context API to manage shared state across multiple pages. Implemented a NotebookContext.js to store the clues saved by the detective during the investigation. 

The shared state is used by the Clues page and the Notebook page. When a user saves a clue on the Clues page, it becomes available immediately on the Notebook page without needing to pass props between pages.

The context is accessed through the useNotebook() custom hook and provides the following functionality:
- savedClues: Stores the clues saved by the user.
- saveClue(): Adds a clue to the notebook.
- removeClue(): Removes a clue from the notebook.