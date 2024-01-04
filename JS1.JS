let books = [{
    id: 1, 
    title: "Start with why",
    author: "Simon Sinek",
    price: 80.0,
    quantity: 13 
},{
    id: 2,
    title: "But how do it know",
    author: "J. Clark Scott",
    price: 59.9,
    quantity: 22 
},{ 
    id: 3,
    title: "Clean Code",
    author: "Robert Cecil Martin",
    price: 50.0,
    quantity: 5 
},{ 
    id: 4,
    title: "Zero to One",
    author: "Peter Thiel",
    price: 45.0,
    quantity: 12
    },{ 
    id: 5,
    title: "You don't know JS",
    author: "Kyle Simpson",
    price: 39.9,
    quantity: 9 
}
];

const addBook = (id, title, author, price, quantity) => {
  books.push({ id, title, author, price, quantity });
}



function searchBook(title) {
  for (let book of books) {
    if (book.title.includes(title)) {
      return book;
    }
  }
  return null;
}




function sellBook(title, quantity, balance) {
  let book = searchBook(title);

  if (book && book.quantity >= quantity && balance >= book.price * quantity) {

    book.quantity -= quantity;
    balance -= book.price * quantity;
    console.log(`تم بيع ${quantity} نسخة من ${book.title}. الرصيد المتبقي: ${balance}`);
  } else {
    console.log("تحقق من توفر الكتاب والكمية والرصيد");
  }
}
function displayBooks() {
  console.log("معلومات الكتب:");
for (let book of books) {
    console.log(`
العنوان: ${book.title}
المؤلف: ${book.author}
السعر: ${book.price}
الكمية: ${book.quantity}
رقم المنتج: ${book.id}
`)
}


    
// Test funs
addBook(6, "The Pragmatic Programmer", "David Thomas", 55.0, 15);
displayBooks();

sellBook("Clean Code", 2, 1000);
displayBooks();