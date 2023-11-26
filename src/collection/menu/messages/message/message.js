import s from './message.module.css'
import React from 'react'


function Message(props) {
        return (
                <p className={s.p}>{props.text}</p>
        )
}

export default Message