const items = []

function createItems(item, items){
   items.push(item)
  return item
}
createItems ({name: "Carlos", id: 33}, items);
createItems ({name: "Luis", id: 34}, items);
console.log(items)
function getAllItems (array){
  return(array)
}
getAllItems(items)

function searchItems(id, items) {
  if (!id) {
    console.log("El ID es requerido");
  }
const foundItem = items.find(item => item.id === id);

return foundItem
}
searchItems(33, items);

function updateItems(id,data,items){
const itemSearch = items.find(i => i.id === id);
      itemSearch.name = data; 
return itemSearch
}

updateItems(33, "Pablo", items)

function deleteProducts (id,items) {
  const indexItem = items.findIndex(item => item.id === id);
  if (indexItem !== -1){
  items.splice(indexItem, 1);
  } 
  return items;
}
deleteProducts(33, items)

