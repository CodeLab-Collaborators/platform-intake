import React, { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalProvider'

const MainPage = () => {
    const { userState } = useContext(GlobalContext)

    console.log(userState)
    return (
        <div>MainPage</div>
    )
}

export default MainPage