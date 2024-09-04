function checkNumbers() {
    let a = +document.getElementById("num1").value;
    let b = +document.getElementById("num2").value;
    let sum = 0;
    for (let i = 1; i < a; i++) {
        if (a % i === 0) {
            sum += i
        }
    }
    if (sum === b) {
        document.getElementById("result").innerHTML = a + ", " + b + " là cặp số thân thiết";
    } else {
        document.getElementById("result").innerHTML =  a + ", " + b + " không là cặp số thân thiết";

    }
}