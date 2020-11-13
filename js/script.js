const countdown = document.querySelector(".countdown");
const launchDate = new Date("Dec 24, 2020 00:00:01").getTime();

const interval = setInterval(() => {
    console.log("tick");

    //today Date
    const now = new Date().getTime();
    console.log(now);
    const timeLeft = launchDate - now;

    const days = Math.floor(timeLeft / (1000*60*60*24));
    const hours = Math.floor(timeLeft % (1000*60*60*60) / (1000*60*60));
    const minutes = Math.floor(timeLeft % (1000*60*60) / (1000*60));
    const seconds = Math.floor(timeLeft % (1000*60) / 1000);

    console.log(hours);
    console.log(days);
    console.log(minutes);
    console.log(seconds);

    countdown.innerHTML = `
        <div><span> ${days} days</span></div>
        <div><span> ${hours} hours</span></div>
        <div><span> ${minutes} minutes</span></div>
        <div><span> ${seconds} seconds</span></div>
    `
}, 1000);