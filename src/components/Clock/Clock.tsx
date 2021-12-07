import React, { useEffect, useState } from "react";
import s from './Clock.module.css'

const Clock = () => {

    let [time, setTime] = useState<Date>(new Date())

    useEffect(() => {

        let clockId = setInterval(() => {
            setTime(new Date())
        }, 1000)
 
        return () => {
            clearInterval(clockId)
        }

    }, [])

    let clock = time?.toLocaleTimeString()

    return (
        <div className={s.newsBlock}>
            {clock}
        </div>
    )
}

export default Clock;