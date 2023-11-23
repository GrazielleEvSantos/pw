function verificarMes(){
    var mes = parseFloat(document.getElementById("mes").value);
    

        switch (parseInt(mes)) {
        case 1:
            alert("O mês é janeiro");
            break;
         case 2:
            alert("O mês é fevereiro");
            break;
         case 3:
            alert("O mês é março");
            break;
         case 4:
            alert("O mês é abril");
            break;
         case 5:
            alert("O mês é maio");
            break;
         case 6:
            alert("O mês é junho");
            break;
         case 7:
            alert("O mês é julho");
            break;
         case 8:
            alert("O mês é agosto");
            break;
         case 9:
            alert("O mês é setembro");
            break;
         case 10:
            alert("O mês é outubro");
            break;
         case 11:
            alert("O mês é novembro");
            break;
         case 12:
            alert("O mês é dezembro");
            break;
        default:
            alert ("Mês inválido");
    }
}

