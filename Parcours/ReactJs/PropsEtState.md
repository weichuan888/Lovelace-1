# React

## Table des matières

1. [installation](./Installation.md)
2. [Introduction](./introduction.md) 
3. [Dom](./Dom.md)
4. [Props et State](./PropsEtState.md) ←
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md)
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md)
7. [Binding](./Binding.md)


## Props et State

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
            {this.props.todos.length}
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
            {this.props.todos.length}
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

Alors on va sur notre page et test formulaire. Si tout va bien, il doit afficher: {title: "test", createdAt: Tue Nov 14 2017 15:30:56 GMT+0100 (CET)}.
Pour récapituler:
- On envoie en props la function onNewTodo vers le component TodoForm.
- TodoForm recoit la fonction
- On met à jours notre variable txt lorsqu'on click sur le boutton grace à la fonction AddTodo
- On appel la fonction onNewTodo depuis le props
- On lui passe les paramètres nescessaire
- On execute la function donc le console.log

Bon c'est certain, c'est trop cool mais en vrai ça sert à rien ^^, Maintenant le but va bien sur d'envoyer le tout dans notre autre component List.

Un truc tout simple aurais pu être d'envoyer un table vers l'autre component (nosTodo.push(todo)) mais React à fais quelque chose d'autre pour nous. Un composent à deux types de données:
- Les données propres au composants -> State
- Les donnée qui lui sont passée -> Props
Ce qu'on va faire à la place, c'est que nous allons mettre à jour ce fameux state.
Le state est donc un objet interne à notre component et pour l'utiliser on dois utilisé un constructor et la fonction setState(). Le constructor est une foncion qui va mettre en place les premiers paramètre de notre component.

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
Mais alors pourquoi on a fais this.state.todos.push(todo) tout de suite ? La seul manière que react nous donne pour modifier de state, est la fonction setState(), toute autre tentative sera ignoré. Et maintenant que nous avons un state, nous pouvons le passer dans le component List en props: <List todos={this.state.todos} />
Si on test, on remarquera que ça ne fonctionne pas parce que ça ne fonctionne pas... Cannot read property 'todos' of undefined. On n'envoie pas le bon "this" a notre fonction et pour se faire, il faut bind(this) pour la fonction. 

```JS
<TodoForm onNewTodo={this.onNewTodo.bind(this)} />
```

Gardez bien en tête le state et le props qui sont deux éléments très très important dans react. Le props permet de passé des informations d'un component à un autre que ce soit un objet, une variable, une fonction, le state, ... Le state lui est un objet qui reste juste à portée de notre component et on peut le modifier uniquement avec le setState().

Avant de passé à la suite, il existe une extention pour react qui permet de voir comment il fabrique notre vue. C'est le react dev tools. Une fois installer, dans l'inspecteur, il y a un nouvel onglet qui est apparut (c'est le dernier donc il est peut être cacher). Avec ça, on peut voir les components de la vue et les props qui lui sont passé et aussi l'état du state :)

![Giphy](https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif)

Rendez-vous à la prochaine leçon: [Interaction entre les components P1](./InteractionEntreComponentPartie1.md).