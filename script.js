function verificarDia() {
    var dia = document.getElementById('dia').value.toLowerCase();
    var resposta;

    switch (dia) {
        case 'segunda-feira':
        case 'terça-feira':
        case 'quarta-feira':
        case 'quinta-feira':
        case 'sexta-feira':
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
