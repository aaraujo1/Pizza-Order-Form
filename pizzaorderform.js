$(function () {
    //load javascript to create tabs
    $('#tab-container').easytabs();
    
    //if page is reloaded, return to tab 1
	window.location = "#tab1";

//tab 1    
    
    //variables
    //total - start a $0
    var total = 0;
    var pizzaSize;
    var pizzaCrust;
    
    //topping variables - boolean start at false
    //meats
    var pepperoni = false;
    var sausage = false;
    var ham = false;
    //vegetables
    var jalapeno = false;
    var tomato = false;
    var onion = false;
    var spinach = false;
    var pineapple = false;
    
    //variable that no toppings are clicked
    var toppings = 0;
    var plain = " plain cheese"
        

//event listener when next button is clicked
    $('#submitPizza').on('click', function () {
        

        //set pizzaSize & pizzaSizePrice variables 
        //get values of pizzza size radial button
        if ($('#smallPizza').prop('checked')) {
            pizzaSize = "small";
            total = Number($('#smallPizza').val());
        } else if ($('#mediumPizza').prop('checked')) {
            pizzaSize = "medium";
            total = Number($('#mediumPizza').val());
        } else if ($('#largePizza').prop('checked')) {
            pizzaSize = "large";
            total = Number($('#largePizza').val());
        } else {
            //alert("please select a size");
            // TODO: exit function
            return;
        }
        //test event listener and variables
        //alert(pizzaSize + pizzaSizePrice)

        //set pizzaCrust variables 
        //get values of pizzza crust radial button
        if ($('#thinCrust').prop('checked')) {
            pizzaCrust = "thin";
        } else if ($('#panCrust').prop('checked')) {
            pizzaCrust = "pan";
        } else if ($('#gfCrust').prop('checked')) {
            pizzaCrust = "gluten-free";
        } else {
            //alert("please select a crust");
            // TODO: exit function
            return;
        }

        

        //set meat variables to true if checked
        if ($('#pepperoni').prop('checked')) {
            pepperoni = true;
            total += 1.5;
            toppings += 1;
        }
        if ($('#sausage').prop('checked')) {
            sausage = true;
            total += 1.5;
            toppings += 1;
        }
        if ($('#ham').prop('checked')) {
            ham = true;
            total += 1.5;
            toppings += 1;
        }

        //set vegetable variable to true if checked
        if ($('#jalapeno').prop('checked')) {
            jalapeno = true;
            total += 1;
            toppings += 1;
        }
        if ($('#tomato').prop('checked')) {
            tomato = true;
            total += 1;
            toppings += 1;
        }
        if ($('#onion').prop('checked')) {
            onion = true;
            total += 1;
            toppings += 1;
        }
        if ($('#spinach').prop('checked')) {
            spinach = true;
            total += 1;
            toppings += 1;
        }
        if ($('#pineapple').prop('checked')) {
            pineapple = true;
            total += 1;
            toppings += 1;
        }


        //when submit is clicked, add toppings as a list item in tab 3
        //meats
        if (pepperoni == true) {
            $('#toppings ul').append("<li>Pepperoni</li>");
        }
        if (sausage == true) {
            $('#toppings ul').append("<li>Sausage</li>");
        }
        if (ham == true) {
            $('#toppings ul').append("<li>Ham</li>");
        }

        //vegatables
        if (jalapeno == true) {
            $('#toppings ul').append("<li>Jalapeno</li>");
        }
        if (tomato == true) {
            $('#toppings ul').append("<li>Tomato</li>");
        }
        if (onion == true) {
            $('#toppings ul').append("<li>Onion</li>");
        }
        if (spinach == true) {
            $('#toppings ul').append("<li>Spinach</li>");
        }
        if (pineapple == true) {
            $('#toppings ul').append("<li>Pineapple</li>");
        }
        
        //determine if 1 topping or more
        if (toppings == 1){
			$('#toppingsTrue').html("Your topping is:");
			plain = "";
		} else if (toppings > 1){
			$('#toppingsTrue').html("Your toppings are:");
			plain = "";
		}

		//when submit is clicked, add pizza details to tab 3 div
        $('#pizzaDetails').html("You ordered a " + pizzaSize + plain + " pizza with a " + pizzaCrust + " crust.");

        //when submit is clicked, add total price to tab 3 div
        $('#subtotal').html("Subtotal: $" + (total.toFixed(2)));
        
        
        var taxAmount = ((total * 0.051).toFixed(2));
        $('#tax').html("Tax (5.1%): $" + taxAmount);
        //when submit is clicked, add tax and delivery to the total and display it in tab3
        total += Number(taxAmount) + 2;
        $('#totalPrice').html("Total: $" + total.toFixed(2));
        

        //TODO: When submit is clicked, go to tab 2
        window.location = "#tab2";
        
        //if both size and crust are checked, enable links
	    $('#tab2tab').removeClass('disable');
	    //keep tab 1 enabled instead
	    //$('#tab1tab').addClass('disable');

        //alert test
        //alert("Size: " + pizzaSize + "\nPizza price: " + total + "\nPizza crust: " + pizzaCrust);


    })

//tab2
  //event listener
    $('#submitDelivery').on('click', function () {
	    //TODO: exit function if form not filled in
        
        //if each input is blank, exit function
        //did not work
/*
        $('#tab2 :input').each(function(){
	    	if($(this).val() == ""){
		    	//alert("stop")
		    	return;
	    	}
*/
		if ($('#name').val() == "" || $('#street').val() == "" || $('#city').val() == "" || $('#state').val() == "" || $('#zip').val() == "" || $('#phone').val() == ""){
			return;
		}
		
		
	    //add delivery information on tab 3
        $('#deliveryDetails').html($('#name').val() + '<br>' + $('#street').val() + '<br>' + $('#city').val() + ', ' + $('#state').val() + ' ' + $('#zip').val() + '<br>' + $('#phone').val());
        //TODO: When submit is clicked, go to tab 3
        window.location = "#tab3";
        //when submit is clicked, disable tab to and enable tab 3
        //$('#tab2tab').addClass('disable');
        $('#tab3tab').removeClass('disable');
        })
    //TODO: Back button clears toppings ul in tab 3 and goes to tab 1
  //back button event listener
    $('#backToPizza').on('click', function(){
	    //go to tab 1
	    window.location = "#tab1";
	    //remove toppings from toppings list
	    $('#toppings ul').html("");
	    //disable tab 2 & 3 and enable tab 1
	    $('#tab1tab').removeClass('disable');
		$('#tab2tab').addClass('disable');
		$('#tab3tab').addClass('disable');
    })
    
    $('#tab1tab').on('click', function(){
	    //go to tab 1
	    window.location = "#tab1";
	    //remove toppings from toppings list
	    $('#toppings ul').html("");
	    //disable tab 2 & 3 and enable tab 1
	    $('#tab1tab').removeClass('disable');
		$('#tab2tab').addClass('disable');
		$('#tab3tab').addClass('disable');
    })
    
    
	    
    

//tab3
		//TODO: Back button goes to tab 2
	$('#backToDelivery').on('click', function(){
		//go to tab 1
    	window.location = "#tab2";
    	//remove enable tab 2 and disable tab 3
    	$('#tab2tab').removeClass('disable');
		//$('#tab1tab').addClass('disable');
    })
    
    //event listener for tab 1 link
    $('#tab1tab').on('click', function(){
	    //go to tab 1
	    window.location = "#tab1";
	    //remove toppings from toppings list
	    $('#toppings ul').html("");
	    //disable tab 2 & 3 and enable tab 1
	    $('#tab1tab').removeClass('disable');
		$('#tab2tab').addClass('disable');
		$('#tab3tab').addClass('disable');
    })
    //event listener for tab 1 link
    $('#tab2tab').on('click', function(){
	    //go to tab 1
	    window.location = "#tab2";
	    //disable tab 2 & 3 and enable tab 1
		$('#tab3tab').addClass('disable');
    })
    

})
