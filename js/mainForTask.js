// -------------------------------String-----------------------------
var litString="Hello javascript and html I am Litteral String"; ///Litteral String
var constrString=new String("hello javascript I am Costructor String"); //Constructor String`

var num=1234;
document.getElementById("strLit").innerHTML=litString;
document.getElementById("strTypeLit").innerHTML= typeof(litString);//Type Of Litteral String

document.getElementById("strConst").innerHTML=constrString;
document.getElementById("strTypeConst").innerHTML= typeof(constrString);//Type Of Constructor String

document.getElementById("strLength").innerHTML=litString.length;//Length of String

//------------------------------- get Input Value----------------------------
function getInputValue(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("myInput").value;
  document.getElementById("lengValue").innerHTML= "length Of Value is:   " +inputVal.length;
  
  // Displaying the value
  alert(inputVal.length);
}
function myFunction(){
    var strLength=document.getElementById("myString").value;
    document.getElementById("viewLength").value=strLength.length;
    alert(strLength.length);
}
  

function Hello() {
    alert("Hello World I am In Hello Function");
  }
// function scliceString(str,strat,length){
//     var strVar=str
//     var startPos=parseInt(start);
//     var length=parseInt(length);
//     document.getElementById("result").value = strVar.slice(start,length); 
// }

