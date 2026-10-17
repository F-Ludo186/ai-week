---
name: review
description: Relit du code sans le modifier. À utiliser quand l'utilisateur demande une relecture ou une revue, et avant un commit.
---

# Review

- Ne modifie aucun fichier : rends une liste.
- Pour chaque problème : le fichier et la ligne, ce qui se passe, comment le reproduire.
- Cherche dans cet ordre : le résultat est-il juste ? Une valeur vide fait-elle planter ? Une erreur est-elle avalée ? Un texte de l'utilisateur est-il affiché ou exécuté tel quel ?
- Zéro problème trouvé : dis-le, n'en invente pas.
- Les remarques de style viennent en dernier, à part.