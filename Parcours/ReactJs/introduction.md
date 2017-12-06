# React

## Table des matières

1. [Installation](./Installation.md)
2. [Introduction](./introduction.md) ←
3. [Dom](./Dom.md)
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md)
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md)
7. [Binding](./Binding.md)


## Introduction
React est une view library créée par Facebook et Instagram. Ca signifie que React se limite à modifier la vue. React utilise principalement un system avec des components. Un component n'est qu'un bout de code qui peut faire un simple boutton ou même toute une application.

![alt text](http://nitrajka.com/wp-content/uploads/2016/08/uimockscript.png)

Dans l'image ci-dessus, on peut voir les différents components de notre application, qui va du simple EmployeeList jusqu'à L'app.

Donc dans cette interface de gestion professionnelle qui est à la fois, sur la partie de gauche est un composant avec un boutton, un header et une liste et chaque element sont un composant mais on peut aussi encore décomposer la liste d'employer par exemple avec le composant EmployeeListItem qui contient un component Profil Photo, Profil nom, Profil post.
On va voir avec react comment on peut partir des petits composants tout simples pour en faire une interface complète.

React n'est pas le seul dans sa catégorie, et d'autres font parfois beaucoup plus que lui. Par exemple Angular ou Backbone qui sont de "vrais" framework MVC. Il y a aussi le nouvel ELM.

## Créer un composant React
Parce que cela vous permet de créer des views de manière **dynamique** plutôt que **statique**.

Pour notre premier composant, on va créer une class :
```JS
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```
Ici, nous avons la toute première syntaxe de React. Elle dit que le composant est un objet qui implémante la method render et qui retourne quelque chose qui ressemble à de l'HTML mais qui ne l'est pas. 

Normalement en HTML, on a la class pour donner un nom à notre élément et pour pouvoir le sélectionner, pour le modifier ou en faire autre chose. Ici on utilisera non pas class mais className parce que React utilise déjà la Class et donc pour le pas le confondre, utiliser className (de toute façon si ce n'est pas le cas ça fera une bonne grosse erreur ;) ). L'HTML que vous voyez là s'appelle donc le JSX (Javascript Extension). Nous allons voir en détails pourquoi React fonctionne de la sorte avec de l'HTML dans du JS.

On va créer un fichier Welcome.js dans le dossier component préalablement créé sans scource et mettre le petit bout de code juste au dessus dans se fichier et regarder ce qu'il se passe dans notre navigateur.

Rien ne se passe et c'est normal ! On a crée un component mais on n'a pas dit à notre application de l'afficher. Pour faire ça, on va retourner à la base de notre component de base qui est App.js et appeler le component Welcome.

Pour appeler un component, rien de plus simple, on va ajouter : 
```JS
<Welcome/> 
```

À l'endroit où l'on veut qu'il s'ajoute (en quelque sorte comme un include) mais dans le render. Tout ce qui se passe dans le render sera tout ce qu'il s'affiche à l'écran.

Et là c'est le bug... 

Il y a quelques règles de base à retenir pour mettre un component dans notre vue :
- Un component doit toujours contenir une method render dans laquelle se trouve un return
- Dans le return, c'est ici qu'on met le JSX mais il ne peut y avoir qu'une seule div principale : que<br/>
```<div className="main">```<br/>
    ```<div className="container">```<br/>
        bonjour<br/>
    ```</div>```<br/>
    ```<div className="container">```<br/>
        Aurevoir<br/>
    ```</div>```<br/>
```</div>``` -> c'est bon <br/><br/>

    mais que <br/>
```<div className="main">```<br/>
    bonjour<br/>
```</div>```<br/> 
```<div className="container">```<br/>
    Aurevoir<br/>
```</div>```<br/>-> c'est pas bon

- Il faut aussi qu'on importe notre componant dans le fichier où l'on veut qu'il apparaisse
- Il faut qu'on exporte le componenet qu'on doit afficher

Donc, dans App.js on ajoute
```JS
    import Welcome from './component/Welcome';
```
(en français : on importe notre class "Welcome" -> de -> ./ (dans le même dossier) -> Welcome (qui revient à dire Welcome.js (React comprend que c'est du JS mais si c'est un autre langage il faut lui présiser)))

Si on ajoute le import ça fait une erreur de moins mais il nous en reste encore deux. 

Dans Welcome.js il faut qu'on lui dise qu'on veut exporter. Il y a 2 manières de faire :
```JS
class Welcome extends React.Component {
    render() {
      return <h1>Hello</h1>;
    }
}

export default Welcome;
```

ou 

```JS
export default class Welcome extends React.Component {
    render() {
      return <h1>Hello</h1>;
    }
}
```

Et là il nous reste qu'une seule étape qui est simplement de dire à notre projet que notre component est un component en ajoutant au-dessus :

```JS
import React from 'react';
```

Vous allez me dire "Diantre, mais comment importer React si on ne dit nulle part où il se trouve ?"
Pour faire simple, quand on ne met pas de ./ avant, par defaut il va chercher dans les node_modules que nodeJS à installer avec le react-create-app et un de ceux-là s'appelle React et il va donc le charger.

Si tout s'est bien passé, on devrait avoir notre application qui tourne correctement avec notre tout premier component !

![Giphy](https://www.acsu.buffalo.edu/~cas7/gifs/react.gif)


Rendez-vous à la prochaine leçon : [Dom](./Dom.md).


