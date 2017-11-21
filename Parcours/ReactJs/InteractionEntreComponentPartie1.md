# React

## Table des matières

1. [installation](./Installation.md)
2. [Introduction](./introduction.md) 
3. [Dom](./Dom.md)
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) ← 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) 
7. [Binding](./Binding.md)


## Interaction entre component

On n'a vu grace au props et au state le moyen d'incrémenter la valeur du nombre de todos de notre app qui sont afficher grace à un autre component. Maintenant on va faire en sorte d'afficher leurs nom et de les faires passer de "résolut" ou à "à faire". 
La premiere chose a faire va être de changer le comportement du component List. On peut procéder de différente manière: 
- On peut faire une boucle pour afficher à chaque fois le title de la date de notre todo
- On put faire une fonction qui va nous retourné les valeurs du props.

On va plutôt fonctionner avec la deuxième méthode. Donc, dans le JSX on va appeler un fonction showTodos et forcement on lui passe les parametres -> les props. Dans la fonction, on va mapper l'objet qui nous est retourné et retourner une div contenant le title.

```JS
  showTodos(todos){
    return (
      todos.map((todo) => {
        return (
          <div className="todo">{todo.title}</div>
        )}
    ))
  }
```

Pour qu'on puisse gérer le fait qu'une todo est faites ou non, on va rajouter au patners de l'objets todo l'attribut 'done' et le set à false.
Maintenant on va faire en sorte que lorsque l'on click sur la todo, on change l'attibut done et de la passer de false à true et inversement.
Ajouter un OnClick sur la div qui pointe vers une fonction toggleTodo(). Une fonction appeler par un onClick possède un evenement qu'il faut stopper -> preventDefault(). On va passer en paramètre dans l'appel de la fonction la todo.done. Dans la fonction on va juste console.log et normalement on obtient false dans la console du navigateur. Dans la console, il y a aussi une autre erreur : Each child in an array or iterator should have a unique "key" prop. Ce qu'elle veut dire c'est que chaque array que 'lon passe en props dois avoir une key unique. simplement on va passer une key de la même mainère que notre props en lui donnant comme valeur le title du props vu que en théorie on n'a pas deux fois la même chose (oui si on fais plusieur fois la même todo on va retomber sur la même erreur). Au debut on avais dit qu'un composant avait des props et un state. Le state c'est l'ensemble des données qui sont interne et propre au composant lui même, les informations, il peut les changer comme bon lui semble. Le props, sont des informations que d'autres composant lui passe. Les props, le componant ne peut pas les modifiers. Ce qui veux dire que si on veux modifier un todo ou les todos. Il faut demander au componant qui nous les a donné de faire le changement lui même. Ce qui veut dire qu'on ne peux pas faire les changements directement.
On va revenir dans App.js, là où on n'envoie les données. Donc on n'envoie la liste des todos dans le components List. Ce que nous allons faire, c'est envoyer une fonction depuis App vers List et cette fonction se chargera de faire les changements.


```JS
todoToggleState(todo, index){
  console.log(todo, index)
}

<List todos={this.state.todos} onTodoToggle={this.todoToggleState.bind(this)}/>
```

Alors, comment faire pour récupérer le todo de List et de l'envoyer au composant parent ? On sait que l'on doit appeler le fonction envoyé par le props au moment du click et lui donné un paramètre donc le todo à toggle. Mais simplement comme ça, ça n'ira pas. On va avoir besoin de son index qui est créer dans le map cad:
- il faut rajouter un paramètre dans le map,
- il faut récupérer l'index dans la fonction toggleTodo
- l'envoyer au composant parent
- Remplacer la veleur du key par l'index pour pouvoir faire plusieur todo les mêmes.
L'index permettra d'identifier quel todo modifier dans le componant parent.

```JS
todos.map((todo, index) => {
  return (
    <div key={index} className="todo" onClick={() => this.toggleTodo(todo.done)}>
      {todo.title} {todo.done ? 'true': 'false '}
    </div>
)}


toggleTodo(todoDone, index){
  this.props.onTodoToggle(todoDone, index);
}  
```

Donc dans le componant parent, si on console.log todo et index, on peut voir notre todo est sont index relatif qui nous permettra de pouvoir modifier le tout dans le state. On a donc tout les éléments qu'il nous faut pour faire ça.

Dans le componant App on va juste créer une variable (avec let) pour instantier todo, puis on inverse sa valeur pour todo.done à partir de todo.done(donc on toggle quoi). et forcement par après on modifie le state avex les nouvelles valeurs.

```JS
todoToggleState(todo, index){
    let _todo = todo;
    _todo.done = ! todo.done;
    let newTodos =  this.state.todos; 
    newTodos[index] = _todo;
    this.setState({todos: newTodos})
  }
```

Pour récap, si on veux modifier le state depuis un autre component, on peut créer une fonction dans le parents qui permet la modification (setState()), la passer en props à l'enfant, passé en parametre de cette fonction les information nescessaire pour les modifications.

![Giphy](https://media.giphy.com/media/3oEjI1JmchoJMbIJYQ/giphy.gif)

Rendez-vous à la prochaine leçon: [Interaction entre les components P2](./InteractionEntreComponentPartie2.md).