var numeroDias;

switch (nomeMes) {
    case "janeiro":
    case "março": 
    case "maio":
    case "julho":
    case "agosto ":
    case "outubr o":
    case "dezembro": 
        numeroDias = "esse mês tem 31 dias" ;
        break;
    case"abril":
    case"junho":
    case"setembro":
    case"novembro":
        numeroDias = "esse mês tem 30 dias";
      break;
    case"fevereiro":
        numeroDias = "esse mês tem 28 dias em um ano nao bissexto";
        break;
    default:
        numeroDias = "mês invalido! insira um nome de mês valido.";
}
alert(numeroDias)