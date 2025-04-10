# 🛡️ Validation Utils

Ce module fournit un ensemble de fonctions utilitaires pour valider des données utilisateur courantes dans un formulaire : nom, email, code postal et date de naissance.

---

## ✨ Fonctions disponibles

### `validateName(name: string): boolean`

Valide un nom en autorisant les lettres, tirets et espaces.

- ✅ Exemple valide : `Jean-Luc`
- ❌ Exemple invalide : `123Jean`

---

### `validateEmail(email: string): boolean`

Valide une adresse e-mail au format classique.

- ✅ Exemple valide : `test@example.com`
- ❌ Exemple invalide : `test@.com`

---

### `validatePostalCode(code: string): boolean`

Valide un code postal français (5 chiffres entre `01000` et `99999`).

- ✅ Exemple valide : `75000`
- ❌ Exemple invalide : `1234`

---

### `validateAge(dateOfBirth: string): boolean`

Vérifie si l'utilisateur a **au moins 18 ans** à partir d'une date au format `YYYY-MM-DD`.

- ✅ Exemple valide : `2000-01-01`
- ❌ Exemple invalide : `2010-01-01`

---

## 🧪 Tests

Les tests sont écrits avec **Jest**.

### `npm test`
npm install
npm test

### `npm start`

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur.


## Déploiement

L'application est déployée automatiquement sur GitHub Pages à chaque push sur la branche master.
URL de production : [https://yanldx.github.io/integration/](https://yanldx.github.io/integration/)
