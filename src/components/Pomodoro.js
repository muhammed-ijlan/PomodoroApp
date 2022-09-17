import React, { useEffect, useState } from 'react'
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

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
        <div className='pt-10 text-6xl font-mono antialiased font-medium'>

            <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">

                <div className="flex-shrink-0 flex flex-col ">
                    <button style={{backgroundImage:""}} className='my-4 bg-blue-500 hover:bg-blue-700 text-white text-center pb-2 px-4 rounded' onClick={restartHandler}><RestartAltIcon fontSize="large" /></button>
                    <div className='bg-blue-500 hover:bg-blue-700 text-white text-center px-4 pb-2 rounded'>
                        {
                            paused ?
                                <div onClick={() => setPaused(false)}> <PlayArrowRoundedIcon fontSize="large" /></div>
                                :
                                <div onClick={() => setPaused(true)}> <PauseOutlinedIcon fontSize="large" /></div>
                        }

                    </div>
                </div>
                <div>
                    <div className=' text-center text-5xl text-black'>
                        {message && "Break Time!"}
                    </div>
                    <div className='text-9xl text-black '>{minute < 10 ? "0" + minute : minute}:{second < 10 ? "0" + second : second}</div>
                </div>
            </div>
        </div>
    )
}

export default Pomodoro