import { NavLink } from 'react-router-dom'
import s from './name.module.css'
import React from 'react'


function Name(props) {
        const active = ev => ev.isActive ? s.active : s.a
        const path = '/messages/' + props.link
        return (
                <div className={s.div}>
                        <img className={s.img} src={props.img} alt='' />
                        <NavLink to={path} className={active}>{props.name}</NavLink>
                </div>
        )
}

export default Name