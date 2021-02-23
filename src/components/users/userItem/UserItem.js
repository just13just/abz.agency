import React, { useState } from "react"
import style from "./UserItem.module.scss";
import photoCover from './assets/photo-cover.svg'
import { checkImgSrc } from "../../../util/imgHelper";


const UserItem = ({ item }) => {

    const [img, setImg] = useState('')

    checkImgSrc(item.photo, photoCover, setImg)

    const isLongWord = string => (/\w{20,}/gm.test(string)) ? 'item__name_cutting' : null

    return (
        <div className={style.itemWrapper}>
            <div className={style.item}>
                <div className={style.item__avatar}><img src={img} /></div>
                <div className={style.item__name}>
                    <div className={style[isLongWord(item.name)]}>
                        {item.name}
                    </div>
                </div>
                <div className={style.item__position}>{item.position}</div>
                <div className={style.emailWrapper}>
                    <div className={style.item__email}>
                        {item.email}
                    </div>
                    <span className={style.emailWrapper__tooltip}>{item.email}</span>
                </div>

                <div className={style.item__phone}>{item.phone}</div>
            </div>
        </div>
    )
}

export default UserItem