/**
 * Created by ericanderson on 1/4/16.
 */

$.ajax("data.json").then(function(response){

    //add the people to DOM
    for (var i=0; i<response.length; i++){
        var $content = '';

        var id = response[i].id;
        var gender = response[i].gender;
        var first_name = response[i].first_name;
        var last_name = response[i].last_name;

        $content = '<ul><li class="id">' + id + '</li><li class="first_name">' + first_name + '</li><li class="last_name">' + last_name + ', </li><li class="gender">' + gender + '</li></ul>';

        $(".content").append($content);

    }
});