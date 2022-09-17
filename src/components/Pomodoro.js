import React, { useEffect, useState } from 'react'
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
// import './Pomodoro.css'

function Pomodoro() {
    const [minute, setMinute] = useState(25)
    const [second, setSecond] = useState(0)
    const [message, setMessage] = useState(false)
    const [paused, setPaused] = useState(false)

    const restartHandler = () => {
        setMinute(25)
        setSecond(0)
    }

    useEffect(() => {
        let intarval = setInterval(() => {
            clearInterval(intarval);
            if (!paused) {

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
            } else {
                return;
            }
        }, 1000);
        return () => clearInterval(intarval)
    }, [minute, second, message, paused])


    return (
        <div className=''>
            <div className='message'>
                {message && "Break Time!"}
            </div>

            <div className='timer'>{minute < 10 ? "0" + minute : minute}:{second < 10 ? "0" + second : second}</div>
            <button className='restart-btn' onClick={restartHandler}>Reset</button>

            <div className='icons'>
                {
                    paused ?
                        <div onClick={() => setPaused(false)}> <PlayArrowRoundedIcon fontSize="large" /></div>
                        :
                        <div onClick={() => setPaused(true)}> <PauseOutlinedIcon fontSize="large" /></div>
                }

            </div>
        </div>
    )
}

export default Pomodoro