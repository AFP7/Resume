/*---------------------------------
-----------------------munu
-----------------------actions
----------------------------------*/
const menu =document.getElementById("menu");
const actions =document.getElementById("actions");
function hundleManu(){
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}
menu.addEventListener("click",()=>{
 hundleManu();
})
/*-----------------/////////////////////////////////////////////////////--------------------------------------*/


