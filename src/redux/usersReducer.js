import Elena from './imgs/messages/elena.jpg'
import Alexander from './imgs/messages/Alexander.jpg'
import Egor from './imgs/messages/egor.jpg'
import Tatyana from './imgs/messages/Tatyana.jpg'

const ADD_TO_FRIENDS = 'ADD_TO_FRIENDS'
const REMOVE_FROM_FRIENDS = 'REMOVE_FROM_FRIENDS'
const SET_USERS = 'SET_USERS'

let initiallState = {
        users: [
                { id: 1, name: 'Елена', friends: true, status: 'Я лиса и на этом точка', location: { cityName: 'Москва', countryName: 'Россия' }, img: Elena },
                { id: 2, name: 'Александр', friends: false, status: 'Приезжай ко мне в город погуляем', location: { cityName: 'Варшава', countryName: 'Польша' }, img: Alexander },
                { id: 3, name: 'Егор', friends: false, status: 'Будешь на море пиши', location: { cityName: 'Краснодар', countryName: 'Россия' }, img: Egor },
                { id: 4, name: 'Татьяна', friends: true, status: 'Люблю совой город и знаю хорошую кофе', location: { cityName: 'Прага', countryName: 'Чехия' }, img: Tatyana },
        ]
}

let usersReducer = (state = initiallState, action) => {

        switch (action.type) {

                case ADD_TO_FRIENDS:
                        return {
                                ...state,
                                users: state.users.map(u => {

                                        if (u.id === action.userId) {

                                                return { ...u, friends: false }
                                        }

                                        return u
                                })
                        }

                case REMOVE_FROM_FRIENDS:
                        return {
                                ...state,
                                users: state.users.map(u => {

                                        if (u.id === action.userId) {

                                                return { ...u, friends: true }
                                        }

                                        return u
                                })
                        }

                case SET_USERS:
                        return {
                                ...state,
                                users: [...state.users, ...action.users]
                        }

                default: return state
        }
}


export const addToFriendsAC = (userId) => ({ type: ADD_TO_FRIENDS, userId })
export const removeFromFriendsAC = (userId) => ({ type: REMOVE_FROM_FRIENDS, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer