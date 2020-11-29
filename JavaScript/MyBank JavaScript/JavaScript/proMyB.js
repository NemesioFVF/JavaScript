// Depois de 5 segundos executa a função que mostra a caixa de texto
setTimeout(function ativaMensagem (){document.getElementById('caixatexto').style.visibility = 'visible';}, 5000);

// Quando for dado um clique na caixa de texto a mensagem some

caixatexto.onclick = function () {document.getElementById ('caixatexto').style.visibility = 'hidden';};