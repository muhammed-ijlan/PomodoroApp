import React, { useEffect, useState } from 'react'

function Pomodoro() {
    const [minute, setMinute] = useState(25)
    const [second, setSecond] = useState(0)
    const [message, setMessage] = useState(false)

    useEffect(() => {
        let intarval = setInterval(() => {
            clearInterval(intarval);

            if (second === 0) {
                if (minute !== 0) {
                    setMinute(minute - 1)
                    setSecond(59)
                } else {
                    const breakMinutes = message ? 24 : 4;
                    const breakSeconds = 59;

                    setMinute(breakMinutes)
                    setSecond(breakSeconds)
                    setMessage(!message)
                }
            } else {
                setSecond(second - 1)
            }
        }, 10);

    }, [minute, second, message])

    return (
        <div className='pomodoro'>
            <div className='message'>
                {message && "Break Time!"}
            </div>

            <div className='timer'>{minute < 10 ? "0" + minute : minute}:{second < 10 ? "0" + second : second}</div>
            <button className='restart-btn'>Restart</button>

        </div>
    )
}

export default Pomodoro