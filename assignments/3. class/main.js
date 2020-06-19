class BookList{
    constructor(booksRead,booksPending,nextBook,currentBook,prevBook,allBooks){
        this.booksRead = booksRead;
        this.booksPending = booksPending;
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.prevBook = prevBook;
        this.allBooks = allBooks;//confusion should we take array or allBooks
    }
    add(book){
        this.allBooks.push(book);
    }
    finishCurrentBook(){
        this.currentBook.isRead = true;
        this.currentBook.readDate = new Date(Date.now());
        this.prevBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = this.allBooks.find(book => !book.isRead);
    }
}

class Book{
    constructor(title,genre,author,isRead,readDate){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
        this.readDate = readDate;
    }

}