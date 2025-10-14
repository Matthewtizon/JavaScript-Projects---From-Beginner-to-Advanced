const input = document.getElementById("input");


function reverseCheck(str){
    return str.split("").reverse().join("");
}


function check(){
    const value = input.value;
    const reverse =  reverseCheck(value);
    if (value === reverse) {
        alert("Palindrome")
    } else {
        alert("not")
    }
}

