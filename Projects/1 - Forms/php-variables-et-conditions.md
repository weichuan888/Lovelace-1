# PHP:  Variables et Conditions
## 1ère structure logique: variable


Programmer = manipuler de l'information

Tu te rappelles ce petit script PHP que tu voulais addresser aux sept milliards d'humains?
Et bien, réalisons-le.

1. Lance ton serveur local
(rappel: il suffit de taper ceci dans le Terminal: ``` php -S localhost:8000 -t /chemin/vers/le/dossier/a/servir ``` )
1. Dans ton dossier de travail servi par PHP, crée un fichier `humans.php`
```php
<html>
  <head><title>Hi!</title></head>
  <body>
    <h1>Bonjour <?php echo $_GET['nom']; ?>!</h1>
  </body>
</html>
```
1. Une fois fait, visite les urls suivants et observe ce qui se passe:
  - [http://localhost:8000/humans.php?nom=Alexandre](http://localhost:8000/humans.php?nom=Alexandre)
  - [http://localhost:8000/humans.php?nom=Pierre](http://localhost:8000/humans.php?nom=Pierre)
  - [http://localhost:8000/humans.php?nom=Jennifer](http://localhost:8000/humans.php?nom=Jennifer)
  - teste d'autres variations.
1. Relis le script, essaye de comprendre ce qu'il fait.

Comme tu vois, ce fichier contient principalement du html, avec un petit bout de code qui débute par `<?php` et termine par `?>`. Considère que ce sont des marqueurs qui permettent de mettre du php dans du HTML.

### examinons ce bout de code PHP

```php
<?php echo $_GET['nom']; ?>
```

- ` $_GET ` est une variable.
- en PHP, une variable commence toujours par le sigle `$`
- `echo ` est une fonction fournie par PHP, qui sert à afficher quelque chose (ce qui est à droite de la fonction).
- la ligne se termine par `;`

### Exercice

- En dessous du `h1` à l'aide de la fonction `echo` rajoute une ligne de **php** qui afficherait ceci

```html
<p>La devise de Becode est : </p>```


- Maintenant, crée une variable `$citation` et donne lui comme valeur le texte "In Code We Trust!". Puis, demande à PHP d'afficher le contenu de la variable à l'intérieur d'une balise `<blockquote>`.


## 2ème structure logique: les Conditions

Le monde dans lequel nous vivons est un système dynamique, en évolution permanente.
Parfois, il fait jour, parfois il fait nuit. Parfois la personne en face de nous est un homme, parfois c'est une femme (et parfois c'est officiellement "X"). La météo par exemple : parfois il fait chaud, parfois il fait froid.  Et nous avons appris, que s'il fait froid, on a intérêt à mettre une veste. Si par contre c'est la canicule, on se contentera d'un T-shirt. Pas vrai ?
Et bien, dans notre inconscient, nous avons intégré dans notre manière de prendre des décisions la possibilité que les choses soient variables. Nous devons alors "tester" des hypothèses ("fait-il chaud dehors?"), et si elles se vérifient (si elles sont vraies (en anglais _True_ )) alors on fait ceci ("mettre un T-shirt"), sinon, on fait cela ("mettre un pull").

En programmation, on appelle ces hypothèses des **conditions**. La forme la plus courante est le if/else.

```php
if( condition ) {
  // code à exécuter si la condition est TRUE
  ...
 } else {
   // code à exécuter si la condition est FALSE
   ...
 }
```
### Opérateurs

Pour exprimer tes conditions, tu as à ta disposition plusieurs types d'opérateur:

- `==` : égal à
- `!=` : différent de
- `>` : plus grand que
- `<` : plus petit que 
- `>=` : plus grand ou égal à
- `<=` : plus petit ou égal à


Reprenons notre exemple de la météo. Cela donnerait ceci, en code PHP.

```php
if( $temperature > 21 ) {
  // code à exécuter si la condition est TRUE
  $vetement_du_jour = "T-shirt";
 } else {
   // code à exécuter si la condition est FALSE
   $vetement_du_jour = "Pull-over";
 }
```

#### Exercice:
Change la condition pour qu'elle devienne: "si la température est plus grande ou égale à 15 degrés".

### Exemple simple
![Rail Switch](rail-switch.png)

Si le conducteur du train doit aller à Anvers (`if $destination == 'Anvers' `), le switch doit aller à gauche, si il doit aller à Bruxelles (`if $destination == 'Bruxelles' `), le switch doit aller à droite.

### Exemple avancé

![Game Of Life](http://media3.giphy.com/media/kMhiEKgSaPees/giphy.gif)

Voici un petit programme de type "game of life", qui simule des particules qui s'attirent et se repoussent. X fois par seconde, le script va calculer la nouvelle position de chaque particule rouges en fonction de leur proximité (à une distance inférieure à X pixels) d'une particule verte, elles doivent tendre vers sa position. Cette condition est exécutée X fois par seconde, à une vitesse que notre oeil interprète comme du mouvement.

## Cas pratique: validation d'un champ de formulaire

Quand on construit un script qui doit traiter un formulaire, on doit effectuer des vérifications, dans l'hypothèse d'une erreur humaine ou d'une tentative de hacking.
Par exemple, on doit vérifier qu'une variable obligatoire a bien été remplie. On pourrait exprimer la condition ainsi: 

```PHP
$fullname = $_GET['fullname'];

if ( empty($fullname) == true ){
  echo "Vous avez oublié d'indiquer votre nom.";
}
```

As-tu deviné ce que fait la fonction empty() ?

Il existe d'autres manières d'exprimer cette condition "n'est pas vide". Expore les fonctions PHP suivantes:
- ` strlen() `
- `filter_var()`

## Mise en pratique

- Crée une branche "validation-php" de ton projet
- Sur papier, exprime chacune des conditions de validation de ton formulaire de support technique en syntaxe PHP.
- Tout au début de ton script, écris le code faisant ceci (dans l'ordre):
```
Si le formulaire a été soumis:
  L nettoie chaque champ
  L vérifie que chacun des champs obligatoires ne sont pas vides (un à la fois)
  L à la moindre erreur, effectue la fonction `die("Message d'erreur.");`  
  (va voir la doc pour savoir ce qu'elle fait.)
Sinon, affiche le formulaire.
```
Accroche-toi, c'est pas évident au début. En même temps, rassure-toi: tu vas faire cela souvent, donc cela va rentrer par la porte arrière, si cela ne rentre pas par la porte avant :D. Evite le copier-coller, cela ralentit l'apprentissage.

Astuce: représente d'abord le flux logique de ton script en UML (Universal Modelling Language: flèches et boites contenant des verbes).

![Giphy](https://media0.giphy.com/media/gpDtMjkONKp7a/giphy.gif)
