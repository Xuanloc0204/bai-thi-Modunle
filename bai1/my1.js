let n = +prompt("Nhập số lượng phần tử");
let arr = [];
if (n > 0 || n <= 20) {
    for (let i = 0; i < n; i++) {
        let a = +prompt("Nhập số");
        arr.push(a);
    }
} else {
    n = +prompt("Nhập lại số lượng phần tử");
}
document.write(arr);

function average(arr) {
    let sum = 0;
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            if (i % 2 == 0) {
                sum += arr[i];
                count++;
            }
        }
    }
    let avg = sum/count;
    return avg;
}
let result = average(arr);
document.write(`<br> Trung bình các số lẻ ở vị trí chắn là ${result}`)