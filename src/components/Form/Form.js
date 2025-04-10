import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { validateAge, validatePostalCode, validateName, validateEmail } from '../../utils/validations';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const Formulaire = ({ onSubmit }) => {
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

        if (!validateName(formData.firstName)) newErrors.firstName = 'Prénom invalide';
        if (!validateName(formData.lastName)) newErrors.lastName = 'Nom invalide';
        if (!validateEmail(formData.email)) newErrors.email = 'Adresse e-mail invalide';
        if (!validateAge(formData.dateOfBirth)) newErrors.dateOfBirth = 'Vous devez avoir au moins 18 ans';
        if (!validateName(formData.city)) newErrors.city = 'Nom de ville invalide';
        if (!validatePostalCode(formData.postalCode)) newErrors.postalCode = 'Code postal invalide';

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
            setErrors({});
        } else {
            setErrors(newErrors);
            toast.error("Le formulaire contient des erreurs. Veuillez les corriger.");
        }
    };

    const isFormValid = Object.values(formData).every(value => value !== '');

    return (
        <form onSubmit={handleSubmit}>
            <h2>Inscription d’un nouvel utilisateur</h2>

            <div>
                <label>Prénom :</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            <div>
                <label>Nom :</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>

            <div>
                <label>Email :</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div>
                <label>Date de naissance :</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
            </div>

            <div>
                <label>Ville :</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
                {errors.city && <p className="error">{errors.city}</p>}
            </div>

            <div>
                <label>Code postal :</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                {errors.postalCode && <p className="error">{errors.postalCode}</p>}
            </div>

            <button type="submit" disabled={!isFormValid}>Soumettre</button>
            <ToastContainer />
        </form>
    );
};

export default Formulaire;
