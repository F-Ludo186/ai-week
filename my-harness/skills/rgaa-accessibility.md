---
name: rgaa-accessibility
description: Ajouter ou corriger la couche d'accessibilité côté client (HTML, CSS, JavaScript) selon le RGAA 4.x (Référentiel Général d'Amélioration de l'Accessibilité, basé sur les WCAG). À utiliser dès que l'utilisateur mentionne RGAA, accessibilité, a11y, WCAG, ARIA, lecteur d'écran, navigation au clavier, contraste, alternative textuelle, formulaire accessible, audit d'accessibilité, ou veut rendre une page, un composant ou une appli web accessible ou conforme, même sans citer explicitement le RGAA. Use for adding or auditing RGAA/WCAG accessibility on client-side web code.
---

# RGAA – Couche d'accessibilité côté client

Rend du code front (HTML/CSS/JS, y compris composants React/Vue) conforme aux critères du RGAA 4.x pour ce qui relève du **code client**.

## Limites à toujours annoncer

- Le RGAA compte 13 thématiques et 106 critères ; un outil automatique n'en détecte qu'une minorité. **Ne jamais affirmer qu'un site est « conforme RGAA »** : on peut dire « critères traités » et lister ce qui reste à vérifier manuellement (lecteur d'écran, clavier, contenus éditoriaux).
- Hors périmètre code : déclaration d'accessibilité, schéma pluriannuel, audit officiel, sous-titres et audiodescription réels, contenus rédactionnels. Les signaler sans les inventer.
- Avant de citer un numéro de critère précis, vérifier avec la référence : https://accessibilite.numerique.gouv.fr/ (version en vigueur : RGAA 4.1.x). En cas de doute, citer la thématique plutôt qu'un numéro.

## Workflow

1. **Lire le code existant** (HTML + CSS + JS associé). Ne pas réécrire ce qui est déjà correct ; faire des modifications ciblées.
2. **Auditer** selon la checklist `references/checklist.md` (13 thématiques, avec le correctif code pour chacune).
3. **Corriger par ordre de priorité** :
   1. Structure sémantique et landmarks, langue, titre de page
   2. Navigation clavier et focus visible
   3. Formulaires (labels, erreurs, autocomplete)
   4. Alternatives textuelles (images, icônes, SVG)
   5. Contrastes et présentation (CSS)
   6. Composants dynamiques (ARIA, gestion du focus, annonces)
4. **Vérifier** : lancer si possible l'audit automatique (voir plus bas), puis relire le résultat.
5. **Rendre compte** : liste courte « corrigé / à vérifier manuellement / hors périmètre code ».

## Règles de base

- **HTML natif d'abord** : `<button>`, `<a href>`, `<label>`, `<nav>`, `<main>`, `<h1>`–`<h6>`, `<ul>`, `<table>` avant tout `div` + ARIA. Le premier principe d'ARIA : ne pas l'utiliser si un élément natif suffit.
- `<html lang="fr">` (et `lang` sur les passages en autre langue). Un `<title>` unique et pertinent par page.
- Une hiérarchie de titres logique, un seul `<h1>`. Landmarks : `<header>`, `<nav>`, `<main>`, `<footer>`, avec `aria-label` si plusieurs `<nav>`.
- Lien d'évitement « Aller au contenu » en premier élément focusable.
- **Clavier** : tout est utilisable sans souris, ordre de tabulation logique, jamais de `tabindex` positif, pas de piège au clavier. Aucune suppression d'`outline` sans remplacement visible.
- **Focus visible** :
  ```css
  :focus-visible { outline: 3px solid #005fcc; outline-offset: 2px; }
  ```
- **Images** : `alt` pertinent si informative, `alt=""` si décorative ; SVG informatif avec `role="img"` et nom accessible, SVG décoratif avec `aria-hidden="true"`.
- **Liens et boutons** : intitulé explicite hors contexte ; pas de « cliquez ici ». Un lien ouvrant une nouvelle fenêtre doit le signaler dans son intitulé.
- **Contrastes** (valeurs WCAG AA) : texte 4,5:1 (3:1 si grand texte), composants d'interface et indicateurs 3:1. L'information ne doit jamais passer par la couleur seule.
- **Texte** : unités relatives (`rem`, `em`), zoom 200 % sans perte de contenu, pas de texte en image, espacement du texte modifiable par l'utilisateur.
- **Mouvement** : respecter `prefers-reduced-motion`; tout contenu animé/défilant > 5 s doit pouvoir être mis en pause.
- **Formulaires** : chaque champ a un `<label for>` ; champs obligatoires indiqués dans le texte (pas seulement `*` coloré) ; `autocomplete` adapté ; groupes de champs en `<fieldset><legend>` ; erreurs textuelles associées au champ via `aria-describedby`, avec `aria-invalid="true"`.
- **Composants dynamiques** : modale (`role="dialog"`, `aria-modal`, piégeage et restitution du focus, fermeture à `Échap`), menus/onglets/accordéons selon les patrons WAI-ARIA APG, messages de statut via `role="status"` ou `aria-live="polite"`. Un changement de contexte ne doit jamais se déclencher sans action de l'utilisateur.
- **Tableaux** : `<th scope>`, `<caption>`, pas de tableau de mise en forme.

## Vérification automatique (optionnelle)

Voir `references/checklist.md`, section « Outils ». Résultat à présenter comme un complément, jamais comme une preuve de conformité.

## Format de la réponse

Fichiers corrigés présentés + bilan en 3 blocs : **Corrigé**, **À vérifier manuellement** (avec le test précis : ex. « parcourir toute la page au clavier »), **Hors périmètre code**. Pas de longs cours théoriques sauf demande.