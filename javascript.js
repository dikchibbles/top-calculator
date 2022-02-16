const numDiv = document.getElementById('numbers');
const toolsDiv = document.getElementById('tools');

function createCalcButtons () {
    const btnList = [7, 8, 9, "%", 4, 5, 6, "x", 1, 2, 3, "-", 0, "=", "+"];
    btnList.forEach(button => {
        btn = document.createElement('button');
        btn.textContent = button;
        if (button === 0) {
            btn.classList.add('num-item-zero')
        }
        btn.classList.add('num-item');
        numDiv.appendChild(btn);
    })
}

createCalcButtons()

const numButtons = numDiv.querySelectorAll('button');
const clearButton = toolsDiv.getElementsByClassName('tools-clear')[0];
const delButton = toolsDiv.getElementsByClassName('tools-delete')[0];
const display = document.getElementById('display');



delButton.addEventListener('click', () => display.innerText = display.innerText.slice(0, -1));

main()


var operators = {
    '+': function(a, b) {
        return a + b;
    },
    'x': function(a, b) {
        return a * b;
    },
    '-': function(a, b){
        return a - b;
    },
    '%': function(a, b) {
        return (a / b).toFixed(3);
    }
};


function main () {
    let numsOpers = [];
    clearButton.addEventListener('click', () => {
        display.innerText = "";
        numsOpers = [];
        console.log(numsOpers)
    });
    numButtons.forEach(button => {
        button.addEventListener('click', () => {
            let text;
            if (display.innerText.length < 7) {
                console.log(display.innerText.length)
                text = button.innerText;
             if (text !== "=" && text !== "-" && text !== "+" && text !== "x" && text !== "%") {
                display.textContent += button.textContent;  
                } else {
                    if(button.innerText !== "=") {
                        numsOpers.push(+display.innerText);
                        numsOpers.push(button.innerText);
                        display.innerText = "";
                    } else {
                        numsOpers.push(+display.innerText)
                        let operator = "+";
                        let result = numsOpers.reduce((acc, cur) => {
                            if(typeof cur === 'number') {
                                acc = operators[operator](acc, cur);
                            } else {
                                operator = cur;
                            }
                            return acc
                        })
                        display.innerText = result;
                        numsOpers = [];
                    }
                }
            }
        })
    });
}


