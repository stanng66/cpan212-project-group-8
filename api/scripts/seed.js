import mongoose from 'mongoose';
import { connectDb } from '../src/db.js';
import Character from "../src/models/Character.js";
import Clue from "../src/models/Clue.js";
import Notebook from "../src/models/Notebook.js";

// ====================
// Character data
// ====================
const sampleCharacters = [
    {
        characterID: 1,
        name: "Bastien Moreau",
        role: "Victim"
    },
    {
        characterID: 2,
        name:"Julian Croft",
        role: "Suspect"
    },
    {
        characterID: 3,
        name:"James Donavan",
        role: "Suspect"
    },
    {
        characterID: 4,
        name:"Arthur Boucher",
        role: "Suspect"
    },
    {
        characterID: 5,
        name:"Chloe Sterling",
        role: "Suspect"
    },
    {
        characterID: 6,
        name:"Dr. Elena Rostova",
        role: "Suspect"
    },
    {
        characterID: 7,
        name:"Marcus Brennan",
        role: "Suspect"
    }
];

await connectDb();
console.log("Seed script started.");  // temporary place holders

await Character.deleteMany({});
await Clue.deleteMany({});
await Notebook.deleteMany({});
const insertedCharacters = await Character.insertMany(sampleCharacters);
console.log("Inserted " + insertedCharacters.length + " characters");

