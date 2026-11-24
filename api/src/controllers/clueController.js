import { getArtwork } from "../services/artInstitute.js";
import { getArtworkImage } from "../services/artInstitute.js";
import Clue from "../models/Clue.js";
import Character from "../models/Character.js";

// Check if the clue ID is a valid positive integer //
function validId(id) {
    const number = Number(id);

    return Number.isSafeInteger(number) && number > 0;
}

// Handle MongoDB errors //
function clueError(res, error) {
    if (error.name === "ValidationError") {
        const details = [];

        for (const field in error.errors) {
            details.push({
                field: field,
                message: error.errors[field].message
            });
        }

        return res.status(400).json({
            error: {
                message: "Invalid clue data",
                details: details
            }
        });
    }

    if (error.name === "CastError") {
        return res.status(400).json({
            error: {
                message: "Invalid clue data",
                details: [{
                    field: error.path,
                    message: error.message
                }]
            }
        });
    }

    if (error.code === 11000) {
        return res.status(400).json({
            error: {
                message: "Clue ID already exists"
            }
        });
    }

    console.error(error.message);

    return res.status(500).json({
        error: { message: "Server error" }
    });
}

// Get all clues from MongoDB //
export async function getClues(req, res) {
    try {
        const clues = await Clue.find().sort({ id: 1 });

        res.json({
            count: clues.length,
            data: clues
        });
    } catch (error) {
        clueError(res, error);
    }
}

// Get one clue from MongoDB //
export async function getClueById(req, res) {
    try {
        const id = req.params.id;

        if (!validId(id)) {
            return res.status(404).json({
                error: { message: "Clue not found" }
            });
        }

        const clue = await Clue.findOne({
            id: Number(id)
        }).populate("character");

        if (!clue) {
            return res.status(404).json({
                error: { message: "Clue not found" }
            });
        }

        res.json(clue);
    } catch (error) {
        clueError(res, error);
    }
}

// Create a new clue in MongoDB //
export async function createClue(req, res) {
    try {
        if (!req.body || typeof req.body !== "object" ||
            Array.isArray(req.body)) {
            return res.status(400).json({
                error: { message: "Request body must be an object" }
            });
        }

        const character = await Character.findOne({
            characterID: req.body.linkedSuspectId
        });

        if (!character) {
            return res.status(400).json({
                error: {
                    message: "Invalid clue data",
                    details: [{
                        field: "linkedSuspectId",
                        message: "Character not found"
                    }]
                }
            });
        }


        const lastClue = await Clue.findOne().sort({ id: -1 });

        const newId = lastClue ? lastClue.id + 1 : 1;

        const clue = await Clue.create({
            ...req.body,
            id: newId
        });

        res.status(201).json(clue);
    } catch (error) {
        clueError(res, error);
    }
}

// Update an existing clue in MongoDB //
export async function updateClue(req, res) {
    try {
        const id = req.params.id;

        if (!validId(id)) {
            return res.status(404).json({
                error: { message: "Clue not found" }
            });
        }

        if (!req.body || typeof req.body !== "object" ||
            Array.isArray(req.body)) {
            return res.status(400).json({
                error: { message: "Request body must be an object" }
            });
        }

        const updates = { ...req.body };

        delete updates.id;
        delete updates._id;

        const clue = await Clue.findOneAndUpdate(
            { id: Number(id) },
            updates,
            {
                returnDocument: "after",
                runValidators: true
            }
        );

        if (!clue) {
            return res.status(404).json({
                error: { message: "Clue not found" }
            });
        }

        res.json(clue);
    } catch (error) {
        clueError(res, error);
    }
}

// Delete a clue from MongoDB //
export async function deleteClue(req, res) {
    try {
        const id = req.params.id;

        if (!validId(id)) {
            return res.status(404).json({
                error: { message: "Clue not found" }
            });
        }

        const clue = await Clue.findOneAndDelete({
            id: Number(id)
        });

        if (!clue) {
            return res.status(404).json({
                error: { message: "Clue not found" }
            });
        }

        res.json({
            message: "Clue deleted successfully",
            data: clue
        });
    } catch (error) {
        clueError(res, error);
    }
}

export async function getArtworkById(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            error: { message: "Invalid artwork ID" }
        });
    }

    try {
        const artwork = await getArtwork(id);
        const artworkData = artwork.data;

        if (artworkData.image_id && artwork.config?.iiif_url) {
            artworkData.image_url =
                artwork.config.iiif_url + "/" +
                artworkData.image_id +
                "/full/843,/0/default.jpg";
        }

        res.json(artworkData);
    } catch (error) {
        console.error(error);

        res.status(502).json({
            error: { message: "Could not load artwork from AIC" }
        });
    }
}

export async function getClueArtworkImage(req, res) {
    try {
        const imageId = req.params.imageId;

        if (imageId.length !== 36) {
            return res.status(400).json({
                error: { message: "Invalid image ID" }
            });
        }

        const response = await getArtworkImage(imageId);
        const image = Buffer.from(await response.arrayBuffer());

        res.set("Content-Type", "image/jpeg");
        res.send(image);

    } catch (error) {
        console.error(error.message);

        res.status(502).json({
            error: { message: "Could not load artwork image" }
        });
    }
}


