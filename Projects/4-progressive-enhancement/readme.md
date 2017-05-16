# Transmissif: Amélioration progressive
- parler typo, sacade, confort de lecture, 
- exposer à un texte brut, pas ou mal architecturé (Le fichier de travail: [le paysan chinois](doc-le-paysan-chinois.txt) )

# Sprint: Amélioration progressive
## 1. Sémantique html
- Ca veut dire quoi "**sémantique**" ? 
Pour bien composer un document, il faut raisonner non pas en termes d'apparence graphique mais en termes de définition de chacun des objets le composant, c.à.d. raisonner en terme de structure du document. Utiliser une balise "titre" pour un titre, une balise "définition" pour une définition, etc.

- **Pourquoi** la sémantique est importante pour le web developer?
Discussion -> googlebot (donc SEO organique) + Accessibilité (liseuses d'écran).  
Le googlebot est une calculatrice chargée de retourner à un humain les meilleurs résultats possibles pour ce qu'il a cherché (quelques mots). Une calculatrice, c'est puissant, mais c'est bête. Elle doit donc faire semblant de penser comme un humain, et pour cela, elle analyse le contenu d'une page html en lisant les balises, ce qui lui permet de "comprendre" ce dont parle la page. Si celle-ci semble correspondre à la recherche, elle va la retourner à l'utilisateur sinon, pas.

Par conséquent, si nos pages ne sont pas bien sémantiques, Google ne les montrera jamais, et vos sites n'auront pas de traffic. 

> Findability Precedes Usability
> In the Alphabet and on the Web.
> You Can't Use What You Can't Find.
> – [Peter Morville](https://thatsthespir.it/quote/view/10)
 

- **balises** = les "blocs". Ils permettent d'indiquer la fonction sémantique d'une portion de contenu.
- Exercices: 
	- Retranscris [ce document Texte](doc-le-paysan-chinois.txt) en sémantique html, donc en utilisant les bons blocs html (pas de `div` ni de `span`)  
	- Utilise les balises suivantes: `h1`,`h2`, `blockquote`, `q`, `img`, `p`, `img`, `hr`, `figure` et `caption`, `table`, `th`, `tr`, `td`, `ul` ou `ol` et `li`. 
	- Ajoute deux ou trois liens de ton choix dans la page html via la balise `a`
	- Retrouve, pour chacune de ces balises, l'origine de leur nom (c'est comme cela qu'on les retient). Va voir sur html5doctor.com à quoi elles correspondent si tu as un doute.

- **html attributes** = permet de donner les caractéristiques des balises
- Exercices : 
	- Rajoute l'attribut Alt aux images.
	- Ajoute l'attribut au liens, qui permettent d'indiquer la page vers laquelle doit mener le lien
	- Fais en sorte que lorsqu'on clique sur tes liens, la page s'ouvre dans un nouvel onglet du navigateur  
	- Trouve l'attribut permettant d'afficher une petite boite de texte au survol des liens   
![Exemple](https://cdn.searchenginejournal.com/wp-content/uploads/2008/09/title-usability.jpg)
	
## 2. CSS (Le look)
 
-  Les sélecteurs en CSS (part 1): via la balise
-  contrôler l'aspect du texte: `font-face` (serif / sans-serif), font-size, color, line-height  
-  Exercices: 
	- stylise les paragraphes: utilise une police à empatement, augmente un peu l'interlignage, utilise une taille de base bien lisible. Donne au texte de couleur foncée, mais pas noire.
	- stylise les liens de manière à les rendre bien lisibles.
	- stylise l'état "survolé" et l'état "visité" des liens.
- Le fond du bloc: `background-color` `background-image`
- Exercices: 
	- ajoute une couleur de fond à ton `body`
	- ajoute une image de fond à ton `body`
	- fais en sorte que l'image ne se répète pas 
	- change son positionnement à `bottom right` 
	- change sa taille à `cover`
-  le bloc: margin / padding / Width / Height  

![Le bloc](https://www.dropbox.com/s/jhv1lod1kw1ieas/Capture%20d%27%C3%A9cran%202017-05-15%2023.39.38.png?dl=1)

-  Exercices:   
	- Centre le `body` en lui donnant une largeur maximum de 90% et en jouant avec la propriété `margin`
	- Fais en sorte que les citations ne prennent en largeur que la moitié de la page 
	- En utilisant uniquemnent la propriété `margin`, positionne les citations au milieu.  
	- Augmente la taille du texte dans les citations à 160% de la taille du texte par défaut
	- Donne une couleur légèrement grisée au fond des citations
	- Ajoute une bordure à gauche de chaque citation, de 3px et de couleur brique
	- Le texte des citations touche la bordure, ce n'est pas joli. Ajoute un espace de 30px entre la bordure et le texte de la citation.
	- Fais en sorte que les citations aient un espace vide au dessus et en dessous de 80 pixels.

### Les sélecteurs en CSS (part 2): 
- `class` et `id` 
- Exercices: 
	- En utilisant uniquement la balise comme sélecteur, mets toutes les citations en italiques.
	- Identifie les citations des villageois et celles du fermier en assignant à chacune une classe correspondante.
	- Change la couleur du bord gauche des citations en fonction de la personne qui parle.
-  Tous les autres sélecteurs: 
	-  `+` et `>` 
	-  	Sélectionner via l'attribut `[attribute]`
	-   Il y en a quelques autres. Pour te faire une idée de ce qu'ils permettent, va lire la petite [doc officielle](https://www.w3schools.com/cssref/css_selectors.asp).
	-   Exercices:
		-   Mets en gras le premier paragraphe
		-   Mets en italique le texte des citations
		-   Mets en lettres majuscules toutes les instances du mot "bien" et "mal" (tu peux utiliser une balise `span` pour pouvoir les sélectionner).
		-   Stylise la table pour que la couleur de fond de chaque rangée soit en alternance grise ou blanche
		-   Au premier élément de la liste (les types de gens), joue avec `background-image` et `padding-right` pour faire apparaître l'image ![bien](bien.png)  
		-   Au deuxième élément de la liste (les types de gens), joue avec `background-image` et `padding-right` pour faire apparaître l'image  ![mal](mal.png)  
		-   Au troisième élément de la liste (les types de gens), joue avec `background-image` et `padding-right` pour faire apparaître l'image  ![chat](chat.png)  
### CSS de positionnement:  
	-  **comprendre le flux** (display inline/inline-block/block)
	-  cfr https://codepen.io/pixeline/pen/QvrbPv 
	-  `float` va laisser le block flotter sur le block suivant (au lieu de le pousser à la ligne)
	-  Exercice: fais en sorte que le texte courre autour des images, en utilisant, sur les images, la propriété float (ajuste avec du margin pour distancier le texte de l'image).
	-  sortir du flux: position relative / absolute / fixed

## 3. les bonbons
- Élimine le css par défaut (`reset.css`, normalize.css, ...)  
- Google Webfonts: change la police de caractère du document à Open Sans, hébergée sur Google Web Fonts.
- Pour les titres, choisis une autre police, suffisamment différente.

## Du bon html? 
- Vérifie que ton html est valide [validateur du w3c](https://validator.w3.org/) + d'autres outils comme [Woorank (payant)](https://www.woorank.com/fr/)

## Exercices pratiques terminant ce sprint
- Crée une version en html sémantique du document [
8 façons simples d’améliorer la typographie dans vos designs](doc-ameliorer-sa-typo.txt) et améliore la lisibilité en appliquant tout le css pour en améliorer le contenu. Cherche à produire un résultat favorisant la lecture, proche d'un article sur Medium. 
- Crée une version en html sémantique du document [Petit Guide Typographique](doc-guide-typographie.txt) et améliore la lisibilité en appliquant tout le css pour en améliorer le contenu. Cherche à produire un résultat favorisant la lecture, proche d'un article sur Medium. 