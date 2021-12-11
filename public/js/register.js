$("#id_register_form").validate({
    rules: {
        f_name: "required",
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        f_name: "Please specify your name",
        email: {
            required: "We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
        }
    }
});
