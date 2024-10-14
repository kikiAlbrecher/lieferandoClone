i = 0;
basketArr = [];

function init() {
  renderDishes();
}

function renderDishes() {
  let dishesRef = document.getElementById('dishes');
  dishesRef.innerHTML = "";

  if (dishesRef == 0 && dishesList.length < 1) {
    dishesList[i] != dishesRef;
  }

  if (dishesRef !== 0) {
    for (let i = 0; i < dishesList.length; i++) {
      dishesRef.innerHTML += getDishesTemplate(i);
    }
  }
}

function pushIntoBasket(i) {
  basketArr.push(dishesList[i]);
  renderBasket(i);
}

function renderBasket(i) {
  let basketRef = document.getElementById('shopping_basket');
  basketRef.innerHTML = "";

  if (basketRef == "" && basketArr.length < 1) {
    basketArr != basketRef;
  }

  if (basketRef !== "") {
    basketRef.innerHTML += getBasketTemplate(i);
  }
}

function decreaseDishesAmount(i) {
  let dishesAmountRef = document.getElementById(`dishes_amount_${i}`);

  if (dishesList[i].amount > 1) {
    dishesAmountRef = dishesList[i].amount--;
  } else {
    removeDishFromBasket(i);
  }
  renderBasket(i);
}

function removeDishFromBasket(i) {
  basketArr.splice(i, 1);
  renderBasket(i);
}

function increaseDishesAmount(i) {
  let dishesAmountRef = document.getElementById(`dishes_amount_${i}`);
  dishesAmountRef = dishesList[i].amount++;
  renderBasket(i);
}
