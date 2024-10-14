function getDishesTemplate(i) {
    return `
            <div class="selection_example dfr sbfs">
                <div class="dfc fsfs">
                    <h2>${dishesList[i].name}</h2>
                    <span>${dishesList[i].description}</span>
                    <span class="price_tag">${dishesList[i].price.toFixed(2).replace('.', ',')} €</span>
                </div>
                <div class="selection_foodimg_btn dfr">
                    <img class="selection_foodimg" src="${dishesList[i].foodImg}">
                    <button onclick="pushIntoBasket(${i})" class="selection_btn" id="selectedDish">+</button>
                </div>
            </div>
        `;
}

function getBasketTemplate(i) {
return `
        <hr>
        <h3>${dishesList[i].name}</h3>
        <div class="dfr sbc">
            <button onclick="decreaseDishesAmount(${i})" class="btn_small">-</button>
            <span id="dishes_amount_${i}">${dishesList[i].amount}</span>
            <button onclick="increaseDishesAmount(${i})" class="btn_small">+</button>
            <span>${(dishesList[i].price * dishesList[i].amount).toFixed(2).replace('.', ',')} €</span>
            <button onclick="removeDishFromBasket(${i})" class="btn_small"><img src="assets/icons/trash_basket.png"
                    alt="löschen"></button>
        </div>
    `;
}

// function calculateBasketPrice() {
//     return `
//             // <hr>
//         // <div>
//         //     <div class="dfc">
//         //         <span>Zwischensumme</span>
//         //         <span>Lieferkosten</span>
//         //         <h3>Gesamt</h3>
//         //     </div>
//         //     <div class="dfc">
//         //         <span>${i}</span>
//         //         <span>2.50</span>
//         //         <h3>Gesamt</h3>
//         //     </div>
//         // </div>
//     `;
// }