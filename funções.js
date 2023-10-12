
const entradas = [0 , 1500 , 2500, 6500, 7500, 8500, 9500, 10500];
let i = 0;

function nivelAtual() {
    const valor = entradas[i]
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);

}

module.exports = { print, nivelAtual }