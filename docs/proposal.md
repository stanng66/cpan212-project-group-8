# M1: Proposal and API design

---
## Problem and users
Fans of mystery and puzzle games rarely get interactive web games experience where they can investigate clues, interrogate suspects, and analyze real museum artwork to solve a murder. Most online web mystery games may feel static, predictable or disconnected from real-world data. Players want a more immersive experience where evidence, suspects, and alibis can be cross-checked against real museum information. 

This app is for puzzle enthusiasts, escape-room fans, and casual gamers who enjoy detective-style games and challenges. It also appeals to art lovers who want a unique way to explore real artwork and galleries from the Art Institute of Chicago. Users can browse artwork, collect evidence, track clues, evaluate suspects’ alibis, and potentially solve a muder using data they collect.

---
## MVP Features


---
## Future Features
1. Users can receive a score based on how quickly they solve the case and the suspect they chose
2. A signed-in user can view a list of suspects and compare their alibis and motives.
3. Users can have the choice to replay completed cases and choose a different suspect.
4. Users can explore alternate endings.


---
## External API


---
## Data model draft
The User resource will store the information for each detective account that was created. It will include an id as an integer, a detectiveUsername as a string, and a password as a string. All three fields will be required.

The Clue resource will store the different clues found by the players during their investigation. It will include an id as an integer, a title as a string, a description as a string, a type as a string and an artworkId as an integer. All of these three fields will also be required. The artworkId will be used to connect the clue to an artwork from the Art Institute of Chicago API.

The Notebook Entry resource will store notes and clues saved by users. It will include an id as an integer, a userId as an integer, a clueId as an integer, a text as a string, and a createdAt as a date. The id, userId, createdAt and text fields will be required while clueId can be optional as users can write a note that is not connected to a specific clue. 



---
## Endpoint list
| Method | Path | Function | Syccess Status Code | Error Status Codes |
|--------|------|----------|---------------------|--------------------|
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

---
## Wireframes


--
## Team roles
- Eton Miller: API Development and Database Management
- Melissa Paredes: 
- Stanley Nguyen: Repo & Pull Requests lead
