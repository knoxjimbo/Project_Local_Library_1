// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  total = 0;
  books.forEach((book) => {
    if(book.borrows[0].returned === false){
      total++
    }
  })  
  return total
}

function getMostCommonGenres(books) {
  let genresObj = books.reduce((genreTotals, book) => { /* I rewrote this part to use .reduce */
    let genre = book.genre;                           
    if (genreTotals[genre] == undefined) {
      genreTotals[genre] = 1
    }
    else {
      genreTotals[genre]++
    }
    return genreTotals
  }, {});  
  let genresArray = [];                           /* now, I have an object where each key is a genre and the value is a count of that genre */
  for (let key in genresObj) {                               /* I had to get help here.  This basically turns my object of genres into an */
    genresArray.push({ name: key, count: genresObj[key] });   /* array of objects, the output format required for this function */
  };
  genresArray.sort((genreA, genreB) => (genreA.count < genreB.count ? 1 : -1));
  console.log(genresArray.slice(0,5))            /* this is just for testing */                                   
  return genresArray.slice(0,5)
}

function getMostPopularBooks(books) {
  let results = [];
  books.forEach((book) => {
    results.push({name: book.title, count: book.borrows.length})
  });
  results.sort((resultA, resultB) => resultB.count - resultA.count);
  console.log(results.slice(0, 5));
  return results.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let results = [];
  authors.forEach((author) => {
    let number = 0;
    books.forEach((book) => {
      if(book.authorId === author.id){
        number += book.borrows.length
      }
    })
    results.push({name: `${author.name.first} ${author.name.last}`, count: number})  
  })
  results.sort((resultA, resultB) => resultB.count - resultA.count);
  console.log(results.slice(0,5));
  return results.slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};