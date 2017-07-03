/**
 * Created by ntaylor on 27/06/17.
 */

$(document).ready(function(e) {

   // var APP_URL = "http://localhost:8080";
    var APP_URL = "https://nwen304-group-project.herokuapp.com";
    var error = console.error.bind(console);
    var taskName;

    taskName = $('#searchBar').val();

    var taskone = {
        task: taskName
    };

    console.log('here 1');

    $.ajax({
        method: 'post',
        url: APP_URL + '/search',
        dataType: 'json',
        data: taskone,
        success: function(data){
            showSearch(data);
        }
    })

    function showSearch (row) {
       // window.location = "https://nwen304-group-project.herokuapp.com";
        console.log(JSON.stringify(row));
        console.log(row);
        var i = 0;
        $('#searchItems').empty();
        for(i; i<row.length; i++){
            $('#searchItems').append('<h3>'+row[i].item_name+'</h3>');
            $('#searchItems').append('<h3>'+row[i].item_price+'</h3>');
            $('#searchItems').append('<h3>'+row[i].url+'</h3>');

        }

    }

});