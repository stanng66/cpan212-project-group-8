# Contributions
Each member lists the items they worked on, and the pull requests or commits that show it.

## M1
### Melissa Paredes ( @mparedes023 )
- Item 2: Worked on the MVP Features section
- Item 3: Worked on the External API information 
- Item 5: Worked on the endpoint table list for the external API from the Art Institute of Chicago, Clues API, and Notebook API
- Item 7: Added my role to the Team Roles section
- Item 6: Created the wireframes for the homepage, login container, signup container, clue details card, notebook entry card, accusation card, notebook, and galleries map

Pull request #5 and merge pull request #3.

### Eton Miller ( @codenoob1738 )
- Item 2 and 4: Worked on the Future Features and Data model draft section in docs/proposal.md
- Item 7: Updated the Team Roles section with my assigned role

Pull request #4 and merge pull request #1.

### Stanley Nguyen ( @stanng66 )
- Item 1: Wrote the Problem and Users section in docs/proposal.md
- Item 7: Added my role to the Team roles section
- Item 10: Helped set up the repo and repo structure for the group

Pull request #1 and pull request #3.

---
## M2
### Melissa Paredes ( @mparedes023 )
- Item 1: Updated server.js to import and register the notebook routes
- Item 2: Created the notebook controller with initial notebook entries containing randomly generated IDs for each notebook entry, a function to create notebook entries, and a function to retrieve all notebook entries
- Item 3: Created notebookRoutes.js using express.Router() and connected the GET and POST routes to the notebook controller.
- Item 4: Created notebookValidator.js to validate notebook entry titles and content, rejecting missing, non-string, or whitespace-only values and giving a 400 error in response
- Item 9: contributed to CONTRIBUTIONS.md with my contributions

Pull Requests #11, #13 and merge pull request #12

### Eton Miller ( @codenoob1738 )
- Item 2: Created the clue controller with 12 clues and GET handlers to retrieve all clues and individual clues by ID, and created the clue routes.
- Item 3: Created clueRoutes.js using express.Router() and connected it to the clue controller.
- Item 7: Created artInstitute.js to connect to the Art Institute of Chicago API, retrieve artwork information, and handle request timeouts and in-memory caching.
- Item 1: Updated server.js to register the clue routes under /api/clues.
- Item 9: contributed to CONTRIBUTIONS.md with my contributions 

Pull Requests #8, #10, #14, #17, #21 
Merge pull request #16, #20, #23, #24

### Stanley Nguyen ( @stanng66 )
- Item 1: Worked on Node 24 project setup with package.json, .nvmrc, .env.example and contribute to server.js. 
- Item 5: Created errorHandler.js, notFound.js and httpError.js to handle errors and requests
- Item 8: Wrote some curl test commands in the api/README.md
- Item 9: contributed to CONTRIBUTIONS.md with my contributions, and the api/README.MD with steps for how to run the API and add the port 4000 in the environment variables.  

Pull Requests #9, #12, #16, #19, #20, #23  
Merged pull request #10, #11, #13, #14, #17, #18, #22, #25

---
## M3
### Melissa Paredes ( @mparedes023 )
- Item 2: Created the Notebook listing page, allowing users to view and edit existing notebook entries and navigate to individual entries and the create page.
- Item 2: Created the Character Profiles component, displaying all seven museum characters with selectable profile images, employee information, education and character notes.
- Item 2: Created the Accusation Page component, displaying employee badges where the user can select from a grid who they believe the murderer is and lock in their answer using the 'accuse' button.
- Items 3 and 4: Connected the Notebook listing page to the Express API using the /api/notebook endpoint to retrieve notebook entries through the frontend API rewrite.
- Item 5: Create and edit forms for the notebook component. Users can create an entry and once it is saved, they can edit it using the edit form.
- Item 6: Added loading and error states to the Notebook listing page to handle API requests and failed responses.
- Item 9: Updated CONTRIBUTIONS.md to describe my M3 contributions.

Pull Requests: *36, #40, #42, #45, #51
Merged Pull Requests: #31, #35, #43, #44, #50

### Eton Miller ( @codenoob1738 )
- Item 2: Created the Clues listing page and clue details page, allowing users to view all clues and investigate individual clues by ID. Added navigation between clues, gallery location indicators and links to the Clues and Notebook pages.
- Items 3 and 4: Connected the Next.js frontend to the Express API using the API_ORIGIN environment variable to retrieve clue information.
- Item 6: Added loading states using React Suspense, error handling for failed API requests, empty-state messages, and not-found.js page for invalid clue IDs.
- Item 7: Created investigationDashboard.js to display forensic investigation actions and save discovered clues using the shared investigation context.
- Item 8: Created artworkDetails.js to retrieve and display Art Institute of Chicago artwork information through the Express API, including artwork titles, artists, dates, mediums, and investigation footnotes.
Item 9: Updated CONTRIBUTIONS.md to document my M3 contributions.

Pull Requests #33, #35, #38, #39
Merged pull requests #32, #34, #36, #37, #41, #42

### Stanley Nguyen ( @stanng66 )
- Item 1: Setup the Next.js project using week 6 the create-next-app command. Plus files and folder structure for web/ folder.
- Item 2: Work on Homepage, header and navigation, login and register page, and gallery page. 
- Item 4: Rewrote the next.config.mjs and web/.env.example
- Item 7: Worked on shared state in the context/investigationContext.js and a README.md  explaining context and components
- Item 9: Wrote my contribtution in the CONTRIBUTIONS.md, and the "how to run" steps for both frontend and api in the root README.md

Pull Request #31, #32, #34, #37, #41  
Merged pull request #33, #38, #39, #40

--- 
## M4


--- 
## M5


---
## M6
