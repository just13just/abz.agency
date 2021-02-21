import React from "react"
import style from "./UserItem.module.scss";


const UserItem = ({ item }) => {
    
    return (
        <div className={style.item}>
            <div className={style.item__avatar}><img src={item.photo} /></div>
            <div className={style.item__name}>{item.name}</div> {/* cut */}
            <div className={style.item__position}>{item.position}</div>
            <div className={style.item__email}></div> {/* cut */}
            <div className={style.item__phone}>{item.phone}</div>
        </div>
    )
}

export default UserItem