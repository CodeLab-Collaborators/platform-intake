import { useEffect } from 'react'
import { useRecoilState } from "recoil"
import { UserData } from '../global/AtomState'
import { getTestInterface } from '../utils/APIs'
import { useNavigate } from 'react-router-dom'

export const useGetUser = (data: any) => {
    const navigate = useNavigate()
    const [user, setUser] = useRecoilState(UserData)

    useEffect(() => {
        getTestInterface(data).then((res: any) => {
            if (res.data.data) {
                setUser(res.data.data)
                navigate("/auth/test-screen")
            }

        })
    }, [user?._id])

    return user
}