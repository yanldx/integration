# Mise en Pratique : Formulaire d'Inscription en React

Ce projet est une application React permettant à un utilisateur de s’enregistrer via un formulaire et de voir la liste des inscrits. Le formulaire inclut les champs suivants : nom, prénom, email, date de naissance, ville, et code postal. Le bouton de sauvegarde est désactivé tant que tous les champs ne sont pas correctement remplis. Des messages d'erreur sont affichés sous chaque champ non valide.

## Fonctionnalités

- **Validation des champs** :
    - La date de naissance doit être celle d'une personne majeure (18 ans ou plus).
    - Le code postal doit être au format français (5 chiffres).
    - Les champs nom, prénom et ville doivent être valides (sans caractères spéciaux ni chiffres, mais les accents, trémas, tirets, etc., sont acceptés).
    - L'email doit être valide.

- **Gestion des erreurs** :
    - Affichage de messages d'erreur en rouge sous les champs non valides.
    - Désactivation du bouton de sauvegarde tant que tous les champs ne sont pas valides.

- **Toaster de succès** :
    - Affichage d'un toaster de succès lorsque le formulaire est correctement soumis.
    - Réinitialisation des champs après soumission réussie.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/yanldx/integration.git

2. Installez les dépendances :
    ```bash
    npm install

### Utilisation

1. Lancez l'application en mode développement :
    ```bash
    npm start

2. Accédez à l'application via http://localhost:3000.

### Tests

1. Pour exécuter les tests, utilisez la commande suivante :
    ```bash
    npm test
   
2. Les tests couvrent les cas suivants :

- Calcul de l'âge.
- Vérification que l'âge est supérieur à 18 ans.
- Format du code postal.
- Format du nom, prénom et ville (avec différents cas particuliers).
- Format de l’email.
- Désactivation du bouton si les champs ne sont pas remplis.
- Affichage du toaster de succès et réinitialisation des champs.

### Déploiement

Le déploiement est automatisé via GitHub Actions. Le workflow de déploiement est configuré dans .github/workflows/deploy.yml.

### Workflow de Déploiement

1. Déclencheur :

Sur push vers la branche main.

2. Étapes :

- Checkout du dépôt.
- Configuration de Node.js.
- Installation des dépendances.
- Build du projet.
- Configuration de l'identité Git.
- Authentification pour gh-pages.
- Déploiement vers GitHub Pages.
- Publication du package sur NPM.

### Documentation

La documentation complète est générée à l'aide de JSDoc et est disponible dans le dossier docs. Pour générer la documentation, utilisez la commande suivante :
    
```bash
    npm run jsdoc