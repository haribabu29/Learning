import React, {useState} from 'react';

const Pomodoro = () => {

    let myVal = ""
    var timer = 25 * 60

    const handleClickStart = (e) => {
        myVal = setInterval(myTimer, 1000)
    }

    const handleClickStop = (e) => {
        clearInterval(myVal)
    }

    const handleClickReset = (e) => {
        clearInterval(myVal)
        timer = 25 * 60;
        var minutes = Math.floor(timer / 60);
        var seconds = Math.floor(timer % 60);
        document.getElementById("timer").innerHTML = minutes + " : " + seconds
    }

    function myTimer() {
        timer -= 1
        var minutes = Math.floor(timer / 60);
        var seconds = Math.floor(timer % 60);
        document.getElementById("timer").innerHTML = minutes + " : " + seconds
    }

    return (
        <div className="card">
            <div class="card-body rounded">
                <h1>Pomodoro Timer</h1>
                <h4 class="card-title" id="timer">25 : 00</h4>
                <div className="btn-group mr-2" role="group">
                    <button type="button" className="btn btn-primary mr-2" onClick={() => handleClickStart()}>Start</button>
                    <button type="button" className="btn btn-danger mr-2" onClick={() => handleClickStop()}>Stop</button>
                    <button type="button" className="btn btn-dark mr-1" onClick={() => handleClickReset()}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Pomodoro;