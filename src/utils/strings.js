export const truncateTitle = (string, length) => {
    if (!string || typeof string !== "string") {
        return "";
    }

    if (!length || length <= 0) {
        return string;
    }

    if (string.length <= length) {
        return string;
    }

    return string.slice(0, length).trim() + "...";
};

export const truncateTitleByWords = (string, length) => {
    if (!string || typeof string !== "string") {
        return "";
    }

    if (!length || length <= 0) {
        return string;
    }

    if (string.length <= length) {
        return string;
    }

    const truncated = string.slice(0, length);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    if (lastSpaceIndex > 0) {
        return truncated.slice(0, lastSpaceIndex).trim() + "...";
    }

    return truncated.trim() + "...";
};
