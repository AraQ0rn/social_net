import s from './messages.module.css'
import React from 'react'
import Name from './name/name'
import Message from './message/message'

function Messages(props) {

        let name = props.messages.names.map(n => <Name key={n.id} img={n.img} name={n.name} link={n.link} />)
        let message = props.messages.messages.map(m => <Message key={m.id} text={m.text} />)


        let buttonClick = () => {
                props.buttonClick()
        }

        let textareaMessage = (ev) => {
                let text = ev.target.value
                props.textareaMessage(text)
        }

        return (
                <div className={s.div}>
                        <div className={s.div_div}>
                                {name}
                        </div>
                        <div className={s.div__div}>
                                {message}
                                <textarea value={props.newMessageText} onChange={textareaMessage}></textarea>
                                <div>
                                        <button onClick={buttonClick}>Отправить</button>
                                </div>
                        </div>
                </div>
        )
}

export default Messages