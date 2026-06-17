$(document).ready(function()
{
    $('#btnclick').click(function()
    {
        // alert("Hello guys..");
        // $('.box').hide();
        //  $('.box').toggle(3000);
        $('.box').fadeToggle(2000);
    });

    $('.box').mouseenter(function()
    {
        $(this).css({"background-color":"red"});
    });

    $('.box').mouseleave(function()
    {
        $(this).css({"background-color":"yelloworange"});
    });

    $('#username').blur(function()
    {
        var userInput = $(this).val();
        if(userInput.length<4)
        {
            // alert('Input should have min 4 letters.');
            $('.error').show();
        }
        else
        {
            $('.error').hide();
        }
    });



});