
import styled from 'styled-components'

import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineTwitter } from "react-icons/ai"
import Button from '../../components/static/Button'
import InputProps from '../../components/reUse/inputs/InputProps'
import { GlobalContext } from '../../global/GlobalProvider'
import { useContext, useState } from 'react'

const SignIn = () => {
    const [errorState, setErrorState] = useState<string>("")

    const {
        actualEmail,
        actualPassword,
        userState
    }: any = useContext(GlobalContext)

    console.log((userState?.password))

    return (
        <div>
            <Container>

                <Main>
                    <Title>Sign In</Title>

                    <ButtonHolder>
                        <Button
                            icon={<FcGoogle />}
                            title="Google"
                        />
                        <Button
                            icon={<AiOutlineTwitter />}
                            title="Twitter"
                        />
                    </ButtonHolder>

                    <Display>
                        <Line />
                        <Text>Or continue with email</Text>
                        <Line />
                    </Display>

                    <InputProps

                        email
                        email1="Email"
                        email2="Please Enter your Email"

                        password
                        password1="password"
                        password2="Please Enter your Password"


                    />
                    <Text2 to="/forgot-password" >Forgot Password</Text2>
                    <ButtonHolder>
                        <Text2 to='/sign-up'>Don't have an account? Register</Text2>

                        <Space />
                        {
                            actualPassword === userState?.password && actualEmail === userState?.email ? <Link to="/home" style={{ textDecoration: "none" }} >
                                <Button
                                    title="Sign In"
                                    bg="#228be6"
                                    color="white"

                                />
                            </Link> : <Button
                                title="Sign In"
                                bg="#228be6"
                                color="white"
                                onClick={() => {
                                    setErrorState("Wrong Credentials")
                                }}

                            />
                        }

                    </ButtonHolder>

                    {
                        actualPassword === userState?.password && actualEmail === userState?.email ? null : <div style={{ fontSize: "12px", color: "red", display: "flex", justifyContent: "center" }}>{errorState}</div>
                    }

                </Main>
            </Container>
        </div>
    )
}

export default SignIn

const Space = styled.div`
flex: 1
`


const Title = styled.div`
font-weight: bold;
font-size: 24px;
margin: 20px 0;
`

const Line = styled.div`
border-bottom: 1px solid silver;
width: 28%;

`

const Text2 = styled(Link)`
font-size: 12px;
margin-bottom: 16px ;
color: black;
text-decoration: none;
`

const Text = styled.div`
font-size: 12px;
margin: 0 5px;
`

const Display = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const ButtonHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Main = styled.div`
padding: 20px 30px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
border-radius:5px;
`

const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 100vh
`