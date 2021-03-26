function DigitalClock(){
    let date = new Date()
    let hours = date.getHours()
    let minutes =date.getMinutes()
    let Seconds = date.getSeconds()

    let TimeFormet = 'AM'
    if(hours === 0){
        hours = 12
    }
    if(hours > 12){
        hours = hours - 12
    }

    //Add0withhours-minutes-Seconds
    // if(hours < 10){
    //     hours = '0'+ hours
    // }

    // if(minutes < 10){
    //     minutes = '0'+ minutes
    // }
    // if(Seconds < 10){
    //     Seconds = '0'+ Seconds
    // }
    // By Using Ternary operator
    hours = hours < 10 ? '0'+ hours :hours
    minutes = minutes < 10 ? '0'+ minutes :minutes
    Seconds = Seconds < 10 ? '0'+ Seconds :Seconds


    let finalTime = `${hours}:${minutes}:${Seconds}`

    document.getElementById('time').innerHTML = finalTime
    document.querySelector('small').innerHTML =TimeFormet
    setInterval(DigitalClock,1000)
}
DigitalClock()
