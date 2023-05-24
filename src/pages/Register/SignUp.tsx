
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineTwitter } from "react-icons/ai"
import Button from '../../components/static/Button'
import InputProps from '../../components/reUse/inputs/InputProps'
import { GlobalContext } from '../../global/GlobalProvider'
import { useContext } from 'react'

const SignUp = () => {


    const {
        actualName,

        actualEmail,

        actualPassword,

        actualConfirm,

        setUserState


    } = useContext(GlobalContext)

    return (
        <div>
            <Container>
                <Main>
                    <Title>Sign Up</Title>

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
                        name
                        name1="Name"
                        name2="Enter your Name"

                        email
                        email1="Email"
                        email2="Please Enter your Email"

                        password
                        password1="password"
                        password2="Please Enter your Password"


                        confirm
                        confirm1="password"
                        confirm2="Please confirm your Password"
                    />

                    <ButtonHolder>
                        <Text2 to="/sign-in" >Already have an account? Sign in</Text2>

                        <Space />
                        <Link to="/sign-in" style={{ textDecoration: "none" }}>

                            <Button
                                title="Sign Up"
                                bg="#228be6"
                                color="white"
                                onClick={() => {
                                    console.log(
                                        actualConfirm
                                    )
                                    setUserState!({
                                        name: actualName,
                                        email: actualEmail,
                                        password: actualPassword
                                    })
                                }}
                            />
                        </Link>
                    </ButtonHolder>
                </Main>
            </Container>
        </div>
    )
}

export default SignUp

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
margin-bottom: 16px;
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