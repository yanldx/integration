import React, { useState } from 'react';
import { validateAge, validatePostalCode, validateName, validateEmail } from '../../utils/validations';
import './Form.css';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        city: '',
        postalCode: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validateName(formData.firstName)) newErrors.firstName = 'Invalid first name';
        if (!validateName(formData.lastName)) newErrors.lastName = 'Invalid last name';
        if (!validateEmail(formData.email)) newErrors.email = 'Invalid email';
        if (!validateAge(formData.dateOfBirth)) newErrors.dateOfBirth = 'Must be at least 18 years old';
        if (!validateName(formData.city)) newErrors.city = 'Invalid city name';
        if (!validatePostalCode(formData.postalCode)) newErrors.postalCode = 'Invalid postal code';

        if (Object.keys(newErrors).length === 0) {
            onSubmit(formData);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                dateOfBirth: '',
                city: '',
                postalCode: '',
            });
        } else {
            setErrors(newErrors);
        }
    };

    const isFormValid = Object.values(formData).every(value => value !== '');

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
            </div>
            <div>
                <label>City:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
                {errors.city && <p>{errors.city}</p>}
            </div>
            <div>
                <label>Postal Code:</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                {errors.postalCode && <p>{errors.postalCode}</p>}
            </div>
            <button type="submit" disabled={!isFormValid}>Submit</button>
        </form>
    );
};

export default Form;
