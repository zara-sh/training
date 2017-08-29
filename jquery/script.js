

// email validation
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    // alert( pattern.test(emailAddress) );
    return pattern.test(emailAddress);
};

$(".btn").click(function(){

	var erroMessage = "";
	var fieldsMissing = ""

	if($("#exampleInputEmail1").val()== ""){

		fieldsMissing += "<br> Email is missing!"
	}
	if($("#exampleInputTell").val()== ""){

		fieldsMissing += "<br> phone number is missing!"
	}

	if($("#exampleInputPass").val()== ""){

		fieldsMissing += "<br> passwords is missing!"
	}

	if($("#exampleInputPassConfirm").val()== ""){

		fieldsMissing += "<br>confirm passwords is missing!"
	}
	if(fieldsMissing != ""){
		erroMessage += "the following fields are missing" +
		fieldsMissing;
	}

	if(isValidEmailAddress($("#exampleInputEmail1").val())== false){
		erroMessage += "Your email addrss is not valid!"
	}
	
	if ($.isNumeric($("#exampleInputTell").val())== false) {

		erroMessage +="<p>Your phone number is not valid!</p>"
	}
	if($("#exampleInputPass").val()!= $("#exampleInputPassConfirm").val()){
		erroMessage +="<p>Your passwords are not match!</p>"
	}

	if (erroMessage != "") {
		$("#alert").html(erroMessage)
	}
	// alert(erroMessage)

});