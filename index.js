const { somaMatrizes, subtracaoMatrizes, multiplicacaoEscalar } = require('./src/operacoesBasicas');
const { multiplicaMatriz } = require('./src/produtoMatriz');
const { determinante } = require('./src/determinantes');
const { eliminacaoGauss } = require('./src/gauss');

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


console.log("\n\n//////////////////////////////////////////////////////////");
console.log("Teste produto de matrizes (A * B)");
// Teste de Produto
console.log("\nResultado do produto (A * B)");
const resultadoProduto = multiplicaMatriz(matrizA, matrizB);
console.table(resultadoProduto);


console.log("\n\n//////////////////////////////////////////////////////////");
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


console.log("\n\n//////////////////////////////////////////////////////////");
console.log("Teste eliminação de Gauss");

// 1. Exemplo SPD (Sistema Possível e Determinado)
// x + y = 3
// x - y = 1
// Solução única: x = 2, y = 1
const sistemaA_SPD = [[1, 1], [1, -1]];
const termosA_SPD = [3, 1];

console.log("--- Teste SPD ---");
console.log("Matriz dos Coeficientes:");
console.table(sistemaA_SPD);
console.log("Termos Independentes:", termosA_SPD);
console.log("Resultado:", eliminacaoGauss(sistemaA_SPD, termosA_SPD));


// 2. Exemplo SPI (Sistema Possível e Indeterminado)
// x + y = 2
// 2x + 2y = 4
// Infinitas soluções (uma equação é o dobro da outra)
const sistemaB_SPI = [[1, 1], [2, 2]];
const termosB_SPI = [2, 4];

console.log("\n--- Teste SPI ---");
console.log("Matriz dos Coeficientes:");
console.table(sistemaB_SPI);
console.log("Termos Independentes:", termosB_SPI);
console.log("Resultado:", eliminacaoGauss(sistemaB_SPI, termosB_SPI));


// 3. Exemplo SI (Sistema Impossível)
// x + y = 2
// x + y = 5
// Sem solução (a soma de x e y não pode dar dois valores diferentes)
const sistemaC_SI = [[1, 1], [1, 1]];
const termosC_SI = [2, 5];

console.log("\n--- Teste SI ---");
console.log("Matriz dos Coeficientes:");
console.table(sistemaC_SI);
console.log("Termos Independentes:", termosC_SI);
console.log("Resultado:", eliminacaoGauss(sistemaC_SI, termosC_SI));