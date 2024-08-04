# Chapitre : IMPLEMENTATION DE FONCTIONS RECURSIVES EN JAVASCRIPT


# Etude d'un exemple :

Maintenant, discutons d'un problème pratique qui peut être résolu en utilisant la récursivité, comprenons son fonctionnement de base et voyons comment nous appliquons nos règles. Un exemple courant : la factorielle !

Pour calculer la factorielle de n, nous appliquons cette formule :
n! = nx (n-1) x (n-2) x . . . x 2 x 1

Alors la première règle, quelle est la condition de récursivité ici ? On peut se poser la question « Comment calculer la factorielle de n-1 ? » qui se présente comme suit : n-1! = (n-1) x (n-2) x . . . x 2 x 1
Et cela signifie que l'on peut maintenant changer la première formule : n! = nx (n-1)!

Nous avons ici notre récursivité car nous pouvons faire la même chose avec n-1!, n-2!...
Et rappelez-vous
![](https://i.imgur.com/GfCky9G.png)

# Etude d'un exemple :

Deuxième règle, quel est le cas de base ici ? Nous savons que les deux factorielles de 0 sont égales à 1, c'est notre cas de base. Maintenant, ce cas peut-il suffire comme condition d'arrêt ?
Oui, car la récursivité que nous avons trouvée diminue n à chaque appel, et n doit être nul ou positif pour calculer les factorielles. Cela signifie que quel que soit le n que nous choisissons pour calculer les factorielles, il convergera toujours vers le cas de base.

```
FUNCTION fact(n) : INTEGER
VAR 
    results : INTEGER;
BEGIN
    IF (n = 0) THEN
        results := 1; // results of the factorial is 1
    ELSE
        results := n * fact(n-1); // n! = n * (n-1)!
    END_IF
    RETURN results ;
END

```

# Exécution:

Calcul de 4! :
fait(4) => 4* fait(3) => 4 * 3* fait(2) => 4 * 3 * 2 * fait(1) => 4 * 3 * 2 * 1 * fait(0) => 4 * 3 *2 * 1 * 1 = 24

# Résolution en JAVASCRIPT

```
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial(n - 1)
    else {
        return n * factorial(n - 1);
    }
}

// Test the factorial function
const num = 5;
console.log(`Factorial of ${num} is: ${factorial(num)}`);
```

## Explication:

* La fonction factorielle prend un entier n en entrée.
* Si n est 0 ou 1, la factorielle est 1 (cas de base).
* Sinon, il s'appelle récursivement avec n - 1 jusqu'à ce qu'il atteigne le cas de base.
* Il multiplie n par le résultat de factorial(n - 1) à chaque appel récursif.
* Enfin, il renvoie la valeur factorielle calculée.
