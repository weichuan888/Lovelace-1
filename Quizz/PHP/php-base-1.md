# QUIZZ / PHP

- Parmi les variables suivantes, lesquelles ont un nom valide en PHP:  
`mavar`, `$mavar`, `$var5`, `$_mavar`, `$_5var`, `$__élément1`, `$hotel4*` ?

- Quelle est la différence entre `$a=$b` et `$a==$b` ?
- Par quel caractère doit se terminer une ligne de php?
- Que donnera cette ligne : `echo "Hello" + " World";` ?
- Quelle est la bonne syntaxe:  
 		- `<?php echo Hello World; ?>`  
		- `<?php echo("Hello world"); ?>`  
		- `<?php echo "Hello World": ?>`  
		- `<?php echo 'Hello World'; ?>`  
		- `<?= "Hello World"; ?>` 
 
- Que retournera ce petit script ?

```php  
$Hour = 15;
$hour = 3;
echo ($hour == $hour) ? "vrai": "faux";
```

- Et celui-là ?

```php  
$Hour = 15;
$hour = 3;
echo ($hour == $Hour) ? "vrai": "faux";
```

-  Comment appelle-t-on ce type de condition ?

```php  
echo ( $saison == 'été' ) ? "Aller à la mer.": "Faire de la luge.";
```


- Quelle est la différence entre:  
		- `$a = 10;`  
		- `$a = "10";`  
		- `$a = array (10); `   

	(**Tip**: utilise la fonction `var_dump($a);` pour vérifier chacune de ces expressions.)

- Que va afficher ce petit programme ?

```php  
$a = 10;  
$b = 2;  
echo $a + $b;  
```

- Et celui-ci ? 

```php  
$a = 10;  
$b = 2;  
echo $a * $b;  
```

- Et celui-là ? 

```php  
$a = 10;  
$b = 2;  
echo $a - $b;  
```

- Et celui-ci, donc ? 

```php  
$a = 10;  
$b = 2;  
echo $a . $b;  
```

- Que va afficher ce programme-ci, s'il est 10h23 du matin au moment où on l'exécute?

```php  
$hour = date('H');
if ($hour > 17){
	echo "Bonne soirée!";
} elseif ($hour > 13){
	echo "Bon après-midi!";
} else{
	echo "Bonjour!";
}
```
- Et que va-t-il afficher s'il est 15h02 au moment où on l'exécute?

 -----=== Fin du quizz ===-----


![Giphy](https://media2.giphy.com/media/F6CoHaGTogRTW/giphy.gif)