class Book {
    constructor(bookId, bookName, bookPrintYear, countOfBook) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookPrintYear = bookPrintYear;
        this.countOfBook = countOfBook;
    }
    checkBookStatus() {
        return this.countOfBook === 0 ? "Đã hết sách" : "Còn sách";
    }
    checkBookId(bookId) {
        if (bookId.length !== 5) {
            return false;
        }
        for (let i = 0; i < bookId.length; i++) {
            if (isNaN(bookId[i])) {
                return false;
            }
        }
        if (bookId[0] < '1' || bookId[0] > '5') {
            return false;
        }
        return true;
    }
    borrow() {
        if (this.countOfBook > 0) {
            this.countOfBook--;
            return true;
        }
        return false;
    }
}