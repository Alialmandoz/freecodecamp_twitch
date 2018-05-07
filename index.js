


function connect(user_id) {

    var obj = {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'liqzudbczngq42yrrf4jzrlu28tc3w'
        }
        
    }

    fetch('https://api.twitch.tv/helix/users?login='+user_id, obj)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
        });

}

connect('freecodecamp')