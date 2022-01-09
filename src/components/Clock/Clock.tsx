import React, { useEffect, useState } from "react";
import { AnalogClock } from "./AnalogClock/AnalogClock";
import { DigitalClock } from "./DigitalClock/DigitalClock";

type ClockropsType = {
    mode: 'analog' | 'digital'
}
export type ClockViewPropsType = {
    time: Date
}

const Clock = (props: ClockropsType) => {

    let [time, setTime] = useState<Date>(new Date())

    useEffect(() => {

        let clockId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(clockId)
        }

    }, [])
    /* 
        let digitalClock = time?.toLocaleTimeString()
        let analogClock = 'analogClock' */

    return (
        <div>
            {props.mode === 'digital'
                ? <DigitalClock time={time} />
                : <AnalogClock time={time} />}
        </div>
    )
}

export default Clock;