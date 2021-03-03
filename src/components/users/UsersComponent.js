import React from "react"
import UserItem from "./userItem/UserItem"


const UsersComponent = ({ showMore, users, total_pages_count, pageNum }) => {

    const usersList = users.map((item) => {
        return <UserItem item={item} key={item.id} />
    })

    return (
        <section className='users content-container'>
            <div className='users__content-wrap'>
                <div>
                    <div className='title users__title'>
                        Our cheerful users
                    </div>
                    <div className='users__description'>
                        Attention! Sorting users by registration date
                    </div>
                </div>

                <div className='users__list'>
                    {usersList}
                </div>

                <div className='users__btn'>
                    {total_pages_count !== pageNum - 1
                        ? <button className='btn btn-danger btn-reset' onClick={showMore} color="danger">
                            <span className='users__btn_wide'>Show more</span>
                        </button>
                        : null}
                </div>
            </div>
        </section>
    )
}

export default UsersComponent