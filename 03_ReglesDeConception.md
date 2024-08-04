# Chapitre : REGLES DE CONCEPTION


# Algorithmes récursifs

Maintenant, comment s'exécute réellement la récursivité et quelle est la différence avec les algorithmes itératifs. Pour commencer, écrivons quelque chose de simple : une fonction pow(x, n) qui élève x à une puissance naturelle de n. En d'autres termes, elle multiplie x par lui-même n fois. Il existe deux façons de l'implémenter.

**1. Pensée itérative : la boucle for :**

```
FUNCTION pow(x,n : INTEGER) : INTEGER
VAR
    result : INTEGER := 1;
    i : INTEGER;
BEGIN
    FOR i FROM 1 TO n  DO
        result := result *x;
    END_FOR
    RETURN result ;
END
```

**2. Pensée récursive : simplifiez la tâche et appelez-vous :**

```
FUNCTION pow(x,n : INTEGER) : INTEGER
BEGIN
    IF (n = 1) THEN
        RETURN x;
    ELSE
        RETURN x * pow(x, n-1);
    END_IF
END

```

# Algorithmes récursifs

Voyons maintenant comment fonctionnent les appels récursifs dans une machine pour n'importe quel langage de programmation. Pour cela, nous allons regarder sous le capot des fonctions.

Les informations sur le processus d'exécution d'une fonction en cours d'exécution sont stockées dans son contexte d'exécution. Le contexte d'exécution est une structure de données interne qui contient des détails sur l'exécution d'une fonction : où se trouve actuellement le flux de contrôle, les variables actuelles et quelques autres détails internes.

Un appel de fonction est associé à un seul contexte d'exécution. Lorsqu'une fonction effectue un appel imbriqué, les événements suivants se produisent :

1. La fonction actuelle est en pause.
2. Le contexte d'exécution qui lui est associé est mémorisé dans une structure de données spéciale appelée pile de contextes d'exécution.
3. L'appel imbriqué s'exécute.
4. Une fois l'exécution terminée, l'ancien contexte d'exécution est récupéré de la pile et la fonction externe reprend là où elle s'est arrêtée.

![](https://imgur.com/EA5liUi.jpg)

# Algorithmes récursifs

Voyons ce qui se passe pendant l'appel pow(2, 3).

Les informations sur le processus d'exécution d'une fonction en cours d'exécution sont stockées dans son contexte d'exécution.
Le contexte d'exécution est une structure de données interne qui contient des détails sur l'exécution d'une fonction : où se trouve actuellement le flux de contrôle, les variables actuelles, les valeurs.
Un appel de fonction est associé à exactement un contexte d'exécution.
Lorsqu'une fonction effectue un appel imbriqué, ce qui suit se produit :
La fonction en cours est mise en pause.
Le contexte d'exécution qui lui est associé est mémorisé dans une structure de données spéciale appelée pile de contextes d'exécution.
L'appel imbriqué s'exécute.
Une fois terminé, l'ancien contexte d'exécution est récupéré de la pile et la fonction externe reprend là où elle s'est arrêtée.
Voyons ce qui se passe pendant l'appel pow(2, 3).

```
FUNCTION pow(x,n:INTEGER) : INTEGER
VAR
   result : INTEGER;
BEGIN
   IF (n = 1) THEN
       RETURN x;
   ELSE
       result := pow(x, n-1);
       RETURN x* result;
   END_IF
END
```

* **pow(2, 3)**
  Au début de l'appel pow(2, 3) le contexte d'exécution va stocker les variables : x = 2, n = 3, le flux d'exécution est à la ligne 1 de la fonction.
  On peut l'esquisser comme suit :
  * **Contexte : { x : 2, n : 3, à la ligne 1 } pow(2, 3)**
    C'est à ce moment que la fonction commence à s'exécuter. La condition n == 1 est fausse, donc le flux continue dans la deuxième branche de l'instruction if.
    Les variables sont les mêmes, mais la ligne change, donc le contexte est maintenant :
  * **Contexte : { x : 2, n : 3, à la ligne 5 } pow(2, 3)**
    Pour calculer x * pow(x, n - 1), nous devons faire un sous-appel de pow avec de nouveaux arguments pow(2, 2).
  * **pow(2, 2)**
    Pour effectuer un appel imbriqué, JavaScript se souvient du contexte d'exécution actuel dans la pile de contextes d'exécution.
    Ici, nous appelons la même fonction pow, mais cela n'a absolument aucune importance. Le processus est le même pour toutes les fonctions :

1. Le contexte actuel est « mémorisé » en haut de la pile.
2. Le nouveau contexte est créé pour le sous-appel.
3. Lorsque le sous-appel est terminé, le contexte précédent est extrait de la pile et son exécution continue.
4. Voici la pile de contexte lorsque nous avons entré le sous-appel pow(2, 2) :
   * Contexte : { x : 2, n : 2, à la ligne 1 } pow(2, 2)
   * Contexte : { x : 2, n : 3, à la ligne 5 } pow(2, 3)

Le nouveau contexte d'exécution actuel est en haut (et en gras), et les contextes précédents mémorisés sont en dessous.
Lorsque nous terminons le sous-appel, il est facile de reprendre le contexte précédent, car il conserve les deux variables et l'endroit exact du code où il s'est arrêté.
* **pow(2, 1)**
Le processus se répète : un nouveau sous-appel est effectué à la ligne 5, maintenant avec les arguments x=2, n=1.
Un nouveau contexte d'exécution est créé. Le précédent est poussé en haut de la pile.

* Contexte : { x : 2, n : 1, à la ligne 1 } pow(2, 1)
* Contexte : { x : 2, n : 2, à la ligne 5 } pow(2, 2)
* Contexte : { x : 2, n : 3, à la ligne 5 } pow(2, 3)
  Il existe désormais 2 anciens contextes et 1 en cours d'exécution pour pow(2, 1).
  * **La sortie**
    Lors de l'exécution de pow(2, 1), contrairement à avant, la condition n == 1 est vraie, donc la première branche de if fonctionne.
    Maintenant que nous avons tous les résultats dont nous avons besoin, nous allons donc remplacer les appels de fonction dans la pile par le résultat renvoyé, puis nous le retirons de la pile.
