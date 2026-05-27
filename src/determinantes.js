module.exports = { determinante };

function determinante(A) {

    let n = A.length;
    if (A.some(linha => linha.length !== n)) {
        return "Erro: A matriz deve ser quadrada.";
    }
        
    // Sarrus 2x2
    if (n === 2) {
        return A[0][0] * A[1][1] - A[0][1] * A[1][0];
    }
        
    // Sarrus 3x3
    if (n === 3) {
        let dp = A[0][0]*A[1][1]*A[2][2] + A[0][1]*A[1][2]*A[2][0] + A[0][2]*A[1][0]*A[2][1];
        let ds = A[0][2]*A[1][1]*A[2][0] + A[0][0]*A[1][2]*A[2][1] + A[0][1]*A[1][0]*A[2][2];
        return dp - ds;
    }
        
    // Laplace 4x4 ou maior
    let det = 0;
    // Usando a primeira linha (i=0) para expandir
    for (let j = 0; j < n; j++) {
        // Cria a submatriz removendo a linha 0 e a coluna j
        let submatriz = A.slice(1).map(linha => linha.slice(0, j).concat(linha.slice(j + 1)));
        //fórmula para dar o sinal certo (+ ou -)
        let sinal = Math.pow(-1, 0 + j);
        
        det += sinal * A[0][j] * determinante(submatriz);
    }
        
    return det;
}