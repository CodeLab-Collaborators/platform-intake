import { Link } from 'react-router-dom'
import { GlobalContext } from '../global/GlobalProvider'
import { useContext } from 'react'

const View = () => {
    const {
        userState,
    }: any = useContext(GlobalContext)

    console.log("userState: ", userState)
    return (
        <div>
            <div>This is the Landing Page!</div>
            <Link to="/sign-up" >Register</Link>
        </div>
    )
}

export default View