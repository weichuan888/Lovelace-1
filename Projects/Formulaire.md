# Projet: Formulaire
De une à deux semaines selon la vitesse des octocats.
## Compétences travaillées
- groupe: Maitriser Git (renforcement)
- frontend: css frameworks (initiation)
- backend: PHP programming (initiation aux structures logiques)
- Méthodo: expression d'une solution en chemin logique, via UML (initiation)
- frontend: html sémantique (renforcement)
- frontend: html accessibilité (initiation)

## Situation-problème
La société *Poulette Hackers* ™ vend des kits d'accessoires pour Rasperri Pi à monter soi-même. Elle souhaite permettre à ses utilisateurs de contacter son support technique.
Ta mission: développer un script en php, permettant d'afficher un formulaire de contact et de traiter sa réponse: sanitisation, validation, puis envoi et feedback à l'utilisateur. 
## Critères de performance
- Le formulaire sera du html sémantique, accessible aux non-voyants.
- Le formulaire effectuera un nettoyage (*sanitization*) et une validation *serverside*
- Si la validation est ok, il enverra le contenu du message par email à une adresse spécifiée.
- implémentation de la technique antispam du *honeypot*
- Les messages d'erreur sont bien formulés, de manière à aider l'utilisateur. (lire [The Four H of Writing Error Messages](http://uxmas.com/2012/the-4-hs-of-writing-error-messages) )
## Critères de perfectionnement (à implémenter dans un second temps)
- validation côté client en javascript (via jquery)
- soumission et feedback via Ajax (via jquery)
- exploiter ce projet dans le cadre des 4 ans de Simplon ? ("un formulaire qui envoie du Love à Simplon! sur tw, fb, ..." ??)

## Découpage de la difficulté en séquences pédagogiques
### Séquence 0: Planifier le travail à effectuer
Etude de la demande, UML, prototypage, Git.
### Séquence 1: le formulaire de contact (html)
objectif 1: html sémantique, préparer l' **amélioration progressive**  
objectif 2: html accessible aux non-voyants

### Séquence 2: formulaire de contact (css, via framework css)
Utiliser un framework CSS pour améliorer rapidement le rendu visuel et l'ergonomie de ton formulaire: Zurb Foundation, boostrap, purecss.io ...
### Séquence 3: formulaire de contact (php)
- présentation: architecture serveur/client (transmissif, 10")
- tester un script PHP en local
- **afficher les données brut** reçues du formulaire (utiliser la fonction php `print_r();` ([voir la doc php](http://php.net/manual/en/function.print-r.php) )
### Séquence 4: traiter les données du formulaire (php)
- Animation: "structures logiques de la programmation"    
	- variables
	- manipulation: concaténation, addition, quelques exemples de fonctions utiles...
	- conditions
	- Boucles
- sanitization: neutraliser tout encodage nocif (`<script>`)
- validation: champs obligatoires + Email valide
- Envoi + Feedback