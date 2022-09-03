let placa = 'adf121'
let cor = 'vermelho'

let carro = {
    placa: 'adf121',
    cor : 'vermelho',
    qtdRodas : 5,
    seguro: true,
    buzina : function(){
        return 'meu carro buzina boobom'+this.cor;
    }
}

console.log(placa);
console.log(carro.placa);
console.log(carro.cor);
console.log(carro.buzina(''));
console.log(carro.qtdRodas)
console.log(carro.seguro)


//let carro1 = {
    //placa: 'ff221',
    //cor : 'vermelho',
    //qtdRodas : 5,
    //seguro: true,
    //buzina : function(){
        //return 'meu carro buzina boobom'+this.cor;
    //}
//}

//funções construtora
function Carro(placa, cor, qtdRodas, seguro){
    this.placa = placa
    this.cor = cor
    this.qtdRodas = qtdRodas
    this.seguro = seguro
};
let carro1 = new Carro('ff221', 'vermelho', 5, true)
console.log(Carro)
console.log(carro1)




//JSON

