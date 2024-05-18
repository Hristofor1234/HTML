document.querySelector("h1").innerText="Cделанно в JS";

document.querySelector("img").src="/images1/img1.jpg";
let img=document.querySelector("img");
img.setAttribute("style","max-width:1000px; margin-top:100px")

let pr=document.querySelector("p");
let old_text=pr.innerText;
pr.innerText=old_text+"/ da da da";
pr.setAttribute("style", "margin-top:-800px; margin-left:400px")


let body=document.querySelector("body");
body.innerHTML=body.innerHTML+"<div></div>";

let div=document.querySelector("div");
div.setAttribute("style","width:100px; height:100px; background:green");
div.innerHTML="<p>ffsfgld</p>"