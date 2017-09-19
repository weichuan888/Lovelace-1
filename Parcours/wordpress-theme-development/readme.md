# WordPress
![WordPress Logo](./WordPress-Logo.png)

WordPress est le CMS le plus répandu actuellement sur le web ([source](https://trends.builtwith.com/cms)). On parle de plus de 30% de parts de marché. Cette popularité en fait un outil intéressant pour le déploiement rapide. De plus, il n'est pas rare que votre client aie déjà utilisé WordPress, ce qui a l'avantage qu'il connaisse déjà son futur outil.   

WordPress nécessite PHP et MySQL. À l'origine, c'était surtout un outil pour gérer un blog, donc un journal personnel, en ligne. C'est pourquoi, quand on installe WordPress, on peut par défaut créer des **articles** et des **pages**, et avoir des **commentaires** sous ses articles. Avec le temps, l'outil est devenu hyper flexible et on peut à peu près tout faire.

L'objectif ici est de t'amener à créer un premier site "custom" sur WordPress et à ce que tu te familiarise avec son écosystème.

## Créer un site sur WordPress

WordPress existe comme un service en ligne : http://wordpress.com et comme un package à installer soi-même (http://wordpress.org). C'est de ce dernier dont on va parler ici, car c'est celui là que les agences web utilisent pour faire des sites pour leurs clients.

1. [Installer WordPress sur sa machine locale](./1.installation.md)  
En gros: il te faut une base de données MySQL et un serveur local.  
2. [Comprendre la terminologie de WordPress](./2.terminologie.md) :  
Différence entre "page" et "article", "plugin" et "thème", "taxonomies", cela implique quoi "faire un site sur WordPress".
3. Effectuer ce briefing, au terme duquel tu auras fait un site tournant sur WordPress

### Briefing "Un thème WordPress"

Nom du repo: `first-wp-theme`

Objectif : Convertir le mini-site de l'interview fait en MVC.

Deadline : Mercredi prochain.

#### Plan d'action, étape par étape :
1. Installer WordPress
2. Grâce à WordPress, tu as à présent un CMS pour gérer ton contenu. Donc crée 5 pages dans le CMS, une pour chaque page de ton site en MVC. Dans chacune des "pages" créées, ajoute le titre et le contenu dans les bonnes "boites". 
3. Ton contenu est maintenant prêt, et s'affiche sur le site mais dans le layout fournit par défaut.
4. Va dans Appearances > Menus et crée un menu contenant tes 5 pages.
6. Va sur [underscores.me](http://underscores.me/) et génère un thème de base.
7. Place les fichiers obtenus dans le dossier `wp-content/themes`
8. Va dans Appearances > Themes et active ton thème.
9. Tadaa! C'est moche, hein ? Normal, c'est un thème de base.
7. Débrouille toi à partir de là pour obtenir un thème qui corresponde exactement à ce que tu avais fait. Utilise le [Codex](https://developer.wordpress.org ) et la [hiérarchie des templates](https://wphierarchy.com) pour t'en sortir.
8. Fais en sorte que le menu que tu as créé dans l'interface de WordPress s'affiche au bon endroit de tes templates :  cherche sur google  "wordpress theme display custom nav menu".

#### Explore...
1. Va dans Appearances > Themes et installe un thème externe 
2. Installe des plugins, par exemple, Yoast SEO.

