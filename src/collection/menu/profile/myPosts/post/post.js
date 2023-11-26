import s from './post.module.css'
import React from 'react'

function Post(props) {
        return (
                <div className={s.div}>
                        <div>
                                <img className={s.img} src={props.img} alt='' />
                        </div>
                        <div>
                                <p className={s.p + ' ' + s.pp}>{props.text}</p>
                                <p className={s.like}>likes: <i>{props.like}</i></p>
                        </div>
                </div>
        )
}

export default Post