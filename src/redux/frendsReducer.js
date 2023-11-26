import Elena from './imgs/messages/elena.jpg'
import Alexander from './imgs/messages/Alexander.jpg'
import Egor from './imgs/messages/egor.jpg'
import Tatyana from './imgs/messages/Tatyana.jpg'
import Victoria from './imgs/messages/victoria.jpg'
import Gregory from './imgs/messages/Gregory.jpg'


let initiallState = {
        nameImg: [
                { id: 1, img: Elena, name: 'Елена' },
                { id: 2, img: Alexander, name: 'Александр' },
                { id: 3, img: Egor, name: 'Егор' },
                { id: 4, img: Tatyana, name: 'Татьяна' },
                { id: 5, img: Victoria, name: 'Виктория' },
                { id: 6, img: Gregory, name: 'Григорий' },
        ]
}


let frendsReducer = (state = initiallState, action) => {
        let newState = { ...state }
        return newState
}


export default frendsReducer