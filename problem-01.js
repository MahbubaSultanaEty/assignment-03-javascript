
function newPrice(currentPrice , discount ) {
    let discountAmount = (currentPrice * discount) / 100;
    let discountPrize = currentPrice - discountAmount;
    if (typeof currentPrice !== Number || typeof discount !== number) {
        return "Invalid";
    }
    if (discount <= 0 && discount >= 100) {
        return "Invalid";
    }
    return discountPrize.toFixed(3);
}

let output = newPrice(2000, "15");
console.log(output);
typeof 10;