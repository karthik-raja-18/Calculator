let op = "";
let first = "";
let second = "";

function append(number) {
    if (op === "") {
        first += number;
        document.getElementById("result").value = first;
    } else {
        second += number;
        document.getElementById("result").value = second;
    }
}

function setOp(o) {
    if (first !== "") {
        op = o;
    }
}

function showResult() {
    if (first !== "" && second !== "" && op !== "") {
        let res = 0;
        switch (op) {
            case "+":
                res = parseFloat(first) + parseFloat(second);
                break;
            case "-":
                res = parseFloat(first) - parseFloat(second);
                break;
            case "*":
                res = parseFloat(first) * parseFloat(second);
                break;
            case "/":
                res = parseFloat(first) / parseFloat(second);
                break;
        }
        document.getElementById("result").value = res;
        first = res.toString();
        second = "";
        op = "";
        changeResultBoxColor();
    }
}

function reset() {
    first = "";
    second = "";
    op = "";
    document.getElementById("result").value = "";
    document.getElementById("result").style.backgroundColor = "";
}

function changeResultBoxColor() {
    const colors = ["#ffcccb", "#add8e6","rgb(114, 120, 158)","pink","lightred","red","yellow","#90ee90", "#ffb347", "#ff69b4", "#d3d3d3","#ff675",];
    const colorIndex = Math.floor(Math.random() * colors.length);
    document.getElementById("result").style.backgroundColor = colors[colorIndex];
    setTimeout(() => {
        document.getElementById("result").style.backgroundColor = "";
    }, 1000);
}
