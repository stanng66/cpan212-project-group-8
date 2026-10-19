const clues = [
    {
        id: 1,
        title: "Fingerprint on the Ferry Ticket",
        forensicAction: "Search for fingerprints",
        description: "A ferry ticket is discovered behind the display frame. Its timestamp places its owner near the museum shortly before Bastien Moreau was last seen alive. A partial fingerprint is visible on the ticket, but it must be compared with other evidence before the owner can be identified.",
        footnote: "Look for something that hint at a visitor's arrival. Check whether any fingerprints could help indeitify who was there.",
        locationName: "Gallery 107",
        targetAICGalleryId: 2147480090,
        linkedArtworkId: 21533,
        linkedSuspectId: 3,
        targetAICAPIMetadataField: "id,title,artist_display,style_title",
    },
    {
        id: 2,
        title: "Bird Code",
        forensicAction: "Search for hidden writing",
        description: "A hidden message contains a sequence of bird names. Decoding the sequence reveals the first password for a protected museum access log file. The file requires a second verification code before its contents can be viewed.",
        footnote: "Pay attention to the birds and written details. Could a sequence or pattern of names hide a message?",
        targetAICGalleryId: 2147480090,
        linkedArtworkId: 187515,
        linkedSuspectId: 7,
        targetAICAPIMetadataField: "id,title,artist_display,inscriptions",
    },
    {
        id: 3,
        title: "Unusual Perfume Scent",
        forensicAction: "Check for scent",
        description: "A floral perfume scent is detected near the display. A witness reports that exhibition designer Chloe Sterling wore a similar scent earlier that evening. This makes Chloe worth investigating, but the scent alone cannot confirm that she was present during the murder.",
        footnote: "Consider the rainy night setting of the painting. Investigate whether an unusual scent could connect someone to the scene.",
        locationName: "Gallery 107",
        targetAICGalleryId: 2147480090,
        linkedArtworkId: 28997,
        linkedSuspectId: 5,
        targetAICAPIMetadataField: "id,title,artist_display,medium_display",
    },
    {
        id: 4,
        title: "Acquisition Symbol",
        forensicAction: "Inspect work details",
        description: "A symbol found during the artwork inspection matches a marking on a suspicious acquisition document. The document relates to an acquisition handled by registrar Julian Croft. An internal note suggests that Bastien had questioned irregularities in the paperwork shortly before his death.",
        footnote: "Examine the different decorative details. Look for a symbol that might match one on a museum acquisition document.",
        locationName: "Gallery 143",
        targetAICGalleryId: 26131,
        linkedArtworkId: 40707,
        linkedSuspectId: 2,
        targetAICAPIMetadataField: "id,title,artist_display,description,department_title",
    },
    {
        id: 5,
        title: "Conflicted Time",
        forensicAction: "Decode a message",
        description: "A coded message reveals the time of a private meeting between Bastien Moreau and a member of museum staff. Julian Croft's initial statement places him elsewhere during that period. The meeting time must be checked against the access log and witness accounts before his statement can be judged inaccurate.",
        footnote: "Look closely at the written decoration and patterns. A coded message may reveal the time of a private meeting.",
        locationName: "Gallery 143",
        targetAICGalleryId: 26131,
        linkedArtworkId: 34351,
        linkedSuspectId: 3,
        targetAICAPIMetadataField: "id,title,artist_display,description",
    },
    {
        id: 6,
        title: "Blue Paint Residue",
        forensicAction: "Analyze paint residue",
        description: "A blue paint sample is recovered near the display. Its colour resembles paint listed among the materials used in the exhibition design area, where Chloe Sterling works. The sample does not identify who left it, so the exhibition schedule and staff access records must be checked.",
        footnote: "Notice the blue and turquoise decoration. Investigate a paint trace and compare its colour with materials used in the exhibition area.",
        locationName: "Gallery 143",
        targetAICGalleryId: 26131,
        linkedArtworkId: 6762,
        linkedSuspectId: 5,
        targetAICAPIMetadataField: "id,title,artist_display,medium_display",
    },
    {
        id: 7,
        title: "Hidden Password",
        forensicAction: "Inspect the display area",
        description: "A small note is found behind the display label. It contains the second verification code required to open the protected access log file. The log records an entry into a restricted area near the estimated time of Bastien's death, but the entry alone does not prove who committed the murder.",
        footnote: "Examine the figures and symbolic details. Search the display area for a hidden code that may unlock a restricted access log.",
        locationName: "Gallery 206",
        targetAICGalleryId: 2147483633,
        linkedArtworkId: 44741,
        linkedSuspectId: 7,
        targetAICAPIMetadataField: "id,title,artist_display,description",
    },
    {
        id: 8,
        title: "Fingerprint Found On Key",
        forensicAction: "Search for fingerprints",
        description: "A key recovered near the crime scene carries a partial fingerprint. The fictional forensic comparison indicates that it may match the fingerprint on the ferry ticket from Clue 1. The key is assigned to an area managed by Facilities and Operations, but the sign out record must be checked to determine who could have used it.",
        footnote: "Study the portrait and its details before examining the key evidence. A fingerprint comparison may connect the key to another clue.",
        locationName: "Gallery 206",
        targetAICGalleryId: 2147483633,
        linkedArtworkId: 4081,
        linkedSuspectId: 4,
        targetAICAPIMetadataField: "id,title,artist_display,description",
    },
    {
        id: 9,
        title: "Conflicting Witness Statement",
        forensicAction: "Compare witness statement",
        description: "A witness states that Bastien was seen in a particular gallery shortly before his death. However, the reported time conflicts with the private meeting described in Clue 5. The access log may help establish which movements are supported by the available records.",
        footnote: "Look at the many different people in the scene. Compare the witness's account with the timeline and other evidence as someone might not be truthful.",
        locationName: "Gallery 206",
        targetAICGalleryId: 2147483633,
        linkedArtworkId: 65509,
        linkedSuspectId: 2,
        targetAICAPIMetadataField: "id,title,artist_display,description",
    },
    {
        id: 10,
        title: "The Snowy Footprint",
        forensicAction: "Analyze potential crucial evidence",
        description: "A footprint near an entrance contains traces of salt and gravel, suggesting that someone may have entered from outside. The evidence is consistent with outdoor footwear in winter, but it cannot establish who made the print. The night shift patrol log and entrance records may help narrow down when the person entered.",
        footnote: "Look at the snowy setting. Investigate a footprint for traces that might reveal where someone entered the museum.",
        locationName: "Gallery 272",
        targetAICGalleryId: 2147478068,
        linkedArtworkId: 109780,
        linkedSuspectId: 3,
        targetAICAPIMetadataField: "id,title,artist_display,medium_display,description",
    },
    {
        id: 11,
        title: "Cleaning Chemical",
        forensicAction: "Check for chemical residue",
        description: "A chemical trace is found near the display. It resembles a product listed in the museum's maintenance or conservation records. The player must check who signed out the product, whether its use was authorized, and whether the recorded time matches activity near the crime scene.",
        footnote: "Notice the restaurant setting and the people gathered there. Check the trace evidence for a chemical that might match museum cleaning or conservation supplies.",
        locationName: "Gallery 272",
        targetAICGalleryId: 2147478068,
        linkedArtworkId: 15401,
        linkedSuspectId: 4,
        targetAICAPIMetadataField: "id,title,artist_display,medium_display",
    },
    {
        id: 12,
        title: "The Final Location Code",
        forensicAction: "Decode a password",
        description: "The final code reveals a restricted location and a time window connected to Bastien's last known movements. The access log, key record, meeting note, witness statement, footprint report, and chemical sign-out record must now be compared. Identify the suspect whose movements and connection to the evidence best fit the timeline, and explain any evidence that appears to contradict the accusation.",
        footnote: "Examine the figures and symbolic details. Search the display area for a hidden code that may unlock a restricted access log.",
        locationName: "Gallery 272",
        targetAICGalleryId: 2147478068,
        linkedArtworkId: 118284,
        linkedSuspectId: 6,
        targetAICAPIMetadataField: "id,title,artist_display,description",
    },
]

export function getClues(req, res) {
    res.json({
        count: clues.length,
        data: clues
    });
}

export function getClueById(req, res) {
    const id = Number(req.params.id);

    const clue = clues.find(function (item) {
        return item.id === id;
    });

    if (!clue) {
        return res.status(404).json({
            message: "Clue not found"
        });
    }

    res.json(clue);
}




