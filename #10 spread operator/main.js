/**
 untuk membantu pengelolaan array menjadi lebih mudah
 */
const favorites = ["seafood", "nugget", "soup", "salad"];
console.log(favorites);
// output: [ 'Seafood', 'Salad', 'Nugget', 'Soup' ]

// SPREAD OPERATOR
console.log(...favorites);
//output: Seafood Salad Nugget Soup

const other = ["cake", "pie", "donut"];
const allFavorites = [favorites, other];
console.log(allFavorites);
