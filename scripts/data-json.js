var btn = document.getElementById("bus06");
var divBus = document.getElementsByClassName('bus-times')[0];
//Checks wether the bus times div is showing or not.
btn.addEventListener('click', function () {
    if (divBus.classList.contains('hide')) {
        divBus.classList.remove('hide');
        divBus.className = "show";
        var request = new XMLHttpRequest;
        request.onload = function () {
            if (request.status === 200) {
                responseObject = JSON.parse(request.responseText);
                var content = '';
                for (var i = 0; i < responseObject.events.length; i++) {
                    content += '<div class="event">';
                    content += '<img src="' + responseObject.events[i].map + '"';
                    content += '<p>' + responseObject.events[i].location + '</p>';
                    content += '</div>';
                }
                document.getElementById('times06').innerHTML = content;
            }
        };
        request.open('GET', 'data/data.json', true);
        request.send(null);
    }
    else {
        divBus.classList.remove('show');
        divBus.className = 'hide';
    }
})

