# React

## Let's start with ReactJS

### Gitting start

Pour commencer avec React, installez l'outil CLI React (Create React App) et exécutez la commande pour créer une nouvelle application:

````
# Install the CLI tool
npm install -g create-react-app

# Create an app
create-react-app my-app-name

# Install Dependencies
cd my-app-name
npm install
````

Pour commencer sans base de fichier et pour bien comprendre, on va retirer toute la base de l'application donc tout ce qu'il y a dans src.

````BASH
cd my-app
rm -f src/*
````

Vous pouvez également tester avec JSFiddle:

[JSFiddle](https://jsfiddle.net/reactjs/69z2wepo/)

## The Basics

Les blocs de construction de base de React sont appelés composants. React utilise principalement ça. Tout l'application construite est une sorte de bloc fait en légo. On créer les différents bloc et l'application les utilises, les assembles les un avec les autres pour en faire l'application. Cependant ces blocs peuvent recevoir des paramètres pour changer de forme ou de couleur.

Voici l'exemple d'un componant tout basique à mettre dans le fichier Welcome.js que vous devez créer dans le dossier src : 

```JS
import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        Welcome
      </div>
    );
  }
}
```

Histoire de décomposer un peu ce qu'il se passe, pour commencer:
- import React, { Component } from 'react'; -> import de la librairie react
- export default class Welcome extends Component -> Création de la class et export de la classe pour l'imbriquer dans d'autre composant
- render() -> fonction dans react qui fais le rendu de la vue.
- <div className="App"> -> className est la même chose que class en html mais react utilise deja le mot class donc petit changement (le comportement est le même)
- (Par convention, le nom du composant, le nom du fichier, le nom de l'import,... s'appel de la même manière et commence par une majuscule pour faire plus simple)

Pour l'instant, sur la page, rien ne s'affiche parce que react n'a pas l'instruction de le faire. Pour ce faire, il faut créer un composant qui va récupérer le composant principal pour l'afficher grace à React-dom le tout dans le fichier index.js que vous créez aussi: 

````JS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';

ReactDOM.render(<Welcome />, document.getElementById('root'));
````
A partir d'ici vous pouvez démarrer le serveur. (n'oubliez pas de créer un index.css)

Pour décomposer encore une fois : 
- import React from 'react'; -> différent que la première fois parce que react n'a pas besoin des components ici
- import ReactDOM from 'react-dom'; -> C'est lui qui gère l'affichage dans le DOM
- import './index.css'; -> import du css (en général c'est le seul endroit où le css s'importe)
- import App from './App'; -> import du componant créer précédement (Il n'est pas écrit App.js et c'est normal, par défaut nodejs le comprend mais si l'extention est différente, il faut le présiser)
- ReactDOM.render(<App />, document.getElementById('root')); -> ReactDOM.render() -> fonction pour afficher quelque chose et prend deux paramètre : 1 : Le composant à rendre, 2 : l'endroit où le rendu ce fera. Dans le dossier public du projet ce trouve un index.html dans le quel il y a qu'une div id root et c'est elle que react selectionne pour afficher l'application.
- './Welcome' ou 'react' -> la différence est que si il n'y a pas de ./, react va chercher dans lees node modules tandis que ./ dis qu'il y a un fichier à la même hauteur. 

## Tout l'interet de react réside dans l'imbrication des composants.

Comme dis juste au dessus, React est un gros légo mais pour le moment l'application n'a qu'une seul pièce.
Créé un deuxième composant appelé Hello dans le ficier Hello.js dans le dossier src:

```JS
import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}
```
Maintenant que le deuxième composant est créer, il faut l'importer et l'appeler dans le premier composant  :
(Pour appeler un composant, comme dans l'index.js (<Composant/>))

```Js
import React, { Component } from 'react';
import Hello from './Hello';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    );
  }
}
```
Si tout va bien, sur le navigateur, il devrait apparaître "Hello".

Ce que react permet aussi, c'est d'envoyer des paramètres d'un composant à un autre de la marière suivante : 

```Js
import React, { Component } from 'react';
import Hello from './Hello';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <Hello parametre={'HelloWorld'} />
      </div>
    );
  }
}
```
Le paramètre à été envoyer au composant enfant et il reste à aller chercher le paramètre de l'autre coté.
(un paramètre en react s'appel un "props")

```JS
import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        {this.props.parametre}
      </div>
    );
  }
}
```

## Let's go to the real react project !

[ReactStart](../readme.md)

![Giphy](https://media1.tenor.com/images/00ecffdc7134e3fa132ebe3505d73ae4/tenor.gif?itemid=6117320)



