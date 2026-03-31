var btnRedirecionar = document.getElementById("btn"); 

btnRedirecionar.onclick = function() {
    var resposta = confirm("Você será redirecionado para outra página. Deseja continuar?");
    if (resposta) {
        window.location.href = "https://www.google.com";
    } 
}