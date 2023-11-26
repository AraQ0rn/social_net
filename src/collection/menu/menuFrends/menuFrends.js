import s from './menuFrends.module.css'
import React from 'react'

function MenuFrends(props) {

        return (
                <div className={s.div_img}>
                        <img className={s.img} src={props.img} alt='' />
                        <p className={s.p}>{props.name}</p>
                </div>
        )
}

export default MenuFrends