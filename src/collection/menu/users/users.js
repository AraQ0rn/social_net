import React from "react";
import s from './users.module.css'

const Users = (props) => {
        return (
                <div>{props.users.map(u =>
                        <div className={s.div} key={u.id}>
                                <div className={s.div_div}>
                                        <div>
                                                <img className={s.img} src={u.img} alt="" />
                                        </div>
                                        <div className={s.div_button}>
                                                {u.friends
                                                        ? <button onClick={() => { props.addToFriends(u.id) }}>Добавить в друзья</button>
                                                        : <button onClick={() => { props.removeFromFriends(u.id) }}>Удалить из друзей</button>
                                                }
                                        </div>
                                </div>
                                <div className={s.div__div}>
                                        <div><b>Имя: </b>{u.name}</div>
                                        <div className={s.status}><b>О себе: </b>{u.status}</div>
                                </div>
                                <div className={s.div___div}>
                                        <div>{u.location.countryName}</div>
                                        <div>{u.location.cityName}</div>
                                </div>
                        </div>)}
                </div>
        )
}

export default Users