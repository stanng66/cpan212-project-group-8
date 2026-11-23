import mongoose from "mongoose";
import Notebook from "../models/Notebook.js";

const SORT_FIELDS = ["createdAt", "updatedAt", "title"];
const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 50;

function validObjectId(id) {
    return mongoose.isObjectIdOrHexString(id);
}

function positiveInteger(value, fallback) {
    const parsedValue = Number.parseInt(value, 10);

    return Number.isInteger(parsedValue) && parsedValue > 0
        ? parsedValue
        : fallback;
}

function escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function handleNotebookError(res, error) {
    if (error.name === "ValidationError") {
        const details = Object.values(error.errors).map((fieldError) => ({
            field: fieldError.path,
            message: fieldError.message
        }));

        return res.status(400).json({
            error: {
                message: "Invalid notebook entry.",
                details
            }
        });
    }

    if (error.name === "CastError") {
        return res.status(400).json({
            error: {
                message: "Invalid notebook entry data.",
                details: [{
                    field: error.path,
                    message: error.message
                }]
            }
        });
    }

    console.error("Notebook API error:", error);

    return res.status(500).json({
        error: {
            message: "An unexpected error occurred while processing the notebook request."
        }
    });
}

// create a notebook entry in MongoDB
export async function createNotebookEntry(req, res) {
    try {
        const { title, location, content } = req.body;

        const notebookEntry = await Notebook.create({
            title,
            location,
            content
        });

        return res.status(201).json(notebookEntry);
    } catch (error) {
        return handleNotebookError(res, error);
    }
}

// get notebook entries with optional filtering, sorting, and pagination.
export async function getNotebookEntries(req, res) {
    try {
        const search = typeof req.query.search === "string"
            ? req.query.search.trim().slice(0, 100)
            : "";
        const location = typeof req.query.location === "string"
            ? req.query.location.trim()
            : "";
        const requestedSort = req.query.sortBy;
        const sortBy = SORT_FIELDS.includes(requestedSort)
            ? requestedSort
            : "createdAt";
        const order = req.query.order === "asc" ? 1 : -1;
        const page = positiveInteger(req.query.page, 1);
        const limit = Math.min(
            positiveInteger(req.query.limit, DEFAULT_LIMIT),
            MAX_LIMIT
        );

        const filter = {};

        if (location && location !== "all") {
            filter.location = location;
        }

        if (search) {
            const searchRegex = new RegExp(escapeRegex(search), "i");
            filter.$or = [
                { title: searchRegex },
                { content: searchRegex }
            ];
        }

        const [entries, totalItems] = await Promise.all([
            Notebook.find(filter)
                .sort({ [sortBy]: order, _id: order })
                .skip((page - 1) * limit)
                .limit(limit),
            Notebook.countDocuments(filter)
        ]);

        const totalPages = Math.max(1, Math.ceil(totalItems / limit));

        return res.status(200).json({
            data: entries,
            count: totalItems,
            pagination: {
                page,
                limit,
                totalItems,
                totalPages,
                hasPreviousPage: page > 1,
                hasNextPage: page < totalPages
            },
            filters: {
                search,
                location,
                sortBy,
                order: order === 1 ? "asc" : "desc"
            }
        });
    } catch (error) {
        return handleNotebookError(res, error);
    }
}

// get one notebook entry by its MongoDB ID
export async function getNotebookEntryById(req, res) {
    try {
        const { id } = req.params;

        if (!validObjectId(id)) {
            return res.status(404).json({
                error: { message: "Notebook entry not found." }
            });
        }
        const notebookEntry = await Notebook.findById(id);



        if (!notebookEntry) {
            return res.status(404).json({
                error: { message: "Notebook entry not found." }
            });
        }



        return res.status(200).json(notebookEntry);
    } catch (error) {
        return handleNotebookError(res, error);
    }
}

// update an existing notebook entry
export async function updateNotebookEntry(req, res) {

    try {


        const { id } = req.params;

        if (!validObjectId(id)) {
            return res.status(404).json({
                error: { message: "Notebook entry not found." }
            });
        }

        const { title, location, content } = req.body;

        const notebookEntry = await Notebook.findByIdAndUpdate(
            id,
            { title, location, content },
            {
                returnDocument: "after",
                runValidators: true
            }
        );



        if (!notebookEntry) {
            return res.status(404).json({
                error: { message: "Notebook entry not found." }
            });
        }

        return res.status(200).json(notebookEntry);
    } catch (error) {
        return handleNotebookError(res, error);
    }
}

// delete a notebook entry


export async function deleteNotebookEntry(req, res) {
    try {
        const { id } = req.params;

        if (!validObjectId(id)) {
            return res.status(404).json({
                error: { message: "Notebook entry not found." }
            });
        }

        const notebookEntry = await Notebook.findByIdAndDelete(id);

        if (!notebookEntry) {
            return res.status(404).json({
                error: { message: "Notebook entry not found." }
            });
        }

        return res.status(204).send();
    } catch (error) {
        return handleNotebookError(res, error);
    }
}

