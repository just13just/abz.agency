import React from "react"
import { Button } from "reactstrap"


const ThirdBlock = ({ showMore, users, total_pages_count, pageNum }) => {

    const usersList = users.map((item) => {
        return <div key={item.id} className='user-item'>
            <div className='avatar'><img src={item.photo} /></div>
            <div className='name'>{item.name}</div>
            <div className='position'>{item.position}</div>
            <div className='email'>{item.email}</div>
            <div className='phone'>{item.telephone}</div>
        </div>
    })

    return (
        <div className='thirdBlock'>
            <div className='contentContainer'>
                <div>
                    <div className='title'>Our cheerful users</div>
                    <div className='second-row'>Attention! Sorting people by registration date</div>
                </div>
                <div className='items-wrap'>
                    <div className='items'>
                        {usersList}
                    </div>
                </div>
                <div>
                    {total_pages_count !== pageNum - 1 ?
                        <Button onClick={showMore} className='btn' color="danger">
                            <span className='text'>Show more</span>
                        </Button>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default ThirdBlock