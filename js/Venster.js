var modaalObj = (function () {
    var $raampje = $(window);
    var $modaal = $('<div class="modaal"/>');
    var $modaal2 = $('<div class="modaal2"/>');
    var $sluit = $('<span class="sluit">&#10005;</span>');

    $modaal.append($modaal2);

    return {
        centreren: function () {

            var links = Math.max($raampje.width() - $modaal2.outerWidth(), 0) / 2;
            var boven = Math.max($raampje.height() - $modaal2.outerHeight(), 0) / 2;
            $modaal2.css({
                left: links,
                top: boven
            });
        },
        pokven: function (instellingen) {

            $modaal2.append(instellingen.inhoud, $sluit);
            $modaal2.css({
                    width: instellingen.breedte + 'px' || 'auto',
                    height: instellingen.hoogte + 'px' || 'auto'
                })
                .on('click', function (e) {
                    e.stopPropagation();
                });
            $modaal.appendTo('body')
                .on('click', modaalObj.poksluit);
            modaalObj.centreren();
            $sluit.on('click', modaalObj.poksluit);
            $raampje.on('resize', modaalObj.centreren);
        },
        poksluit: function () {

            $modaal2.empty()
                .off('click', modaalObj.poksluit);
            $modaal.detach();
            $raampje.off('resize', modaalObj.centreren);


        }


    }


}());