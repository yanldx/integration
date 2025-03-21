/**
 * Calculate the age of a person
 *
 * @param {object} p - The person object containing a birth date
 * @returns {number} - The age of the person
 * @throws {Error} - Throws errors for missing or invalid birth dates
 */
export function calculateAge(p) {
    // Vérifie si un argument a été envoyé
    if (!p) {
        throw new Error("missing param p");
    }

    // Vérifie que l'argument est bien un objet
    if (typeof p !== "object" || Array.isArray(p)) {
        throw new Error("Invalid input: expected an object");
    }

    // Vérifie si l'objet contient la clé `birth`
    if (!p.birth) {
        throw new Error("Missing birth field");
    }

    // Vérifie si `birth` est bien une instance de Date et qu'elle est valide
    if (!(p.birth instanceof Date) || isNaN(p.birth.getTime())) {
        throw new Error("Invalid birth date");
    }

    // Vérifie que la date de naissance n'est pas dans le futur
    const now = new Date();
    if (p.birth > now) {
        throw new Error("Birth date cannot be in the future");
    }

    // Calcule l'âge
    let age = now.getFullYear() - p.birth.getFullYear();

    // Vérifie si l'anniversaire est déjà passé cette année
    const isBirthdayPassed = (
        now.getMonth() > p.birth.getMonth() ||
        (now.getMonth() === p.birth.getMonth() && now.getDate() >= p.birth.getDate())
    );

    return isBirthdayPassed ? age : age - 1;
}
