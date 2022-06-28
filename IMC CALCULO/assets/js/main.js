function meuEscopo() {

    const form = document.querySelector('form');
    const resultado = document.querySelector('#resultado')
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');

    // função de prevenir que a página renicie ao digitar valores no formulário
    function recebeEventoForm (evento) {
        evento.preventDefault();
    }

    function calcularIMC() {
        // transformar altura de cm para m se estiver em cm
        if (parseFloat(altura.value) >= 100) {
            altura.value /=  100
        }
        const calculo = parseFloat(peso.value) / parseFloat(altura.value ** 2)
        // checar se o valor do imc é absurdo
        if(calculo < 5 || calculo > 200) {
            return resultado.innerHTML = `Resultado inválido, cheque os valores e digite novamente!`
        }
        // testagem dos valores
        if (isNaN(parseFloat(peso.value)) === true && isNaN(parseFloat(altura.value)) === true || parseFloat(peso.value) <= 0 && parseFloat(altura.value) <= 0){
            return resultado.innerHTML = `Peso e altura inválidos`
        } else if (isNaN(parseFloat(peso.value)) === true && isNaN(parseFloat(altura.value)) === false || parseFloat(peso.value) <= 0) {
            return resultado.innerHTML = `Peso inválido`
        } else if (isNaN(parseFloat(peso.value)) === false && isNaN(parseFloat(altura.value)) === true || parseFloat(altura.value) <= 0) {
            return resultado.innerHTML = `Altura inválida`
        } else {
            if (calculo < 18.5) {
                return resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Abaixo do peso)`
            }
            else if (calculo >= 18.5 && calculo <= 24.9) {
                return resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Peso Normal)`
            }
            else if (calculo >= 25 && calculo <= 29.9) {
                return resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Sobrepeso)`
            }
            else if (calculo >= 30 && calculo <= 34.9) {
                return resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 1)`
            }
            else if (calculo >= 35 && calculo <= 39.9) {
                return resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 2)`
            }
            else {
                return resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 3)` 
            }
        }
    }
    
    form.addEventListener('submit', recebeEventoForm)
    form.addEventListener('submit', calcularIMC)
}
meuEscopo()