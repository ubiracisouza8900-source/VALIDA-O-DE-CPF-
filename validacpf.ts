import PromptSync from "prompt-sync";
const prompt = PromptSync();

let cpf:string =prompt("Digite o cpf: ")

cpf = cpf.replace(/\D/g,"");

if(cpf.length != 11){
    console.log("cpf invalido!");
    
}else{

    let primeira_soma =0;
    let primeiropeso= 10;

    for (let cpf_v = 0;  cpf_v < 9; cpf_v++){

        primeira_soma += Number(cpf[cpf_v]) * primeiropeso
        primeiropeso --;

    }

    let primeiro_resto = primeira_soma % 11;

    let Digite =
    primeiro_resto < 2 ? 0: 11 -primeiro_resto ;

    let segunda_soma = 0;
    let peso2 = 11;

    for(let cpf_v2 = 0; cpf_v2 < 10; cpf_v2++){

        segunda_soma+= Number(cpf[cpf_v2]) * peso2
        peso2 --;

    }

    let regundo_resto = segunda_soma % 11;

    let Digite2 =
    regundo_resto < 2 ? 0 : 11 - regundo_resto;

    if(
        Digite === Number(cpf[9]) &&
        Digite2 === Number(cpf[10])
    ){
        console.log("CPF VALIDO");
        
    }else{
        console.log("cpf invalido");
        
    }

    



}