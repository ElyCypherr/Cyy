let BASKETBALL = 0;

//FOR INCREMENT
function increment() 
{
	BASKETBALL++;
	document.getElementById("BASKETBALL").value = BASKETBALL;
	document.getElementById("Items").textContent = BASKETBALL;
	updateCost();
}
//FOR DECREMENT
function decrement() 
{
	if(BASKETBALL>0)
    {
	    BASKETBALL--;
	    document.getElementById("BASKETBALL").value = BASKETBALL;
	    document.getElementById("Items").textContent = BASKETBALL;
	}
	updateCost();
}

function updateCost() 
{
    //This is to get the Price
	price = 15.97
	totalPrice = BASKETBALL * price;
	BASKETBALL = parseFloat (document.getElementById("BASKETBALL").value);
	document.getElementById("Items").innerHTML = "$" + totalPrice.toFixed(2);
	
    //This is for the Shipping and Handling Fee
	ShippingFee = parseFloat (document.getElementById("ShippingFee").value);
	document.getElementById("Shipping").innerHTML = "$" + ShippingFee.toFixed(2);

    //This is to get the Total amount before Tax is applied
	bTax = totalPrice + ShippingFee;
	ShippingFee = parseFloat (document.getElementById("ShippingFee").value);
	document.getElementById("BeforeTax").innerHTML = "$" + bTax.toFixed(2);	

    //This is to get the Tax
	esTax = Math.round(bTax * 10) / 100;
	document.getElementById("EstimatedTax").innerHTML = "$" + esTax.toFixed(2);	

    //This is to get the Order Total
	totalOrder =bTax + esTax;
	document.getElementById("Total").innerHTML = "$" + totalOrder.toFixed(2);
}