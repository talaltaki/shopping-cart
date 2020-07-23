const minusBtn1 = document.getElementById("minusBtn1");
minusBtn1.addEventListener("click", function () {
  const currentQuantityMinus1 = document.getElementById("currentQuantityAdd1")
    .value;
  const currentQuantityMinusNumber1 = parseFloat(currentQuantityMinus1);
  const newQuantityMinusNumber1 = parseFloat("1");
  const minusQuantity1 = currentQuantityMinusNumber1 - newQuantityMinusNumber1;
  document.getElementById("currentQuantityAdd1").value = minusQuantity1;

  const currentPriceMinus1 = document.getElementById("currentPriceAdd1")
    .innerText;
  const currentPriceMinusNumber1 = parseFloat(currentPriceMinus1);
  const priceMinusNumber1 = parseFloat("1000");
  const minusPrice1 = currentPriceMinusNumber1 - priceMinusNumber1;
  document.getElementById("currentPriceAdd1").innerText = minusPrice1;

  const currentSubtotal = document.getElementById("currentSubtotal").innerText;
  const currentSubtotalNumber = parseFloat(currentSubtotal);
  const minusSubtotal = currentSubtotalNumber - priceMinusNumber1;
  document.getElementById("currentSubtotal").innerText = minusSubtotal;

  const currentTax1 = document.getElementById("currentTax").innerText;
  const currentTaxNumber1 = parseFloat(currentTax1);
  const taxNumber1 = parseFloat("100");
  const minusTax1 = currentTaxNumber1 - taxNumber1;
  document.getElementById("currentTax").innerText = minusTax1;

  const minusTotal = minusTax1 + minusSubtotal;
  document.getElementById("currentTotal").innerText = minusTotal;
});

const addBtn1 = document.getElementById("addBtn1");
addBtn1.addEventListener("click", function () {
  const currentQuantityAdd1 = document.getElementById("currentQuantityAdd1")
    .value;
  const currentQuantityAddNumber1 = parseFloat(currentQuantityAdd1);
  const newQuantityAddNumber1 = parseFloat("1");
  const addedQuantity1 = currentQuantityAddNumber1 + newQuantityAddNumber1;
  document.getElementById("currentQuantityAdd1").value = addedQuantity1;

  const currentPriceAdd1 = document.getElementById("currentPriceAdd1")
    .innerText;
  const currentPriceAddNumber1 = parseFloat(currentPriceAdd1);
  const priceAddNumber1 = parseFloat("1000");
  const addedPrice1 = currentPriceAddNumber1 + priceAddNumber1;
  document.getElementById("currentPriceAdd1").innerText = addedPrice1;

  const currentSubtotal = document.getElementById("currentSubtotal").innerText;
  const currentSubtotalNumber = parseFloat(currentSubtotal);
  const addedSubtotal = currentSubtotalNumber + priceAddNumber1;
  document.getElementById("currentSubtotal").innerText = addedSubtotal;

  const currentTax1 = document.getElementById("currentTax").innerText;
  const currentTaxNumber1 = parseFloat(currentTax1);
  const taxNumber1 = parseFloat("100");
  const addedTax1 = currentTaxNumber1 + taxNumber1;
  document.getElementById("currentTax").innerText = addedTax1;

  const addedTotal = addedTax1 + addedSubtotal;
  document.getElementById("currentTotal").innerText = addedTotal;
});

const minusBtn2 = document.getElementById("minusBtn2");
minusBtn2.addEventListener("click", function () {
  const currentQuantityMinus2 = document.getElementById("currentQuantityAdd2")
    .value;
  const currentQuantityMinusNumber2 = parseFloat(currentQuantityMinus2);
  const newQuantityMinusNumber2 = parseFloat("1");
  const minusQuantity2 = currentQuantityMinusNumber2 - newQuantityMinusNumber2;
  document.getElementById("currentQuantityAdd2").value = minusQuantity2;

  const currentPriceMinus2 = document.getElementById("currentPriceAdd2")
    .innerText;
  const currentPriceMinusNumber2 = parseFloat(currentPriceMinus2);
  const priceMinusNumber2 = parseFloat("100");
  const minusPrice2 = currentPriceMinusNumber2 - priceMinusNumber2;
  document.getElementById("currentPriceAdd2").innerText = minusPrice2;

  const currentSubtotal = document.getElementById("currentSubtotal").innerText;
  const currentSubtotalNumber = parseFloat(currentSubtotal);
  const minusSubtotal = currentSubtotalNumber - priceMinusNumber2;
  document.getElementById("currentSubtotal").innerText = minusSubtotal;

  const currentTax2 = document.getElementById("currentTax").innerText;
  const currentTaxNumber2 = parseFloat(currentTax2);
  const taxNumber2 = parseFloat("10");
  const minusTax2 = currentTaxNumber2 - taxNumber2;
  document.getElementById("currentTax").innerText = minusTax2;

  const minusTotal = minusTax2 + minusSubtotal;
  document.getElementById("currentTotal").innerText = minusTotal;
});

const addBtn2 = document.getElementById("addBtn2");
addBtn2.addEventListener("click", function () {
  const currentQuantityAdd2 = document.getElementById("currentQuantityAdd2")
    .value;
  const currentQuantityAddNumber2 = parseFloat(currentQuantityAdd2);
  const addedQuantity2 = currentQuantityAddNumber2 + 1;
  document.getElementById("currentQuantityAdd2").value = addedQuantity2;

  const currentPriceAdd2 = document.getElementById("currentPriceAdd2")
    .innerText;
  const currentPriceAddNumber2 = parseFloat(currentPriceAdd2);
  const priceAddNumber2 = parseFloat("100");
  const addedPrice2 = currentPriceAddNumber2 + priceAddNumber2;
  document.getElementById("currentPriceAdd2").innerText = addedPrice2;

  const currentSubtotal = document.getElementById("currentSubtotal").innerText;
  const currentSubtotalNumber = parseFloat(currentSubtotal);
  const addedSubtotal = currentSubtotalNumber + priceAddNumber2;
  document.getElementById("currentSubtotal").innerText = addedSubtotal;

  const currentTax2 = document.getElementById("currentTax").innerText;
  const currentTaxNumber2 = parseFloat(currentTax2);
  const taxNumber2 = parseFloat("10");
  const addedTax2 = currentTaxNumber2 + taxNumber2;
  document.getElementById("currentTax").innerText = addedTax2;

  const addedTotal = addedTax2 + addedSubtotal;
  document.getElementById("currentTotal").innerText = addedTotal;
});
