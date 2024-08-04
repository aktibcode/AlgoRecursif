# Chapitre : COMPRENDRE LA RECURSIVITE


# Introduction

Nous avons atteint un niveau important dans notre cheminement.

Le prochain outil que nous devons apprendre au cours de notre parcours est l'algorithme récursif. Au cours de cette super compétence, nous allons apprendre :

* Quel est le concept de récursivité ?
* quelles sont les règles de récursivité ?
* Quels sont les différents types d’algorithme récursif ?

<iframe allowfullscreen="true" frameborder="0" src="https://www.youtube.com/embed/ivl5-snqul8"></iframe>

# Concept de récursivité

Processus par lequel une fonction s'appelle elle-même directement ou indirectement, ce qui permet à la fonction d'être répétée plusieurs fois, puisqu'elle s'appelle elle-même pendant son exécution. Cet acte est appelé récursivité et la fonction correspondante est appelée fonction récursive. En utilisant des algorithmes récursifs, certains problèmes peuvent être résolus assez facilement.

La récursivité est souvent considérée comme une méthode de programmation efficace car elle nécessite le moins de code pour exécuter les fonctions nécessaires. Cependant, la récursivité doit être intégrée avec précaution, car elle peut conduire à une boucle infinie si aucune condition n'est remplie pour mettre fin à la fonction.

![](https://i.imgur.com/bXSOW3s.png)

# Quand utilisons-nous la récursivité ?

La récursivité est faite pour résoudre des problèmes qui peuvent être décomposés en problèmes plus petits et répétitifs. Elle est particulièrement adaptée pour travailler sur des choses qui ont de nombreuses ramifications possibles et qui sont trop complexes pour une approche itérative. On peut diviser ce type de problème en deux catégories :

1. Problème P se décomposant en 2 ou plusieurs sous-problèmes de même nature que P mais de moindre complexité.
2. Objet / structure récursive (définition d'une fonction mathématique)

Un bon exemple serait la recherche dans un système de fichiers. Vous pouvez commencer par le dossier racine, puis rechercher dans tous les fichiers et dossiers qu'il contient. Ensuite, vous entrez dans chaque dossier et effectuez une recherche dans chacun des dossiers qu'il contient.

![](https://i.imgur.com/dH5AGTv.png)

# Comment fonctionne la récursivité ?

Une différence majeure entre la récursivité et l'itération réside dans la manière dont elles se terminent. Alors qu'une boucle exécute le bloc de code en vérifiant à chaque fois s'il se trouve à la fin de la séquence, il n'existe pas de fin séquentielle pour le code récursif. Nous arrêtons donc une récursivité d'une autre manière.

Une fonction récursive se compose de deux parties : l'appel récursif et le cas de base (condition d'arrêt).

Le cas de base (ou parfois les cas de base) est la condition qui vérifie si nous avons obtenu les informations dont nous avons besoin de notre fonction. Chaque fonction récursive doit avoir au moins un cas de base, même s'il peut y en avoir plusieurs.

Sans le cas de base, la récursivité serait infinie. Comme la boucle horrifiante des sauts de cette petite fille vers la droite, une fonction récursive pourrait continuer indéfiniment sans condition pour mettre fin à ses souffrances.
![](https://imgur.com/Rc5ap2e.gif)
