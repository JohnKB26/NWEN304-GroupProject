/**
 * Created by ntaylor on 27/06/17.
 */

$(document).ready(function(e) {

   // var APP_URL = "http://localhost:8080";
    var APP_URL = "https://agile-river-54036.herokuapp.com";
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
        data: taskone

    }).then(showSearch, error);

    function showSearch (row) {
        console.log('here');
        console.log(row);
      //   var i = 0;
      //   for(i; i<row.length; i++){
      //       var image = row[i].url;
      //       var cost = row[i].item_price;
      //       var description = row[i].item_name;
      //       var taskHTML = '<span class="searchBar"></span></li>';


        //}

    }

});