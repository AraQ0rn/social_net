import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './collection/header/header';
import MenuContainer from './collection/menu/menuContainer';

import Profile from './collection/menu/profile/profile';
import MessagesContainer from './collection/menu/messages/messagesContainer';
import News from './collection/menu/news/news';
import Music from './collection/menu/music/music';
import Settings from './collection/menu/settings/settings';
import FrendsContainer from './collection/menu/frends/frendsContainer';
import UsersContainer from './collection/menu/users/UsersContainer';


function App() {

        return (
                <div className='wrapper'>
                        <Header />
                        <div className='div'>
                                <MenuContainer />
                                <div className='menu'>
                                        <Routes>
                                                <Route path='/profile' element={<Profile />} />
                                                <Route path='/messages/*' element={<MessagesContainer />} />
                                                <Route path='/news' element={<News />} />
                                                <Route path='/music' element={<Music />} />
                                                <Route path='/settings' element={<Settings />} />
                                                <Route path='/users' element={<UsersContainer />} />
                                                <Route path='/frends' element={<FrendsContainer />} />
                                        </Routes>
                                </div>
                        </div>
                </div>
        )
}

export default App;
