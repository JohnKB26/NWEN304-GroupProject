/**
 * Created by ntaylor on 27/06/17.
 */

function handleKey(e){
    if(e.keyCode == 13){
        e.preventDefault();
        search();
    }
    console.log('test');
}

function search() {

    var taskName;

    taskName = $('#searchBar').val();

    var taskone = {
        task: taskName
    };

    console.log(taskone);

    $.ajax({
        type: "POST",
        url: '/search',
        dataType: 'json',
        data:taskone,
        async : false,
        success: function(data){
            //alert(JSON.stringify(data));
            showSearch(data);
        }
    })

}

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

    $('#searchItems').show;

}
