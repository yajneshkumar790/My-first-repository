function performop(op) {
var result = 0;
var n1=parseInt(document.getElementById("num1").value);
var n2=parseInt(document.getElementById("num2").value);
switch(op) {
case "+":
var result=n1+n2 ;
break;
case "-":
var result=n1-n2 ;
break;
case "*":
var result=n1*n2 ;
break;
case "/":
if(n2!=0)
{
var result=n1/n2 ;
}
else
{
result="Divide BY Zero!!!";
}
break;
default:
result= "Invalid operation";
}
document.getElementById("res").value=result;
}
