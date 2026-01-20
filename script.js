function getNumbers() {
    let num1 = Number(document.getElementById("input1").value);
    let num2 = Number(document.getElementById("input2").value);
    return { num1, num2 };
}

function add() {
    let { num1, num2 } = getNumbers();
    document.getElementById("resultDisplay").innerHTML = "Result: " + (num1 + num2);
}

function subtract() {
    let { num1, num2 } = getNumbers();
    document.getElementById("resultDisplay").innerHTML = "Result: " + (num1 - num2);
}

function multiply() {
    let { num1, num2 } = getNumbers();
    document.getElementById("resultDisplay").innerHTML = "Result: " + (num1 * num2);
}

function divide() {
    let { num1, num2 } = getNumbers();

    if (num2 === 0) {
        document.getElementById("resultDisplay").innerHTML = "Error: Cannot divide by zero";
    } else {
        document.getElementById("resultDisplay").innerHTML = "Result: " + (num1 / num2);
    }
}

function clearAll() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("resultDisplay").innerHTML = "Result will appear here";
}
