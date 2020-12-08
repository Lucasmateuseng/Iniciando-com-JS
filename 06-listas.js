console.log(`Trabalhando com listas`);
/* const salvador = `Salvador`;
const saoPaulo = `São paulo`;
const rioJaneiro = `Rio de janeiro`; */

//arrays

const listaDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de janeiro`
);

listaDestinos.push(`Curitiba`);
console.log("Destinos possiveis:");
//console.log(salvador, saoPaulo, rioJaneiro);
console.log(listaDestinos);

listaDestinos.splice(1,1); //deletar posição do array
console.log(listaDestinos); //imprimir array
console.log(listaDestinos[1]); //imprimir indice
