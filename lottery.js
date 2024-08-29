let button = document.getElementsByClassName("button");

function Random(max) {
    return Math.floor(Math.random() * max);
}

function onClick() {
    const dels = document.getElementsByClassName("p");
    while(dels.length > 0){
        dels[0].parentNode.removeChild(dels[0]);
    }

    var list = document.getElementById("text");
    var value = list.value;
    const array = value.split('\n');
    var num = array.length;

    var amount1 = document.getElementById("first").value;
    amount1 = parseInt(amount1);
    var amount2 = document.getElementById("second").value;
    amount2 = parseInt(amount2);
    var amount3 = document.getElementById("third").value;
    amount3 = parseInt(amount3);

    if (amount1 + amount2 + amount3 > num) {
        alert("The total amount can't out of " + num + ".");
        return;
    }

    var arr = [];
    var text = "";

    for (i = 0; i < amount1; i++) {
        var ram = Random(num);
        if (!arr.includes(ram)) {
            text += array[ram];
            arr.push(ram);
            if (i < amount1 - 1) text += ", ";
        }
        else {
            i--;
        }
    }
    
    displayText(text, "1st"); 
    
    text = "";

    for (i = 0; i < amount2; i++) {
        var ram = Random(num);
        if (!arr.includes(ram)) {
            text += array[ram];
            arr.push(ram);
            if (i < amount2 - 1) text += ", ";
        }
        else {
            i--;
        }
    }

    if (amount2 > 0) displayText(text, "2nd");  

    text = "";

    for (i = 0; i < amount3; i++) {
        var ram = Random(num);
        if (!arr.includes(ram)) {
            text += array[ram];
            arr.push(ram);
            if (i < amount3 - 1) text += ", ";
        }
        else {
            i--;
        }
    }

    if (amount3 > 0) displayText(text, "3rd"); 
    
}

function displayText(text, place) {
    const p = document.createElement("p");
    const node = document.createTextNode("Congratulate " + place + " : " + text + " !");
    p.appendChild(node);
    p.setAttribute("class", "p");

    let color;
    if (place == "1st") {
        color = "orange";
    }
    else if (place == "2nd") {
        color = "gray";
    }
    else {
        color = "#B87333";
    }
    p.style.color = color;

    const element = document.getElementById("div1");
    element.appendChild(p);
}
