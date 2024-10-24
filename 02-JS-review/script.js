const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

///////Destructuring///////
// const book = getBook(1);
// // const author = book.author;
// // author;
// // const pages = book.pages;
// // pages;
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;
// console.log(book, title);
// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenre);

// const newGenre2 = [genres, "epic fantasy"];
// console.log(newGenre2);
// const newGenre = [...genres, "epic fantasy"];
// console.log(newGenre);
// const updateBook = {
//   ...book,
//   // adding propertys
//   moviePublicationDate: "20024-06-17",
//   pages: 1222,
// };
// // updateBook;
// updateBook;
// //////////////////////Arrow functions
// // function getYear(str) {
// //   return str.split("-")[0];
// // }

// const getYear = (str, a, b) => str.split("-")[0];

// console.log(getYear(publicationDate));

// /////////////////Tamplate literals
// const summary = ` the ${title} pages ${pages} long book and the author is  ${author} the book is amazing the publication date is  ${getYear(
//   publicationDate
// )}.The book has ${hasMovieAdaptation ? "" : "No"} been adapted a movie`;
// summary;

// /////Ternaires operators
// const pagesRange = pages > 1000 ? "over a thousands" : "less then the 1000";
// pagesRange;
// console.log(`the book has ${pagesRange} pages`);

// // Shortcircuting in logical operators
// console.log(true && "some string");
// console.log(false && "some string");
// console.log(hasMovieAdaptation && "The book has a movie");

// console.log("jonas" && "some string");
// console.log(0 && "some string");
// console.log(true || "some string");
// console.log(false || "some string");
// console.log(book.translations.spanish);
// const spanishTranslation = book.translations.spanish || "NOT TRANSLATION";
// spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "Not Data";
// countWrong;
// const count = book.reviews.librarything.reviewsCount ?? "Not Data";
// count;

// const books = getBooks();
// books;
// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);
// const tittles = books.map((book) => book.title);
// tittles;

// const essentialData = books.map((book) => {
//   return {
//     tittle: book.title,
//     author: book.author,
//   };
// });
// essentialData;
//////////////Filter
// const longBooksWithMovies = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBooksWithMovies;

// const adventurebook = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// adventurebook;

// const pagesallBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesallBooks;
// const arr = [1, 2, 3, 4, 5];
// const shorted = arr.slice().sort((a, b) => b - a);
// shorted;
// arr;
// const storedBypages = books.slice().sort((a, b) => b.pages - a.pages);
// storedBypages;

// const newBook = {
//   id: 6,
//   tittle: "Harry potter and the chamber of secrets",
//   pages: 2030,
//   author: "J.S ",
// };
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;
// //////Delete the book object from array
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;
// ///// Update book  object in the array
// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1201 } : book
// );
// booksAfterUpdate;

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log("jonas");

async function goTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = goTodos();
console.log(todos);
console.log("Jyoti");
