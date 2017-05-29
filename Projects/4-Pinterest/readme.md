# Projet : Pinterest
- Durée : 1 semaine
- Emplacement : sur un repository [GitHub](https://github.com/) intitulé "`projet-4-Pinterest`"  
- Le publier également sur Heroku.

## Demande client
J'ai besoin d'un site participatif, permettant à tout le monde de partager des photos de manière anonyme. Le site à construire donnera simplement accès à un formulaire d'upload (téléchargement vers le serveur) et à une liste d'images affichée sous forme de grille.

J'aimerais que mon site ressemble à quelque chose comme ceci : ![Image exemple Pinterest](Pinterest.png)

## Ressources

- En PHP, la fonction [scandir()](http://php.net/manual/fr/function.scandir.php) permet de lire le contenu d'un dossier et récupérer son contenu sous forme de tableau.

## Objectifs principaux
1. formulaire d'upload en html sémantique
  - sécurité: limiter l'upload uniquement aux formats d'images les plus courants (jpg, jpeg, png, gif, WebP)
  - upload fonctionnel ([référence](https://www.w3schools.com/php/php_file_upload.asp))
1. afficher en html le contenu du dossier contenant les images
  - utiliser la fonction php `scandir()` pour "lire" le contenu du dossier
1. Utiliser une grille pour afficher les images.

## Objectifs supplémentaires
1. Permettre à l'utilisateur de modifier le cadrage de l'image (via la librairie php [simpleImage](https://github.com/claviska/SimpleImage))
1. Faire en sorte que ton interface s'adapte aux différentes tailles d'écran: mobile, tablet, desktop, huge screens. Exemple: [Dribbble](http://dribbble.com)
1. Fais un vrai Pinterest:
    1. Utilise [isotope](https://isotope.metafizzy.co/) pour la mise en page de ton système
    1. En PHP lors de l'upload faire de sorte que l'on sauve une miniature et l'image à sa taille normale
    1. Faire de sorte que l'on puisse cliquer sur une image et l'affciher dans une modal [Remodal](https://github.com/VodkaBears/Remodal) avec la version normale de l'image



## Pour commencer...
- Etude de la demande: as-tu tout compris? Pour le savoir, reformule la demande avec un(e) collègue et comparez votre compréhension mutuelle.
- Clarifie pour toi-même ce que devra faire ton script php, via de l'Unified Modelling Language (UML) ([example 1](http://astah.net/features/uml-features/uml-features-class.png), [example 2](http://msoe.us/taylor/tutorial/se1021/exceptionUML.png))
- Réalise un prototype papier de l'écran à construire.
- Crée un repository sur GitHub "`projet-4-Pinterest`"

#### Qu'est-ce que je sais déjà faire?
1. Créer un formulaire html
1. Ecrire du html
1. Utiliser un framework CSS 
1. Traiter d'un formulaire en php  

#### Qu'est-ce qui est nouveau ?
1. PHP: expérimenter avec l'upload
1. PHP: expérimenter avec scandir()
1. Associer une librairie javascript à du html

Bon amusement!
