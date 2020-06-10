

$(document).ready(function () {


    $(document).on("click", ".new-cl-sho-hi", function () {

        if ($(this).is(":checked")) {
            $(".displ-no").show('slow');

        } else {
            $(".displ-no").hide('slow');

        }
    });




    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab

    $('.uncheck-all').on('click', function () {
        var check = $('.new-form-top1').find('input[type=checkbox]').is(':checked');

        $('.newcheckbox').prop('checked', false);
        $("#count-checkboxes").html('0');
        $(".newdivshow").hide('slow');

    });


    window.onload = function () {
        var z = document.getElementByClass("best-price2");
        var y = window.matchMedia("(max-width: 768px)")
        if (y.matches) { // If media query matches
            x.style.display = "initial";

        } else {
            x.style.display = "none";

        }
    };

    window.onload = function () {
        $('.echoshiow').css('display', 'block');
    };
    $('.toggle').click(function (e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('div .inner').removeClass('show');
            $this.parent().parent().find('div .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });
});


function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " choose";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}


$(document).on('change', '.new-form-top', function (e) {
    var check = $('.new-form-top').find('input[type=checkbox]').is(':checked');

    if (check === true) {
        var cnt = $('.new-form-top').find('input:checkbox:checked').length;
        // alert(typeof(cnt))
        if (cnt <= 4) {
            $("#count-checkboxes").html(cnt);
        } else if (cnt > 4) {
            $(this).find('input[type=checkbox]').removeAttr('checked');
            alert("Maximum 4 products can be compared at a time.");
        }
        $('.newdivshow').css('display', 'block');
    }
    else if (check === false) {
        var cnt = parseInt($("#count-checkboxes").text());
        $("#count-checkboxes").html(cnt);
        $('.newdivshow').css('display', 'none');
    }
});
