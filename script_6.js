
document.getElementById("adn").addEventListener("click", function() {

    let adn = document.getElementById("input").value;
    let segment = adn.match(/.{1,3}/g);

    if (segment) {
        let tableauUn = ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"];
        let tableauDeux = ["CCU", "CCC", "CCA", "CCG"];
        let tableauTrois = ["UUA", "UUG"];
        let tableauQuatre = ["UUU", "UUC"];
        let tableauCinq = ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"];
        let tableauSix = ["UAU", "UAC"];
        
        for (let i =0 ; i < segment.length; i++) {
            if (tableauUn.includes(segment[i])) {
                segment[i] = "Sérine";
            } else if (tableauDeux.includes(segment[i])) {
                segment[i] = "Proline"
            } else if (tableauTrois.includes(segment[i])) {
                segment[i] = "Leucine"
            } else if (tableauQuatre.includes(segment[i])) {
                segment[i] = "Phénylalanine"
            } else if (tableauCinq.includes(segment[i])) {
                segment[i] = "Arginine"
            } else if (tableauSix.includes(segment[i])) {
                segment[i] = "Tyrosine"
            }
        }

        let pElement = document.querySelector(".test");
        pElement.textContent = segment;
        
    }
});








