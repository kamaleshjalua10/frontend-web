var arr=[
    ['kamalesh',19,'male'],
    ['kam',19,'male'],
    ['lesh',19,'male'],
    ['kash',19,'male'],
];
document.write("<table border='1px'>");
for(var i=0;i<arr.length;i++){
    document.write('<tr>');
    for(var j=0;j<arr[i].length;j++){
        document.write("<td>"+arr[i][j]+"</td>");
    }
    
 }
document.write('</tr>');
document.write("</table>");


var ar=[
['kamalesh',19,'male'],
['kama',19,'male'],
['lesh',19,'male'],
];
delete ar[0][1];
document.write(ar +"<br>");


var no="kamalehs";
var a=no.repeat(5);
document.write(a);

var ele;
document.getElementById("kj").Attribute[1].value="abcdef";
ele=document.getElementById("kj").getAttribute("class");

console.log(ele);


var ele1;
document.getElementById("main").setAttribute("class","kama");
ele=document.getElementById("main").getAttribute("class");
console.log(ele);

var ele2;
 ele2=document.getElementById("main").removeAttribute("class");
 console.log(ele2);

var ele;
document.querySelector("#main").className="lesh";
ele=document.querySelector("#main").className;
console.log(ele);

document.querySelector("#main").onclick=abc;
function abc(){
    document.querySelector("#main").style.background="blue";
}

document.querySelector("#main").addEventListener("click",function abc(){
    this.style.background="yellow";
    or
    document.querySelector("#main").style.background="blue";
    alert("div1");
    
},true);


document.querySelector("#div2").addEventListener("click",fir,true);
function fir(){
    this.style.background="yellow";
    alert("div2");
}


var ele1=document.createElement("h1");
var ele2=document.createTextNode("kamalesh");

ele1.appendChild(ele2);
document.querySelector("#main").appendChild(ele2);


var ele=document.createTextNode("hiii");
var tar=document.querySelector("#main");
tar.insertBefore(ele,tar.childNodes[0]);


var ele1=document.createElement("h1");
var ele=document.createTextNode("kbhai");
ele1.appendChild(ele);
var eee=document.querySelector("#main");
eee.insertAdjacentElement("beforebegin",ele1);


var eltx="<h1> jalua </h2>";
var tar=document.querySelector("#main");
tar.insertAdjacentHTML("beforebegin",eltx);


var ele=document.createTextNode("jalua");
var target=document.querySelector("#main");
var tg=target.children[0];
target.replaceChild(ele,tg);


var target=document.querySelector("#main");
var tg=target.children[0];
target.removeChild(tg);


var target=document.querySelector("#main").children[0];
var newe=target.cloneNode(true);
document.querySelector(".or").appendChild(newe);