function parOuImpar(computador,usuario,total){
    function gerarNumero(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    computador = gerarNumero(0,10)
    usuario = Number(document.getElementById('numeroUsuario').value)
    total = usuario + computador
    let ePar = document.getElementById('escolha').value === 'Par' 
    let totalEPar = total % 2 == 0
    let mensagem = ''
    document.getElementById('sorteio').innerText = `O número sorteado foi ${computador}`
    if (ePar && totalEPar){
                mensagem = `O número ${total} é par,Parabéns, você venceu`}
    else if (ePar && !totalEPar){
                mensagem = `O número ${total} é ímpar, Sinto muito, você perdeu`}
    else if (!ePar && !totalEPar){
                mensagem = `O número ${total} é ímpar,Parabéns, você venceu`}
    else if (!ePar && totalEPar){
                mensagem = `O número ${total} é par, Sinto muito, você perdeu`}
    document.getElementById('resultado').innerText = mensagem
    }
