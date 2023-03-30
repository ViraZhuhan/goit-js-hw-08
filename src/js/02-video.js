import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(onPlay, 1000));

function onPlay (data) {
   localStorage.setItem(STORAGE_KEY, data.seconds)
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});



