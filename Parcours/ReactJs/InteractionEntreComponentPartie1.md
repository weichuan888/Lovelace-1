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

On a vu grâce au **props** et au **state** le moyen d'incrémenter la valeur du nombre de todos de notre app qui sont affichés grâce à un autre component. Maintenant on va faire en sorte d'afficher leurs nom et de les faire passer de "résolu" ou à "à faire". 

La première chose à faire va être de changer le comportement du component `List`. On peut procéder de différentes manières : 
- Faire une boucle pour afficher à chaque fois le title de la date de notre todo ;
- Faire une fonction qui va nous retourner les valeurs du props.

On va plutôt fonctionner avec la deuxième méthode. Dans le JSX, on va appeler un fonction `showTodos` et lui passer les parametres -> les props. Dans la fonction, on va mapper l'objet qui nous est retourné et retourner une div contenant le title.

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

Pour qu'on puisse gérer le fait qu'une todo est faites ou non, on va rajouter au patern de l'objet `todo` l'attribut `done` et le set à `false`.

Ensuite, on fait en sorte que lorsque l'on clique sur la todo, on change l'attibut `done` et on le passe de `false` à `true` et inversement.

Ajoutons un `onClick` sur la div qui pointe vers une fonction `toggleTodo()`. Une fonction appelée par un `onClick` possède un événement qu'il faut stopper -> `preventDefault()`. On va passer en paramètre dans l'appel de la fonction la `todo.done`. 

Dans la fonction on va juste faire un console.log et normalement on obtient `false` dans la console du navigateur. 

Dans la console, il y a aussi une autre erreur : *Each child in an array or iterator should have a unique "key" prop*. Ca signifie que chaque array qu'on passe en props doit avoir une key unique. Simplement on va passer une key de la même manière que notre props en lui donnant comme valeur le title du props vu que, en théorie, on n'a pas deux fois la même chose (oui si on fait plusieurs fois la même todo on va retomber sur la même erreur). 

Au debut on avait dit qu'un composant avait des props et un state. Le **state** c'est l'ensemble des données qui sont internes et propres au composant lui-même. Il peut changer les informations comme bon lui semble. Le **props**, sont des informations que d'autres composant lui passe. Les props, le componant ne peut pas les modifier. Si on veux modifier un todo ou les todos, il faut demander au componant qui nous les a donné de faire le changement lui-même. Ce qui veut dire qu'on ne peut pas faire les changements directement.

On va revenir dans App.js, là où on envoie les données. On envoie la liste des todos dans le component List. Ce que nous allons faire, c'est envoyer une fonction depuis App vers List et cette fonction se chargera de faire les changements.


```JS
todoToggleState(todo, index){
  console.log(todo, index)
}

<List todos={this.state.todos} onTodoToggle={this.todoToggleState.bind(this)}/>
```

Alors, comment faire pour récupérer le todo de List et l'envoyer au composant parent ? On sait qu'on doit appeler la fonction envoyée par le props au moment du click et lui donner un paramètre donc le `todo` à `toggle`. Mais simplement comme ça, ça n'ira pas. On va avoir besoin de son index qui est créé dans le map :
- il faut rajouter un paramètre dans le map,
- il faut récupérer l'index dans la fonction `toggleTodo`
- l'envoyer au composant parent
- Remplacer la valeur du key par l'index pour pouvoir faire plusieurs todo identiques.
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

Donc dans le componant parent, si on console.log `todo` et `index`, on peut voir notre todo et son index qui nous permettra de pouvoir modifier le tout dans le state. On a donc tous les éléments qu'il nous faut pour faire ça.

Dans le componant `App` on va juste créer une variable (avec let) pour instantier `todo`, puis on inverse sa valeur pour `todo.done` à partir de `todo.done` (donc on toggle). Logiquement, ensuite, on modifie le state avec les nouvelles valeurs.

```JS
todoToggleState(todo, index){
    let _todo = todo;
    _todo.done = ! todo.done;
    let newTodos =  this.state.todos; 
    newTodos[index] = _todo;
    this.setState({todos: newTodos})
  }
```

Pour récap, si on veut modifier le state depuis un autre component, on peut créer une fonction dans le parent qui permet la modification `(setState())`, la passer en props à l'enfant, passer en paramètre de cette fonction les informations nescessaires pour les modifications.

![Giphy](https://media.giphy.com/media/3oEjI1JmchoJMbIJYQ/giphy.gif)

Rendez-vous à la prochaine leçon : [Interaction entre les components P2](./InteractionEntreComponentPartie2.md).
