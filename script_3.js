let nombre = parseInt(prompt("Entre le nombre d'etage :"));
var chiffre = 1
for (let i = nombre; i > 0; i --, chiffre++){
    console.log(" ".repeat(i) + "#".repeat(chiffre))
}
