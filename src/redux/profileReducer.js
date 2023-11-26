import profile1 from './imgs/profile/мишка.jpg'
import profile2 from './imgs/profile/смайлик.jpg'


const ADD_POST = 'ADD-POST'
const TEXT_CHANDE = 'TEXT-CHANDE'


let initiallState = {
        posts: [
                { id: 1, text: 'Привет! Как твои дела?', like: 0, img: profile1 },
                { id: 2, text: 'Это мой первый пост.', like: 10, img: profile2 },
                { id: 3, text: 'Я рад тебя видеть друг!', like: 8, img: profile2 }
        ],
        textValue: 'hello mur'
}


let profileReducer = (state = initiallState, action) => {

        switch (action.type) {

                case ADD_POST:

                        let post = { id: 4, text: state.textValue, like: 0, img: profile1 }
                        
                        return {
                                ...state,
                                posts: [...state.posts, post],
                                textValue: ''
                        }

                case TEXT_CHANDE:

                        return {
                                ...state,
                                textValue: action.post
                        }

                default: return state
        }
}

export const buttonClickActionCreator = () => ({ type: ADD_POST })
export const textareaChangeActionCreator = (text) =>
        ({ type: TEXT_CHANDE, post: text })


export default profileReducer