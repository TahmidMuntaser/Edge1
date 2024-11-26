document.addEventListener('keydown', function(event) {
    const key = event.key;
    // const resultElement = document.getElementById("result");

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        dis(key);
    } 
    else if (key === 'Enter') {
        solve();
    } 

    else if (key === 'Backspace') {
        del();
    } 
    
    else if (key === 'Escape') {
        clr();
    }
});

function dis(val) {
    document.getElementById("result").value += val;
}

function clr() {
    document.getElementById("result").value = "";
}

function del() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function solve() {
    let x = document.getElementById("result").value;

    if (/[\+\-\*\/]{2,}/.test(x)) {
        document.getElementById("result").value = "Error";
        setTimeout(() => {
            document.getElementById("result").value = "";
        }, 500);
        return;
    }

    try {
        let y = eval(x);
        document.getElementById("result").value = y;
    } catch (e) {
        document.getElementById("result").value = "Error";
        setTimeout(() => {
            document.getElementById("result").value = "";
        }, 500);
    }
}