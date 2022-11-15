import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

const TIME_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onCurrentTimeUpdate, 1000));

function onCurrentTimeUpdate(evt) {
  try {
    const storedTime = JSON.stringify(evt.seconds);
    localStorage.setItem(TIME_STORAGE_KEY, storedTime);
  } catch (error) {
    console.error('State error', error.message);
  }
}

player.setCurrentTime(Number(localStorage.getItem(TIME_STORAGE_KEY)));
