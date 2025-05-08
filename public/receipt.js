class ReceiptBuilder {
    constructor() {
       const { date, time, items, grand_total, paid } = JSON.parse(localStorage.getItem('final-cart'));
        this._receiptDate = date;
        this._receiptTime = time;
        this._receiptItems = items;
        this._receiptGT = grand_total;
        this._receiptPaid = paid;
    };

    render() {
        $('date').innerHTML = this._receiptDate;
        $('time').innerHTML = this._receiptTime;
        $('total-price').innerHTML = f(this._receiptGT);
        $('paid-nominal').innerHTML = f(this._receiptPaid);
        $('change-nominal').innerHTML = f(this._receiptPaid - this._receiptGT);

        this._receiptItems.forEach((item) => {
            const itemContainer = newElement('div', 'item');
            const pricingContainer = newElement('div', 'price');

            const itemName = newElement('span', 'item-name', `${item.name} x${item.qty}`);
            const basePrice = newElement('span', 'base-price', `@${f(item.price)}`);
            const subtotal = newElement('span', 'subtotal', `${f(item.price * item.qty)}`);

            pricingContainer.appendChild(basePrice);
            pricingContainer.appendChild(subtotal);

            itemContainer.appendChild(itemName);
            itemContainer.appendChild(pricingContainer);

            $('item-list').appendChild(itemContainer);
        });

        print();
    };
};

const $ = (id) => document.getElementById(id);
const f = (cash) => new Intl.NumberFormat().format(cash);
const newElement = (element, id, value, cls) => {
    const el = document.createElement(element);
    if (id) el.setAttribute('id', id);
    if (cls) el.setAttribute('class', cls);
    if (value) el.innerHTML = value;

    return el;
}

const receiptBuilder = new ReceiptBuilder();

receiptBuilder.render();