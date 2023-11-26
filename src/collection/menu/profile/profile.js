import s from './profile.module.css'
import React from 'react'
import ImgAndAboutMe from './imgAndAboutMe/imgAndAboutMe'
import MyPostsContainer from './myPosts/myPostsContainer'


function Pofile() {
        return (
                <div className={s.div}>
                        <ImgAndAboutMe />

                        <MyPostsContainer />
                </div>
        )
}

export default Pofile