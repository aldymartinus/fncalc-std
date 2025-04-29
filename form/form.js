class FormHandler {
    constructor() {
        this._itemNameTxt = document.getElementById('item-name');
        this._itemQtyTxt = document.getElementById('item-qty');
        this._itemPriceTxt = document.getElementById('item-price');
        this._currentCart = [];
    };

    addItem() {
        const itemDetails = {
            name: this._itemNameTxt.value,
            qty: parseInt(this._itemQtyTxt.value),
            price: parseInt(this._itemPriceTxt.value)
        };
        this._currentCart.push(itemDetails);
        localStorage.setItem("current-transcation", JSON.stringify(this._currentCart));
    };

    removeItem(index) {
        this._currentCart.splice(index - 1, 1);
        this.renderItemList();
    };

    editItem(index) {
        const {name, qty, price} = this._currentCart[index - 1];
        this.removeItem(index);

        this._itemNameTxt.value = name;
        this._itemQtyTxt.value = qty;
        this._itemPriceTxt.value = price;

        this._itemNameTxt.focus();
    };

    updateCartSummary() {
        const itemCount = this._currentCart.length;
        const grandTotal = (arr) => {
            if (arr.length === 0) return 0;
            else {
               return arr[0] + grandTotal(arr.slice(1));
            } 
        };

        $('item-count').innerHTML = `Item count: ${itemCount}`
        $('current-gt').innerHTML = `Grand total: ${grandTotal(this._currentCart.map(i => i.price * i.qty))}`;
    };

    clearForm () {
        this._itemNameTxt.value = '';
        this._itemQtyTxt.value = '';
        this._itemPriceTxt.value = '';

        this._itemNameTxt.focus();
    }

    renderItemList() {
        $('item-list').innerHTML =  '';

        this._currentCart.forEach((item, index) => {
            // Containers    
            const itemContainer = newElement('div', 'item');
            const itemDetails = newElement('div', 'item-details');
            const actionBtnContainer = newElement('div', 'action-btn-container');
    
            // Item Details
            const itemName = newElement('span', 'cart-item-name', item.name);
            const equation = `${item.qty} x ${item.price} = ${item.qty * item.price}`;
            const priceEquation = newElement('span', 'price-equation', equation);

            // Action Buttons
            const editIcon = `<i class="${index + 1} fa-solid fa-pen"></i>`;
            const removeIcon = `<i class="${index + 1} fa-solid fa-trash"></i>`;
            const editBtn = newElement('button', 'edit-btn', editIcon, index + 1);
            const removeBtn = newElement('button', 'remove-btn', removeIcon, index + 1);

            editBtn.addEventListener('click', (e) => {
                this.editItem(e.target.classList[0]);
            });
            
            removeBtn.addEventListener('click', (e) => {
                this.removeItem(e.target.classList[0]);
            });

            itemDetails.appendChild(itemName);
            itemDetails.appendChild(priceEquation);

            actionBtnContainer.appendChild(editBtn);
            actionBtnContainer.appendChild(removeBtn);

            itemContainer.appendChild(itemDetails);
            itemContainer.appendChild(actionBtnContainer);
            
            $('item-list').appendChild(itemContainer);
        });

        this.updateCartSummary();
        this.clearForm();
    };
};

const $ = (id) => document.getElementById(id);
const formHandler = new FormHandler();

$('add-btn').addEventListener('click', () => {
    formHandler.addItem();
    formHandler.renderItemList();
});

const newElement = (element, id, value, cls) => {
    const el = document.createElement(element);
    if (id) el.setAttribute('id', id);
    if (cls) el.setAttribute('class', cls);
    if (value) el.innerHTML = value;

    return el;
}