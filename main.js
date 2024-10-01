var input1Elment = document.getElementById("input1");
var input2Elment = document.getElementById("input2");
var result = document.getElementById("result");


function addNumber(){

    result.innerHTML = parseFloat(input1Elment.value) + parseFloat(input2Elment.value);

    clear()
}

function subNumber(){
   
    result.innerHTML = parseFloat (input1Elment.value) - parseFloat(input2Elment.value);

    clear()
}

function mulNumber(){

    result.innerHTML = parseFloat(input1Elment.value) * parseFloat(input2Elment.value);

    clear()
}

function divNumber(){

    result.innerHTML = parseFloat(input1Elment.value) / parseFloat(input2Elment.value);

    clear() 
}

function clear(){
    input1Elment.value = "";
    input2Elment.value = "";
}