
function updateCost(product, price) {
    const extraCost = document.getElementById(product + '-cost')
    const extraCostAmount = extraCost.innerText = price;

    const previousTotalPrice = document.getElementById('total-price');
    const previousTotalText = previousTotalPrice.innerText;
    const previousTotalAmount = parseInt(previousTotalText);
    const totalPrice = (extraCostAmount + previousTotalAmount);
    previousTotalPrice.innerText = totalPrice;
    totalPrice()
}

function totalPrice() {

    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const previousTotal = document.getElementById('total-price').innerText;

    const totalAmonunt = bestPrice + memoryCost + storageCost + deliveryCost + previousTotal;
    const totalPrice = parseInt(totalAmonunt)
}


document.getElementById('8gb-memory-button').addEventListener('click', function () {


    updateCost('memory', 0);

});
// extra memory  cost 
document.getElementById('16gb-memory-button').addEventListener('click', function () {
    updateCost('memory', 180)
});

// Storage cost update 
// previous storage cost 
document.getElementById('256gb-storage').addEventListener('click', function () {
    updateCost('storage', 0)
});

// extra stotage  cost 
document.getElementById('512gb-storage').addEventListener('click', function () {
    updateCost('storage', 100)
});

document.getElementById('1tb-storage').addEventListener('click', function () {
    updateCost('storage', 180)
});

// update delovery option

//  free delivery charge 
document.getElementById('free-delivery').addEventListener('click', function () {

    updateCost('delivery', 0)
});
// extra charge for delovery 
document.getElementById('charge-delivery').addEventListener('click', function () {
    const previousStoragecost = document.getElementById('delivery-cost')
    previousStoragecost.innerText = 20;
    updateCost('delivery', 20)
});

