const dark=document.querySelector(".dark");
const light=document.querySelector(".light");
const css=document.querySelectorAll("link")[3];
const fa=document.querySelectorAll(".fa");
const mode=document.querySelector('.mode');
const tooltip = document.querySelector(".tooltipText");


const clean=()=>{
  fa.forEach((e)=>{
      e.classList.add("transparent");
  });
}


mode.addEventListener("mouseover",()=>{
    tooltip.classList.toggle("hide");
})

mode.addEventListener("mouseout",()=>{
    tooltip.classList.toggle("hide");
})



dark.addEventListener("click",()=>{
  clean();
  dark.classList.toggle("transparent");
  css.setAttribute("href","css/dark.css");
});

light.addEventListener("click",()=>{
  clean();
  light.classList.toggle("transparent");
  css.setAttribute("href","css/style.css");
});