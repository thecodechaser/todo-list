const textDecoration = (listInput) => {
  listInput.forEach((item) => {
    if (item.hasAttribute('checked')) {
      item.nextSibling.style.textDecoration = 'line-through';
    } else {
      item.nextSibling.style.textDecoration = 'none';
    }
  });
};

export default function userInteraction(listInput) {
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
    });
  });
}
