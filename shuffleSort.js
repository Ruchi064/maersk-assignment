
 const getShuffledArr = (arr) => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
};
  
window.onload = () => {
    let list = document.getElementById("shuffleAndSort");
  
    const shuffle = () => {
      let nodes = list.children,
        i = 0;
      nodes = Array.prototype.slice.call(nodes);
      nodes = getShuffledArr(nodes);
      const fragment = document.createDocumentFragment();
      while (i < nodes.length) {
        fragment.appendChild(nodes[i]);
        ++i;
      }
      list.appendChild(fragment);
    }
  
    const sortItems = () => {
      let items = list.childNodes;
      let itemsArr = [];
      for (let i in items) {
        if (items[i].nodeType == 1) {
          itemsArr.push(items[i]);
        }
      }
  
      itemsArr.sort((a, b) => {
        return a.innerHTML - b.innerHTML;
      });
  
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < itemsArr.length; ++i) {
        fragment.appendChild(itemsArr[i]);
      }
      list.appendChild(fragment);
    }
  
    document.getElementById("sort").onclick = sortItems;
    document.getElementById("shuffle").onclick = shuffle;
};