var temp = [].slice.call(document.querySelectorAll('a'));

function disableAllLinks() {
    'use strict';
    document.addEventListener('click', function(event) {
        event.preventDefault();

    });
}
temp.forEach(disableAllLinks);
