function submitToAPI(e) {
    e.preventDefault();
    const apiEndpoint = "https://b6mhncyx5l.execute-api.us-west-2.amazonaws.com/prod/send-email";

        // var Namere = /[A-Za-z]{1}[A-Za-z]/;
        // if (!Namere.test($("#name-input").val())) {
        //              alert ("Name can not less than 2 char");
        //     return;
        // }
        // var mobilere = /[0-9]{10}/;
        // if (!mobilere.test($("#phone-input").val())) {
        //     alert ("Please enter valid mobile number");
        //     return;
        // }
        // if ($("#email-input").val()=="") {
        //     alert ("Please enter your email id");
        //     return;
        // }

        // var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        // if (!reeamil.test($("#email-input").val())) {
        //     alert ("Please enter valid email address");
        //     return;
        // }

	var senderName = $("#sender-name").val();
	var fromAddress = $("#from-address").val();
	var messageSubject = $("#message-subject").val();
	var messageBody = $("#message-body").val();
	var data = {
		senderName : senderName,
		messageSubject : messageSubject,
		fromAddress : fromAddress,
		messageBody : messageBody
	};

   $.ajax({
     type: "POST",
     url : apiEndpoint,
     dataType: "json",
     crossDomain: "true",
     contentType: "application/json; charset=utf-8",
     data: JSON.stringify(data),

     
     success: function () {
       	// clear form and show a success message
       	alert("Successfully sent: " + JSON.stringify(data));
       	document.getElementById("contact-form").reset();
   		location.reload();
     },
     error: function () {
       // show an error message
       alert("Unsuccessful");
     }});
}


	
