# React

## Table des matières

1. [installation](./Installation.md) 
2. [Introduction](./introduction.md) 
3. [Dom](./Dom.md) ←
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) 
7. [Binding](./Binding.md)


## le Dom
Alors, on n'a vu comment créer un component et en créer un deuxième les uns dans les autres mais on ne sais toujours pas comment et pourquoi les afficher.

React utilise un principe utilisant le "virtual dom". En fait, il va simplement créer une page virtuellement puis seulement l'afficher quand on lui demande.

Ici, dans index.js on import le component App et il y a un ReactDOM.render(<App />, document.getElementById('root'));

Pour faire simple, il créé notre vue et l'affiche à l'emplacement de l'ID root qui se trouve dans index.html


![Giphy](https://ressources.blogdumoderateur.com/2013/02/gif-anime.gif)


Rendez-vous à la prochaine leçon: [props](./PropsEtState.md).


