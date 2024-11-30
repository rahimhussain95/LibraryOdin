const library = [];

function book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

document.getElementById('bookInfo').addEventListener('submit', function(event){
    event.preventDefault();
    addBook();
})

function addBook(){
   const userBook = document.getElementById('bookTitle').value;
   const userAuth = document.getElementById('bookAuthor').value;
   const userPages = document.getElementById('bookPages').value;
   library.push(new book(userBook, userAuth, userPages));
   displayBook();
   document.getElementById('bookInfo').reset();
}

function displayBook(){
    const chart = document.getElementById('bookList');
    chart.innerHTML= '';
    library.forEach((book) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
        chart.appendChild(li);
    });
}