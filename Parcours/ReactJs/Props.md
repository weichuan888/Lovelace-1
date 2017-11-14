# React

## Table des matières

- [installation](./Installation.md)   
- [Introduction](./introduction.md) ←


## Introduction

Un element huper important de react, c'est les props ! Le props est un paramètre qui nous permets de faire passer des informations d'un élément à un autre.

Pour notre application, on va créer une ToDoList et donc poru ce faire dans le component App on va ajouter un component List qui n'affiche pas grand chose pour le moment.

```JS
export default class List extends React.Component {
  render() {
    return (
        <div className="liste">

        </div>
    );
  }
}
```

(N'oubliez pas de l'importer dans App et d'importer react dans la list ; ) )

Pour passer des valeurs d'un component à un autre, il faut simplement ajouter:

```JS
<List NomDuProps={valeur} NomDuProps2={valeur2} />
```
Pour afficher les données qui sont passé au composant, depuis un autre:

```JS
export default class List extends React.Component {
  render() {
    return (
        <div className="liste">
            {this.props.todos}
        </div>
    );
  }
}
```

Ici nous avons afficher quelque chose de dynamique dans le render avec l'html. Lorsque on veux afficher le contenu d'une  variable dans le return, on utilisera "{  }" sinon, on peut bien sur créer des fonctions dans notre componant pour traiter les informations qui nous sont envoyés.

```JS
export default class List extends React.Component {
  render() {
    function test(){
      return 'bonjour';
    }
    return (
        <div className="liste">
            {this.props.todos}
            {test()}
        </div>
    );
  }
}
```

Donc les informations passée en paramètre sont accessible avec l'attribut props. 

Pour notre App, on n'a un componant pour afficher les todos mais il nous faut aussi un component pour les créer pour garder une logique de séparation des composants.