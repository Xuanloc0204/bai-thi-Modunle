
const books = [
    toan= new Book(123, "Toán", 2000, 3,true),
    van= new Book(234, "Văn", 1998, 4,true),
    anh= new Book(345, "Anh", 1999, 5,false),
];
function showListBook() {
    let html = "";
    books.forEach(book => {
        html += `<tr>`;
        html += `<td>${book.bookId}</td>`;
        html += `<td>${book.bookName}</td>`;
        html += `<td>${book.bookPrintYear}</td>`;
        html += `<td>${book.countOfBook}</td>`;
        html += `<td>${book.checkBookStatus()}</td>`;
        html += `</tr>`;
    });
    document.getElementById("bookTableBody").innerHTML = html;
}
function addBook() {
    const bookId = +document.getElementById("bookId").value;
    const bookName = document.getElementById("bookName").value;
    const bookPrintYear = document.getElementById("bookPrintYear").value;
    const countOfBook = document.getElementById("countOfBook").value;
    books.push(newBook);
    showListBook();
    clearForm();
}


function clearForm() {
    document.getElementById("bookId").value = '';
    document.getElementById("bookName").value = '';
    document.getElementById("bookPrintYear").value = '';
    document.getElementById("countOfBook").value = '';
}
function borrowBook() {
    const borrowBookId = document.getElementById("borrowBookId").value;
    const book = books.find(b => b.bookId === borrowBookId);
    if (book) {
        if (book.borrow()) {
            alert("Mượn sách thành công!");
        } else {
            alert("Sách đã hết!");
        }
        showListBook();
    } else {
        alert("Sách không tồn tại.");
    }
}