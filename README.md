# funcionmagneto

Nivel 1:
Programa el algoritmo requerido por Magneto.
Magneto quiere reclutar la mayor cantidad de mutantes para poder luchar
contra los X-Mens.
Te ha contratado a ti para que desarrolles un proyecto que detecte si un
humano es mutante basándose en su secuencia de ADN.
Para eso te ha pedido crear un programa con un método o función con la siguiente firma:

isMutant(dna);

En donde recibirás como parámetro un array de Strings que representan cada fila de una tabla de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales representa cada base nitrogenada del ADN.


A T G C G A
C A G T G C
T T A T T T
A G A C G G
G C G T C A
T C A C T G	A T G C G A
C A G T G C
T T A T  G T
A G A A G G
C C C C T A
T C A C T G

No-Mutante	Mutante



Sabrás si un humano es mutante, si encuentras más de una secuencia de cuatro letras
iguales, de forma oblicua, horizontal o vertical.

Ejemplo (Caso mutante):

dna = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
En este caso el llamado a la función isMutant(dna) devuelve “true”.
Desarrolla el algoritmo de la manera más eficiente posible.
