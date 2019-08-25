const waitTime=5000;
const waitInterval=500;
let currentTime=0;

//creating function that will called after every 0.5 seconds
const incTime =()=>{
    currentTime+=waitInterval;
    const percentTime=((currentTime/waitTime)*100);//converting interval to percenrage
    process.stdout.clearLine();//clearing the terminal output lines
    process.stdout.cursorTo(0);//set the cursor to first line
    process.stdout.write(`waiting...${percentTime}%`);}

const finishTime=()=>{
    clearInterval(interval);
    const percentTime=((currentTime/waitTime)*100);//converting interval to percenrage
    process.stdout.clearLine();//clearing the terminal output lines
    process.stdout.cursorTo(0);//set the cursor to first line
    console.log('Process Finished.');
}
const finishedFunction=setTimeout(finishTime,waitTime);
const interval=setInterval(incTime,500);



