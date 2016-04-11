$(document).ready(function () {

    var pok1 = $('#weez').detach();
    var pok2 = $('#snor').detach();
    var pok3 = $('#but').detach();

    $('#weezing').on('click', function () {
        modaalObj.pokven({
            inhoud: pok1,
            breedte: 850
        });
    });
    $('#snorlax').on('click', function () {
        modaalObj.pokven({
            inhoud: pok2,
            breedte: 850
        });
    });
    $('#butterfree').on('click', function () {
        modaalObj.pokven({
            inhoud: pok3,
            breedte: 850
        });
    });

})