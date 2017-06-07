## JavaScript

### Math Object
L'objet Math est un objet natif dont les méthodes et propriétés permettent l'utilisation de constantes et fonctions mathématiques. Cet objet n'est pas une fonction.

Description
Contrairement aux autres objets globaux, Math n'est pas un constructeur. Toutes les propriétés et les méthodes de Math sont statiques.

Pour accéder à la constante PI, on utilise `Math.PI`.
Pour accéder à la fonction sinus, on utilise `Math.sin(x)` où x est l'argument de cette méthode.

Les constantes sont définies avec la précision des nombres réels en JavaScript.

Syntax
```js
var x = Math.PI;            // Returns PI
var y = Math.sqrt(16);      // Returns the square root of 16
```

### Math Object Methods
Method	Description
```js
Math.abs(x)	//Returns the absolute value of x
Math.acos(x)	//Returns the arccosine of x, in radians
Math.asin(x)	//Returns the arcsine of x, in radians
Math.atan(x)	//Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
Math.atan2(y, x)	//Returns the arctangent of the quotient of its arguments
Math.ceil(x)	//Returns the value of x rounded up to its nearest integer
Math.cos(x)	//Returns the cosine of x (x is in radians)
Math.exp(x)	//Returns the value of Ex
Math.floor(x)	//Returns the value of x rounded down to its nearest integer
Math.log(x)	//Returns the natural logarithm (base E) of x
Math.max(x, y, z, ..., n)	//Returns the number with the highest value
Math.min(x, y, z, ..., n)	//Returns the number with the lowest value
Math.pow(x, y) //Returns the value of x to the power of y
Math.random()	//Returns a random number between 0 and 1
Math.round(x)	//Returns the value of x rounded to its nearest integer
Math.sin(x)	//Returns the sine of x (x is in radians)
Math.sqrt(x)	//Returns the square root of x
Math.tan(x)	//Returns the tangent of an angle
```

# Transformation
`parseFloat()`

`parseInt()`
