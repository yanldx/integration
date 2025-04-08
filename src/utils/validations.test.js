import { validateAge, validatePostalCode, validateName, validateEmail } from './validations';

test('validateAge should return true for age >= 18', () => {
    expect(validateAge('2000-01-01')).toBe(true);
});

test('validatePostalCode should return true for valid French postal code', () => {
    expect(validatePostalCode('75000')).toBe(true);
});

test('validateName should return true for valid name', () => {
    expect(validateName('Jean-Luc')).toBe(true);
});

test('validateEmail should return true for valid email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
});
