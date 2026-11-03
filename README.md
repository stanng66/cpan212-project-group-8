# CPAN212 Team Project - Murder Mystery Web Application
### Group 8

This repository contains the group project for CPAN-212: Modern Web Technologies. Our app is an interactive murdery mystery game that uses real artwork and gallery data from the Art Institute of Chicago API.

---
## Group Members
| Name | Github Username |
|------|-----------------|
| Eton Miller | @codenoob1738 |
| Melissa Paredes | @mparedes023 |
| Stanley Nguyen | @stanng66 |

---
## Project structure
```
cpan212-project-group-8
   api/
      src/
         bruno-tests/
         controllers/
         middleware/
         routes/
         services/
         utils/
         validators/
         server.js
      .env.example
      package-lock.json
      package.json
      README.md
   docs/
      wireframes/
      proposal.md
   web/
      app/
         characters/
         clues/
            [id]/
         components/
         gallery/
         login/
         notebook/
         register/
      context/
      public/
         assets/
            artworks/
            characterImages/
            map/
            fonts/
      .env.example
      .gitignore
      next.config.mjs
      package-lock.json
      package.json
      README.md
   .gitignore
   CONTRIBUTIONS.md
   README.md
```

---
## How to run the Frontend
1. Make sure Node.js 24 is installed
2. cd api (Navigate to the api folder in terminal)
3. Run npm run dev to start the API server. 
2. In second terminal, cd web (Navigate to the front-end folder)
2. npm install (Install front-emd dependencies, if not already installed)
3. cp .env.example .env.local(copy '.env.example' to '.env.local', if applicable)
5. npm run dev (Start the Next.js development server)
6. npm run build (Build the application for production, optional)
7. The front end should run on http://localhost:3000

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
| PORT | 3000 | Port the next.js runs on |
| PORT | 4000 | Port the API runs on |

---
## AI Use
- If you didn't use any: "No AI tools used."

- If used: list each AI tool used and what you used it for