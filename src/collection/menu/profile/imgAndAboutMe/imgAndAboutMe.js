import React from "react";
import s from './imgAndAboutMe.module.css'
import IMG from './../imgs/fon.jpg'

function ImgAndAboutMe() {
        return (
                <div>
                        <div className={s.imgs}>
                                <img className={s.img} src={IMG} alt='' />
                        </div>
                        <div className={s.ava}>
                                ava + description
                        </div>
                </div>
        )
}

export default ImgAndAboutMe