import { userInteraction } from './interaction.js';

const items = [];
const form = document.querySelector('.form-element');
function displayTask() {
  const container = document.querySelector('.list-container');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = form.elements[0].value;
    const object = {
      description: data,
      completed: false,
      index: items.length + 1,
    };
    form.reset();
    items.push(object);
    localStorage.setItem('itemsLocal', JSON.stringify(items));
    render();
  });
  const clearElement = document.createElement('p');
  clearElement.className = 'clear';
  clearElement.innerText = 'Clear all completed';
  container.appendChild(clearElement);
  const clear = document.querySelector('.clear');
  const list = document.createElement('ul');
  list.className = 'ul-list';
  container.insertBefore(list, clear);
}

function render() {
  const list = document.querySelector('.ul-list');
  const itemsLocal = JSON.parse(localStorage.getItem('itemsLocal'));
  items.splice(0, items.length, ...itemsLocal);
  list.innerHTML = '';
  for (let i = 0; i < itemsLocal.length; i += 1) {
    const { description } = itemsLocal[i];
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<input class="list-input" type="checkbox"><textarea name="textarea cols="30" class="item-details">${description}</textarea><i class="fas fa-trash-alt"></i>`;
    list.appendChild(listItem);
  }
  const listInput = document.querySelectorAll('.list-input');
  userInteraction(listInput);
  clearList();
  removeItem();
  updateValues();
}

function removeItem() {
  const button = document.querySelectorAll(".fa-trash-alt");
  button.forEach((item) => {
    const parent = item.parentNode;
    const superParent = parent.parentNode;
    const index = Array.prototype.indexOf.call(superParent.children, parent);
    const listInput = parent.firstChild;
    item.addEventListener("click", () => {
      if (listInput.hasAttribute("checked")) {
        parent.remove();
        items.splice(index, 1);
      }
      for (let i = 0; i < items.length; i += 1) {
        items[i].index = i + 1;
      }
      localStorage.setItem("itemsLocal", JSON.stringify(items));
      render();
    });
  });
}

function clearList() {
  const getClearElement = document.querySelector(".clear");
  getClearElement.addEventListener("click", () => {
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].completed) {
        items.splice(i, 1);
      }
    }
    for (let i = 0; i < items.length; i += 1) {
      items[i].index = i + 1;
    }
    localStorage.setItem("itemsLocal", JSON.stringify(items));
    render();
  });
}

displayTask();

export { items, render };