// // in memory array that stores notebook entries
// const notebookEntries=[
//     {
//         id:randomUUID(),
//         location: "Gallery 102",
//         title: "Body Found",
//         content:"Bloody footprints found moving away from Gallery 101, leading to the ticket booth at the entrance of the museum. The body was found at 3:21am by James Donavan, Night-Shift Security Supervisor."
//     }, 
//     {
//         id:randomUUID(),
//         location: "Gallery 102",
//         title: "Victim Details",
//         content:"Bastien Moreau was stabbed to death with a restoration spatula. Victim's watch was damaged in attempts to run away from his attacker. Time of death revealed to be 1:47am."
//     }, 
//     {
//         id:randomUUID(),
//         location: "Gallery 102",
//         title: "Bloody Prints on the Security Keypad",
//         content: "Bastien Moreau entered the security passcode on the keypad in the ticket booth and activated the emergency lockdown, sealing all exits and trapping the murderer inside the museum. Security footage from the cameras monitoring the exits showed no one leaving the premises around 1:47am. However, all cameras inside the museum had been disconnected, leaving investigators without footage of the galleries, hallways, or the crime scene itself.",
//     }, 
//     {
//         id: randomUUID(),
//         location: "Gallery 102",
//         title: "Initial Suspects",
//         content: `Six people were still inside the museum when police arrived. Each had access to the museum and may have had a reason to clash with Bastien Moreau.

//     1. Julian Croft, Head Museum Registrar: Responsible for managing the museum's collection records and acquisitions.
//     2. James Donavan, Night-Shift Security Supervisor: Discovered the body at 3:21 AM and was responsible for overnight security.
//     3. Arthur Boucher, Director of Facilities & Operations: Oversaw the museum's building operations, maintenance, and facilities.
//     4. Chloe Sterling, Lead Exhibition Designer: Managed exhibition layouts and worked closely with the museum's curatorial team.
//     5. Dr. Elena Rostova, Chief Paintings Conservator: Oversaw the preservation and restoration of the museum's paintings.
//     6. Marcus Brennan, Senior Art Preparator: Handled artwork preparation and installation, giving him access to galleries and exhibition spaces.

//     The victim, Bastien, was known for his strict standards and blunt criticism, which often caused tension with staff. Investigators must examine each suspect's alibi, access to the crime scene, and relationship with the victim. One of these six people is responsible for his death.`
//     },
// ];

// // creating the notebook entry with the title + content from the request body
// function createNotebookEntry(req,res){

//     const title=req.body.title;
//     const content=req.body.content;
//     const location = req.body.location;
//     // notebook entry object with unique Ids for each one
//     const notebookEntry={
//         id:randomUUID(),
//         location,
//         title,
//         content
//     };
//     notebookEntries.push(notebookEntry);

//     // 201 response success message, notebook entry is created
//     res.status(201).json(notebookEntry);
// }

// function getNotebookEntries(req,res){
//     res.json(notebookEntries);  
// }

// // get a notebook entry by its unique id
// function getNotebookEntryById(req, res) {
//     const id = req.params.id;
//     const notebookEntry = notebookEntries.find(
//         entry => entry.id === id
//     );

//     if (!notebookEntry) {
//         return res.status(404).json({
//             error: {
//                 message: "Notebook entry not found."
//             }
//         });
//     }

//     res.status(200).json(notebookEntry);
// }


// // update notebook by posting a notebook entry
// function updateNotebookEntry(req, res) {
//     const id = req.params.id;
//     const location = req.body.location;

//     const notebookEntry = notebookEntries.find(
//         entry => entry.id === id
//     );

//     // return 404 if the notebook entry does not exist
//     if (!notebookEntry) {
//         return res.status(404).json({
//             error: {
//                 message: "Notebook entry not found."
//             }
//         });
//     }

//     notebookEntry.title = req.body.title;
//     notebookEntry.content = req.body.content;
//     notebookEntry.location = location;
//     res.status(200).json(notebookEntry);
// }

// // delete a notebook entry
// function deleteNotebookEntry(req, res) {
//     const id = req.params.id;

//     // find the position of the entry in the array
//     const index = notebookEntries.findIndex(
//         entry => entry.id === id
//     );

//     // return 404 if the entry does not exist
//     if (index === -1) {
//         return res.status(404).json({
//             error: {
//                 message: "Notebook entry not found."
//             }
//         });
//     }

//     // remove the entry from the in memory array
//     notebookEntries.splice(index, 1);

//     // 204=the entry was deleted successfully 
//     res.status(204).send();
// }

// export {createNotebookEntry, getNotebookEntries, getNotebookEntryById, updateNotebookEntry, deleteNotebookEntry};