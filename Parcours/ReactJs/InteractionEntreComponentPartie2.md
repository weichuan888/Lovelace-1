# React

## Table des matières

1. [installation](./Installation.md)
2. [Introduction](./introduction.md) 
3. [DOM](./Dom.md)
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) ←
7. [Binding](./Binding.md)

## Interaction entre component

Nous avons quelque chose de fonctionnel à présent mais ce n'est pas idéal de pouvoir modifier l'état de notre todo en cliquant n'importe où sur la div... Et le code n'est pas super propre... Nous allons voir comment il est possible d'améliorer tout ça.

Créons un bouton dans la div du component `List`. Puis changeons l'emplacement du `onClick` de la div et le c/c dans le bouton et le texte du bouton devient la valeur d'une variable contenant une variable ternaire des `todo.done`.

Ce qu'on va faire aussi, c'est au lieu de créer pleins de div et de logique dans une map, c'est plutôt créer un component et boucler dessus en lui envoyant les données nécessaire. Cette fois-ci tu as les connaissances suffisantes pour faire ça toi-même ;)  
(N'oubliez pas de vider le champ du formulaire au passage)

## Attention au bind(this)

Quand on est dans un objet javascript, l'exécution se porte toujours dans le cadre ou la portée d'un objet. Il y a différentes manières d'appeler une fonction qui font que l'on peut spécifier le contexte dans lequel `this` est défini ou le contexte dans lequel une fonction est executée. 

En fonction de la manière dont est appelée une fonction, la valeur de `this` peut changer. Donc pour simplifier, si on passe une fonction en props par exemple et qu'on l'exécute dans un autre component, l'utilisation du `bind(this)` permettra de set le `this` en fonction de là où on l'appelle et non de là où il est vraiment.

## Dans le prochaine chapitre

On verra comment faire en sorte mettre une checkbox devant chaque todo, lorqu'on coche sur au moins une checkbox on affiche un bouton et si on en sélectionne plusieurs, on pourra toutes les validées en même temps.

Essayez de le faire vous-même aussi et on corrige à l'exo suivant.

![Giphy](https://media.giphy.com/media/3o6fJ5z2bgCLBshZUA/giphy.gif)

Rendez-vous à la prochaine leçon : [Binding](./Binding.md).
