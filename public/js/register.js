$("#id_register_form").validate({
    rules: {
        f_name: {
            required: true,
            minlength: 3,
            maxlength: 50
        },
        l_name: {
            required: true,
            minlength: 3,
            maxlength: 50
        },
        profile_image: "required",
        email: {
            required: true,
            email: true,
            minlength: 5,
            maxlength: 50
        },
        gender: "required",
        password: {
            required: true,
            minlength: 4,
            maxlength: 16
        },
        birth_date: {
            required: true,
            date: true
        }
    },
    messages: {
        f_name: "Please enter first name",
        l_name: "Please enter last name",
        profile_image: "Please select profile image",
        gender: "Please select gender",
        password: { required: "Please enter password" },
        birth_date: "Please enter birth date",
        email: {
            required: "Please enter email",
            email: "Your email address must be in the format of name@domain.com"
        }
    },
    submitHandler: function (form) {
        form.submit();
    }
});

$(document).ready(function () {
    $("#id_form_file").on("change", (e) => {
        let file = e.target.files[0];
        var upload = new Upload(file);
        upload.doUpload();
    });
});

var Upload = function (file) {
    this.file = file;
};

Upload.prototype.getType = function () {
    return this.file.type;
};
Upload.prototype.getSize = function () {
    return this.file.size;
};
Upload.prototype.getName = function () {
    return this.file.name;
};
Upload.prototype.doUpload = function () {
    var that = this;
    var formData = new FormData();

    // add assoc key values, this will be posts values
    formData.append("profile", this.file, this.getName());
    formData.append("upload_file", true);

    $.ajax({
        type: "POST",
        url: "/upload",
        xhr: function () {
            var myXhr = $.ajaxSettings.xhr();

            return myXhr;
        },
        success: function (data) {
            // your callback here

            $("#profile_img_thumbnail").attr("src", data.temp_path);
            $("#id_profile_images_input").val(data.file_name)
            $(".upload_feedback").addClass("d-none");
        },
        error: function () {
            $("#profile_img_thumbnail").attr("src", "/images/default.png");
            $(".upload_feedback").removeClass("d-none");
        },
        async: true,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        timeout: 60000
    });
};
