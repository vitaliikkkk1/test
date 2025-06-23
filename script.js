
let baseCost = 5;
let ingredients = ["Кава"];
let totalCost = baseCost;

function updateDisplay() {
    document.getElementById("ingredients").innerText = ingredients.join(", ");
    document.getElementById("cost").innerText = totalCost;
}

function addMilk() {
    ingredients.push("Молоко");
    totalCost += 2;
    updateDisplay();
}

function addSugar() {
    ingredients.push("Цукор");
    totalCost += 1;
    updateDisplay();
}

function addVanilla() {
    ingredients.push("Ваніль");
    totalCost += 3;
    updateDisplay();
}

function resetCoffee() {
    ingredients = ["Кава"];
    totalCost = baseCost;
    updateDisplay();
}

updateDisplay();
