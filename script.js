function verificarDia() {
    var dia = document.getElementById('dia').value.toLowerCase().trim();
    var respostaDia = document.getElementById('respostaDia');

    switch (dia) {
        case "segunda":
        case "segunda-feira":
            respostaDia.innerHTML = "Segunda-feira, dia útil";
            break;
        
        case "terça":
        case "terça-feira":
        case "terca-feira":
        case "terca":
            respostaDia.innerHTML = "Terça-feira, dia útil";
            break;
        
        case "quarta":
        case "quarta-feira":
            respostaDia.innerHTML = "Quarta-feira, dia útil";
            break;
        
        case "quinta":
        case "quinta-feira":
            respostaDia.innerHTML = "Quinta-feira, dia útil";
            break;
        
        case "sexta":
        case "sexta-feira":
            respostaDia.innerHTML = "Sexta-feira, dia útil";
            break;
        
        case "sábado":
        case "sabado":
            respostaDia.innerHTML = "Sábado, fim de semana";
            break;
        
        case "domingo":
            respostaDia.innerHTML = "Domingo, fim de semana";
            break;
        
        default:
            respostaDia.innerHTML = "Digite outro.";
            break;
    }
}
