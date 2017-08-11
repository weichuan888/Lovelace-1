# Exercice PHP: questionnaire "suis-je nomophobiaque?"



## Mission
Voici un article terminant par un test permettant au lecteur de vérifier s'il est atteint de nomophobie ou pas.
Actuellement, le lecteur doit effectuer le calcul du test manuellement pour savoir s'il/elle est nomophobe ou pas.  

Ta mission: 
**Construis une page web simple et élégante, terminant par un formulaire permettant au lecteur de faire le test en choisissant simplement sa réponse parmi les réponses proposées.
Lorsqu'il envoie le formulaire, ton script doit calculer les points et afficher le diagnostic. Le système de point est indiqué dans l'article.**

### Contraintes

- Nom du repo: `nomophobie-questionnaire`
- Au niveau du design visuel, n'en fais pas des caisses: on veut juste une page simple, propre, facile à lire et à utiliser. Il s'agit d'une page web proposant un article destiné à être lu, pas une oeuvre d'art exposée au Louvre dans la galerie "Art Conceptuel". **Donc :** utilise un framework CSS au choix, retouche juste les couleurs et les polices de caractères. Vise à faciliter la lecture (donc attention au bruit visuel, à la hiérarchie visuelle (titres, sous-titres...). Propre et simple.
- Le résultat du test doit s'afficher à proximité du bouton envoyant le formulaire (car c'est à cet endroit que l'utilisateur a son attention, vu qu'il vient de cliquer sur ce bouton).
- Tu as vu tout ce qui est nécessaire pour réaliser cet exercice. Si tu es calé(e), revois le code des projets précédents, refais le parcours PHP. 
- Terminé? Fais-le circuler autour de toi / tes réseaux sociaux afin de récolter des réponses.
- Afin de le faire évaluer par les coachs, [remplis ce formulaire](https://goo.gl/forms/T3jxf0w1FAhrkMn53).


### Bonus, si tu trouves ceci trop facile
- géolocalise le visiteur ( propose lui de sélectionner sa commune (données à convertir en SQL [ici](http://www.bpost2.be/zipcodes/files/zipcodes_num_fr.xls) )
- Stocke les réponses dans une base de données et modifie le formulaire de manière à générer un écran statistique permettant d'afficher un "chart" des villes ayant le plus de nomophobes.
- Affiche ce graphique uniquement lorsque l'utilisateur a répondu au formulaire, pour qu'il puisse situer sa condition personnelle par rapport à sa commune et voir quelles sont les communes où le phénomène est plus important.
- Propose un autre graphique, cette fois-ci en fonction de l'année de naissance (donc l'âge). Quels sont les tranches d'âge les plus atteintes par la nomophobie?


## Voici l'article en question
(original: http://blogues.radio-canada.ca/triplex/2015/09/08/catherine-mathys-77/ )

Des chercheurs de l’Université de l’Iowa ont mis au point un test pour savoir si l’on souffre de nomophobie. C’est le résultat du mémoire de maîtrise de Caglar Yildirim qui vient d’être publié dans la revue Computers in Human Behavior.

### Qu’est-ce que la nomophobie?
La nomophobie est un mal de l’ère moderne. Il s’est développé avec l’augmentation de l’interaction entre l’homme et les technologies mobiles, en particulier le téléphone.

Avez-vous déjà perdu ou oublié votre téléphone quelque part? Pour certains, l’absence de téléphone s’accompagne d’une poussée d’anxiété qui peut s’avérer très grave. C’est dans le but de mesurer cette nomophobie et d’établir son degré de sévérité que ces chercheurs de l’Université de l’Iowa ont élaboré un questionnaire.

L’étude a été menée en deux phases. La première a consisté en l’exploration qualitative de la nomophobie à travers des entrevues avec neuf étudiants. C’est à la suite de cette étape que quatre dimensions ont été définies : l’incapacité à communiquer, la perte de connectivité, l’impossibilité d’accéder à de l’information et l’abandon de la commodité.

À partir de ces réponses, le questionnaire suivant a été élaboré dans la seconde phase de l’étude.

### Le questionnaire de la nomophobie
Vous devez répondre aux questions suivantes selon une échelle de 1 (fortement en désaccord) à 7 (fortement en accord). Plus votre résultat est élevé, plus le niveau de votre nomophobie est élevé (20 étant le score le moins élevé et 140 étant le score le plus élevé).

1. Je me sentirais mal à l’aise sans un accès constant à de l’information sur mon téléphone cellulaire.
2. Je me sentirais agacé si je ne pouvais pas consulter de l’information sur mon téléphone quand bon me semble.
3. Je me sentirais nerveux si je ne pouvais pas m’informer (actualité, météo, etc.) sur mon téléphone.
4. Je me sentirais agacé si je ne pouvais pas utiliser mon téléphone ou ses fonctionnalités quand bon me semble.
5. Manquer de batterie pour mon cellulaire me ferait peur.
6. Si j’atteignais la limite de mon plan de données, je paniquerais.
7. Si je n’avais pas de signal ou de connexion wifi, je vérifierais constamment mon téléphone pour voir si le signal revenait.
8. Si je ne pouvais pas utiliser mon téléphone, j’aurais peur de rester pris quelque part.
9. Si je ne pouvais pas vérifier mon téléphone pendant quelque temps, je sentirais le besoin de le faire.

**Si je n’avais pas mon téléphone avec moi:**

10. Je serais inquiet de ne pas pouvoir communiquer avec mes amis ou ma famille instantanément.
11. Je serais inquiet de ne pas pouvoir être joint par mes amis ou ma famille.
12. Je serais inquiet de ne pas pouvoir recevoir de messages texte ni d’appels.
13. Je me sentirais anxieux de ne pas pouvoir garder le contact avec ma famille ou mes amis.
14. Je serais inquiet de ne pas savoir si quelqu’un essaie de me rejoindre.
15. Je me sentirais anxieux de savoir que ma connexion constante avec mes amis et ma famille est interrompue.
16. Je serais inquiet d’être déconnecté de mon identité en ligne.
17. Je serais mal à l’aise de ne pas pouvoir rester à jour dans l’actualité de mes réseaux sociaux.
18. Je serais mal à l’aise de ne pas pouvoir recevoir les notifications de mes connexions et de mes réseaux en ligne.
19. Je me sentirais anxieux de ne pas pouvoir vérifier ma boîte de courriels.
20. Je me sentirais bizarre parce que je ne saurais pas quoi faire.

Alors, qu’est-ce que ça donne?


