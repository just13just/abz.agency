import React from "react"
import { Button } from "reactstrap"
import UserItem from "./userItem/UserItem"
import style from './Users.module.scss'


const UsersComponent = ({ showMore, users, total_pages_count, pageNum }) => {

    const usersList = users.map((item) => {
        return <UserItem item={item} key={item.id} />
    })

    return (
        <div className={`${style.users} container`}>
            <div className={style.users__container}>

                <div className={style.users__text}>
                    <div className={style.text}>
                        <div className={style.text__title}>Our cheerful users</div>
                        <div className={style.text__description}>Attention! Sorting people by registration date</div>
                    </div>
                </div>

                <div className={style.users__list}>
                    {usersList}
                </div>

                <div className={style.users__btn}>
                    {total_pages_count !== pageNum - 1
                        ? <Button className={style.button} onClick={showMore} color="danger">
                            <span className={style.button__text}>Show more</span>
                        </Button>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default UsersComponent