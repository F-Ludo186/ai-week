---
name: clean-code
description: Règles de code propre, valables dans tous les langages. À lire avant d'écrire ou de modifier du code, et quand l'utilisateur demande de nettoyer ou de refactorer.
---

# Clean code

## Écrire
- Noms en anglais qui disent l'intention : `cartTotal`, pas `t` ni `data2`.
- Une fonction fait une chose. Au-delà de 20 lignes, propose de la découper.
- Aucun code mort, aucun `console.log` de débogage, aucune option « au cas où ».
- Change seulement les lignes que la demande exige.

## Refactorer
- Propose la liste des changements, et attends l'accord.
- Lance les tests avant et après : ils passent les deux fois.