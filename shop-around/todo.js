$(document).ready(function(e) {

    var APP_URL = "https://nwen304-group-project.herokuapp.com";
    var error = console.error.bind(console);
    var taskName;

    $.ajax({
        method: 'GET',
        url:APP_URL + '/'
    });

});
