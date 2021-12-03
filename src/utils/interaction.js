/* eslint-disable import/no-cycle */
import { items, render } from './structure.js';

function textDecoration(listInput) {
  listInput.forEach((item) => {
    if (item.hasAttribute('checked')) {
      item.nextSibling.style.textDecoration = 'line-through';
    } else {
      item.nextSibling.style.textDecoration = 'none';
    }
  });
}

function userInteraction(listInput) {
  const itemsLocal = JSON.parse(localStorage.getItem('itemsLocal'));
  listInput.forEach((item) => {
    item.addEventListener('change', () => {
      const parent = item.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const currentItem = itemsLocal[index].completed;
      if (currentItem) {
        item.removeAttribute('checked');
        parent.lastChild.style.display = 'none';
        itemsLocal[index].completed = false;
      } else {
        item.setAttribute('checked', '');
        parent.lastChild.style.display = 'block';
        itemsLocal[index].completed = true;
      }
      textDecoration(listInput);
      localStorage.setItem('itemsLocal', JSON.stringify(itemsLocal));
      items.splice(0, items.length, ...itemsLocal);
    });
  });
}

function storeValues() {
  document.querySelectorAll('.list-input').forEach((item) => {
    item.addEventListener('change', () => {
      localStorage.setItem('itemsLocal', JSON.stringify(items));
    });
  });
}

function populateStorage() {
  window.addEventListener('load', () => {
    render();
    const listInput = document.querySelectorAll('.list-input');
    const itemsLocal = JSON.parse(localStorage.getItem('itemsLocal'));
    listInput.forEach((item) => {
      const parent = item.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const currentItem = itemsLocal[index].completed;
      if (currentItem) {
        item.setAttribute('checked', '');
        parent.lastChild.style.display = 'block';
      }
    });
    textDecoration(listInput);
  });
}

export { storeValues, populateStorage, userInteraction };
