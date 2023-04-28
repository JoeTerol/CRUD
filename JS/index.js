const items = []

function createItems(item, items){
   items.push(item)
  return console.log(item)
}
createItems ({name: "Carlos", id: 33}, items);
createItems ({name: "Luis", id: 34}, items);

function getAllItems (array){
  return(array)
}
getAllItems(items)
console.log(items)

function searchItems(id, items) {
  if (isNaN(id)) {
    console.log("El ID debe ser de tipo number");
  }
const foundItem = items.find(item => item.id === id);

return foundItem
}
searchItems(33, items);

function updateItems(id,data,items){
  if (isNaN(id)|| typeof data !== "string"){
    console.log("La entrada tiene que ser de tipo numero y texto")
  }
const itemSearch = items.find(i => i.id === id);
      itemSearch.name = data; 
return itemSearch
}

updateItems(33, "Pablo", items)

function deleteProducts (id,items) {
  if (isNaN(id)) { 
    console.log("ingrese un numero")
  }
  const indexItem = items.findIndex(item => item.id === id);
  if (indexItem !== -1){
  items.splice(indexItem, 1);
  console.log("el item con con el ID", id ,"ha sido eliminado");
  }else{
    console.log("ingrese un numero valido")
  }
  return items;
}
deleteProducts(33, items)

