import React from "react";
import { ClockViewPropsType } from "../Clock";
import s from './DigitalClock.module.css'

export const DigitalClock: React.FC<ClockViewPropsType> = ({ time }) => {

    let digitalClock = time?.toLocaleTimeString()

    return (
        <div className={s.digitalClockBlock}>
            {digitalClock}
        </div>
    )
}