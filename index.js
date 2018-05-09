const users = [
    "everynerdsdream",
    "freecodecamp",
    "duendepablo",
    "freecodecamp",
    "GeoffStorbeck",
    "terakilobyte",
    "habathcx",
    "RobotCaleb",
    "medrybw",
    "thomasballinger",
    "noobs2ninjas",
    "SeriouslyClara",
    "mdwasp",
    "beohoff"
];



function getUser(user_id) {

    var header = {
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/streams/' + user_id,
        headers: {
            'Client-ID': 'liqzudbczngq42yrrf4jzrlu28tc3w'
        }
    }

    fetch(header.url, header)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            var streaming = (myJson.stream === null) ? false : true;
            console.log('​getUser -> streaming', streaming);
            return streaming

        }).then(function (streaming) {

            var header = {
                type: 'GET',
                url: 'https://api.twitch.tv/kraken/channels/' + user_id,
                headers: {
                    'Client-ID': 'liqzudbczngq42yrrf4jzrlu28tc3w'
                }
            }

            fetch(header.url, header)
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {


                    let color = 'list-group-item-danger';



                    if (streaming) {


                        color = 'list-group-item-success';
                        myJson.status = 'Live'

                    } else {
                        myJson.status = 'offline'
                    }

                    let ouput =
                        `<div class="media list-group-item ${color}"  >

                                <div class="media-body">

                                    <h4 class="media-heading"><a href= ${myJson.url}>${myJson.display_name}</a></h4>

                                    <p>${myJson.status}</p>
                                    <i>${myJson.game}</i>

                                </div >
                                

                                <div class="media-right">

                                    <img src=${myJson.logo} class="media-object rounded-circle" style="width:100px">
                                    
                                </div>
                            

                            </div>`;


                    document.getElementById('usersList').insertAdjacentHTML('beforeEnd', ouput)
                });
        });

}





users.forEach(user => {

    getUser(user);
}); 