
import styled from 'styled-components'
import { GlobalContext } from '../../global/GlobalProvider'
import { useContext } from 'react'
import Button from '../../components/static/Button'
import { useNavigate } from "react-router-dom"
const HomeScreen = () => {
    const navigate = useNavigate()
    const {
        userState,
        setUserState
    }: any = useContext(GlobalContext)
    return (
        <div>
            <Container>
                <Main>
                    Welcome back <strong>{userState?.name}</strong>
                    <br />

                    <Button
                        title="Log out"
                        onClick={() => {
                            setUserState(null)
                            navigate("/")
                        }}
                    />
                </Main>
            </Container>
        </div>
    )
}

export default HomeScreen

const Main = styled.div``
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh
`