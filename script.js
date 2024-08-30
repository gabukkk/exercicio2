function verificarDia() {
    var dia = document.getElementById('dia').value.toLowerCase();
    var resposta;

    switch (dia) {
        case 'segunda':
        case 'terça':
        case 'quarta':
        case 'quinta':
        case 'sexta':
            resposta = 'É um dia útil.';
            break;
        case 'sábado':
        case 'domingo':
            resposta = 'É fim de semana.';
            break;
        default:
            resposta = 'Dia inválido.';
            break;
    }

    document.getElementById('respostaDia').innerText = resposta;
}
