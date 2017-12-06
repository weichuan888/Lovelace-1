# React

## Table des matières

1. [Installation](./Installation.md)
2. [Introduction](./introduction.md) 
3. [DOM](./Dom.md)
4. [Props et State](./PropsEtState.md) ←
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md)
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md)
7. [Binding](./Binding.md)


## Props et State

Un élement hyper important de React, c'est les **props** ! Le props est un paramètre qui nous permet de faire passer des informations d'un élément à un autre. Les paramètres que l'on peut envoyer peuvent être simplement une variable ou même une fonction.

La syntaxe de base pour envoyer un props :

```JS
var valeur = 'bonjour';
<List NomDuProps={valeur}/>
```

On appelle le component puis on lui passe des paramètres comme une balise en HTML. Ici le nom du props est : "NomDuProps" et sa valeur est le contenu de la variable valeur.

Pour récupérer la valeur du props, une fois dans le component List appelé juste au-dessus, n'importe où dans la class, on utilisera :
```JS
var test = this.props.NomDuProps;
console.log(test);
```
Pour finir, dans la console, il affiche "bonjour".

Pour notre application, on va créer une ToDoList. Pour ce faire, dans le component App on va ajouter un component `List`. Pour le moment, il n'affiche pas grand chose.

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

(N'oubliez pas de l'importer dans App et d'importer React dans la list ; ) )

Pour passer des valeurs d'un component à un autre, il faut simplement ajouter :

```JS
<List NomDuProps={valeur} NomDuProps2={valeur2} />
```
Pour afficher les données qui sont passées au composant depuis un autre :

```JS
export default class List extends React.Component {
  render() {
    return (
        <div className="liste">
            {this.props.todos.length}
        </div>
    );
  }
}
```

Ici nous avons afficher quelque chose de dynamique dans le render avec l'HTML. Lorsque on veut afficher le contenu d'une  variable dans le return, on utilisera `{  }`. On peut également créer des fonctions dans notre component pour traiter les informations qui nous sont envoyées.

```JS
export default class List extends React.Component {
  render() {
    function test(){
      return 'bonjour';
    }
    return (
        <div className="liste">
            {this.props.todos.length}
            {test()}
        </div>
    );
  }
}
```
Les informations passées en paramètres sont accessible avec l'attribut props. 

Pour notre App, on a un component pour afficher les todos mais il nous faut aussi un component pour les créer et garder une logique de séparation des composants. On va l'appeler `<TodoForm />` dans App.

On va faire un formulaire dans une div dans lequel il va y avoir 2 choses : un input type text et un bouton.

```HTML
<div className="liste">
    <form>
        <input type="text"/>
        <button>Ajouter</button>
    </form>
</div>
```

Pour le moment, rien ne se passe. L'idéal serait que à chaque exécution de notre button qu'il ajoute une todo donc que à chaque fois qu'on appuie sur le boutton il l'ajoute à notre todoApp. On va lui passer un props aussi nommé `onNewTodo`. Dans ce props, on peut passer aussi des fonctions.

````JS
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
````

Dans le component `ToDoForm`, nous avons un input et un bouton pour ajouter. Nous voulons recupèrer la valeur dans l'input lorsqu'on clique sur le bouton. Une fois récupérée, on la passe dans le component parent. On va utiliser le `ref` dans l'input. C'est un attribut qui va recevoir une fonction, un objet, une simple chaîne de caractères,...  qui va donner un nom pour permettre de l'utiliser plus tard.

```JS
<input type="text" ref={(input) => this.ToDoTitle = input} />
```

Le `(input)=>` est une nouvelle façon de faire une fonction en JavaScript ES6, faire `function input(){this.ToDoTitle = input}` revient à faire la même chose. On va ajouter une function au bouton qui va arrêter l'événement en cours et nous afficher le contenu de la console.

```JS
AddTodo(event){ 
    event.preventDefault();
    console.log(this.ToDoTitle.value);
}
```

```JS
<button onClick={this.AddTodo.bind(this)} >Ajouter</button>
```

Forcément, on remplace le console.log par une const `txt` dans laquelle on y met la valeur de l'input.
Maintenant on va envoyer à la fonction parente (`onNewTodo`) les valeurs qu'on a récupérées sous forme d'objet.

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

Alors on va sur notre page et test formulaire. Si tout va bien, il doit afficher : `{title: "test", createdAt: Tue Nov 14 2017 15:30:56 GMT+0100 (CET)}`.

### Pour récapituler
- On envoie en props la function `onNewTodo` vers le component `TodoForm`
- `TodoForm` reçoit la fonction
- On met à jour notre variable `txt` lorsqu'on click sur le boutton grace à la fonction `AddTodo`
- On appelle la fonction `onNewTodo` depuis le props
- On lui passe les paramètres nécessaires
- On execute la function donc le console.log

Bon c'est certain, c'est trop cool mais en vrai ça sert à rien ^^. Maintenant  on va envoyer le tout dans notre autre component List.

Un truc tout simple aurait été d'envoyer un table vers l'autre component (nosTodo.push(todo)) mais React a fait quelque chose d'autre pour nous. Un composent à deux types de données :
- Les données propres aux composants -> **State**
- Les données qui lui sont passées -> **Props**

Ce qu'on va faire à la place, c'est que nous allons mettre à jour ce fameux state.
Le state est donc un objet interne à notre component. Pour l'utiliser, on doit utiliser un constructor et la fonction `setState()`. Le constructor est une foncion qui va mettre en place les premiers paramètres de notre component.

```JS
constructor(props){
    super(props);
    this.state = {
        todos:[]
    };
}

onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList });
}
```
Mais alors pourquoi on a fait `this.state.todos.push(todo)` tout de suite ? 

La seule manière que React nous donne pour changer de state, est la fonction `setState()`, toute autre tentative sera ignorée. Et maintenant que nous avons un state, nous pouvons le passer dans le component List en props : `<List todos={this.state.todos} />`
Si on teste, on remarquera que ça ne fonctionne pas parce que ça ne fonctionne pas... *Cannot read property 'todos' of undefined*. On n'envoie pas le bon "this" à notre fonction et pour se faire, il faut bind(this) pour la fonction. 

```JS
<TodoForm onNewTodo={this.onNewTodo.bind(this)} />
```

Gardez bien en tête que le state et le props qui sont deux éléments très très importants dans React. 

Le **props** permet de passer des informations d'un component à un autre que ce soit un objet, une variable, une fonction, le state, ... Le **state** lui est un objet qui reste juste à portée de notre component et on peut le modifier uniquement avec le setState().

Avant de passer à la suite, il existe une extention pour React qui permet de voir comment il fabrique notre vue. C'est le React dev tools. Une fois installé, dans l'inspecteur, il y a un nouvel onglet qui est apparu (c'est le dernier donc il est peut être caché). Avec ça, on peut voir les components de la vue, les props qui lui sont passés et l'état du state :)

![Giphy](https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif)

Rendez-vous à la prochaine leçon : [Interaction entre les components P1](./InteractionEntreComponentPartie1.md).
