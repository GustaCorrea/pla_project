module.exports = { eliminacaoGauss };

function eliminacaoGauss(A, b) {
    let n = A.length;
    
    // Cria a matriz aumentada [A|b] copiando os valores
    let M = A.map((linha, i) => [...linha, b[i]]);
    
    // Fase de Eliminação
    for (let i = 0; i < n; i++) {
        // Pivoteamento parcial (evita divisão por zero)
        let maxLinha = i;
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(M[k][i]) > Math.abs(M[maxLinha][i])) {
                maxLinha = k;
            }
        }
        
        // Troca as linhas usando desestruturação
        [M[i], M[maxLinha]] = [M[maxLinha], M[i]];
        
        // Verifica se pivô é muito próximo de zero
        if (Math.abs(M[i][i]) < 1e-10) continue;
            
        // Zera os elementos abaixo do pivô
        for (let k = i + 1; k < n; k++) {
            let fator = M[k][i] / M[i][i];
            for (let j = i; j <= n; j++) {
                M[k][j] -= fator * M[i][j];
            }
        }
    }
                
    // Análise de Classificação (SPD, SPI, SI)
    for (let i = 0; i < n; i++) {
        // Verifica se todos os coeficientes da linha 'i' são zero
        let coeficientesZerados = true;
        for (let j = 0; j < n; j++) {
            if (Math.abs(M[i][j]) >= 1e-10) {
                coeficientesZerados = false;
                break;
            }
        }
        
        let termoIndepZerado = Math.abs(M[i][n]) < 1e-10;
        
        if (coeficientesZerados && !termoIndepZerado) {
            return "SI - Sistema Impossível (Sem solução).";
        } else if (coeficientesZerados && termoIndepZerado) {
            return "SPI - Sistema Possível e Indeterminado (Infinitas soluções).";
        }
    }
            
    // Substituição Reversa (SPD)
    let x = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let soma = 0;
        for (let j = i + 1; j < n; j++) {
            soma += M[i][j] * x[j];
        }
        x[i] = (M[i][n] - soma) / M[i][i];
    }
        
    // Retorna formatando com 4 casas decimais
    return `SPD - Sistema Possível e Determinado. Solução: [${x.map(val => Number(val.toFixed(4))).join(', ')}]`;
}

// --- TESTANDO OS EXEMPLOS DE GAUSS NO CONSOLE ---
console.log("Exemplo SPD:");
console.log(eliminacaoGauss([[1, 1], [1, -1]], [3, 1]));

console.log("\nExemplo SPI:");
console.log(eliminacaoGauss([[1, 1], [2, 2]], [2, 4]));

console.log("\nExemplo SI:");
console.log(eliminacaoGauss([[1, 1], [1, 1]], [2, 5]));