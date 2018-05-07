const users = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
];


function connect() {
    fetch("https://wind-bow.glitch.me/twitch-api/streams/OgamingSC2")
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return (myJson);
        });

}




connect()