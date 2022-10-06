export const saveToStore = function ({shoppingList, completedList}){
    window.localStorage.setItem("shoppingApp_list",JSON.stringify(shoppingList));

    window.localStorage.setItem("shoppingApp_completed", JSON.stringify(completedList));

}

export const getFromStore = function (){
    const getList = window.localStorage.getItem("shoppingAdd_list");
    const getCompleted = window.localStorage.getItem("shoppingApp_completed");

    return {
        active: getList ? JSON.parse(getList) : [],
        completed: getCompleted ? JSON.parse(getCompleted) : []
    }


}