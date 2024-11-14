
function acnéBot() {
    let userInput = prompt("Dis quelque chose au bot...");

    // Si l'utilisateur entre rien, le bot répond "t'es en PLS ?"
    if (userInput === "") {
        console.log("t'es en PLS ?");
    }
    // Si la phrase est en majuscules, le bot répond "Pwa, calme-toi..."
    else if (userInput === userInput.toUpperCase()) {
        console.log("Pwa, calme-toi...");
    }
    // Si la phrase contient "Fortnite", le bot répond "on s' fait une partie soum-soum ?"
    else if (userInput.includes("Fortnite")) {
        console.log("on s' fait une partie soum-soum ?");
    }
    // Si la phrase finit par un "?", le bot répond "Ouais Ouais..."
    else if (userInput.endsWith("?")) {
        console.log("Ouais Ouais...");
    }
    // Si aucune des conditions ci-dessus n'est remplie, le bot répond "balek."
    else {
        console.log("balek.");
    }
}

// Appeler la fonction pour démarrer la conversation
acnéBot();
