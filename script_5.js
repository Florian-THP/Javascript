const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

// trie le books du plus grand au plus petit et affiche du coup element 0 qui est le plus grand
books.sort((a, b) => b.rented - a.rented);
console.log("Le livre le plus emprunté est :", books[0]);

// trie le books du plus petit au plus grand et affiche du coup element 0 qui est le plus petit
books.sort((a, b) => a.rented - b.rented);
console.log("Le livre le moins emprunté est :", books[0]);


// cherche avec find l'element demander
let search = books.find(book => book.id === 873495);
console.log("Le livre avec l'ID: 873495 :")
console.log(search)

// filtre tout le book qui non pas L'id , et compare chaque titre pour l'ordre alphabetique
const updatedBooks = books
    .filter(book => book.id !== 133712)
    .sort((a, b) => a.title.localeCompare(b.title));

console.log(updatedBooks);
