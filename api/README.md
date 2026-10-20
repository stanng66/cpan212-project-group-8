# API folder for CPAN212 Group 8

---
## How to run the API
1. Install Node.js 24
2. npm install (Install dependencies)
3. cp .env.example .env (copy '.env.example' to '.env') (optional)
4. npm run dev (Start the server in development mode)
5. npm start (If you want to run the program regularly)
6. The API should run on http://localhost:4000

---
## Environment variables
| Variables | Default | What it Controls |
|-----------|---------|------------------|
| PORT | 4000 | Port the API runs on |
| baseURL | https://api.artic.edu/api/v1 | URL for the Art Institute of Chicago API endpoints |
| timeoutMS | 5000 | Sets how long to wait for an API response before timing out |
| cache_TTL_MS | 300000 | Sets how long retrieved artwork data stays in local cache memory (5 minutes) |


---
## Table of endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | /api/notebook | Retrieves all notebook entries. |
| GET | /api/notebook/:id | Retrieves a specific notebook entry by ID. |
| POST | /api/notebook | Creates a new notebook entry. |
| PUT | /api/notebook/:id | Updates an existing notebook entry.|
| DELETE | /api/notebook/:id | Deletes a notebook entry by its ID. |
| GET | /api/clues | Retrieves all clues. |
| GET | /api/clues/:id | Retrieves a specific clue by ID. |
| POST | /api/clues | Creates a new clue. |
| PUT | /api/clues/:id | Updates an existing clue. |
| DELETE | /api/clues/:id | Deletes a clue by its ID. |

---
## Testing
Use curl commands listed below to test each endpoint.  
On Windows, run these in Git Bash.  

```bash
#1. List all notebooks (GET /api/notebook)  
   curl -X GET http://localhost:4000/api/notebook  
   Expected status response: 200
```

```bash
#2. Get one notebook by ID (GET /api/notebook/:id)  
   curl -X GET http://localhost:4000/api/notebook/paste-uuid-here
   Expected status response: 200
```

```bash
#3. Get a notebook that does NOT exist (404)  
   curl -X GET http://localhost:4000/api/notebook/does-not-exist  
   Expected status response: 404
```

```bash
#4. Fails validation (Missing fields)  
   curl -X POST http://localhost:4000/api/notebook \  
   -H "Content-Type: application/json" \  
   -d '{}'  
   Expected status response: 400
```

```bash
#5. Fails validation (White space)  
curl -i -X POST http://localhost:4000/api/notebook \
  -H "Content-Type: application/json" \
  -d '{"title":" ","content":" "}'
   Expected status response: 400
```

```bash
#6. #List all clues (GET /api/clues)
   curl -X GET http://localhost:4000/api/clues
   Expected status response: 200
```

```bash
#7. Get one clue by ID (GET /api/clues/:id)
   curl -X GET http://localhost:4000/api/clues/1
   Expected status response: 200

```bash
#8. Get a clue that does NOT exist (404)
   curl -X GET http://localhost:4000/api/clues/9999
   Expected status response: 404
```
```bash
#9. curl -X POST http://localhost:4000/api/clues /
   -H "Content-Type: application/json" \
-d '{
  "title": "Paint Sample Evidence",
  "forensicAction": "Examine paint",
  "description": "A paint sample is found near the crime scene.",
  "footnote": "Check the painting for unusual details.",
  "locationName": "Gallery 107",
  "targetAICGalleryId": 2147480090,
  "linkedArtworkId": 21533,
  "linkedSuspectId": 1,
  "targetAICAPIMetadataField": "title"
}'
  Expected status response: 201
```
```bash
#10. Fails verification (Missing fields)
    curl -X POST http://localhost:4000/api/clues \
-H "Content-Type: application/json" \
-d '{}'
    Expected status response: 400
```

```bash
#11. Update a clue (PUT /api/clues/:id)
     curl -X PUT http://localhost:4000/api/clues/1 \
-H "Content-Type: application/json" \
-d '{
  "title": "Updated Clue Title",
  "forensicAction": "Examine paint",
  "description": "The paint sample may connect a suspect to the crime scene.",
  "footnote": "Compare the sample with the painting.",
  "locationName": "Gallery 107",
  "targetAICGalleryId": 2147480090,
  "linkedArtworkId": 21533,
  "linkedSuspectId": 1,
  "targetAICAPIMetadataField": "title"
}'
   Expected status response: 200
```

```bash
#12. Delete a clue (DELETE /api/clues/:id)
    curl -X DELETE http://localhost:4000/api/clues/13
    Expected status response: 200
```

```bash
#13. Delete a notebook entry (DELETE /api/notebook/:id)
    curl -X DELETE http://localhost:4000/api/notebook/paste-UUID-here
    Expected status response: 204
```

```bash
#14. Create a notebook entry (POST /api/notebook)
curl -i -X POST http://localhost:4000/api/notebook \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Entry","content":"Testing notebook creation."}'
  Expected status response: 201
```

```bash
#15. Update a notebook entry (PUT /api/notebook/:id)
curl -i -X PUT http://localhost:4000/api/notebook/PASTE-ACTUAL-UUID-HERE \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Entry","content":"Testing notebook updates."}'
  Expected status response: 200
```

```bash
#16. Update a notebook entry that does NOT exist (PUT /api/notebook/:id)
curl -i -X PUT http://localhost:4000/api/notebook/does-not-exist \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Entry","content":"Updated content."}'
  Expected status response: 404
```

```bash
#17. Delete a notebook entry that does NOT exist (DELETE /api/notebook/:id)
curl -i -X DELETE http://localhost:4000/api/notebook/does-not-exist

Expected status response: 404
```