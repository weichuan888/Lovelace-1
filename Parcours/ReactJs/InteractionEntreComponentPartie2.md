# React

## Table des matières

1. [installation](./Installation.md)
2. [Introduction](./introduction.md) 
3. [Dom](./Dom.md)
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) ←
7. [Binding](./Binding.md)

## Interaction entre component

Nous avons quelque chose de fonctionnel à présent mais c'est pas super de pouvoir modifier l'état de notre todo en clickant n'importe où sur la div... Et puis le code n'est pas super propre... ON va voir comment il est possible d'améliorer tout ça.

On va commencer par créer un boutton dans la div du component List puis changer l'emplacement du onClick de la div et le copier/coller dans le button et le texte du boutton deviens la valeur d'une variable contenant une variable ternaire des todo.done.

Ce qu'on va faire aussi, c'est au lieu de créer plein de div et de logique dans un map, c'est plutôt créer un component et boucler dessus en lui envoyant les données nescessaire. Cette fois si tu as les connaissances suffisante que pour faire ça toi même ;)  
(N'oubliez pas de vider le champ du formulaire au passage)

#Attention au bind(this)

Quand on est dans un objet javascript, l'execution se porte toujours dans le cadre ou la porté d'un objet. Il y a différente manière d'appeler une fonction font que l'on peut spésifier le contexte dans le quel this est défini ou le contexte dans le quel une fonction est executer. En fonction de la manière dont est appeler une fonction, la valeur de this peut changer. Donc pour simplifier, si on passe une fonction en props par exemple et qu'on l'execute dans un autre component l'utilisation du bind(this) permettra de set le this en fonction de là où on l'appel et non de la ou il est vraiment.

## Dans le prochaine chapitre

On verra comment faire en sorte mettre une checkbox devant chaque todo, lorqu'on coche sur au moins une checkbox on affiche un bouton et si on en selectionne plusieurs, on pourra toute les validées en même temps.
Essayer de le faire vous même aussi et on corrige à l'exo suivant.

![Giphy](https://media.giphy.com/media/3o6fJ5z2bgCLBshZUA/giphy.gif)

Rendez-vous à la prochaine leçon: [Binding](./Binding.md).