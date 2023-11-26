import profile1 from './imgs/profile/мишка.jpg'
import profile2 from './imgs/profile/смайлик.jpg'

import Elena from './imgs/messages/elena.jpg'
import Alexander from './imgs/messages/Alexander.jpg'
import Egor from './imgs/messages/egor.jpg'
import Tatyana from './imgs/messages/Tatyana.jpg'
import Victoria from './imgs/messages/victoria.jpg'
import Gregory from './imgs/messages/Gregory.jpg'

import profileReducer from './profileReducer'
import dialogsReducer from './messagesReducer'
import frendsReducer from './frendsReducer'

//* Единственный объект
let store = {
        //* Данные 
        _state: {
                profile: {
                        posts: [
                                { text: 'Привет! Как твои дела?', like: 0, img: profile1 },
                                { text: 'Это мой первый пост.', like: 10, img: profile2 },
                                { text: 'Я рад тебя видеть друг!', like: 8, img: profile2 }
                        ],
                        textValue: 'hello mur'
                },
                messages: {
                        names: [
                                { name: 'Елена', link: 'Elena', img: Elena },
                                { name: 'Александр', link: 'Alexander', img: Alexander },
                                { name: 'Егор', link: 'Egor', img: Egor },
                                { name: 'Татьяна', link: 'Tatyana', img: Tatyana },
                                { name: 'Виктория', link: 'Victoria', img: Victoria },
                                { name: 'Григорий', link: 'Gregory', img: Gregory }
                        ],
                        messages: [
                                { text: 'Привет!' },
                                { text: 'Как твои дела?' },
                                { text: 'Что нового у тебя сегодня??' },
                                { text: 'Давай сегодня встретимся?' }
                        ],
                        newMessageText: ''
                },
                frends: {
                        nameImg: [
                                { img: Elena, name: 'Елена' },
                                { img: Alexander, name: 'Александр' },
                                { img: Egor, name: 'Егор' },
                                { img: Tatyana, name: 'Татьяна' },
                                { img: Victoria, name: 'Виктория' },
                                { img: Gregory, name: 'Григорий' },
                        ]
                }
        },

        _render() {
                console.log('Я сделал')
        },
        getState() {
                return this._state
        },
        reflecs(oveflov) {
                this._render = oveflov
        },
        dispatch(action) {
                this._state.profile = profileReducer(this._state.profile, action)
                this._state.messages = dialogsReducer(this._state.messages, action)
                this._state.frends = frendsReducer(this._state.frends, action)
                this._render(this._state)
        }
}

export default store





