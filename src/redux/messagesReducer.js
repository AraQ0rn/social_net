import Elena from './imgs/messages/elena.jpg'
import Alexander from './imgs/messages/Alexander.jpg'
import Egor from './imgs/messages/egor.jpg'
import Tatyana from './imgs/messages/Tatyana.jpg'
import Victoria from './imgs/messages/victoria.jpg'
import Gregory from './imgs/messages/Gregory.jpg'

const ADD_MESSAGE = 'ADD-MESSAGE'
const TEXT_MESSAGE = 'TEXT-MESSAGE'

let initiallState = {
        names: [
                { id: 1, name: 'Елена', link: 'Elena', img: Elena },
                { id: 2, name: 'Александр', link: 'Alexander', img: Alexander },
                { id: 3, name: 'Егор', link: 'Egor', img: Egor },
                { id: 4, name: 'Татьяна', link: 'Tatyana', img: Tatyana },
                { id: 5, name: 'Виктория', link: 'Victoria', img: Victoria },
                { id: 6, name: 'Григорий', link: 'Gregory', img: Gregory }
        ],
        messages: [
                { id: 1, text: 'Привет!' },
                { id: 2, text: 'Как твои дела?' },
                { id: 3, text: 'Что нового у тебя сегодня??' },
                { id: 4, text: 'Давай сегодня встретимся?' }
        ],
        newMessageText: ''
}

let dialogsReducer = (state = initiallState, action) => {

        switch (action.type) {

                case ADD_MESSAGE:

                        let text = { id: 5, text: state.newMessageText }

                        return {
                                ...state,
                                messages: [...state.messages, text],
                                newMessageText: ''
                        }

                case TEXT_MESSAGE:
                        
                        return {
                                ...state,
                                newMessageText: action.text
                        }

                default: return state
        }
}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const textareaMessageActionCreator = (text) => ({ type: TEXT_MESSAGE, text: text })


export default dialogsReducer