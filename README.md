# CPAN212 Team Project - Murder Mystery Web Application
### Group 8

This repository contains the group project for CPAN-212: Modern Web Technologies. Our app is an interactive murder mystery game that uses real artwork and gallery data from the Art Institute of Chicago API.

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
4. Open a second terminal and navigate to the web folder, using cd web. 
5. Install front-end dependencies, if not already installed, using npm install.
6. cp .env.example .env.local(copy '.env.example' to '.env.local', if applicable)
7. Start the Next.js development server, using npm run dev
8. The front end will run on http://localhost:3000

---
## How to run the API
1. Make sure that Node.js 24 is installed, if it is not, install Node.js 24
2. Navigate to the `api` folder, using cd api.
3. Install dependencies, using npm install.
4. cp .env.example .env (copy '.env.example' to '.env') (optional)
5. Start the server in development mode, using npm run dev
6. The API will run on http://localhost:4000

---
## Environment variables
| Variables | Default | What it Controls |
|-----------|---------|------------------|
| PORT | 3000 | Port the next.js runs on |
| PORT | 4000 | Port the API runs on |

---
## AI Use
- Google Gemini was used as a learning resource to help understand and troubleshoot a CORS error encountered when accessing images from the Art Institute of Chicago API.

---
## Artist Credit
Thank you to Ladadori on itch.io for the character images. Here is the link: https://ladadori.itch.io/realistic-avatars-for-rpg

## Project Demonstration Videos
### Milestone 2 + Milestone 3 – Group Demonstration
[Watch Our Group Demonstration](https://youtu.be/blP9MYySZJs)

## Individual Walkthroughs for Milestone 3
| Group Member | Video |
|---|---|
| Eton Miller | [Watch Eton's Video](https://youtu.be/AaEaYFGnx9Y) |
| Stanley Nguyen | [Watch Stanley's Video](https://youtu.be/_XVgrGCgzz4) |
| Melissa Paredes | [Watch Melissa's Video](https://youtu.be/-mkyphbw4hY) |