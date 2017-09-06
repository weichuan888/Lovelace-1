# Introduction au MVC

## Objectifs

- Comprendre l'[architecture MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) : Model - View - Controller.
- Créer un mini-site de 5 pages en utilisant une architecture MVC
- Pour constituer le contenu de ce mini-site de sorte à ce qu'il soit intéressant et réel, tu vas interviewer un webdev de ton choix (les questions sont fournies) et comme tu veux: par email, via skype, lors d'un rendez-vous...
- Remarque: ce mini-site servira ensuite de base à t'apprendre la création d'un thème WordPress.

## Planning

1. **Contenu** (1 jour de taf) : sélectionner puis interviewer le développeur . La liste des questions à lui poser est [disponible ici](interviewwebdev.md).

2. Réflexion sur **l'UX** (1 heure de taf) : choisir une template sur [html5up](https://html5up.net/)
3. **Développement** du site en utilisant une architecture MVC pour la gestion des pages  
	1. Comprendre le MVC [(lire ces slides en pdf)](./MVC.pdf),
	2. Faire le petit exercice à la fin des slides,
	3. Développer le projet sur base de la template.

Temps nécessaire estimé : 3 jours
	

## Projet : Interview d'un webdev

Pour présenter cette interview, réalise un petit site internet avec comme pages :  

1. Making Of : comment vous avez trouvé votre webdev  
2. présentation de l'entreprise où travaille l'interviewé  
3. présentation du webdev  
4. interview (voir liste de questions)  
5. Conclusion (analyse/impression personnelle)  

Il faut un MVC :

- un dossier **controller** avec le routeur, celui qui va inclure les bons fichiers en fonction de l'URL
- un dossier **model** où on va mettre le traitement PHP (tout ce qui se trouve au-dessus du doctype html)
- un dossier **views** avec toutes les pages visuelles
- un fichier **index.php** qui inclut le contrôleur.

```
index.php
L controller
	L router.php
L views
	L fichiers partiels, pleins d'html
	L header.view.php
	L footer.view.php
	L ...
L model
	L model.php
assets
	L css
	L js
	L img
```

