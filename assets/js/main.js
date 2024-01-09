function calcular() {

//  Variáveis
    
    const form = document.querySelector(`.form`);
    let peso = Number(document.getElementById(`peso`).value.replace(`,`,`.`));
    let altura = Number(document.getElementById(`altura`).value.replace(`,`,`.`));
    const res = document.getElementById(`res`);
    let ideal;
    
// Evitar o recarregamento da página

    form.addEventListener(`submit`, function paraLoad(stopLoad) {
        stopLoad.preventDefault();
    })    
    
    const conta = peso / altura**2

//  Valores do IMC    

    if (conta <= 0){
        alert(`Valores Inválidos`)
    } else if (conta < 18.5) {
        ideal = `Abaixo do peso`
    } else if (conta >= 18.5 && conta < 25) {
        ideal = `Peso normal`
    } else if (conta >= 25 && conta < 30) {
        ideal = `Sobrepeso`
    } else if (conta >= 30 && conta < 35) {
        ideal = `Obesidade grau 1`
    } else if (conta >= 35 && conta < 40) {
        ideal = `Obesidade grau 2`
    } else {
        ideal = `Obesidade grau 3`
    }

//  Resultado

    if (isNaN(conta)) {
        alert(`Valores Inválidos`)
    } else {
        res.innerHTML = `Seu IMC é ${conta.toFixed(2)} (${ideal})`
        res.style.backgroundColor = `#01FEC2`;
    }
}


