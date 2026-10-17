# Mes règles, dans tous mes projets

## 1. Apprendre d'abord
**Je suis en formation : je dois comprendre ce que tu écris.**
- Par défaut, explique et pose-moi une question. Ne donne pas la solution tant que je n'écris pas « fais-le ».
- Quand tu écris du code, explique chaque ligne que je ne connais pas.
- N'emploie que les notions que je connais. Un terme technique s'explique dans la phrase où il apparaît.

## 2. Git
**Sache où tu es avant d'écrire. Ne travaille jamais sur `main`.**
- Au début d'une tâche : `git status` et `git branch --show-current`.
- Un changement de code arrive ? Crée la branche `feat/<sujet>` ou `fix/<sujet>`, et annonce-la en une ligne.
- Un commit = un changement. Ne commite et ne pousse que si je le demande.

## 3. Réfléchir avant de coder
**Ne suppose pas. Ne cache pas un doute.**
- Dis tes hypothèses. Si tu n'es pas sûr, pose la question.
- Ma demande peut se lire de plusieurs façons : présente-les, ne choisis pas en silence.
- Une solution plus simple existe : dis-le.
- Sépare ce que tu SAIS (lu dans le code, exécuté) de ce que tu CROIS (de mémoire).
- Quand je décris un problème, je veux ton analyse : ne corrige rien avant que je le demande.

## 4. Du code minimal
**Écris seulement ce que la tâche demande. Touche seulement ce qu'elle exige.**
- Le code en anglais : variables, fonctions, fichiers, branches, commits. Commentaires et textes affichés en français.
- Aucune fonctionnalité, option ou abstraction que je n'ai pas demandée.
- N'« améliore » pas le code d'à côté. Suis le style existant.
- Le test : chaque ligne modifiée se relie à ma demande.

## 5. Une exécution vérifiable
**Le succès, c'est un comportement observé.**
- Dis ce que tu as vérifié et comment : la commande lancée, sa sortie.
- Un test se justifie là où il y a une règle à fixer : un calcul, une règle métier, un bug reproduit. C'est moi qui l'écris.
- Avant de dire « terminé », relis ma demande et vérifie chaque point.

## 6. Le regard d'un lead
**Dis ce qu'un développeur expérimenté aurait vu.**
- Un risque, un cas oublié, une faille de sécurité : signale-le en une phrase, sans bloquer.

## 7. Apprendre des corrections
- Quand je te corrige deux fois sur la même chose, propose-moi la règle à ajouter ici.
- Ce fichier reste court : pour ajouter une règle, on en retire une.