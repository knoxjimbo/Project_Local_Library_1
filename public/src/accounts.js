function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1:-1);
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  total = 0;
  books.map((book) =>                                                           /* loop through all books */
    book.borrows.forEach((borrow) => {if(borrow.id === account.id) {total += 1}})); /* loop through all borrows, tally matches */
  console.log(total)
  return total
}

function findAuthorByAuthorID(authors, authorId){                   /* this is a helper function for getBooksPossessedByAccount */
  let found = authors.find((author) => author.id === authorId);
  return found
}

function getBooksPossessedByAccount(account, books, authors) {
  const possessedBooks = [];
  books.forEach((book) =>                                                                         /* gathers all books borrowed by an account */
    book.borrows.forEach((borrow) => {if(borrow.id === account.id && borrow.returned === false) {possessedBooks.push(book)}}));
  possessedBooks.forEach((book) => book.author = findAuthorByAuthorID(authors, book.authorId) );  /* creates author key and adds author object */
  return possessedBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};