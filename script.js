
let close = (para, span) => {
   para = document.getElementsByTagName("p");
   span = document.getElementsByTagName("span");
    
  for(let i = 0; i < para.length; i++) {  
    span[i].onclick = function() {
      span[i].parentElement.style.display = "none";
      // setTimeout(() => span[i].parentElement.style.display = "none", 300);
      // span[i].parentElement.hidden = "false";
    }
  }

}
let checked = (para) => {
  para = document.getElementsByTagName("p");
  for(let i = 0; i < para.length; i++) {
    para[i].onclick = function() {
      para[i].classList.toggle("checked");
    }
  }
}

let buttonAdd = document.getElementById("add");

buttonAdd.onclick = function () {

   inputAdd = document.getElementById("inputAdd").value;

  if(inputAdd.trim() === "") {

    alert("Invalid context");

  } else {

  /// creat element
    let DIV = document.createElement("div");
    let P = document.createElement("p");
    let node = document.createTextNode(inputAdd);
    let SPAN  = document.createElement("span");
    let nodeSpan = document.createTextNode("x");
    
    SPAN.appendChild(nodeSpan);
    P.appendChild(node);
    DIV.appendChild(SPAN);
    DIV.appendChild(P);
    DIV.classList.add("animationShow");
    let divAdd = document.getElementById("divAdd");
    divAdd.appendChild(DIV);
  ///
  }
  
    close();
    checked();
    inputAdd = document.getElementById("inputAdd").value = "";

}
checked();
close();
