const { somaMatrizes, subtracaoMatrizes, multiplicacaoEscalar } = require('./src/operacoesBasicas');
const { multiplicaMatriz } = require('./src/produtoMatriz');

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

console.log("\nTeste produto de matrizes (A * B)");
// Teste de Produto
console.log("\nResultado do produto (A * B)");
const resultadoProduto = multiplicaMatriz(matrizA, matrizB);
console.table(resultadoProduto);