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
  window.addEventListener('load', () => {
    const itemsLocal = JSON.parse(localStorage.getItem('itemsLocal'));
    items.splice(0, items.length, ...itemsLocal);
    listInput.forEach((item) => {
      const parent = item.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const currentItem = itemsLocal[index].completed;
      if (currentItem) {
        item.setAttribute('checked', '');
      }
    });
  });
}

export { userInteraction, storeValues, populateStorage };
