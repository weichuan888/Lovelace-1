# React

## Table des matières

- [installation](./Installation.md)   
- [Introduction](./introduction.md) ←


## Binding et Proptypes

Donc on avais demandé d'ajouter une checkbox devant chaque todoItem, pouvoir les cochers et faire des actions qui vont d'appliquer sur les elements multiple.

Donc pour commencer simplement, on va mettre un input type checkbox dans le component TodoItem et donner à l'input une value qui sera l'index actuel.

```JS
export default class TodoItem extends React.Component {
  render() {
    const todo = this.props.item;
    const index = this.props.index;
    let str = todo.done ? 'Marqué à faire': 'Marqué comme fait ';
    return (
      <div key={index} className="todo">
        <input type="checkbox" value={index} />
        {todo.title}
        <button onClick={() => this.props.toggleTodo(todo, index)}>{str}</button>
      </div>
    );
  }
}
```

A chaque fois qu'on appuie sur un checkbox, on va l'ajouter ou supprimer à une liste que nous pourrons traiter par la suite. On va créer une fonction qui sera appeler à chaque click sur la checkbox. On aura besoin de connaitre son état (donc true ou false) et de son index.

```JS
addToList(index, event){
    console.log(index);
    console.log(event);
}

<input type="checkbox" value={index} onClick={(e) => this.addToList(index, e.target.checked)} />
```

Alors, nous devons avoir une liste dans la quel avec l'ensemble des todos qui select mais dès que l'on commence à modifier ou faire s'est changement là, on se rend compte qu'on les fais au mauvais endroit. On ne doit pas faire ce traitement addToList dans l'item lui même. Ce n'est pas à lui de géré ça. Est ce que c'est la liste de todo qui va le géré ou le composant qui appel la liste des todos ? La première des chose sera de dire que AddToList vient des props. Vu que nous le passons en props, il faut aussi le récupérer dans le composant parent à TodoItem. Pour ce faire, on ajoute à l'appel du component TodoItem, notre fonction addToList et biensure, créer cette fameuse fonction.

```JS
todos.map((todo,index) => {
    return (
    <TodoItem 
        item={todo} 
        index={index} 
        key={index} 
        toggleTodo={this.toggleTodo.bind(this)} 
        addToList={this.addToList.bind(this)} 
    />
    )
}

addToList(index, event){
    console.log(index, event);
}
```

Vu que nous voullons ajouter les éléments à une list, on va avoir besoin de la créer. Le component List lui même d'a toujours pas de t'état interne, toutes les données qu'il traite, sont des propriétés. Ce qui veux dire que ou bien on défini un state interne au component ou alors on décide de remonter le tout au component App. On va d'abord le faire ici avant de le move up à son parents. On aura besoin de définir le state dans le constructor.

```JS
constructor(props){
    super();
    this.state={
        selectedTodos: []
    };
}
```

Mon state pour le moment les selectedTodos qui est un tableau vide. Histoire de tester ça, on va afficher le nombre de selectedTodos sur notre page de la même façon que pour les Todos créer. Et bien sure il ne faut pas oublier de modifier la valeur de selectedTodos en fonction du nombre de todo selected. Comme d'habitude dans notre fonction addToList, this.setState() pour modifier le state et on va concatener l'ancienne valeur du state avec la valeur du todo qui viens du props en fonction de son index.

```JS
addToList(index, event){
    if(event){
        this.setState({
        selectedTodos: this.state.selectedTodos.concat(this.props.todos[index])
        })
    }
}
```

Forcement lorsque qu'une valeur est vrai, on l'ajoute au state mais lorsqu'on la deselectionne, elle y reste aussi... Pour la supprimer c'est un peu plus technique. On va devoir savoir quel est l'index de la todo à supprimer et quel est l'index de la todo à supprimer dans la liste que nous avons créer. par exemple, si on ajoute la deuxième todo donc index 1 et que nous voulons la supprimer, l'index 1 dans la liste n'existe pas parce qu'il n'existe pour le moment que là 0. Pour nous aider il existe une fonction en JS pour savoir quel est l'index d'un élément de notre tableau (indexOf()) il faut comparrer quelque chose à notre tableau et si il match avec quelque chose il nous retourne sont index.

```JS
addToList(index, event){
    let _list = this.state.selectedTodos;
    if(event){
      _list.push(this.props.todos[index])
    }
    this.setState({
      selectedTodos: _list
    })
  }
```

Mais tout ça ne résout pas encore totalement notre affaire... Il faut encore retirer les éléments déselectionner plsu ou moins de la même manière qu'avant.

```JS
addToList(index, event){
    let _list = this.state.selectedTodos;
    if(event){
      _list.push(this.props.todos[index])
    }else{
      _list.splice(this.state.selectedTodos.indexOf(this.props.todos[index]), 1);
    }
    this.setState({
      selectedTodos: _list
    })
  }
```
Ce que nous allons faire maintenant, c'est que si on n'a au moins un seul élément selectionner, on affiche un boutton qui nous permettra de faire une action en fonction de cette list.