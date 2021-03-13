import React, { useState } from "react"
import photoCover from './assets/photo-cover.svg'
import { checkImgSrc } from "../../../util/imgHelper";


const UserItem = ({ item }) => {

    const [img, setImg] = useState('')

    checkImgSrc(item.photo, photoCover, setImg)

    return (
        <div className='item-wrapper'>
            <div className='item'>
                <div className='item__photo'><img src={img} /></div>
                <div className='item__name'>
                    {item.name}
                </div>
                <div className='item__position'>{item.position}</div>
                <div className='item__email email'>
                    <div className='email__container'>
                        {item.email}
                    </div>
                    <span className='email__tooltip'>{item.email}</span>
                </div>

                <div className='item__phone'>{item.phone}</div>
            </div>
        </div>
    )
}

export default UserItem