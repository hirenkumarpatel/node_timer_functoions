const waitTime=3000;
const waitInterval=500;
let currentTime=0;

//creating function that will called after every 0.5 seconds
const incTime =()=>{
    currentTime+=waitInterval;
    console.log(`waiting ${currentTime/1000} seconds..`);
}

const delayTime=()=>console.log('Delayed Process Finished.');
const delayedFunction=setTimeout(delayTime,waitTime);
const interval=setInterval(incTime,500);



