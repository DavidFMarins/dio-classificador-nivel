const {print, nivelAtual} = require('./funções');

const nome = "David";
const n = nivelAtual();

 
let nivel = "Ferro";
let i = 0;

while ( i < 9 ) {

    for (let  i= 0; i < n; i++) {
        const quantidadeExp = nivelAtual();    

            if (quantidadeExp <= 1000) {
            nivel = "Ferro";
        }   else if (quantidadeExp > 1000 && quantidadeExp <= 2000) {
                nivel = "Bronze";
        }   else if (quantidadeExp > 2000 && quantidadeExp <= 5000) {
                nivel = "Prata";
        }   else if (quantidadeExp > 6000 && quantidadeExp <= 7000) {
                nivel = "Ouro";
        }   else if (quantidadeExp > 7000 && quantidadeExp <= 8000) {
                nivel = "Platina";
        }   else if (quantidadeExp > 8000 && quantidadeExp <= 9000) {
                nivel = "Ascendente";
        }   else if (quantidadeExp > 9000 && quantidadeExp <= 10000) {
                nivel = "Imortal";
        }   else if (quantidadeExp >= 10001) {
                nivel = "Radiante";
        }
    }
    
    i++;
    
}
print(" O Herói de nome " + nome + " está no nível de " + nivel);
