# React

## Table des matières

1. [installation](./Installation.md) ←
2. [Introduction](./introduction.md) 
3. [Dom](./Dom.md)
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) 
7. [Binding](./Binding.md)


## Installation
Pour travailler en react, nous allons avoir besoin d'un environnement de travail principalement basé sur Node js. S'il n'est pas déjà installé, go ont the terminal

```sudo
sudo apt-get update
sudo apt-get install nodejs npm
```

## Create React App
On va maintenant créer un dossier de travail pour React dans lequel on mettra tous les projets.
On va maintenant installer et créer notre projet react avec le terminal.

On va utiliser npm pour installer create-react-app en global. Cette commande est là pour créer le squelette de notre application mais on pourrait très bien le faire à la main.

```create-react-app
npm install -g create-react-app
```

Une fois que le package est installé on va créer un dossier là ou on veux stocker notre appli et faire la commande :

```create-react-app
create-react-app serie
```
- [Plus d'info](https://reactjs.org/docs/installation.html)

Normalement notre application a été générée, on va donc la démarrer.

```strat app
cd serie
npm start
```

Dès qu'on lance la commande, nodejs star l'application sûre [localhost:3000](localhost:3000). Il met en place aussi un system de livereloading pour qu'à chaque fois qu'ont sau un fichier, il met notre appli à jour.

Simplement pour tester, on va aller modifier une ligne dans App.js. On va modifier "Welcome To React" par un autre titre puis checker dans le navigateur que tout ce change automatiquement sans refresh.

![Giphy](https://media.giphy.com/media/pt0EKLDJmVvlS/giphy.gif)

Rendez-vous à la prochaine leçon: [introduction](./introduction.md).
