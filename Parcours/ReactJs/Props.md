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

Pour notre App, on n'a un componant pour afficher les todos mais il nous faut aussi un component pour les créer et garder une logique de séparation des composants. on va l'appeler <TodoForm /> dans App.

On va faire un formulaire dans une div dans lequel il va y avoir deux choses (un input type text et un boutton).

```HTML
<div className="liste">
    <form>
        <input type="text"/>
        <button>Ajouter</button>
    </form>
</div>
```

Pour le moment rien ne se passe. L'idéal serais que à chaque fois que l'on execture notre button qu'il ajoute une todo donc que à chaque fois qu'on appuie sur le boutton il l'ajoute à notre todoApp. On va lui passer un props aussi nomé onNewTodo. Dans ce props on peut passer aussi des fonctions.

```JS
class App extends Component {
  onNewTodo(todo){
    console.log(todo);
  }
  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bonjour</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoForm onNewTodo={this.onNewTodo} />
        <List todos={["faire une todo", "finir d'écrire le rdm"]} />
      </div>
    );
  }
}
```

Dans le component ToDoForm, nous avons un input et un boutton pour ajouter. Ce qu'on veux c'est que lorsque l'on click sur le boutton, on recupère la valeur dans le input et que nous la passons au component parent. On va utilisé le "ref" dans le input. C'est un attribut qui va recevoir une fonction, un objet, une simple chaine de caractère,...  qui va donner un nom pour permettre de l'utiliser plus tard.

```JS
<input type="text" ref={(input) => this.ToDoTitle = input} />
```

le "(input)=>" est une nouvelle facon de faire une fonction en JavaScript ES6, faire function input(){this.ToDoTitle = input} reviens à faire la même chose. On va ajouter une function au button qui va arreter l'evenement en cours et nous afficher le contenu de la console.

```JS
AddTodo(event){ 
    event.preventDefault();
    console.log(this.ToDoTitle.value);
}
```

```JS
<button onClick={this.AddTodo.bind(this)} >Ajouter</button>
```

Forcement on remplace le console.log par une const txt dans la quel on y met la valeur de l'input.
Maintenant on va envoyer à la function parents (onNewTodo) les valeur qu'on à récupérées sous forme d'objet.

```JS
AddTodo(event){
    event.preventDefault();
    const txt = this.ToDoTitle.value;
    this.props.onNewTodo({
        title: txt,
        createdAt: new Date()
    })
}
```