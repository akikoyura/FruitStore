$(document).ready(function () {
    $('#selSize').change(function () {
        var idSize  = $(this).val();
        if(idSize==""){
            return false;
        }
        $.ajax({
            type: 'get',
            url: '/get-product-price',
            data:{idSize,idSize},
            success:function (resp) {
                var arr = resp.split('#');
                var double = '.00';
                $('#getPrice').html('<span>$</span>'+arr[0].concat(double));
                $('#price').val(arr[0]);
                if(arr[1]==0){
                    $('#cardButton').hide();
                    $('#Availability').text("Out of Stock");
                }else{
                    $('#cardButton').show();
                    $('#Availability').text("In Stock");
                }
            },error:function () {
                alert("Error");
            }
        })
    });

    $().ready(function () {
        //Validate Register form on keyup and submit
        $('#registerForm').validate({
            rules:{
                name:{
                    required: true,
                    minLength: 2,
                    accept:"[a-zA-Z]+"
                },
                password:{
                    required: true,
                    minLength: 6
                },
                email:{
                    required: true,
                    email: true,
                    remote:"/check-email"
                }
            },messages:{
                name:{
                    required: "Please enter your name",
                    minLength: "Your name must be at least 2 characters long",
                    accept: "Your name must be contain letters only"
                },
                password: {
                    required: "Please provide your password",
                    minLength: "Your Password must be at least 6 characters long"
                },
                email:{
                    required: "Please enter you email",
                    email: "Please enter valid email",
                    remote: "Email already exists!"
                }
            }
        })
        $('#loginForm').validate({
            rules:{
                password:{
                    required:true,
                    minLength:6
                },
                email:{
                    required:true,
                }
            },messages:{
                email:{
                    required: "Please enter your Name",
                    email: "Please enter valid Email"
                },
                password:{
                    required:"Please provide your Password"
                }
            }
        })
        $('#accountForm').validate({
            rules:{
                name:{
                    required: true,
                    minLength: 2,
                    accept:"[a-zA-Z]+"
                },
                address:{
                    required: true,
                    minLength: 10
                },
                city:{
                    required: true,
                    minLength:2
                },
                state:{
                    required: true,
                    minLength:2
                },
                country:{
                    required: true,
                }
            },messages:{
                name:{
                    required: "Please enter your name",
                    minLength: "Your name must be at least 2 characters long",
                    accept: "Your name must be contain letters only"
                },
                address: {
                    required: "Please provide your address",
                    minLength: "Your Address must be at least 10 characters long"
                },
                city: {
                    required: "Please provide your city",
                    minLength: "Your City must be at least 2 characters long"
                },
                city: {
                    required: "Please provide your state",
                    minLength: "Your State must be at least 2 characters long"
                },
                country: {
                    required: "Please select your Country"
                }
            }
        })
        $('#myPassword').passtrength({
            minChars: 4,
            passwordToggle: true,
            tooltip: true,
            eyeImg: "/images/frontend_images/eye.svg"
        });
    })
    $('#current_pwd').keyup(function () {
        var current_pwd = $('#current_pwd').val();
        alert(current_pwd);
        $.ajax({
            type: 'get',
            url: '/check-user-pwd',
            data: {current_pwd: current_pwd},
            success: function (response) {
                if (response == 'false') {
                    $('#chkPwd').html("<font color='red'>Current Password is incorrect</font>");
                } else {
                    $('#chkPwd').html("");
                }
            }
        });
    });
    $('#confirm_pwd').keyup(function () {
        var new_password = $('#new_pwd').val();
        var confirm_password = $('#confirm_pwd').val();
        if (new_password === confirm_password) {
            $(':button[type="submit"]').prop('disabled', false);
            ;
        }
    })
    $("#passwordForm").validate({
        rules: {
            current_pwd: {
                required: true,
                minlength: 8,
                maxlength: 20
            },
            new_pwd: {
                required: true,
                minlength: 8,
                maxlength: 20
            },
            confirm_pwd: {
                required: true,
                minlength: 8,
                maxlength: 20,
                equalTo: "#new_pwd"
            }
        },
        errorClass: "help-inline",
        errorElement: "span",
        highlight: function (element, errorClass, validClass) {
            $(element).parents('.control-group').addClass('error');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents('.control-group').removeClass('error');
            $(element).parents('.control-group').addClass('success');
        }
    });
    //Copy Billing Address to Shipping Address Script
    $('#billtoship').click(function () {
        if(this.checked){
            alert('test');
        }
    });

});
