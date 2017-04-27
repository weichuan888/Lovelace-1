# PHP:  Variables et Conditions


## Programmer = manipuler de l'information

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

Tu y es arrivé(e)? Bravo! La suite en mode "live coding" avec Alex...
