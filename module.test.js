import { calculateAge } from './calculateAge.js';

describe('calculateAge Unit Test Suites', () => {

    it('should return the correct age based on the current date', () => {
        const birthDate = new Date();
        birthDate.setFullYear(birthDate.getFullYear() - 23); // Simule une personne de 23 ans

        const person = { birth: birthDate };
        expect(calculateAge(person)).toBe(23);
    });

    it('should throw "missing param p" when no argument is passed', () => {
        expect(() => calculateAge()).toThrow("missing param p");
    });

    it('should throw "Invalid input: expected an object" if input is not an object', () => {
        expect(() => calculateAge(123)).toThrow("Invalid input: expected an object");
        expect(() => calculateAge("not an object")).toThrow("Invalid input: expected an object");
        expect(() => calculateAge([])).toThrow("Invalid input: expected an object");
    });

    it('should throw "Missing birth field" if the object does not contain a birth field', () => {
        expect(() => calculateAge({})).toThrow("Missing birth field");
    });

    it('should throw "Invalid birth date" if birth is not a valid Date', () => {
        expect(() => calculateAge({ birth: "invalid date" })).toThrow("Invalid birth date");
        expect(() => calculateAge({ birth: 123 })).toThrow("Invalid birth date");
        expect(() => calculateAge({ birth: new Date("invalid") })).toThrow("Invalid birth date");
    });

    it('should throw "Birth date cannot be in the future" if birth is in the future', () => {
        const futureDate = new Date();
        futureDate.setFullYear(futureDate.getFullYear() + 1); // Date dans le futur
        expect(() => calculateAge({ birth: futureDate })).toThrow("Birth date cannot be in the future");
    });

    it('should still return correct age if test is run next year', () => {
        const nextYear = new Date();
        nextYear.setFullYear(nextYear.getFullYear() + 1);

        const birthDate = new Date();
        birthDate.setFullYear(birthDate.getFullYear() - 23); // Personne née il y a 23 ans

        const person = { birth: birthDate };
        const expectedAgeNextYear = 24; // L'année prochaine, la personne aura 24 ans

        // Simulation du test comme s'il était exécuté l'année prochaine
        jest.useFakeTimers().setSystemTime(nextYear);
        expect(calculateAge(person)).toBe(expectedAgeNextYear);
        jest.useRealTimers(); // Remettre le temps réel
    });

});
