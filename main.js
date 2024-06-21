const form = document.getElementById('form-banco');

function maiorMenor(p){
    subtracao = p - d
    return subtracao > 0;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const dividaAtual = document.getElementById('divida');  
    const patrimonio = document.getElementById('patrimonio');
    if (maiorMenor (patrimonio.value, dividaAtual.value) === true) {
        alert('ola')
    }
})

console.log(form)

