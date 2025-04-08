export function validateAge(dateOfBirth) {
    const age = calculateAge(dateOfBirth);
    return age >= 18;
}

export function validatePostalCode(postalCode) {
    const postalCodeRegex = /^[0-9]{5}$/;
    return postalCodeRegex.test(postalCode);
}

export function validateName(name) {
    const nameRegex = /^[a-zA-ZàáâäãåçèéêëìíîïòóôöõùúûüÿÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÒÓÔÖÕÙÚÛÜŸ\s'-]+$/;
    return nameRegex.test(name);
}

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
