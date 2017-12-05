# React ChatBox

## Table des matières

1. [installation](./Installation.md) 
2. [Introduction](./introduction.md) 
3. [Dom](./Dom.md) ←
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) 
7. [Binding](./Binding.md)


## Présentation du Projet :

Ici, nous allons voir comment faire une chatBox le tout stocker sur un serveur. Pour illustrer voici un petit exemple : 

[http://la16eme2.freetzi.com/chat/](http://la16eme2.freetzi.com/chat/)

Comme vous l'aurez certainement compris, les messages envoyé par nous sont en blue et ceux des autres sont en gris avec le nom de la personne qui à envoyer le message. Seulement une partie des messages sont stocker sur le serveur et histoire de vous expliquez brèvement le fonctionnement, la gestion de la base de donnée est très simple : La DB est synchronisé avec le state et inversement donc si on modifie le state, il est update vers firebase (un system de db de google) et à l'inverse si on modifie firebase, notre state est modifié.

La deuxième chose à comprendre d'un peu différent d'avant, c'est que nous avons un petit MVC fais aussi en React. Voyons comment le projet est mis en place.

Le projet de base est fourni cette fois si pour installer du moins quelque package nescessaire pour commencer dans de bonne condition.
[projet chatBox](./Chatbox)

Cloner le projet et tape un coup de npm install pour initialiser le projet puis quand il a fini de tourner un petit coup de npm start.

Bien entenfu vu que maitenant vous êtes des pros en React, faites le premier component vous même pour faire le formulaire du chat ;-) 
(N'oubliez pas le CSS qui est déjà fourni, juste l'importer dans index.js)

```JS
<div className="connexionBox">
    <form className="connexion">
        <input type="text" placeholder="Pseudo" required />
        <button type="submit">Go</button>
    </form> 
</div>     
```


![Giphy](https://ressources.blogdumoderateur.com/2013/02/gif-anime.gif)



