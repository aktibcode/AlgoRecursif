# Chapitre : DIFFERENTS TYPES DE RECURSIVITE


# Les différents types de récursivité

Plusieurs types de récursivité peuvent être présentés dans les algorithmes, cela dépend de comment, où et combien d'appels nous avons dans notre solution. Nous pouvons citer le type suivant :

1. Récursivité terminale : la fonction se termine par un seul appel récursif.
2. Récursivité multiple : si l'un des cas traités est résolu avec plusieurs appels récursifs.
3. Récursivité croisée ou mutuelle : deux algorithmes sont mutuellement récursifs si l'un utilise l'autre et vice versa.
4. Récursivité imbriquée : si la fonction contient un appel à elle-même en tant que paramètre.

Ne vous inquiétez pas, nous verrons quelques exemples de chaque type dans la suite.

![](https://i.imgur.com/a8OqzIs.png)

# Les différents types de récursivité

De plus, certains paradigmes algorithmiques (techniques de résolution de problèmes) utilisent la récursivité, le plus populaire est Divide and Conquer qui résout un problème en utilisant les trois étapes suivantes :

* Diviser : Diviser le problème donné en sous-problèmes de même type et de même taille.
* Conquérir : Résolvez ces sous-problèmes de manière récursive.
* Combiner : Combinez les réponses de manière appropriée.

![](https://i.imgur.com/SgiEsto.png)

Nous voyons quelques exemples de ce type de paradigme dans le SuperSkill précédent, ce sont le tri par fusion, le tri rapide et le tri binaire.

# Algorithme récursif

Le premier exemple que nous allons voir est la somme des éléments d'un tableau.
Nous avons vu cet algorithme de manière itérative. Maintenant, nous allons voir la version récursive.

```
FUNCTION linearSum(arr : ARRAY_OF INTEGER, n :INTEGER) : INTEGER
BEGIN
   IF (n = 1) THEN // when the n is the length of the arr
      RETURN arr[0];
   ELSE
       // here we recall the function with the length - 1
       RETURN arr[n-1] + linearSum(arr,n-1);
   END_IF
END
```

Le deuxième exemple va être la célèbre séquence de Fibonacci de manière récursive.

```
FUNCTION fibbonacci(n:INTEGER) : INTEGER
IF (n=0) THEN
   RETURN 0;
ELSE_IF (n=1) THEN
   RETURN 1
ELSE
    RETURN fibbonacci(n-1) + fibbonacci(n-2)
END_IF
END

```

Notre troisième exemple sera la séquence Hofstadter.
Dans cet exemple, nous allons nous intéresser aux séquences Hofstadter Féminine et Masculine.

```
/*
In mathematics, a Hofstadter sequence is a member of
a family related integer sequences defined by non-linear
recurrence relations.
*/

/*
F (0) = 1
M (0) = 0
F (n) = n-M(F(n - 1)), n > 0
M (n) = n-F(M(n-1)), n>0
*/
FUNCTION hofstader_female(n : INTEGER) : INTEGER
BEGIN
   IF (n = 0) THEN
       RETURN 1
   ELSE
   RETURN n - hofstader_male(hofstader_female(n-1)) ;
   END_IF
END
FUNCTION hofstader_male(n : INTEGER) : INTEGER
BEGIN
   IF (n = 0) THEN
       RETURN 0;
   ELSE
   RETURN n - hofstader_female(hofstader_male(n-1)) ;
   END_IF
END
```

Notre dernier exemple sera la somme binaire qui est la version diviser pour régner de notre premier exemple.

```
FUNCTION binarySum(arr : ARRAY_OF INTEGER,i,n : INTEGER) : INTEGER
BEGIN
   IF (n = 1) THEN
       RETURN arr[i]
   ELSE
       RETURN binarySum(arr,i,n/2)+binarySum(arr,i+n/2,n/2) ;
   END_IF
END
```
