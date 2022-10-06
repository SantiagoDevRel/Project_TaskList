import Item from "./Item"
import { addToShoppingList, getShoppingList, removeItem, setPriority, addToCompletedList, getCompletedList, clearCompletedList, bootUp} from "./model";
import { renderShoppingList, renderCompletedList } from "./view";

const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');
const clearCompletedBtn = document.querySelector('#clear-completed');


itemInput.addEventListener("keyup", function (evt){
  if(evt.key == "Enter"){
    //console.log(evt.target.value)
    addToShoppingList(evt.target.value) //add to array shoppingList
    renderShoppingList() //update view
    this.value=""
  }
})

shoppingListDiv.addEventListener("click", function(evt){
  if(evt.target.parentElement.classList.contains("priority-control")){
    const valuePriority = evt.target.classList.value
    const itemId = evt.target.parentElement.parentElement.getAttribute("data-id")
    setPriority(itemId,valuePriority) //set priority
    renderShoppingList() //render view
  }

  //remove
  if(evt.target.classList.value == "remove-btn"){
    const itemId = evt.target.parentElement.getAttribute("data-id")
    const confirm = window.confirm("Do you really want to delete this item?")
    console.log(itemId)
    if(confirm){
      removeItem(itemId)
    }
    renderShoppingList();
  }
})

shoppingListDiv.addEventListener("dragstart", function(evt){
  //console.log(evt.target.getAttribute("data-id"))
  if(evt.target.classList.contains("item")){ //si el div seleccionado es de clase "item" entra la if{}
    const getId = evt.target.getAttribute("data-id"); //tomo el id del item
    evt.dataTransfer.setData("text/plain",getId) //seteo la data con el nuevo id
  }
})

completedDiv.addEventListener("drop",function(evt){
  const itemId = evt.dataTransfer.getData("text/plain")

  if(itemId){

    addToCompletedList(itemId);

    renderShoppingList();

    renderCompletedList();
  }
})

completedDiv.addEventListener("dragover", function (evt){
  evt.preventDefault();

})

clearCompletedBtn.addEventListener("click", function(evt){
  clearCompletedList()
  renderCompletedList()
})  


//inmediately invoked function expression (IIFE)
(()=>{
  bootUp();
  renderShoppingList();
  renderCompletedList();
})(); //no OLVIDAR estos parentesis para invocar la funcion