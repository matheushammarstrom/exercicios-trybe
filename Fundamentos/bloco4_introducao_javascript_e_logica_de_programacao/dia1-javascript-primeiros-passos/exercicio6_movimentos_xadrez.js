let peca1 = "Peao";
peca_minuscula = peca1.toLowerCase();

switch(peca_minuscula){
    case "bispo":
        console.log("diagonais");
        break;
    case "cavalo":
        console.log("Em L");
        break;
    case "rei":
        console.log("Todas as direcoes, uma casa");
        break;
    case "rainha":
        console.log("Todas as direcoes, quantas casas quiser");
        break;
    case "peao":
        console.log("Anda apenas para frente, mas captura nas diagonais")
        break;
    case "torre":
        console.log("Para os lados, para frente e para trás, quantas casas quiser");
        break;

}

