# PHP

## PHP : "Hypertext Preprocessor"
Logiciel qui tourne du côté **Backend**, càd. au niveau du _serveur web_. (Le **Frontend** désigne à contrario ce qui se passe du côté _Client_ càd. le _navigateur_).

PHP permet au Serveur Web de "réfléchir avant de parler" et en informatique, "réfléchir" c'est calculer, càd, manipuler des informations et les retourner au Client (le navigateur) dans n'importe quel format (très souvent: du HTML, du XML, du JSON, voir du texte simple, du CSS, du javascript...).

## Pourquoi utiliser du php si cela retourne autre chose ?
Parce que cela vous permet de créer des pages de manière **dynamique** plutôt que **statique**.

Par exemple, imagine que tu doives créer une page web permettant de dire "Bonjour!" à chacun des quelque 7 milliards d'habitants vivant actuellement sur la planète.
Cela signifie que tu dois créer 7 milliards de pages html telles que celle-ci, accessibles à une adresse url du style: http://citizens.net/humans/jose-garcia.html

```HTML
<html>
<head>...</head>
<body><h1>Bonjour José Garcia!</h1></body>
</html>
```
...Vous ne seriez pas arrivé à la millième page qu'il vous faudrait déjà en effacer (les décès) et en ajouter (les naissances)... Pas terrible.

Et si vous ne créiez qu'un seul fichier (un "script php") à qui on envoie le nom de l'humain via l'adresse url et qui "crée" l' html dynamiquement?

L'adresse url deviendrait, par exemple,  http://citizens.net/humans/index.php?name=jose-garcia


```PHP
<html>
<head>...</head>
<body><h1>Bonjour <?php echo $_GET['nom']; ?>!</h1></body>
</html>
```
