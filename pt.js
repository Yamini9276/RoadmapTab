let F = document.querySelector("#First");
let h1=document.querySelector(".hide1");
let S = document.querySelector("#Second");
let h2=document.querySelector(".hide2");
let T = document.querySelector("#third");
let h3=document.querySelector(".hide3");
let Fo= document.querySelector("#Fourth");
let h4=document.querySelector(".hide4");

h1.style.display="block";
F.style.textDecoration = "underline";
F.addEventListener("click", () => {
   console.log("clicked")
   F.style.textDecoration = "underline";
   S.style.textDecoration = "none";
   T.style.textDecoration = "none";
   Fo.style.textDecoration = "none";
   h1.style.display="block";
   h2.style.display="none";
   h3.style.display="none";
   h4.style.display="none";
   
 });
 S.addEventListener("click", () => {
    console.log("clicked")
    F.style.textDecoration = "none";
    S.style.textDecoration = "underline";
    T.style.textDecoration = "none";
    Fo.style.textDecoration = "none";
    h1.style.display="none";
    h2.style.display="block";
    h3.style.display="none";
    h4.style.display="none";
    
  });
  T.addEventListener("click", () => {
    console.log("clicked")
    F.style.textDecoration = "none";
    S.style.textDecoration = "none";
    T.style.textDecoration = "underline";
    Fo.style.textDecoration = "none";
    h3.style.display="block";
    h2.style.display="none";
    h1.style.display="none";
    h4.style.display="none";
    
  });
  Fo.addEventListener("click", () => {
    console.log("clicked")
    Fo.style.textDecoration = "underline";
    S.style.textDecoration = "none";
    T.style.textDecoration = "none";
    F.style.textDecoration = "none";
    h4.style.display="block";
    h2.style.display="none";
    h3.style.display="none";
    h1.style.display="none";
    
  });


