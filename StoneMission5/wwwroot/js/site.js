// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    // Your existing site.js code

    // Calculator functionality
    $('#calculateBtn').on('click', function () {
        // Get the input value for hours
        var hours = parseFloat($('#hours').val());

        // Validate if a positive number is entered
        if (isNaN(hours) || hours < 0) {
            alert('Please enter a valid positive number for hours.');
            return;
        }

        // Your hourly rate (replace this value with your actual hourly rate)
        var hourlyRate = 500;

        // Calculate total
        var total = hours * hourlyRate;

        // Display total in the output box
        $('#total').val('$' + total.toFixed(2));
    });
});