// ====================
// Clues data
// ====================
const sampleClues = [
    {
        id: 1,
        title: "Fingerprint on the Ferry Ticket",
        forensicAction: "Search For Physical Evidence",
        description: "A ferry ticket is discovered behind the display frame. Its timestamp places its owner near the museum shortly before Bastien Moreau was last seen alive. A partial fingerprint is visible on the ticket, but it must be compared with other evidence before the owner can be identified.",
        footnote: "Look for something that hint at a vistor's arrival. Check whether any fingerprints could help indeitify who was there.",
        locationName: "Gallery 107",
        targetAICGalleryId: 2147480090,
        linkedArtworkId: 21533,
        linkedSuspectId: 3,
        character: insertedCharacters[1]._id,
        targetAICAPIMetadataField: "id,title,artist_display,style_title"
    },
    {
        id: 2,
        title: "Bird Code",
        forensicAction: "Examine Hidden Messages",
        description: "A hidden message contains a sequence of bird names. Decoding the sequence reveals the first password for a protected museum access log file. The file requires a second verification code before its contents can be viewed.",
        footnote: "Pay attention to the birds and written details. Could a sequence or pattern of names hide a message?",
        locationName: "Gallery 107",
        targetAICGalleryId: 2147480090,
        linkedArtworkId: 187515,
        linkedSuspectId: 7,
        character: insertedCharacters[6]._id,
        targetAICAPIMetadataField: "id,title,artist_display,inscriptions"
    },
    {
        id: 3,
        title: "Unusual Perfume Scent",
        forensicAction: "Analyze Traces and Residue",
        description: "A floral perfume scent is detected near the display. A witness reports that exhibition designer Chloe Sterling wore a similar scent earlier that evening. This makes Chloe worth investigating, but the scent alone cannot confirm that she was present during the murder.",
        footnote: "Consider the rainy night setting of the painting. Investigate whether an unusual scent could connect someone to the scene.",
        locationName: "Gallery 107",
        targetAICGalleryId: 2147480090,
        linkedArtworkId: 28997,
        linkedSuspectId: 5,
        character: insertedCharacters[4]._id,
        targetAICAPIMetadataField: "id,title,artist_display,medium_display"
    },
    {
        id: 4,
        title: "Acquisition Symbol",
        forensicAction: "Review Records and Statements",
        description: "A symbol found during the artwork inspection matches a marking on a suspicious acquisition document. The document relates to an acquisition handled by registrar Julian Croft. An internal note suggests that Bastien had questioned irregularities in the paperwork shortly before his death.",
        footnote: "Examine the different decorative details. Look for a symbol that might match one on a museum acquisition document.",
        locationName: "Gallery 143",
        targetAICGalleryId: 26131,
        linkedArtworkId: 40707,
        linkedSuspectId: 2,
        character: insertedCharacters[1]._id,
        targetAICAPIMetadataField: "id,title,artist_display,description,department_title"
    },
    {
        id: 5,
        title: "Conflicted Time",
        forensicAction: "Examine Hidden Messages",
        description: "A coded message reveals the time of a private meeting between Bastien Moreau and a member of museum staff. Julian Croft's initial statement places him elsewhere during that period. The meeting time must be checked against the access log and witness accounts before his statement can be judged inaccurate.",
        footnote: "Look closely at the written decoration and patterns. A coded message may reveal the time of a private meeting.",
        locationName: "Gallery 143",
        targetAICGalleryId: 26131,
        linkedArtworkId: 34351,
        linkedSuspectId: 3,
        character: insertedCharacters[1]._id,
        targetAICAPIMetadataField: "id,title,artist_display,description"
    },
    {
        id: 6,
        title: "Blue Paint Residue",
        forensicAction: "Analyze Traces and Residue",
        description: "A blue paint sample is recovered near the display. Its colour resembles paint listed among the materials used in the exhibition design area, where Chloe Sterling works. The sample does not identify who left it, so the exhibition schedule and staff access records must be checked.",
        footnote: "Notice the blue and turquoise decoration. Investigate a paint trace and compare its colour with materials used in the exhibition area.",
        locationName: "Gallery 143",
        targetAICGalleryId: 26131,
        linkedArtworkId: 6762,
        linkedSuspectId: 5,
        character: insertedCharacters[4]._id,
        targetAICAPIMetadataField: "id,title,artist_display,medium_display"
    },
    {
        id: 7,
        title: "Hidden Password",
        forensicAction: "Examine Hidden Messages",
        description: "A small note is found behind the display label. It contains the second verification code required to open the protected access log file. The log records an entry into a restricted area near the estimated time of Bastien's death, but the entry alone does not prove who committed the murder.",
        footnote: "Examine the figures and symbolic details. Search the display area for a hidden code that may unlock a restricted access log.",
        locationName: "Gallery 206",
        targetAICGalleryId: 2147483633,
        linkedArtworkId: 44741,
        linkedSuspectId: 7,
        character: insertedCharacters[6]._id,
        targetAICAPIMetadataField: "id,title,artist_display,description"
    },
    {
        id: 8,
        title: "Fingerprint Found On Key",
        forensicAction: "Search For Physical Evidence",
        description: "A key recovered near the crime scene carries a partial fingerprint. The fictional forensic comparison indicates that it may match the fingerprint on the ferry ticket from Clue 1. The key is assigned to an area managed by Facilities and Operations, but the sign-out record must be checked to determine who could have used it.",
        footnote: "Study the portrait and its details before examining the key evidence. A fingerprint comparison may connect the key to another clue.",
        locationName: "Gallery 206",
        targetAICGalleryId: 2147483633,
        linkedArtworkId: 4081,
        linkedSuspectId: 4,
        character: insertedCharacters[3]._id,
        targetAICAPIMetadataField: "id,title,artist_display,description"
    },
    {
        id: 9,
        title: "Conflicting Witness Statement",
        forensicAction: "Review Records and Statements",
        description: "A witness states that Bastien was seen in a particular gallery shortly before his death. However, the reported time conflicts with the private meeting described in Clue 5. The access log may help establish which movements are supported by the available records.",
        footnote: "Look at the many different people in the scene. Compare the witness's account with the timeline and other evidence as someone might not be truthful.",
        locationName: "Gallery 206",
        targetAICGalleryId: 2147483633,
        linkedArtworkId: 65509,
        linkedSuspectId: 2,
        character: insertedCharacters[1]._id,
        targetAICAPIMetadataField: "id,title,artist_display,description"
    },
    {
        id: 10,
        title: "The Snowy Footprint",
        forensicAction: "Analyze Traces and Residue",
        description: "A footprint near an entrance contains traces of salt and gravel, suggesting that someone may have entered from outside. The evidence is consistent with outdoor footwear in winter, but it cannot establish who made the print. The night-shift patrol log and entrance records may help narrow down when the person entered.",
        footnote: "Look at the snowy setting. Investigate a footprint for traces that might reveal where someone entered the museum.",
        locationName: "Gallery 272",
        targetAICGalleryId: 2147478068,
        linkedArtworkId: 109780,
        linkedSuspectId: 3,
        character: insertedCharacters[2]._id,
        targetAICAPIMetadataField: "id,title,artist_display,medium_display,description"
    },
    {
        id: 11,
        title: "Cleaning Chemical",
        forensicAction: "Analyze Traces and Residue",
        description: "A chemical trace is found near the display. It resembles a product listed in the museum's maintenance or conservation records. The player must check who signed out the product, whether its use was authorized, and whether the recorded time matches activity near the crime scene.",
        footnote: "Notice the restaurant setting and the people gathered there. Check the trace evidence for a chemical that might match museum cleaning or conservation supplies.",
        locationName: "Gallery 272",
        targetAICGalleryId: 2147478068,
        linkedArtworkId: 15401,
        linkedSuspectId: 4,
        character: insertedCharacters[3]._id,
        targetAICAPIMetadataField: "id,title,artist_display,medium_display"
    },
    {
        id: 12,
        title: "The Final Location Code",
        forensicAction: "Examine Hidden Messages",
        description: "The final code reveals a restricted location and a time window connected to Bastien's last known movements. The access log, key record, meeting note, witness statement, footprint report, and chemical sign-out record must now be compared. Identify the suspect whose movements and connection to the evidence best fit the timeline, and explain any evidence that appears to contradict the accusation.",
        footnote: "Examine the figures and symbolic details. Search the display area for a hidden code that may unlock a restricted access log.",
        locationName: "Gallery 272",
        targetAICGalleryId: 2147478068,
        linkedArtworkId: 118284,
        linkedSuspectId: 6,
        character: insertedCharacters[5]._id,
        targetAICAPIMetadataField: "id,title,artist_display,description"
    }
];

