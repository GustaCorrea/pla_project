 module.exports = { somaMatrizes, subtracaoMatrizes, multiplicacaoEscalar };

function criarMatriz(linhas, colunas, valorPadrao = 0) {
    // Cria uma matriz bidimensional preenchida com o valor padrão
    return Array.from({ length: linhas }, () => Array(colunas).fill(valorPadrao));
}

function somaMatrizes(A, B) {
    if (A.length !== B.length || A[0].length !== B[0].length) {
        return "Erro: Matrizes devem ter a mesma ordem para soma.";
    }   
    let C = criarMatriz(A.length, A[0].length);
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
    return C;
}

function subtracaoMatrizes(A, B) {
    if (A.length !== B.length || A[0].length !== B[0].length) {
        return "Erro: Matrizes devem ter a mesma ordem para subtração.";
    }
    let C = criarMatriz(A.length, A[0].length);
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            C[i][j] = A[i][j] - B[i][j];
        }
    }
    return C;
}

function multiplicacaoEscalar(A, k) {
    let C = criarMatriz(A.length, A[0].length);
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            C[i][j] = A[i][j] * k;
        }
    }
    return C;
}
