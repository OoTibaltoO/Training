# oFig - Boutique en ligne de figurines Final Fantasy

Bienvenue sur le projet **oFig** !

## Présentation du projet

Ce projet est une boutique en ligne fictive dédiée à la vente de figurines et statuettes inspirées de l'univers Final Fantasy. Il permet de gérer un panier, de visualiser les produits, de choisir des options de livraison et de simuler le processus d'achat.

## Pourquoi Svelte ? 🤔

J'ai choisi **Svelte** pour ce projet car :

- Svelte offre une expérience de développement moderne, rapide et réactive ⚡
- La compilation en amont permet d'obtenir un code léger et performant 🚀
- La syntaxe est simple et intuitive, idéale pour un projet pédagogique ou une refonte 🧑‍💻
- Svelte facilite la gestion des états et des composants sans surcharger le code

## Structure du projet 🗂️

```
Ofig/
├── index.html
├── jsconfig.json
├── package.json
├── README.md
├── reset.css
├── style.css
├── svelte.config.js
├── vite.config.js
├── images/
│   └── ... (images des figurines)
├── src/
│   ├── app.css
│   ├── app.d.ts
│   ├── app.html
│   ├── App.svelte
│   ├── responsive.css
│   ├── lib/
│   │   └── images/
│   │       └── ... (logos et images Svelte)
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── +page.js
│   │   ├── +page.svelte
│   │   └── main.js
├── static/
│   └── ... (images et fichiers statiques)
```

- **src/** : contient le code source principal, les composants Svelte, les styles et les routes
- **images/** et **static/** : ressources visuelles utilisées dans l'application
- **lib/** : images et ressources spécifiques à Svelte
- **routes/** : gestion des pages et de la navigation

## Modifications apportées 🛠️

Ce projet est une adaptation d'un dossier existant :

- J'ai migré l'architecture vers Svelte pour profiter de ses avantages et de pouvoir tester les fonctionnalités modernes
- Les styles ont été séparés dans des fichiers CSS dédiés pour plus de clarté
- La logique du panier et des produits a été réécrite en Svelte
- Les composants et la structure ont été modernisés
- Les images et ressources ont été réorganisées pour une meilleure gestion

---

✨ Ce projet est réalisé dans un but d'apprentissage et de pratique, sans vocation commerciale. ✨
