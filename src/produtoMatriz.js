module.exports = { multiplicaMatriz };

function criarMatriz(linhas, colunas, valorPadrao = 0) {
    return Array.from({ length: linhas }, () => Array(colunas).fill(valorPadrao));
}

function multiplicaMatriz(A, B) {
    let linhasA = A.length;
    let colunasA = A[0].length;
    let linhasB = B.length;
    let colunasB = B[0].length;
    
    // Critério de operação
    if (colunasA !== linhasB) {
        return "Erro: O número de colunas de A deve ser igual ao de linhas de B.";
    }
    
    let C = criarMatriz(linhasA, colunasB);
    
    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            let soma = 0;
            for (let k = 0; k < colunasA; k++) {
                soma += A[i][k] * B[k][j];
            }
            C[i][j] = soma;
        }
    }
    return C;
}