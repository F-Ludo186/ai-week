---
name: css-manager
description: Créer, modifier et optimiser des fichiers CSS (feuilles de style, design tokens, responsive, dark mode). À utiliser dès que l'utilisateur mentionne un fichier .css, du style, du CSS, une feuille de style, un thème, du responsive, des media queries, des variables CSS, ou veut nettoyer, réorganiser, minifier, factoriser ou corriger du CSS, même sans dire explicitement « fichier CSS ». Use for creating, editing, refactoring and optimizing CSS files and stylesheets.
---

# CSS Manager

Skill pour créer, modifier et optimiser des fichiers CSS proprement et de façon maintenable.

## Principes généraux

- Toujours **lire le fichier existant en entier** avant de le modifier : respecter ses conventions (nommage, indentation, ordre) plutôt que d'imposer les siennes.
- Faire des **modifications ciblées** : ne pas réécrire un fichier entier pour un changement local. Ne jamais supprimer de règles sans avoir vérifié qu'elles sont inutilisées.
- Livrer le fichier dans `/mnt/user-data/outputs/` et le présenter, avec un court résumé des changements.
- Si le HTML associé est fourni, le lire : les sélecteurs doivent correspondre à la structure réelle.

## 1. Création

1. Clarifier (ou déduire) : type de projet, public cible, besoin responsive, dark mode, navigateurs visés.
2. Structure recommandée du fichier, dans cet ordre :
   - `:root` : variables (couleurs, typographie, espacements, rayons, ombres)
   - reset / base (`box-sizing`, `body`, titres, liens, images)
   - mise en page (layout, grille, conteneurs)
   - composants (un bloc commenté par composant)
   - utilitaires
   - media queries (mobile-first, `min-width`)
3. Utiliser des **variables CSS** (`--color-primary`, `--space-md`…) pour toute valeur répétée.
4. Préférer Flexbox/Grid, unités relatives (`rem`, `%`, `clamp()`), `gap` plutôt que des marges hacky.
5. Prévoir l'accessibilité : contraste suffisant, `:focus-visible` visible, `prefers-reduced-motion`, tailles de texte lisibles.
6. Nommage cohérent : kebab-case, et si pas de convention existante, BEM léger (`.card`, `.card__title`, `.card--active`).

## 2. Modification

- Identifier la règle exacte à changer (spécificité, cascade, ordre des déclarations).
- Corriger la **cause** plutôt qu'empiler des `!important` ou des sélecteurs plus spécifiques.
- Après modification, vérifier qu'il n'y a pas de conflit avec d'autres règles ciblant le même élément.
- Signaler à l'utilisateur tout effet de bord possible (autres pages/composants utilisant la classe).

## 3. Optimisation

Procéder par étapes, en expliquant chaque gain :

1. **Nettoyage** : doublons, propriétés surchargées, déclarations mortes, sélecteurs trop profonds (> 3 niveaux).
2. **Factorisation** : regrouper les valeurs répétées en variables, fusionner les règles identiques, utiliser les raccourcis (`margin`, `inset`, `padding-inline`).
3. **Performance** : éviter `@import` en cascade, limiter les sélecteurs universels coûteux, `will-change` seulement si justifié, préférer `transform`/`opacity` pour les animations.
4. **Spécificité** : réduire les `!important` et les ID dans les sélecteurs.
5. **Minification** (uniquement sur demande, en livrant aussi la version lisible) : voir `references/outils.md`.

Pour détecter le CSS inutilisé, croiser avec le HTML fourni ; ne jamais supprimer à l'aveugle les classes qui peuvent être ajoutées dynamiquement en JavaScript (demander ou conserver).

## Validation

Avant de livrer :
- Vérifier la syntaxe (accolades, points-virgules). Si possible : `npx stylelint` ou `npx csso` (voir `references/outils.md`).
- Relire que les variables utilisées sont bien définies.
- Le fichier doit rester lisible : indentation cohérente (2 espaces par défaut), un commentaire par section.

## Format de la réponse

Court : le fichier présenté + 3 à 6 puces sur ce qui a été fait (et ce qui n'a volontairement pas été touché). Proposer la suite logique (responsive, dark mode, minification) sans l'imposer.