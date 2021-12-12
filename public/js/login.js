$("#id_login_form").validate({
    rules: {

        email: {
            required: true,
            email: true,
            maxlength: 128
        },

        password: {
            required: true,
            minlength: 4,
            maxlength: 16
        }

    },
    messages: {
        password: { required: "Please enter password", minlength: "Enter valid password", maxlength: "Enter valid password" },
        email: {
            required: "Please enter email",
            email: "Your email address must be in the format of name@domain.com"
        }
    }
});
