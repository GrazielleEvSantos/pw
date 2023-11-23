function Calcular(){
    var base = parseFloat(document.getElementById("base").value);
    var expo = parseFloat(document.getElementById("expo").value);

    if(isNaN(base) || isNaN(expo)) {
        alert("Porfavor, insira um número valido.(nao seja burro não leu a palavra número não)");
    }else{
        var resultado = base ** expo;
        document.write("O resultado é " + resultado);

}

}