const insertedClues = await Clue.insertMany(sampleClues);
console.log("Inserted " + insertedClues.length + " clues");

// ====================
// Notebook data
// ====================
const sampleNotebookEntries = [
    {
        location: "Gallery 102",
        title: "Body Found",
        content: "Bloody footprints found moving away from Gallery 101, leading to the ticket booth at the entrance of the museum. The body was found at 3:21am by James Donavan, Night-Shift Security Supervisor."
    },
    {
        location: "Gallery 102",
        title: "Victim Details",
        content: "Bastien Moreau was stabbed to death with a restoration spatula. Victim's watch was damaged in attempts to run away from his attacker. Time of death revealed to be 1:47am."
    },
    {
        location: "Gallery 102",
        title: "Bloody Prints on the Security Keypad",
        content: "Bastien Moreau entered the security passcode on the keypad in the ticket booth and activated the emergency lockdown, sealing all exits and trapping the murderer inside the museum. Security footage from the cameras monitoring the exits showed no one leaving the premises around 1:47am. However, all cameras inside the museum had been disconnected, leaving investigators without footage of the galleries, hallways, or the crime scene itself."
    },
    {
        location: "Gallery 102",
        title: "Initial Suspects",
        content: "Six people were still inside the museum when police arrived. Each had access to the museum and may have had a reason to clash with Bastien Moreau."
    },
    {
        location: "Gallery 102",
        title: "Julian Croft Background",
        contet: "Recent internal flags were raised regarding unverified acquisition paperwork. Julian Croft has repeatedly clashed with Bastien Moreau over administrative authority boundaries."
    },
    {
        location: "Gallery 102",
        title: "Marcus Brennan Profile",
        contet: "Marcus Brennan manages digital archives and collection databases. He has extensive knowledge of security systems and was involved in disagreements with Bastien Moreau over missing documentation."
    }
];

const insertedNotebookEntries = await Notebook.insertMany(sampleNotebookEntries);
console.log("Inserted " + insertedNotebookEntries.length + " notebook entries");

// Close the connection, or the script never ends.
await mongoose.disconnect();