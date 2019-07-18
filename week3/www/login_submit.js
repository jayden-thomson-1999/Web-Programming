$( "#login-form" ).submit(function( event ) {
    console.log("Handler for .submit() called.");
    event.preventDefault();

    let username = $('#email').val();
    let password = $('#password').val();

    console.log(username, password);

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/api/login',
        dataType: 'json',
        data: JSON.stringify({'username': username, 'password': password}),
        contentType: 'application/json',
        success: function(data) {
            if(data.ok === true) {
                console.log("Yippy");
            } else {
                $('#errormsg').css({'display': 'flex'});
            }
        }
    });

});