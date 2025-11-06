const inputCheck = document.getElementById('check');


function reversString(str) {
    return str.split("").reverse().join("");
}

function check(){
    const value = inputCheck.value;
    //console.log(copyValue)
    //alert(value)
    if (value !== reversString(value)) {
        alert("Not Palindrome")
    } else {
        alert("A Palindrome")
    }
    inputCheck.value = "";
}
