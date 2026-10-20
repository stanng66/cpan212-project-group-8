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
## environment variables
| Variables | Default | What it Controls |
|-----------|---------|------------------|
| PORT | 4000 | Port the API runs on |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

---
## Table of endpoints
| Method | Path | Description |
|--------|------|-------------|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

---
## Testing
Use curl commands listed below to test each endpoint.  
On Windows, run these in Git Bash.  

1. List all notebooks (GET /api/notebook)  
   curl -X GET http://localhost:4000/api/notebook  
   Expected status response: 200

2. Get one notebook by ID (GET /api/notebook/:id)  
   curl -X GET http://localhost:4000/api/notebook/<valid-id>  
   Expected status response: 200

3. Get a notebook that does NOT exist (404)  
   curl -X GET http://localhost:4000/api/notebook/does-not-exist  
   Expected status response: 404

4. Fails validation (Missing fields)  
   curl -X POST http://localhost:4000/api/notebook \  
   -H "Content-Type: application/json" \  
   -d '{}'  
   Expected status response: 400

5. ails validation (White space)  
   curl -X POST http://localhost:4000/api/notebook \  
   -H "Content-Type: application/json" \  
   -d '{"title":"   ","content":"   "}'  
   Expected status response: 400