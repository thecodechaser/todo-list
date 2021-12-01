import {items, displayTask} from './structure.js'

const listInput = displayTask();

function userInteraction(){
  listInput.forEach((item) => {
    item.addEventListener("change", () => {
     const parent= item.parentNode;
     const superParent= parent.parentNode;
     const index = Array.prototype.indexOf.call(
       superParent.children,
       parent
     );
     const currentItem = items[index].completed;
     if(currentItem){
       items[index].completed=false;
     } else {
       items[index].completed = true;
     }
     console.log(index);
    });
  });
}

function storeValues() {
  
  }

function populateStorage(){

}



export {userInteraction, storeValues, populateStorage};