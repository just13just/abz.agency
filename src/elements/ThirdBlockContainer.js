import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../redux/usersReducer"
import ThirdBlock from "./ThirdBlock"

const ThirdBlockContainer = () => {

    const [pageNum, setPageNum] = useState(2)
    const users = useSelector(state => state.users)
    const total_pages_count = useSelector(state => state.total_pages_count)
    const dispatch = useDispatch()

    const showMore = () => {
        dispatch(getUsers(pageNum))
        setPageNum(pageNum + 1)
    }
    
    return <ThirdBlock
        showMore={showMore}
        users={users}
        total_pages_count={total_pages_count}
        pageNum={pageNum}
    />
}

export default ThirdBlockContainer


