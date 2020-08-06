
//Recorrer la matriz
var matrix = {

    getRightDiagonal : (m) => {
      var p, origin, destiny, x, y
      origin = [];

      // De izquierda a derecha, hasta llegar a la diagonal derecha principal (más larga)
      for (p = 0; p < m.length; p++) {
        destiny = [];
            for(y = p, x = 0; y >= 0; y--, x++)
                destiny.push(m[y][x]);
                origin.push(destiny);
      }

      // Luego se recorre la diagonal derecha principal, desde m[5][0] + m[4][1] + ...
      for (p = 1; p < m[0].length; p++) {
        destiny = [];
            for(y = m.length - 1, x = p; x < m[0].length; y--, x++)
                destiny.push(m[y][x]);
                origin.push(destiny);
      }
      return origin.map((array) => {
      return array.join('');
      });
    },
  
    getLeftDiagonal : (m) => {
      let reverse = matrix.reverseMatrix(m);
      return matrix.getRightDiagonal(reverse);
    },
  
    // Inviertiendo la cadena 
    reverseString : (string) => {
      return string.split("").reverse().join("");
    },
  
    reverseMatrix : (m) => {
      return m.map((string) => {
      return matrix.reverseString(string);
      });
    },
  };

   //Transformar los bloques de la diagonal derecha y de la diagonal izquierda
   class mutant {
    constructor (transformer) {
      this.transformer = transformer;
      // Usando una expresión regular, para encontrar los bloques de letras repetidas
      this.findMutant = function (matrix) {
        let regex = /([ATGC])\1{3,4}/;
        let straight = matrix.filter((string) => {
          return regex.test(string);
        });
        //Para la diagonal derecha, convertir todas las diagonales hacia la derecha para hacerlas filas horizontales
        let right = this.transformer.getRightDiagonal(matrix).filter((string) => {
          return regex.test(string);
        });
        //Para la diagonal izquierda, convertir todas las diagonales hacia la izquierda para hacerlas filas horizontales
        let left = this.transformer.getLeftDiagonal(matrix).filter((string) => {
          return regex.test(string);
        });
        // Concatenar ambas cadenas para verificar si hay alguna fila derecha, y devuelve una nueva cadena
        return straight.concat(right).concat(left);
      };
  
      this.isMutant = function (matrix) {
        let blocks = this.findMutant(matrix);
        return blocks.length > 1;
      };
  
      this.showMutantBlocks = function (matrix) {
        let blocks = this.findMutant(matrix);
        if(blocks.length > 1)
          return blocks;
        else
          return [];
      };
    }
  }
  
 // Array para poder testear
  const dna1 = [
    "ATGCGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "CCCCTA",
    "TCACTG"
  ];
  
  const dna2 = [
    "AAAAGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "CCCCAA",
    "TCACTG"
  ];
  
  const dna3 = [
    "ATGCGA",
    "ATCGTA",
    "AGCGTA",
    "ATGCGA",
    "CCACAA",
    "CACACA"
  ];

  const dna4 = [
    "CCCCGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "TTTTAA",
    "TCACTG"
  ];
  
  const dna5 = [
    "ATGCGA",
    "ATCGTA",
    "AGCGTA",
    "ACGAGA",
    "GGTCAA",
    "TACGAC"
  ];

  mcheck = new mutant(matrix);
  
  console.log(mcheck.isMutant(dna1));
  console.log(mcheck.showMutantBlocks(dna1));
  console.log(mcheck.isMutant(dna2));
  console.log(mcheck.showMutantBlocks(dna2));
  console.log(mcheck.isMutant(dna3));
  console.log(mcheck.showMutantBlocks(dna3));
  console.log(mcheck.isMutant(dna4));
  console.log(mcheck.showMutantBlocks(dna4));
  console.log(mcheck.isMutant(dna5));
  console.log(mcheck.showMutantBlocks(dna5));

  
  
