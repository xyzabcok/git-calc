function addNum(num1, num2) {
    return num1 + num2;
}

function subtractNum(num1, num2) {
    return num1 - num2;
}

function divideNum(num1, num2) {
    return num1 / num2;
}

function multiplyNum(num1, num2) {
    return num1 * num2;
}

function operate(operation) {
    switch(operation) {
        case "add":
            addNum();
            break;
        case "subtract":
            subtractNum();
            break;
        case "divide":
            divideNum();
            break;
        case "multiply":
            multiplyNum();
            break;
    }
}

const lcdScreen = document.querySelector("#screen");
console.log(`${lcdScreen}`);

function buttonHandler(event) {
    const clickedButton = event.currentTarget;
    lcdScreen.innerHTML += `${clickedButton.textContent}`;
}


