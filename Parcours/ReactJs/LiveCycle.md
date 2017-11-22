# React

## Table des matières

1. [installation](./Installation.md) 
2. [Introduction](./introduction.md) 
3. [Dom](./Dom.md) ←
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) 
7. [Binding](./Binding.md)


## Le cycle de vie d'un component

Un component à un cycle de vie CAD qu'on peut intéragir avec du moment ou il est monté jusqu'au moment où il est détruit sur le DOM, ça veux dire du moment ou il commence à faire son boulot juqu'au moment ou il à fini de faire ce qu'il avais à faire. Pour cela react défini un ensemble d'étape.

- La première étape c'est de dire que le composant est sur le point d'être monté ou ajouté au DOM, si il y a un traitement spécifique que l'on veux faire. Pour faire cela react utilise la fonction : componentWillMount(). Juste avant que le component soit monté, on pourrais faire une requete vers le serveur par exemple.

- Une fois que le component est monté ou ajouté, la fonction componentDidMount est appelé. On pourrais par exemple faire une requete vers un serveur que le component utilisera lui même ou se connecer à un store Redux ou faire une notification quelconque. 

- Une fois que le component est monté et qu'il doit recevoir des props, la fonction componentWillReceiveProps()  est appelé. On peut décider de ce qu'il y a à faire des nouvelles données qui sont envoyé vers le component. Par exemple, on n'a recu de nouvelles données du serveur disant que tels ou tels chose s'est passé. Donc on pourrais le forcé à ce re render. 

- Après cette fonction, viens l'étape componentShouldUpdate(). On sait qu'un component ne change que pour deux raisons: la première est que les props envoyé par le component parents on changer donc il sera recalculé. La deuxième facon de changer un component est d'appelé sa methode setState(), cela implique deux choses : la première c'est de chnager l'état des données intern du composant (le state), la deuxieme c'est de changer le processus de réconciliation (la réconciliation, c'est l'ensemble des étapes ou des calculs ou modifications, que react va faire pour déterminer les changements qui doivent être fait pour réafficher le component). Donc si on veux que notre compoent ignore les modifications, on défini la méthode componentShouldUpdate() avec un return false. Ce qui veux dire que dès qu'il y a un update, on l'annule. Prenont l'exemple d'une notification comme facebook. On pourrais dire que a partir d'un certain nombre de notification, on n'arrête d'incrémenter. On n'a le contrôle total du component pour savoir si il se met à jour ou non.

- Une fois que le componentShouldUpdate return true, cela veux dire que le component se met à jour et pour controller encore tout ça on n'a la fonction componentWillUpdate().  On pourrait dire qu'a chaque fois que le component fait une modification, on n'envoie une requete ou une notification par exemple.

- Une fois que le component est mis à jour, la fonction componentDidUpdate est appelé. Vous commencez à comprendre la mécanique ;)

- La dernière étape du cycle de vie du component est la fonction componentWillUnMout(). C'est quand on décide de retirer un component du DOM. par exemple, l'utilisateur à fini sont travail et à décider de ce deconnecter, au moment où il se déconnecte, on pourrait dire que les components qui permettait d'afficher les notifications se détruit de manière plus propre. Donc avec cette fonction, on donne les instructions à faire avant sa destruction. (c'est l'endroit idéal pour arrêter tout les listners que l'on avait mit.)

## Pour résumer :

- componentWillMount          ->   Avant d'être monté/ajouté au DOM
- componentDidMount           ->   Après être monté/ajouté au DOM
- componentWillReceiveProps   ->   Avant reception de nouvelles données
- componentShouldUpdate       ->   Faire la mise à jour ?
- componentWillUpdate         ->   Avant chaque mise à jour
- componentDidUpdate          ->   Après chaque mise à jour
- componentWillUnMount        ->   Avant d'être supprimer du DOM

Aucune de ces méthodes sont obligatoire, elles sont là que si on à besoin de les utiliser 


![Giphy](https://ressources.blogdumoderateur.com/2013/02/gif-anime.gif)


Rendez-vous à la prochaine leçon: [props](./PropsEtState.md).


