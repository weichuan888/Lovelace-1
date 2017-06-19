# To-do list + SQL, en php

**repository:** `6-todolist-sql`
**deadline:** Vendredi.

Crée un outil de gestion de tâches basique et fiable. L'interface est subdivisé en deux parties:  

- partie supérieure: la liste des tâches à faire, avec pour chaque tâche, une checkbox. 
Lorsqu'une tâche est effectuée, on coche la tâche puis on appuye sur un bouton "Enregistrer" qui rafraichit la liste en barrant la tâche terminée et en la mettant dans la zone "archivée".
- partie inférieure: un petit formulaire permettant d'ajouter une tâche (un champ "textarea" et le bouton "submit").

![Prototype](todolist.png)

## Objectif principal

- Lorsqu'on traite les formulaires il faut, après sanitisation et validation, stocker les tâches dans une table "todos" d'une base de données "todolist".
- Lorsqu'on affiche les tâches on va les rechercher dans la base de données.

## Bonus
- Via Javascript, cacher le bouton "Enregistrer" et sauvegarder la liste via ajax lorsqu'une checkbox change d'état (selected / unselected).
- Via Javascript, pouvoir réorganiser l'ordre vertical des tâches, via drag and drop.
- **Schnell!** Ajoute une fonctionnalité de "rappel": on pourrait spécifier une date + heure et si celle-ci est dépassée, afficher la tâche en rouge flashy bien visible ainsi qu'une alerte javascript invitant l'utilisateur à exécuter la tâche immédiatement.
- **Search** Ajoute une fonctionnalité de "recherche": via un champ texte, on pourrait chercher des tâches contenant le texte recherché.
- **Tri** ajouter une fonctionnalité de "tri": tri par date d'échéance, tri par nom (asc/desc).

## Superbonus Godmode si tu as encore du temps
- Parse le texte de la tâche à la recherche de #hashtags. Si il y en a, les convertir en lien de recherche pour ce hashtag (donc exploitant la fonctionnalité Search faite plus .

## Ce qui est nouveau

- Communiquer avec une base de données MySQL en PHP, via la librairie PDO.

## Ce qui est déjà connu
- tableau
- boucles
- conditions
- Ce qu'est une fonction et comment l'utiliser
- le principe logique d'écriture/lecture de données.

## Remise
- nom du repository: `6-todolist-sql`
- [en suspens] publie ton app quelque part (plus d'instructions à ce sujet bientôt).

## Deadline
Vendredi matin.
## Planning
Voici un planning réaliste auquel tu dois arriver à la fin de chaque jour.

### Jour 1
- Avoir créé son repo et dossier de travail local.
- Avoir lu et compris l'utilisation de PDO. Invente-toi un petit exercice simple. Utilise PhpMyAdmin pour créer et nourrir une base de données de ton cru.
- Avoir committé son évolution, au minimum à la fin de la journée.

### Jour 2
- Formulaire de création des tâches est fonctionnel
- Affichage des tâches dans les 2 zones de contenu (A faire/Archive) selon leur état.
- Avoir committé son évolution, au minimum à la fin de la journée.

### Jour 3
- Création d'une branche "Bonus"
- Exécution des objectifs Bonus
- Si OK, la merger à la branche "Master"

### Vendredi matin

- mise en ordre du repo
- Remise

