function parOuImpar(computador,usuario){
    function gerarNumero(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    computador = gerarNumero(0,10)
    usuario = document.getElementById='numeroUsuario'.value
    if (document.getElementById='escolha' === 'Par' && (usuario + computador) % 2 == 0)
                document.getElementById('resultado').innerText = 'Parabéns, você venceu'

    }

