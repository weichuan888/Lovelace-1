# Transmissif: Amélioration progressive
- parler typo, sacade, confort de lecture, 
- exposer à un texte brut, pas architecturé

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
	- Traduis [ce document Word](doc-le-paysan-chinois.txt) en sémantique html, donc en utilisant les bons blocs html (pas de `div` ni de `span`)  
	- Utilise les balises suivantes: h1, blockquote, q, p, img, hr, figure et caption 
	- Exercice: ajoute deux ou trois liens de ton choix dans la page html via la balise a

- **html attributes** = permet de donner les caractéristiques des balises
	- Exercice: ajoute l'attribut au liens, qui permettent d'indiquer la page vers laquelle doit mener le lien
	- Exercice: fais en sorte que lorsqu'on clique sur tes liens, la page s'ouvre dans un nouvel onglet du navigateur  
	- Exercice: trouve l'attribut permettant d'afficher une petite boite de texte au survol des liens   
	![Exemple](https://cdn.searchenginejournal.com/wp-content/uploads/2008/09/title-usability.jpg)
	
## 2. CSS (Le look)
 
-  Les sélecteurs en CSS (part 1): via la balise
-  contrôler l'aspect du texte: `font-face` (serif / sans-serif), font-size, color, line-height  
	-  Exercices: 
		- stylise les paragraphes: utilise une police à empatement, augmente un peu l'interlignage, utilise une taille de base bien lisible. Donne au texte de couleur foncée, mais pas noire.
		- stylise les liens de manière à les rendre bien lisibles.
		- stylise l'état survolé et visité des liens.

-  Le fond du bloc: background-color background-image
	- Exercice: ajoute une couleur de fond à ton `body`
		- ajoute une image de fond à ton `body`
		- fais en sorte qu'elle ne se répète pas  
-  le bloc: margin / padding / Width / Height
	-  Exercices:   
		-  	centrer le bloc de contenu du body
		-  	fais que la largeur des citations ne prennent que la moitié de la page  
### Les sélecteurs en CSS (part 2): 
- `class` et `id` 
	Exercices: 
		- identifie les citations des villageois, et celles du fermier en assignant à chacune une classe correspondante.
		-  
-  Tous les autres sélecteurs: 
	-  `+` et `>` 
	-  	Sélectionner via l'attribut `[attribute]`
	-   Il y en a pleins d'autres, lire la [doc officielle](https://www.w3schools.com/cssref/css_selectors.asp).
	-   Exercices:
		-   mettre en gras le premier paragraphe
		-   mettre en italique le texte des citations
		-   mettre en 
-  CSS de positionnement:  
	-  le flux (display inline/inline-block/block & float)
	-  sortir du flux: position relative / absolute / fixed

## 3. les bonbons
- éliminer le css par défaut (`reset.css`, normalize.css, ...)  
- Google Webfonts

## Du bon html? 
- Il y a une part de subjectivité dans la manière dont on approche le balisage html. De nombreux points sont discutables: par exemple, faut-il une div, des sections ou des articles? *Cela dépend des cas.* Faut-il absolument un seul H1? La plupart du temps oui, mais parfois, non. *Cela dépend des cas.*
Rappelons nous pourquoi le html doit être sémantique:
- liseuse d'écran: si le public cible inclut les non voyants, tester votre code sur des liseuses d'écran
- La SEO: le [validateur du w3c](https://validator.w3.org/) + d'autres outils comme [Woorank (payant)](https://www.woorank.com/fr/)
- trouve comment contrôler la couleur du texte lorsqu'on le souligne

## Exercice pratique
- apporte la sémantique du document [Petit Guide Typographique](doc-guide-typographie.txt)
- améliore la lisibilité en appliquant tout le css pour en améliorer le contenu. Cherche à produire un résultat 