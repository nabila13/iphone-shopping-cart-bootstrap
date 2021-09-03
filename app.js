document.getElementById("case-plus").addEventListener("click", function() {
    updateProductAmount("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function() {
    updateProductAmount("case", 59, false);
});
document.getElementById("phone-plus").addEventListener("click", function() {
    updateProductAmount("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function() {
    updateProductAmount("phone", 1219, false);
});

//update to total product amount && price
function updateProductAmount(product, price, isIncrease) {
    const productNumber = document.getElementById(product + "-amount");
    let productAmount = productNumber.value;
    const productPrice = document.getElementById(product + "-price");
    let productAmountVal = parseInt(productAmount);

    if (isIncrease) {
        productNumber.value = productAmountVal + 1;
        productPrice.innerText = productNumber.value * price;
    } else if (!isIncrease && productAmountVal > 0) {
        productNumber.value = productAmountVal - 1;
        productPrice.innerText = productNumber.value * price;
    }
    updatePrice();
}

//update the single product prices
function updatePrice(productprice) {
    const subTotal = document.getElementById("sub-total");
    const taxAmount = document.getElementById("tax-amount");
    const totalPrice = document.getElementById("total-price");

    subTotal.innerText = parseInt(document.getElementById("phone-price").innerText) + parseInt(document.getElementById("case-price").innerText);
    taxAmount.innerText = ((subTotal.innerText) * 0.1).toFixed(3);
    totalPrice.innerText = parseInt(subTotal.innerText) + parseFloat(taxAmount.innerText);
}