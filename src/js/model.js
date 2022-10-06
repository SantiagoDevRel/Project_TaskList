import {saveToStore, getFromStore} from "./storage"

let shoppingList = [];
let completedList = [];
let idd = 1;


export const addToShoppingList = item =>{
  shoppingList.push({id: idd, item, priority: "normal"});
  idd++
  saveToStore({shoppingList,completedList})
}

export const setPriority = (id,priority) => {
  shoppingList = shoppingList.map((item) => {
    console.log(item,item.id)
    if(item.id == id){
      return { 
        ...item,
        priority
      };
    }
    return item; 
  });
  saveToStore({shoppingList,completedList});
}

export const getShoppingList = () => {
  return shoppingList
}

export const removeItem = (itemId) => {
  shoppingList = shoppingList.filter(({id}) =>  //retorna el valor de "id" de cada elemento
  id != itemId) //me retorna los que sean diferentes de itemid
  saveToStore({shoppingList,completedList})


}

export const addToCompletedList = (itemId) => {
  const getItem = shoppingList.find(({id})=> id == itemId);
  shoppingList = shoppingList.filter(({id}) => id != itemId);
  completedList = [getItem, ...completedList];
  saveToStore({shoppingList,completedList})

}

export const getCompletedList = () => {
  return completedList;
}

export const clearCompletedList = () => {
  completedList=[];
  saveToStore({shoppingList,completedList})

}  

export const bootUp = () => {
  const {active, completed} = getFromStore();
  shoppingList = active;
  completedList = completed;
}