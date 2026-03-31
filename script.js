var btnRedirecionar = document.getElementById("btn"); 

btnRedirecionar.onclick = function() {
    var resposta = confirm("Você será redirecionado para outra página. Deseja continuar?");
    if (resposta) {
        window.location.href = "https://kayrokennedy-dev.github.io/ETICA-TRABALHO-E-CIDADANIA-GITHUB/video.html";
    } 
}