class forma {
    constructor(){
        this.TipoDeForma = "Forma Abstrata";
    }
 
    imprimeForma(){
        alert('Tipo de forma: ${this.tipoDeForma}');
    }
 
    calculaArea(){
        throw new Error('O método calculaArea() deve ser implementado na subclasse.');
    }
}