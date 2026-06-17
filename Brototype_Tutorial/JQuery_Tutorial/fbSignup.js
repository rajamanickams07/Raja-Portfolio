$(document).ready(function(){

$('#fbsingupform').validate(
    {
        rules:{
        fName:{
            required:true, 
            minlength:5,
        },
        sName:{
            required:true, 
            minlength:5,
        },
        mobile:{
            required:true, 
            minlength:5,
        },
         password:{
            required:true, 
            minlength:5,
        },
        day:{required:true},
        month:{required:true},
        year:{required:true},
        gender:{required:true}
    },
    messages:{
        fName:{
            required:"Enter the first name",
            minlength:"First name should be min 5 letters."
        }
    }
    });

});