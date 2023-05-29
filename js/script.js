let todosBotoes = document.querySelectorAll("tbody td");
let monitor = document.querySelector(".monitor th p");
let resultado = 0;
let statusCalculado = false; // True = "Ligada" , False = "Desligada";

let botaoOff = document.querySelector(".off");

botaoOff.addEventListener("click", ()=>{
    if(statusCalculado){
        statusCalculado = false;
        monitor.innerHTML = "";
        resultado = 0;
    }else{
        statusCalculado = true;
    }
})

todosBotoes.forEach( botoes=> botoes.addEventListener("click", () => botoesNumericos(botoes.innerHTML)))
let botoesNumericos = botao => {
    if(!isNaN(botao / 2) && statusCalculado) { 
        if(Number(monitor.innerHTML) !== resultado) { 
            monitor.innerHTML += botao 
        }else{ 
            monitor.innerHTML = ""; 
            monitor.innerHTML += botao;
        }
    }else if(statusCalculado){
        botoesNaoNumericos(botao);
    }
};
let botoesNaoNumericos = botao => calculo(Number(monitor.innerHTML),botao);
let simboloAnterio = "";
let calculo = (valor,simbolo) => {
    simbolo !== "=" ? simboloAnterio = simbolo : simboloAnterio !== "" ? simbolo = simboloAnterio : monitor.innerHTML = resultado;
    if(resultado !== 0){
        switch(simbolo){
            case "+":
                resultado += valor;
                break;
            case "-":
                resultado -= valor;
                break;
            case "X":
                resultado *= valor;
                break;
            case "√":
                resultado = valor ** 0.5;
                break;
            case "AC":
                resultado = 0;
                monitor.innerHTML = 0;
                break;
        }
    }else{
        resultado += valor; 
    }
    (simbolo !== "AC" && statusCalculado) ? monitor.innerHTML = resultado : monitor.innerHTML = " ";
}




