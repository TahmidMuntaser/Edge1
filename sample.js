// alert("Alert message!!")

function test(){
   document.getElementById("test").style.color = "red";
   document.getElementById("test").innerHTML = "Hello World!";
   document.getElementById("test").append("Test")
}

function test2(){
    var f = parseInt(document.getElementById("first").value);
    var s = parseInt(document.getElementById("second").value);
    var total = f + s;

    document.getElementById("res").innerHTML = total;
}

