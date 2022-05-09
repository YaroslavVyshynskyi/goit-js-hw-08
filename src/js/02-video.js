
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
var throttle = require('lodash.throttle');
const currentTime = "videoplayer-current-time";

player.on('timeupdate',
    throttle((data) => {
    
    localStorage.setItem(currentTime, data.seconds);
    
    }, 1000)
);

player.setCurrentTime(localStorage.getItem(currentTime)).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        default:
            console.log("Ups, something went wrong.")
            break
    }
});
