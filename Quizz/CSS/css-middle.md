Soit un conteneur "div" auquel on veut donner une largeur *visible* totale de 760 pixels. Avec quel style obtiendra-t-on ce résultat ? Note : le modèle de boite standard des CSS est bien sûr appliqué.

 div {width: 760px; padding: 12px; border-width: 1px; margin: 0;}
 div {width: 740px; padding: 1em; border-width: 0; margin: 0;}
 div {width: 720px; padding: 5px; border-width: 5px; margin: 10px;}
 div {width: 700px; padding: 29px; border-width: 1px; margin: 0;}
2
Comment faire pour qu'une div prenne toute la largeur disponible dans son bloc conteneur ?

 div {width: 100%; padding: 10%;}
 div {min-width: 100%;}
 div {width: 80%; padding: 10%;}
 C'est automatique, pas besoin de spécifier une largeur.
3
Dans quel ordre doit-on placer, dans le code HTML, deux éléments que l'on veut placer côte à côte, en sachant qu'un seul de ces éléments sera flottant ?

 L'élément non flottant d'abord, puis l'élément flottant.
 L'élément flottant d'abord, puis l'élément non flottant.
 Peu importe l'ordre, il n'y aura pas de différence.
4
Le positionnement relatif (position: relative)...

 permet de positionner un élément par rapport à un autre élément, pris comme repère;
 permet de positionner un élément par rapport aux limites de son élément parent;
 permet de décaler un élément A par rapport à sa position "normale", en flux
 permet d'appliquer la théorie de la relativité générale ET la théorie de la relativité restreinte à une mise en page.
5
Où se placera un élément positionné en absolu (position: absolute) avec left: 100px ?

 À 100px du bord gauche de la fenêtre du navigateur;
 À 100px du bord gauche de l'élément html;
 À 100px du bord gauche de l'élément body;
 À 100px du bord gauche de son élément parent;
 À 100px du bord gauche de son plus proche ancêtre positionné.
6
Après une image flottante à droite (float: right;), on place un titre h2. Comment être sûr qu'il se placera en dessous de l'image flottante ?

 img {clear: left;}
 img {clear: right;}
 h2 {clear: left;}
 h2 {clear: right;}
7
Comment déclarer une puce image au mieux ?

 li {image: url(image.png);}
 li {list-style-type: disc; list-style-image: url(image.png);}
 li {list-style-image: url(image.png);}
 li {list-style: url(image.png);}
8
Comment peut-on figer la taille des caractères pour être sûr d'avoir exactement le même rendu partout ?

 En précisant des tailles de police en EM (ex : font-size: 0.8em).
 En précisant des tailles de police en pixels (ex : font-size: 12px).
 En précisant des tailles de police en points (ex : font-size: 10pt).
 Avec des tailles de police en pixels ou en points.
 On ne peut pas figer la taille des caractères pour être sûr d'avoir exactement le même rendu partout. C'est impossible.
9
Quelle est la méthode conseillée pour limiter l'application d'une ou plusieurs règles CSS à Internet Explorer 6 ?

 L'utilisation de la déclaration "!important".
 La préfixation du sélecteur par "* html".
 La préfixation du sélecteur par "html > body".
 Aucune des solutions précédentes.
10
Si j'écris a:active {color: red;} dans ma feuille de style, quels liens seront de couleur rouge ?

 les liens pointant vers des pages mises à jour régulièrement
 les liens pointant vers la page en cours (par exemple dans un menu de navigation)
 n'importe quel lien de la page, mais uniquement au moment où on clique sur ce lien
 n'importe quel lien de la page, mais uniquement au moment où on survole ce lien avec le pointeur de la souris