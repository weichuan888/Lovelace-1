# React

## Table des matières

- [installation](./Installation.md)   ←
- [Introduction](./introduction.md)


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

Une fois que le package est installé on va créer le projet dans notre dossier react.

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


