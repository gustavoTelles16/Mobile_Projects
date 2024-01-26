// Função de escolher o operador aritmético.
const calculate = (operator, num1, num2) => {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            alert("Operador inválido!");
    }
     // Cada operador corresponde a um caso (case).
     // Se não for um deles, aparecerá uma resposta de erro (default).
}

// Criação das variáveis: operador matemático, número 1 e número 2.
let operator = prompt("Escolha um desses operadores aritméticos: '+', '-', '*', '/'. ");
let number1 = parseFloat(prompt("Informe o 1°número: "));
let number2 = parseFloat(prompt("Informe o 2°número: "));

// O comando 'prompt' serve para o usuário digitar alguma informação.
// Além disso, ele recebe apenas informações do tipo 'string'. Fora isso, deve converter.
// parseFloat - converte a informação para float (números reais = inteiros + decimais)

let resultCalculator = calculate(operator, number1, number2);
// A variável resultado "chama" a função 'calculate' para efetuar os cálculos.

document.getElementById("result").innerHTML = `Resultado: ${resultCalculator}.`;
// Adicionando a div do arquivo HTMl no JavaScript ('document.getElementById()).
// innerHTMl = permite manipular a informação dentro da div, do JavaScript para o HTML.
// Entre crases '``', permite pegar o resultado obtido da função e atribuí-lo a div.