# Transmissif: Amélioration progressive
- parler typo, sacade, confort de lecture, 
- exposer à un texte brut, pas ou mal architecturé (Le fichier de travail: [le paysan chinois](doc-le-paysan-chinois.txt) ?)

# Sprint: Amélioration progressive
## 1. Sémantique html
- Ca veut dire quoi "**sémantique**" ?   
Pour bien composer un document html, il faut raisonner non pas en termes d'apparence graphique mais en termes de définition de chacun des objets le composant, c.à.d. raisonner en terme de structure du document.  
Utiliser une balise "titre" pour un titre, une balise "définition" pour une définition, etc.  
Concrètement, se poser la question: "*Ce bout de texte, c'est quoi: un titre? Un paragraphe? Une légende? Et ce bloc, est-ce un chapitre ? Une note de l'auteur ?*" et en fonction de la réponse, choisir la balise correspondante ou s'en rapprochant le plus.

- **Pourquoi** la sémantique est importante pour le web developer?
googlebot (donc SEO organique) + Accessibilité (liseuses d'écran).  
Le googlebot est une calculatrice chargée de retourner à un humain les meilleurs résultats possibles pour ce qu'il a cherché (quelques mots). Une calculatrice, c'est puissant, mais c'est bête. Elle doit donc faire semblant de penser comme un humain, et pour cela, elle analyse le contenu d'une page html en lisant les balises, ce qui lui permet de "comprendre" ce dont parle la page. Si celle-ci semble correspondre à la recherche, elle va la retourner à l'utilisateur sinon, pas.  

Par conséquent, si nos pages ne sont pas bien sémantiques, Google ne les montrera jamais, et vos sites n'auront pas de traffic. 

> Findability Precedes Usability
> In the Alphabet and on the Web.
> You Can't Use What You Can't Find.
> – [Peter Morville](https://thatsthespir.it/quote/view/10)
 

- **balises** = les "blocs". Ils permettent d'indiquer la fonction sémantique d'une portion de contenu.
- Exercices: 
	- Retranscris [ce document Texte](doc-le-paysan-chinois.txt) en sémantique html, donc en utilisant les bons blocs html (pas de `div` ni de `span`)  
	- Utilise les balises suivantes: `h1`, `h2`, `blockquote`, `q`, `img`, `p`, `img`, `hr`, `figure` et `caption`, `table`, `th`, `tr`, `td`, `ul` ou `ol` et `li`. 
	- Retrouve, pour chacune de ces balises, l'origine de leur nom (c'est comme cela qu'on les retient). En cas de doute, cherche la réponse sur http://html5doctor.com.
	- Ajoute deux ou trois liens de ton choix dans la page html via la balise `a`
	- Y-a-t-il une partie que l'on pourrait considérer comme une entête? Si oui, regroupe la dans une balise `header`. 
	- Et un pied de page? Si oui, regroupe ce contenu là dans une balise `footer`
	- Mets toutes les instances des mots "Bien" et "Mal" dans une balise `span` , `em` ou `strong`. 

### A savoir
- trop de sémantique tue la sémantique. La règle (comme souvent en programmation) est:  
	**Le moins de code possible, mais autant que nécessaire.**

- **les attributs html** : ils permettent de définir les caractéristiques des balises.  Imagine qu'il y ait une balise "humain". 
```<human>Steven Paul Jobs, dit Steve Jobs, (San Francisco, 24 février 1955 - Palo Alto, 5 octobre 2011) est un entrepreneur... </human>```   
Nous pouvons, avec des attributs, décrire cet humain pour le différencier des autres.

```<human name="Steve Job" nationality="USA" origin="Syria" job="CEO" company="Apple" hair="grey">Steven Paul Jobs, dit Steve Jobs, (San Francisco, 24 février 1955 - Palo Alto, 5 octobre 2011) est un entrepreneur... </human>```  

De la sorte, en augmentant la sémantique des balises par des attributs, on a ainsi clarifié pour une machine qui est cet humain là. Remarque la syntaxe:

``` <balise attribut="valeur">Contenu</balise> ``` 

- Exercices : 
	- Rajoute l'attribut `Alt` aux images. A quoi sert cet attribut?  
	- Ajoute une classe "*bien*" ou "*mal*" aux balises entourant les mots "Bien" et "Mal".
	- Trouve l'attribut des liens permettant d'indiquer la page vers laquelle doit mener le lien, et ajoute-le.  
	- Fais en sorte que lorsqu'on clique sur les liens, la page s'ouvre dans un nouvel onglet du navigateur.  
	- Trouve l'attribut permettant d'afficher une petite boite de texte au survol des liens   
![Exemple](https://cdn.searchenginejournal.com/wp-content/uploads/2008/09/title-usability.jpg)
	
## 2. CSS (Le look)
 
-  Les sélecteurs en CSS (part 1): via la balise
-  contrôler l'aspect du texte: `font-face` (serif / sans-serif), font-size, color, line-height  
-  Exercices: 
	- stylise les paragraphes: utilise une police à empatement, augmente un peu l'interlignage, utilise une taille de base bien lisible. Donne au texte de couleur foncée, mais pas noire.
	- stylise les liens de manière à les rendre bien lisibles.
	- stylise l'état "survolé" et l'état "visité" des liens.
-  le **bloc**: margin / padding / Width / Height  

![Le bloc](https://www.dropbox.com/s/jhv1lod1kw1ieas/Capture%20d%27%C3%A9cran%202017-05-15%2023.39.38.png?dl=1)  
Une balise est rendue sous forme de "bloc". Tu peux contrôler les dimensions et les espacements de ce bloc:   

- `width`/ `height`: dimensions  
- `padding` : l'espace entre le contenu du bloc et son contour (le `border`). Le padding "gonfle" le bloc.  
- `margin` : l'espace autour du bloc, à l'extérieur de lui. Le margin distancie le bloc de son entourage.  
- **Exercices**   
	- Centre le `body` en lui donnant une largeur maximum de 90% et en jouant avec la propriété `margin`  
	- Fais en sorte que les citations ne prennent en largeur que la moitié de la page   
	- En utilisant uniquement la propriété `margin`, positionne les citations au milieu.  
	- Augmente la taille du texte dans les citations à 160% de la taille du texte par défaut  
	- Donne une couleur légèrement grisée au fond des citations   
	- Ajoute une bordure à gauche de chaque citation, de 3px et de couleur brique    
	- Le texte des citations touche la bordure, ce n'est pas joli. Ajoute un espace de 30px entre la bordure et le texte de la citation.  
	- Fais en sorte que les citations aient un espace vide au dessus et en dessous de 80 pixels.  

- Le fond du bloc: `background-color` `background-image`
- **Exercices** 
	- ajoute une couleur de fond à ton `body`
	- Change la couleur de fond pour utiliser un dégradé de couleur (va sur http://www.colinkeany.com/blend/)
	- ajoute une image de fond à ton `body`
	- fais en sorte que l'image ne se répète pas 
	- change son positionnement à `bottom right` 
	- change sa taille à `cover`

### Les sélecteurs en CSS (part 2): 
- `class`   (`.nom-de-la-classe`) et `id` (`#nom-de-lid`).
- **Exercices** 
	- En utilisant uniquement la balise comme sélecteur, mets toutes les citations en italiques.  
	- Identifie les citations des villageois et celles du fermier en assignant à chacune une classe correspondante.  
	- Change la couleur du bord gauche des citations en fonction de la personne qui parle.  
- Sélectionner via parent et enfant  
- **Exercice**
	- Sélectionne un élément du `header` et donne lui un fond jaune.
-  Tous les autres sélecteurs: 
	-  `+` et `>` 
	-  	Sélectionner via l'attribut `[attribute]`
	-   Il y en a quelques autres. Pour te faire une idée de ce qu'ils permettent, va lire la petite [doc officielle](https://www.w3schools.com/cssref/css_selectors.asp), puis joue à [CSS Diner](http://flukeout.github.io/)
- **Exercices**  
	-   Mets en italique le texte des citations
	-   Mets en lettres majuscules toutes les instances des mots "bien" et "mal".
	-   Mets en rouge les mots "Mal"
	-   Mets en vert les mots "Bien"
	-   Stylise la table pour que la couleur de fond de chaque rangée soit en alternance grise ou blanche
	-   Au premier élément de la liste (les types de gens), joue avec `background-image` et `padding-right` pour faire apparaître l'image ![bien](bien.png)  
	-   Au deuxième élément de la liste (les types de gens), joue avec `background-image` et `padding-right` pour faire apparaître l'image  ![mal](mal.png)  
	-   Au troisième élément de la liste (les types de gens), joue avec `background-image` et `padding-right` pour faire apparaître l'image  ![chat](chat.png)  
	-   Mets en gras le premier paragraphe

		
### CSS de positionnement:  
-  **comprendre le flux** (display inline/inline-block/block) 
	-  Théorie: https://codepen.io/pixeline/pen/QvrbPv 
	-  Exercice: un menu horizontal https://codepen.io/pixeline/pen/PmdPYL 
	-  Exercice: une grille https://codepen.io/pixeline/pen/aWavWq  
	-  `float` va laisser le block flotter sur le block suivant (au lieu de le pousser à la ligne)
	-  Exercice: fais en sorte que le texte courre autour des images, en utilisant, sur les images, la propriété float (ajuste avec du margin pour distancier le texte de l'image).   
	-  sortir du flux: position `static` / `relative` / `absolute` / `fixed`   
		-  	`absolute` permet de positionner un élément n'importe où (via les propriétés `top` et `left`), à partir des coordonnées de son premier parent en position: relative ou static. [Expérimente via ce Pen](https://codepen.io/pixeline/pen/vmzNjw?).
	-  Plus d'informations sur le positionnement CSS: http://fr.learnlayout.com

## 3. Web fonts
Par défaut, le navigateur utilise les polices de caractères installées sur l'ordinateur du client. Cependant, tu peux utiliser des polices de caractères spécifiques: les **webfonts**.
Exercice:
- Va sur [Google Webfonts](https://fonts.google.com/): change la police de caractère de ton document à celle-ci: Open Sans. Si tu n'y arrives pas, [fais d'abord cet exercice](https://d157rqmxrxj6ey.cloudfront.net/chadsansing/20997/) (clique sur le bouton "remix").
- Choisis une autre police pour les titres, suffisamment différente.

## 4. les bonbons
- Élimine le css utilisé par défaut par les navigateurs (`reset.css`), ou pars sur une base normalisée (`normalize.css`)  

## Du bon html? 
- Vérifie que ton html est **valide** via le [validateur du w3c](https://validator.w3.org/)
- Vérifie que ton html permet **une bonne SEO organique**, via d'autres outils comme [Woorank (payant)](https://www.woorank.com/fr/)

## Exercices pratiques terminant ce sprint
- Crée une version en html sémantique du document [
8 façons simples d’améliorer la typographie dans vos designs](doc-ameliorer-sa-typo.txt) et améliore la lisibilité en appliquant tout le css pour en améliorer le contenu. Cherche à produire un résultat favorisant la lecture, proche d'un article sur Medium. 
- Crée une version en html sémantique du document [Petit Guide Typographique](doc-guide-typographie.txt) et améliore la lisibilité en appliquant tout le css pour en améliorer le contenu. Cherche à produire un résultat favorisant la lecture, proche d'un article sur Medium. 
- Reproduis le plus fidèlement possible le layout suivant:    
[homepage d'un site](turlututu.png))
