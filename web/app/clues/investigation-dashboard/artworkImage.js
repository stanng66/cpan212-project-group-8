"use client";

import { useState } from "react";

export default function ArtworkImage({ imageId, artworkId, title, apiUrl, className }) {
    const [useLocalImage, setUseLocalImage] = useState(!imageId);

    const apiImage = apiUrl + "/api/clues/artwork/image/" + imageId;
    const localImage = "/assets/artworks/" + artworkId + ".jpg";

    return (
        <img
            src={useLocalImage ? localImage : apiImage}
            alt={title || "Artwork"}
            className={className}
            onError={() => setUseLocalImage(true)}
        />
    );
}