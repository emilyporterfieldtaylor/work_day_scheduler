jQuery(document).ready(function($){

    $("#currentDay").moment().format('MMMM Do YYYY');

    /*var now = moment();

    $('time').each(function(i, e) {
        var time = moment($(e).attr('datetime'));

        if(now.diff(time, 'days') <= 1) {
            $(e).html('<span>' + time.from(now) + '</span>');
        }
    });*/

});

//$(".lead").hide();