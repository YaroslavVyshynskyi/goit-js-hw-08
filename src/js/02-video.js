
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
var throttle = require('lodash.throttle');

player.on('timeupdate',
    throttle((data) => {
    const videoplayerCurrentTime = data.seconds;
    localStorage.setItem('seconds', videoplayerCurrentTime);
    // console.log(localStorage.getItem('seconds'));
    }, 1000)
);

player.setCurrentTime(localStorage.getItem('seconds')).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
            
            break;
    }
});
