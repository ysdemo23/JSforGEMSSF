var val1=prompt("Enter first number = ")
var val2=prompt("Enter second number = ")

// prompt returns string 

function funadd(num1,num2)
{
    return(num1+num2)
}

function funmultiply(num1,num2){
    return(num1*num2)
}
document.getElementById("spanadd").innerText=funadd(val1,val2)
document.getElementById("spanm").innerText=funmultiply(val1,val2)
