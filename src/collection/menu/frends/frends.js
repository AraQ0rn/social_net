import s from './frends.module.css'
import React from 'react'

function Frends(props) {
        let frends = props.nameImg.map(i =>
                <div key={i.id} className={s.div_div}>
                        <img className={s.img} src={i.img} alt='' />
                        <p className={s.p}>{i.name}</p>
                </div>
        )


        return (
                <div className={s.div}>
                        {frends}
                </div>
        )
}

export default Frends