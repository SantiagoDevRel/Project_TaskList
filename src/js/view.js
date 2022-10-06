import Item from './Item';
import { getShoppingList, getCompletedList } from './model';

const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');

export const renderShoppingList = () => {
  const arrItems = getShoppingList().map(({item,priority,id})=>{
    return Item(item,priority,id)
  })
  shoppingListDiv.innerHTML = arrItems.join("")
}

export const renderCompletedList = () => {
  const arrItems = getCompletedList().map(({item,priority,id})=> {
    return Item(item,priority,id)
  })
  completedDiv.innerHTML = arrItems.join("")
}