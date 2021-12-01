import { items, displayTask } from './structure.js';

const listInput = displayTask();

function userInteraction() {
  listInput.forEach((item) => {
    item.addEventListener('change', () => {
      const parent = item.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const currentItem = items[index].completed;
      if (currentItem) {
        items[index].completed = false;
      } else {
        items[index].completed = true;
      }
    });
  });
}

function storeValues() {
  listInput.forEach((item) => {
    item.addEventListener('change', () => {
      localStorage.setItem('itemsLocal', JSON.stringify(items));
    });
  });
}

function populateStorage() {
  
}

export { userInteraction, storeValues, populateStorage };
