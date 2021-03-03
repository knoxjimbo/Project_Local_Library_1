function findAuthorById(authors, id) {                        
  let found = authors.find((author) => author.id === id);
  return found
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found
}

function partitionBooksByBorrowedStatus(books) {
  const filtered = [[], []];
  filtered[0] = books.filter((book) => book.borrows[0].returned === false);
  filtered[1] = books.filter((book) => book.borrows[0].returned === true);
  return filtered;
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  book.borrows.forEach((borrow) => {
    let found = accounts.find((account) => account.id === borrow.id);   /* this is where I store desired account info in a variable */
    let newBorrow = found;
    newBorrow['returned'] = borrow.returned;                /* here I add whether it's returned or not */
    result.push(newBorrow);
  })
  console.log(result.slice(0,10));
  return result.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
}