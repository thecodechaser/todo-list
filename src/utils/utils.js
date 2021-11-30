import { items } from '../index.js';

export default function displayTask() {
  const container = document.querySelector('.list-container');
  const list = document.createElement('ul');

  for (let i = 0; i < items.length; ++i) {
    const item = items[i];
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<div class="item-conatiner"><i class="far fa-square"></i><p>${item.description}</p></div><hr>`;
    list.appendChild(listItem);
  }

  container.appendChild(list);
  const clearElement = document.createElement('p');
  clearElement.className = 'clear';
  clearElement.innerText = `Clear all completed`;
  container.appendChild(clearElement);
}
