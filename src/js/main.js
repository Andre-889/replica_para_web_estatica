// Import our custom CSS
import 'bootstrap-icons/font/bootstrap-icons';
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';


import $ from "jquery";

$(document).ready(function() {
    $(".nav-item").bind( "click", function(event) {
        console.log('asdsad');
        event.preventDefault();
        let clickedItem = $(this);
        console.log(clickedItem);
        $(".nav-item").each(function() {
            $(this).removeClass("active");
        });
        clickedItem.addClass("active");
    });
});