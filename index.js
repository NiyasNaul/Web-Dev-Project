


function rollDice() {

    var diceNumb = ""
    var diceType = ""
    var diceResult = 0
    var text = ""

    
    
    text = document.getElementById("inpDice").value;

    if (text.length == 0) {
        document.getElementById("diceError").innerHTML = "Please enter a dice type and number.";
    }

    else {

        document.getElementById("diceError").innerHTML = "";
        var u = document.getElementById("diceResult").value

        document.getElementById("diceResult").innerHTML = ""

        var a = false

        i = 0
        while (text.charAt(i) != "d") {
            diceNumb += text.charAt(i);
            ++i;
        }

        if (text.charAt(diceNumb.length) == "d") {
            j = diceNumb.length + 1;
            for (; j < text.length; j++) {
                diceType += text.charAt(j);
            }

        }
        else {
            diceType = 0;
        }

        for (k = 0; k < diceNumb; k++) {
            if (k != 0) {
                document.getElementById("diceResult").innerHTML += " + ";
            }
            var dp = Math.floor(Math.random() * diceType + 1)
            document.getElementById("diceResult").innerHTML += dp;
            diceResult += dp;
        }

        document.getElementById("diceResult").innerHTML += " = "

        document.getElementById("diceResult").innerHTML += diceResult;

        document.getElementById("diceResult").innerHTML += "\r\r";

        document.getElementById("diceResult").innerHTML += u;



    }


}


function randomGenerate(param) {
    ;
}


function login() {




}

function calcRand() {
    var text = document.getElementById("diceResult").value;
    document.getElementById("diceResult").innerHTML = ""

    var numb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (i = 0; i <= 1000000; i++) {
        var a = Math.floor(Math.random() * 10 + 1)

        for (j = 1; j <= 10; j++) {
            if (a == j) {
                numb[j - 1] = numb[j - 1] + 1;
            }
        }

    }

    for (i = 0; i < 10; i++) {
        document.getElementById("diceResult").innerHTML += (i + 1) + "  " + numb[i] + "\r"
    }

    document.getElementById("diceResult").innerHTML += text;

}

function clearText() {
    document.getElementById("diceResult").innerHTML = "";
}