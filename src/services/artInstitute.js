const baseURL = "https://api.artic.edu/api/v1";
const timeoutMS = 5000;
const cache_TTL_MS = 5 * 60 * 1000;
const cache = new Map();

async function fetchAIC(endpoint) {
    const url = baseURL + endpoint;
    const cached = cache.get(url);

    if (cached && Date.now() < cached.expiresAt) {
        return cached.data;
    }

    const controller = new AbortController();

    const timeout = setTimeout(function () {
        controller.abort();
    }, timeoutMS);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error(
                "AIC API request failed with status " + response.status
            );
        }

        const result = await response.json();

        cache.set(url, {
            data: result,
            expiresAt: Date.now() + cache_TTL_MS
        });

        return result;
    } catch (error) {
        if (error.name === "AbortError") {
            throw new Error("AIC API request timed out");
        }

        throw error;
    } finally {
        clearTimeout(timeout);
    }
}

export async function getArtwork(id) {
    const params = new URLSearchParams();

    params.append(
        "fields",
        "id,title,artist_display,date_display,description,medium_display,classification_title,inscriptions,gallery_title,gallery_id,image_id"
    );

    return fetchAIC("/artworks/" + id + "?" + params.toString());
}

export function clearAICCache() {
    cache.clear();
}

export async function searchArtworks(query) {
    const params = new URLSearchParams();

    params.append("q", query);
    params.append("limit", "10");
    params.append("fields", "id,title,artist_display,description");

    return fetchAIC("/artworks/search?" + params.toString());
}


