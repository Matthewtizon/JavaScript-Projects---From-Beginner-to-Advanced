const itemsArr = ['high', 'hello', 'high', 'hello'];

const itemContainer = document.getElementById('items');
const itemInput = document.getElementById('itemInput');

function renderItems() {
    itemContainer.innerHTML = null;

    for (const [idx, item] of Object.entries(itemsArr)) {
        const container = document.createElement("div");
        container.style.marginBottom = "10pX";
        
        const text = document.createElement("p");
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;
        
        const button = document.createElement('button');
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx);

        container.appendChild(text);
        container.appendChild(button)

        itemContainer.appendChild(container);
    }
}

renderItems(itemsArr)

function loadItems() {
    
}



function saveItems() {
    
}

const addItem = () => {

}

function removeItem(idx) {
    itemsArr.splice(idx, 1)
    renderItems()
}


loadItems(itemsArr)