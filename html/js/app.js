

$(function () {
    try {
        $('#startDate').daterangepicker({
            singleDatePicker: true,
            startDate: moment()
        });
        $('#endDate').daterangepicker({
            singleDatePicker: true,
            startDate: moment()
        });

        jQuery('#startDate').on('change', function () {
            var startDate = new Date($('#startDate').val());
            var endDate = new Date($('#endDate').val());

            if (startDate > endDate) {
                $('.date_error_msg').show();
            }
            else {
                $('.date_error_msg').hide();
            }

        });
        jQuery('#endDate').on('change', function () {
            var startDate = new Date($('#startDate').val());
            var endDate = new Date($('#endDate').val());

            if (startDate > endDate) {
                $('.date_error_msg').show();
            }
            else {
                $('.date_error_msg').hide();
            }

        });
        $('.input_picker').after().click(function () {
            $(this).find("input").trigger("click");
        });
        $('.input_picker_dashboard').after().click(function () {
            $(this).find("input").trigger("click");
        });
    } catch (e) {

    }
    //toggle the component with class accordion_body
    $(".sidebar_left_menu h3").click(function () {
        if ($('.sidebar_left_menu ul').is(':visible')) {
            $(".sidebar_left_menu ul").slideUp(300);
            $(".plusminus").text('+');
        }
        if ($(this).next(".sidebar_left_menu ul").is(':visible')) {
            $(this).next(".sidebar_left_menu ul").slideUp(300);
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next(".sidebar_left_menu ul").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
    });

});