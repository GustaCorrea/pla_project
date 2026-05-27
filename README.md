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
