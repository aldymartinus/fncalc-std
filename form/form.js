class FormHandler {
    constructor() {
        this._itemNameTxt = $('item-name');
        this._itemQtyTxt = $('item-qty');
        this._itemPriceTxt = $('item-price');
        this._paidNominal = $('paid-amount');

        this._itemQtyTxt.addEventListener('keydown', e => this.validateNumberInput(e));
        this._itemPriceTxt.addEventListener('keydown', e => {
            if(e.key === 'Enter') $('add-btn').click();
            this.validateNumberInput(e);
        });
        this._paidNominal.addEventListener('keydown', e => {
            if(e.key === 'Enter') $('print-btn').click();
            this.validateNumberInput(e)
        });

        this._currentGT = 0;
        this._currentCart = [];
    };

    addItem() {
        const itemDetails = {
            name: this._itemNameTxt.value,
            qty: parseInt(this._itemQtyTxt.value),
            price: parseInt(this._itemPriceTxt.value.replace(/,/g, ""))
        };

        this.clearForm();
        this._currentCart.push(itemDetails);
        localStorage.setItem("current-transaction", JSON.stringify(this._currentCart));
    };

    removeItem(index) {
        this._currentCart.splice(index, 1);
        this.renderItemList();
    };

    editItem(index) {
        const {name, qty, price} = this._currentCart[index];
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
        
        this._currentGT = grandTotal(this._currentCart.map(i => i.price * i.qty));
        $('item-count').innerHTML = `Item count: ${itemCount}`
        $('current-gt').innerHTML = `Grand total: ${f(this._currentGT)}`;
    };

    checkOut() {
        let paid = parseInt(this._paidNominal.value.toString().replace(/,/g, ""));

        if(this._paidNominal.value === '') paid = this._currentGT;
        if(paid < this._currentGT) return;

        const date = new Date();
        const currentDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const currentMonth = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
        const currentHour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const currentMinutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        const currentSeconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

        const finalCart = {
            date: `${currentDate}/${currentMonth}/${date.getFullYear()}`,
            time: `${currentHour}:${currentMinutes}:${currentSeconds}`,
            items: this._currentCart,
            grand_total: this._currentGT,
            paid: paid
        };

        localStorage.setItem('final-cart', JSON.stringify(finalCart));
        window.open('/receipt');
    };

    clearForm () {
        this._itemNameTxt.value = '';
        this._itemQtyTxt.value = '';
        this._itemPriceTxt.value = '';

        this._itemNameTxt.focus();
    }

    validateNumberInput(e) {
        if(e.key == 'Backspace' || e.key == 'Enter' || e.key == 'Tab') return;
        if(e.key < '0' || e.key > '9') e.preventDefault();       
    };

    renderItemList() {
        $('item-list').innerHTML =  '';

        this._currentCart.forEach((item, index) => {
            // Containers    
            const itemContainer = newElement('div', 'item');
            const itemDetails = newElement('div', 'item-details');
            const actionBtnContainer = newElement('div', 'action-btn-container');

            // Item Details
            const itemName = newElement('span', 'cart-item-name', item.name);
            const equation = `${item.qty} x ${f(item.price)} = ${f(item.qty * item.price)}`;
            const priceEquation = newElement('span', 'price-equation', equation);

            // Action Buttons
            const editIcon = '<i class="fa-solid fa-pen"></i>';
            const removeIcon = '<i class="fa-solid fa-trash"></i>';
            const editBtn = newElement('button', 'edit-btn', editIcon);
            editBtn.dataset.index = index;
            const removeBtn = newElement('button', 'remove-btn', removeIcon);
            removeBtn.dataset.index = index;

            editBtn.addEventListener('click', (e) => {
                this.editItem(e.currentTarget.dataset.index);            
            });
            
            removeBtn.addEventListener('click', (e) => {
                this.removeItem(e.currentTarget.dataset.index);
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
    };
};

const $ = (id) => document.getElementById(id);
const f = (cash) => new Intl.NumberFormat().format(cash);

const formHandler = new FormHandler();

$('add-btn').addEventListener('click', () => {
    formHandler.addItem();
    formHandler.renderItemList();
});

$('proceed-btn').addEventListener('click', () => {
    $('checkout-prompt').style.display = 'flex';
    $('final-gt').innerHTML = `GT: ${f(formHandler._currentGT)}`;
    $('checkout-prompt').showModal();
});

$('print-btn').addEventListener('click', () => {
    formHandler.checkOut();
    $('cancel-btn').click();
});

$('cancel-btn').addEventListener('click', () => {
    $('paid-amount').value = '';
    $('checkout-prompt').style.display = 'none';
    $('checkout-prompt').close();
});

const cleavePriceInput = new Cleave('#item-price', {
    numeral: true,
    numeralThousandGroupStyle: 'thousand'
});

const cleaveGtInput = new Cleave('#paid-amount', {
    numeral: true,
    numeralThousandGroupStyle: 'thousand'
});



const newElement = (element, id, value, cls) => {
    const el = document.createElement(element);
    if (id) el.setAttribute('id', id);
    if (cls) el.setAttribute('class', cls);
    if (value) el.innerHTML = value;

    return el;
}