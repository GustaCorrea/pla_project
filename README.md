# Manipulação de Matrizes e Resolução de Sistemas Lineares em JavaScript

Este projeto foi desenvolvido como um relatório técnico e aplicação prática de Álgebra Linear aplicada à Computação. O objetivo principal é implementar algoritmos nativos em JavaScript para operações com matrizes de qualquer ordem, cálculo de determinantes e resolução de sistemas lineares pelo método de Eliminação de Gauss.

O projeto foi estruturado seguindo práticas de desenvolvimento modular, separando as responsabilidades de cada operação matemática em módulos específicos dentro da pasta src.

---

## 💻 Estrutura do Projeto

A organização dos arquivos no workspace foi projetada para garantir independência de escopo, legibilidade e facilidade de manutenção:

```text
pla_project/
│
├── src/
│   ├── operacoesBasicas.js  // Soma, subtração e multiplicação por escalar
│   ├── produtoMatriz.js     // Multiplicação de matrizes (qualquer ordem)
│   ├── determinantes.js     // Determinantes por Regra de Sarrus e Teorema de Laplace
│   └── gauss.js             // Eliminação de Gauss e classificação (SPD, SPI, SI)
│
├── index.js                 // Arquivo principal de execução e testes unitários
├── package.json             // Manifesto do projeto Node.js
└── README.md                // Relatório técnico e documentação
```

## 🛠️ Critérios Matemáticos

1. Operações Básicas (Soma, Subtração e Escalar)
   Soma e Subtração: Duas matrizes só podem ser somadas ou subtraídas se possuírem rigorosamente a mesma ordem (mesmo número de linhas e colunas). Cada elemento resultante é a soma ou subtração direta dos elementos na mesma posição.

Multiplicação por Escalar: Não há restrição de ordem. Qualquer matriz pode ser multiplicada por um número real (escalar), onde cada elemento da matriz original é multiplicado individualmente por esse número.

Como foi feito em JS: Criamos uma função auxiliar chamada criarMatriz que usa o comando Array.from passando o tamanho das linhas, e dentro dele usa o .fill(0) para gerar as colunas zeradas. Depois, usamos laços de repetição tradicionais (dois loops for aninhados) para percorrer as linhas e colunas e realizar os cálculos posição por posição.

2. Produto de Matrizes
   Critério de Operação: A multiplicação entre duas matrizes só é matematicamente possível se o número de colunas da primeira matriz for exatamente igual ao número de linhas da segunda matriz. Se a matriz A for de ordem 2x3 e a matriz B for 3x2, o resultado final será uma nova matriz de ordem 2x2.

Como foi feito em JS: O algoritmo valida se as colunas da primeira batem com as linhas da segunda usando o .length. Para fazer o cálculo do produto real, usamos três loops estruturados: dois para navegar pelas linhas e colunas da matriz resultante e um terceiro loop interno para fazer o somatório das multiplicações cruzadas.

3. Determinantes (Sarrus e Laplace)
   O cálculo de determinantes é restrito a matrizes quadradas (linhas iguais ao número de colunas).
   Ordem 2x2 e 3x3 (Regra de Sarrus): Implementada de forma direta através da regra de Sarrus, calculando a multiplicação cruzada das diagonais principais e subtraindo pelas diagonais secundárias.

Ordem 4x4 ou superior (Teorema de Laplace): Reduz o tamanho da matriz de forma repetitiva escolhendo a primeira linha como base. Para cada número dessa linha, o código esconde a linha e a coluna atual para criar uma submatriz menor.

Como foi feito em JS: Usamos o método .some para verificar se todas as linhas possuem o mesmo tamanho (validando se a matriz é quadrada). No teorema de Laplace, usamos o método .slice para fatiar as linhas de baixo e o método .concat combinado com .map para "esconder" a coluna atual. A função então chama a si mesma (recursividade) até diminuir o tamanho da matriz para 3x3 ou 2x2, onde aplica Sarrus.

4. Resolução de Sistemas por Eliminação de Gauss
   O algoritmo recebe uma matriz com os números do sistema e um vetor com os resultados, juntando tudo em uma estrutura única chamada Matriz Aumentada.

Critérios de Classificação:

SPD (Sistema Possível e Determinado): O sistema tem uma única resposta. O código faz o escalonamento e depois resolve as incógnitas de baixo para cima.

SPI (Sistema Possível e Indeterminado): O sistema tem infinitas respostas. É identificado quando uma linha inteira zera no cálculo (tanto os coeficientes quanto o resultado ficam 0 = 0).

SI (Sistema Impossível): O sistema não tem resposta. Acontece quando os coeficientes de uma linha zeram, mas o resultado dá um número diferente de zero (exemplo: 0 = 5).

Como foi feito em JS: Usamos o .map e a sintaxe de três pontinhos (...) para clonar os arrays e montar a matriz aumentada sem estragar os dados originais. Para trocar as linhas de lugar no processo de pivoteamento, usamos a desestruturação do JS moderno ([A, B] = [B, A]), dispensando o uso de variáveis auxiliares. No final, limitamos o resultado com .toFixed(4) para não encher a tela de números quebrados causados por divisões no terminal.
