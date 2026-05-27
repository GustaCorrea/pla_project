const { somaMatrizes, subtracaoMatrizes, multiplicacaoEscalar } = require('./src/operacoesBasicas');
const { multiplicaMatriz } = require('./src/produtoMatriz');
const { determinante } = require('./src/determinantes');

// Definindo as matrizes de teste (Ordem 2x2)
const matrizA = [
    [5, 8],
    [3, 2]
];
const matrizB = [
    [1, 4],
    [2, 1]
];
const escalar = 3;

console.log("Teste de operações básicas com matrizes 2x2");
// Teste de Soma
console.log("\nResultado da soma (A + B) ");
const resultadoSoma = somaMatrizes(matrizA, matrizB);
console.table(resultadoSoma);

// Teste de Subtração
console.log("\nResultado da subtracao (A - B) ");
const resultadoSubtracao = subtracaoMatrizes(matrizA, matrizB);
console.table(resultadoSubtracao);

// Teste de Multiplicação por Escalar
console.log(`\nResultado da multiplicao escalar (A * ${escalar})`);
const resultadoEscalar = multiplicacaoEscalar(matrizA, escalar);
console.table(resultadoEscalar);


console.log("\n//////////////////////////////////////////////////////////");
console.log("Teste produto de matrizes (A * B)");
// Teste de Produto
console.log("\nResultado do produto (A * B)");
const resultadoProduto = multiplicaMatriz(matrizA, matrizB);
console.table(resultadoProduto);


console.log("\n//////////////////////////////////////////////////////////");
console.log("Teste determinantes");
 
const mat2x2 = [
    [1, 3],
    [4, 2]
];

const mat3x3 = [
    [5, 1, 1],
    [4, -2, 3],
    [2, 8, 6]
];

const mat4x4 = [
    [1, 0, 2, -1],
    [3, 0, 0, 8],
    [2, 1, 4, -3],
    [4, 0, 5, 0]
];

console.log("Matriz 2x2:");
console.table(mat2x2);
console.log("Determinante 2x2 (Sarrus):", determinante(mat2x2));

console.log("\nMatriz 3x3:");
console.table(mat3x3);
console.log("Determinante 3x3 (Sarrus):", determinante(mat3x3));

console.log("\nMatriz 4x4:");
console.table(mat4x4);
console.log("Determinante 4x4 (Laplace):", determinante(mat4x4));