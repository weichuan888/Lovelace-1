
1
Quel code permettra d'avoir des liens rouges au survol par la souris, même si ces liens ont déjà été visités ?

 Proposition A :
 ```
a:hover {color: orange;}
a:visited {color: red;}
a {color: green;}
```
 Proposition B :
 ```
a:hover {color: red;}
a:visited {color: orange;}
```
 Proposition C :
 ```
a:visited {color: orange;}
a:hover {color: red;}
a {color: green;}
```
 Proposition D :
 ```
a:visited {color: orange;}
a:hover {color: red;}
```
 Les propositions A et C.
 Les propositions C et D.
2
Pour le fragment de code XHTML suivant : <div><p>kikoo</p></div><p>lol</p>, avec laquelle de ces règles CSS les deux paragraphes seront-il espacés verticalement de 20 pixels ?
```
 div {padding: 0; margin: 0;}
p {padding: 0; margin: 10px;}
 div {padding: 7px; margin: 0;}
p {padding: 0; margin: 13px;}
 div {padding: 8px; margin: 5px;}
p {padding: 0; margin: 6px;}
 div {padding: 0; margin: 13px;}
p {padding: 0; margin: 7px;}
```
3
Avec quelle propriété CSS 2.1 peut-on arrondir les coins d'un bloc (du moment que le navigateur la comprenne) ?

 border-crop
 border-radius
 border-round
 -moz-border-radius
 Aucune
4
Comment faire un survol de lien (rollover) accessible au plus grand nombre en CSS ?
```
 p:hover, p:focus {color: blue;}
 a:hover {color: blue;}
 a:hover, a:focus {color: blue;}
 a:hover, a:focus, a:active {color: blue;}
 ```
5
En supposant que tous les sélecteurs suivants sont justes et désignent le même élément, lequel sera appliqué en priorité ?
```
 #page ul li a {}
 #page .menu a {}
 div.menu ul li a {}
 div#page ul a {}
 ```
6
Parmi les propositions suivantes, laquelle n'est pas une valeur de la propriété "display" ?

 list-item
 inline-block
 table-legend
 inline-table
 inherit
7
Quelles règles peut-on employer pour afficher à droite et sur une seule ligne une liste d'éléments non ordonnés ? 
Nota : les liens doivent s'afficher suivant leur ordre d'apparition dans le code HTML.

 Proposition A :
 ```
ul {text-align: right;}
ul li {display: inline;}
```
 Proposition B :
 ```
ul {text-align: left;}
ul li {display: inline; text-align: right;}
```
 Proposition C :
 ```
ul li {float: right;}
```
 Proposition D :
 ```
ul {float: right;}
ul li {float: left;}
```
 Propositions A et D
 Propositions B et C
8
Parmi les syntaxes suivantes, laquelle n'est pas supportée par Internet Explorer (version 7 et inférieures) ?
```
 <link rel="stylesheet" type="text/css" href="style.css" media="screen, projection" />
 <style type="text/css" media="screen">@import url(style.css);</style>
 <style type="text/css" media="screen, projection">@import url(style.css);</style>
 <style type="text/css">@import url(style.css) screen;</style>
 ```
9

`h1[class~=title] + p:first-letter {color: #c00;}` modifiera la couleur du texte...

 ...des titres h1 et de la première lettre des paragraphes
 ...de la première lettre des paragraphes qui suivent immédiatement un titre h1 de classe "title"
 ...de la première lettre des paragraphes et de la première lettre des titres h1 de classe "title"
 ...de la première lettre des paragraphes et des titres h1 ayant un attribut title égal à "class"
 ...de rien du tout, c'est n'importe quoi cette règle !
10
Comment peut-on peindre en blanc le cheval gris d'Henri IV ? (en sachant qu'il n'y a qu'un seul Henri IV, et qu'il n'a qu'un seul cheval gris... mais que d'autres que lui peuvent avoir un cheval gris !)

 Proposition A :
`#henri4 .cheval {color: #FFFFFF;}`
 Proposition B :
`#chevalgrishenri4 {color: white;}`
 Proposition C :
`.henri4 #chevalgris {color: #fff;}`
 Proposition D :
`#henri4 .cheval.gris {color: rgb(255,255,255);}`
 Réponses A et C
 Réponses B et D