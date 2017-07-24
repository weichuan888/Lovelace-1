# Projet: Gestion des présences

## Le besoin
Gérer les présences de tous les apprenants (contrats avec Bruxelles Formation et les autres)

Une **progressive webapp** permettant aux déformateurs de gérer deux aspects :
- encoder d'une simple croix les présences, retards et les départs précoces,
- et importer le plus simplement et rapidement possible les feuilles signées.

### Fonctionnalités clef
- générer la liste pour Bruxelles Formation
- avoir les heures d'arrivée et de départ de chaque apprenant par jour
- l'encodage peut se faire par un formateur et se ferait via une interface tactile dans une interaction rapide : "là", "pas là".
- gérer les excuses justifiées et injustifiées
- avoir une alerte lorsqu'une absence est injustifiée (à partir du lendemain matin de l'absence)
- possibilité de mettre des commentaires
- système de conversion des retards (3 retards injustifiés = 1 absence injustifiée. cf le livret d'accueil des apprenants)
- page d'accueil avec un décompte par étudiant des absences et retards injustifés avec un système de couleur pour indiquer qui frôle l'exclusion (6 absences injustifiées => exclusion)


## Contraintes
- responsive (smartphone, tablet, desktop)
- UX centrée sur les publics-cible (donc les impliquer dans la phase d'étude et la conception de l'UX)
- base de données : MySQL
- Offline-ready via l'implémentation de Service Workers (via upup.js)
- présence de favicons et d'un app icon (http://realfavicongenerator.net/)

## Bonus
- code organisé en MVC (utiliser le [fatfreeframework](https://fatfreeframework.com/))

## Contact client
Alexandre (Teddy en backup)

## Publics-cible
Formateurs BeCode : Teddy, Alexandre, Emily, Eric.

## Production team
Apprenants impliqués, et rôles respectifs.

Repo :  `becode-presences-mvp` 

