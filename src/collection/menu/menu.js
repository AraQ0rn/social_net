import { NavLink } from 'react-router-dom'
import s from './menu.module.css'
import React from 'react'
import MenuFrends from './menuFrends/menuFrends'

function Menu(props) {
        const menu = ev => ev.isActive ? s.active : s.a

        let menuFrends = props.nameImg.map(f => <MenuFrends key={f.id} img={f.img} name={f.name} />)


        return (
                <div className={s.div}>
                        <ul className={s.ul}>
                                <li className={s.li + ' ' + s.li_li}>
                                        <NavLink className={menu} to='/profile'>Профиль</NavLink>
                                </li>
                                <li className={s.li}>
                                        <NavLink className={menu} to='/messages'>Сообщения</NavLink>
                                </li>
                                <li className={s.li}>
                                        <NavLink className={menu} to='/news'>Новости</NavLink>
                                </li>
                                <li className={s.li}>
                                        <NavLink className={menu} to='/music'>Музыка</NavLink>
                                </li>
                                <li className={s.li}>
                                        <NavLink className={menu} to='/settings'>Настройки</NavLink>
                                </li>
                                <li className={s.frends}>
                                        <NavLink className={menu} to='/frends'>Друзья</NavLink>
                                        <div className={s.div_div}>
                                                {menuFrends}
                                        </div>
                                </li>
                        </ul>
                </div>
        )
}

export default Menu