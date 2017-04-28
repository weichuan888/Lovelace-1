## Objectifs

- Améliorations des compétences en Markdown
- Améliorations des compétences en Git

## Instructions

Temps : 1 Jour

Réaliser un [Cadavre exquis](https://fr.wikipedia.org/wiki/Cadavre_exquis_(jeu)) avec GitHub

### Etape 1 : Initialisation
1. Crée un dépôt sur GitHub nomé "Exercice-Cadavre-exquis-MonPrenom"
1. Créer un fichier *README.md*
1. En markdown donnez un titre à votre histoire
1. `Cloner` votre dépot sur votre ordinateur
1. Créer une branche __"developpement"__
1. Faire un `checkout` sur cette nouvelle branche
1. Rédiger *3* lignes de textes pour débuter une d'histoire dans le *README.md* __(en utilisant un maximum le markdown)__
1. Faire un `add`
1. Faire un `commit`
1. Faire un `push` de la branche __"developpement"__
1. Inviter vos collègues en tant que __contributeurs__

### Etape 2 : Contributions
1. Aller sur un dépot où vous avez été invité
1. Faire un `clone`
1. faire `git branch -a` pour afficher la liste des branches sur le serveur
1. Faire un `pull` de la branche __"developpement"__
1. Faire un `checkout` sur la branche __"developpement"__
1. Crée une branche nommé __"ajouts-votre-prenom"__ à partir de __"developpement"__
1. Ajouter vos *3* lignes de texte dans le *README.md* à la suite du précédent utilisateur 
1. Faire un `add`
1. Faire un `commit` 
1. Faire un `push`de la branche  __"ajouts-votre-prenom"__
1. Faire un `merge` de votre branche __"ajouts-votre-prenom"__ avec __"developpement"__
1. Faire un `push`de la branche  __"developpement"__
1. Faites ceci pour tout vos autres collegues

### Etape 3 : Versioning
1. Quand tous vos collegues sont passé chez-vous, retourner sur votre dépot
1. Faire un `merge` de la branche __"developpement"__ sur __"master"__
1. Faire un `tag` de __"master"__ nomé __"version-1"__

### Etape 4 : Correction
1. Créer une branche __"corrections"__ à partir de __"master"__
1. Faire les correction d'orthographe et si il n'y en a pas ajouter la mention ("Sans faute")
1. Faire un `add`
1. Faire un `commit` 
1. Faire un `push`
1. Faire un `merge` avec __"master"__
1. Aller sur la branche __"developpement"__
1. Mettre à jour la brnache __"developpement"__ en faisant un `merge` avec la branche __"corrections"__

## Ressources

- [Git Basics](https://rogerdudler.github.io/git-guide/index.fr.html)
- [Git Cheat Sheet](https://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf)
![Git workflow](http://blog.launchdarkly.com/wp-content/uploads/2016/07/Slide2.jpg)