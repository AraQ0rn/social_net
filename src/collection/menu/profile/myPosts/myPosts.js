import s from './myPosts.module.css'
import React from 'react'
import Post from './post/post'

function MyPosts(props) {

        let post = props.posts.map(p => <Post key={p.id} img={p.img} text={p.text} like={p.like} />)

        let addPosts = React.createRef()

        let buttonClick = () => {
                props.buttonClick()
        }

        let textareaChange = () => {
                let text = addPosts.current.value
                props.textareaChange(text)
        }

        return (
                <div className={s.div}>
                        <h3 className={s.h3}>Мои посты:</h3>
                        <div className={s.div_div}>
                                <div>
                                        <textarea value={props.textValue} onChange={textareaChange} ref={addPosts} />
                                </div>
                                <div className={s.button}>
                                        <button onClick={buttonClick}>Добавить пост</button>
                                </div>
                        </div>
                        <div className={s.div__div}>
                                {post}
                        </div>
                </div>
        )
}

export default MyPosts