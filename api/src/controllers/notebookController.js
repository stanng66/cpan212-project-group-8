import {randomUUID} from "node:crypto";

// in memory array that stores notebook entries
const notebookEntries=[
    {
        id:randomUUID(),
        title: "Body Found",
        content:"Bloody footprints found moving away from Gallery 101, leading to the ticket booth at the entrance of the museum. The body was found at 3:21am by James Donavan, Night-Shift Security Supervisor."
    }, 
    {
        id:randomUUID(),
        title: "Victim Details",
        content:"Bastien Moreau was stabbed to death with a restoration spatula. Victim's watch was damaged in attempts to run away from his attacker. Time of death revealed to be 1:47am."
    }, 
    {
        id:randomUUID(),
        title: "Bloody Prints on the Security Keypad",
        content: "Bastien Moreau entered the security passcode on the keypad in the ticket booth and activated the emergency lockdown, sealing all exits and trapping the murderer inside the museum. Security footage from the cameras monitoring the exits showed no one leaving the premises around 1:47am. However, all cameras inside the museum had been disconnected, leaving investigators without footage of the galleries, hallways, or the crime scene itself.",
    }, 
    {
        id: randomUUID(),
        title: "Initial Suspects",
        content: `Six people were still inside the museum when police arrived. Each had access to the museum and may have had a reason to clash with Bastien Moreau.

    - **Julian Croft**, Head Museum Registrar: Responsible for managing the museum's collection records and acquisitions.
    - **James Donavan**, Night-Shift Security Supervisor: Discovered the body at 3:21 AM and was responsible for overnight security.
    - **Arthur Boucher**, Director of Facilities & Operations: Oversaw the museum's building operations, maintenance, and facilities.
    - **Chloe Sterling**, Lead Exhibition Designer: Managed exhibition layouts and worked closely with the museum's curatorial team.
    - **Dr. Elena Rostova**, Chief Paintings Conservator: Oversaw the preservation and restoration of the museum's paintings.
    - **Marcus Brennan**, Senior Art Preparator: Handled artwork preparation and installation, giving him access to galleries and exhibition spaces.

    The victim, Bastien, was known for his strict standards and blunt criticism, which often caused tension with staff. Investigators must examine each suspect's alibi, access to the crime scene, and relationship with the victim. One of these six people is responsible for his death.`
    },
];

// creating the notebook entry with the title + content from the request body
function createNotebookEntry(req,res){

    const title=req.body.title;
    const content=req.body.content;

    // notebook entry object with unique Ids for each one
    const notebookEntry={
        id:randomUUID(),
        title,
        content
    };
    notebookEntries.push(notebookEntry);

    // 201 response success message, notebook entry is created
    res.status(201).json(notebookEntry);
}

function getNotebookEntries(req,res){
    res.json(notebookEntries);  
}

// get a notebook entry by its unique id
function getNotebookEntryById(req, res) {
    const id = req.params.id;

    const notebookEntry = notebookEntries.find(
        entry => entry.id === id
    );

    if (!notebookEntry) {
        return res.status(404).json({
            error: {
                message: "Notebook entry not found."
            }
        });
    }

    res.status(200).json(notebookEntry);
}


// update notebook by posting a notebook entry
function updateNotebookEntry(req, res) {
    const id = req.params.id;

    const notebookEntry = notebookEntries.find(
        entry => entry.id === id
    );

    // return 404 if the notebook entry does not exist
    if (!notebookEntry) {
        return res.status(404).json({
            error: {
                message: "Notebook entry not found."
            }
        });
    }

    notebookEntry.title = req.body.title;
    notebookEntry.content = req.body.content;

    res.status(200).json(notebookEntry);
}

// delete a notebook entry
function deleteNotebookEntry(req, res) {
    const id = req.params.id;

    // find the position of the entry in the array
    const index = notebookEntries.findIndex(
        entry => entry.id === id
    );

    // return 404 if the entry does not exist
    if (index === -1) {
        return res.status(404).json({
            error: {
                message: "Notebook entry not found."
            }
        });
    }

    // remove the entry from the in memory array
    notebookEntries.splice(index, 1);

    // 204=the entry was deleted successfully 
    res.status(204).send();
}

export {createNotebookEntry, getNotebookEntries, getNotebookEntryById, updateNotebookEntry, deleteNotebookEntry};