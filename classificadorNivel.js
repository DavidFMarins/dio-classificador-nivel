const {print} = require('./funções');

const nome = "David";
let quantidadeExp = 0;
 
let nivel = "Ferro";

do {   
        print(" O Herói de nome " + nome + " está no nível de " + nivel);
        quantidadeExp += 1000; 
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
        }   else if (quantidadeExp >= 10001 && quantidadeExp < 12000) {
                nivel = "Radiante";
        }  else if (quantidadeExp >= 12000) {
                nivel = "Maximo";
        }

    } while ( nivel != "Maximo"); 


