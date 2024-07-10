const form = document.getElementById('form-banco');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nome = document.getElementById('nome-pessoa');
    const dividaAtual = document.getElementById('divida-pessoa');  
    const patrimonio = document.getElementById('patrimonio-pessoa');

    if(dividaAtual.value > patrimonio.value){
        alert('Sua divida atual é maiorque seu patriomonio! Crédito negado!')
    } else{
        alert('Podemos prosseguir com sua análise de crédito!')
    }

    dividaAtual.value = ""
    patrimonio.value = ""
    nome.value = ""
})