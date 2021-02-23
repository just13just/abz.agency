import React from "react"
import style from "./UserItem.module.scss";
import photoCover from './assets/photo-cover.svg'


const brokenLink = 'https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png'

const UserItem = ({ item }) => {

    const checkImgSrc = (src, alt) => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            return src
        }
        img.onerror = () => {
            return alt
        }
    }

    const isLongWord = string => (/\w{20,}/gm.test(string)) ? 'item__name_cutting' : null

    return (
        <div className={style.itemWrapper}>
            <div className={style.item}>
                <div className={style.item__avatar}><img src={item.photo} /></div>
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