let situacao = "aprovada";


switch(situacao){
    case "aprovada":
        console.log("Parabens, voce foi aprovado");
        break;
    case "lista":
        console.log("Voce esta na lista de espera");
        break;
    case "reprovada":
        console.log("Voce foi reproivado");
        break;
    default:
        console.log("Nao se aplica");
        break;
    }
