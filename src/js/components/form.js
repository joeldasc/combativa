import Pristine from 'pristinejs';

window.addEventListener( 'load', function() {
    var form = document.getElementById("form1");

    if ( form ) {
        var pristine = new Pristine(form);
        var url = window.location.href;
        var urlThanks = url + 'gracias.html';

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // check if the form is valid
            var valid = pristine.validate(); // returns true or false
            if( valid ) {
                window.location.href = urlThanks;
            }
        });
    }
});
