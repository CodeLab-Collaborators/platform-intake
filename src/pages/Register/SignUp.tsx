
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineTwitter } from "react-icons/ai"
import Button from '../../components/static/Button'
import InputProps from '../../components/reUse/inputs/InputProps'
import { GlobalContext } from '../../global/GlobalProvider'
import { useContext, useState } from 'react'

const SignUp = () => {
    const {
        actualName,

        actualEmail,

        actualPassword,

        setUserState,

        setActualImage

    } = useContext(GlobalContext)

    const [image, setImage] = useState<string>("")

    const onHandle = (e: any) => {
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
        setImage(save)

    }

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

                    <ImageHolder>
                        <Image

                            alt=""
                            src={image ? image : 'https://i.stack.imgur.com/l60Hf.png'}
                        />
                        <ImageInput
                            id="pix"
                            type='file'
                            accept='image/jpg, image/png, image/jpeg'
                            onChange={onHandle}
                        />
                        <ImageLabel
                            htmlFor='pix'
                        >Upload Image</ImageLabel>
                    </ImageHolder>

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


                        // confirm
                        // confirm1="password"
                        // confirm2="Please confirm your Password"
                    />

                    <ButtonHolder>
                        <Text2 to="/sign-in" >Already have an account? Sign in</Text2>

                        <Space />
                        <Link to="/sign-in" style={{ textDecoration: "none" }}>

                            <Button
                                title="Sign Up"
                                bg="#228be6"
                                m=''
                                color="white"
                                onClick={() => {

                                    setUserState!({
                                        name: actualName,
                                        email: actualEmail,
                                        password: actualPassword,
                                        image: image
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

const Image = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;
border: 1px solid silver;
margin: 10px 0;
object-fit: cover;
`

const ImageLabel = styled.label`
font-weight: 700;
padding: 4px 10px;
background: purple;
border-radius:3px;
color: white;
font-size: 10px;
transition: all 380ms;

:hover{
    cursor: pointer;
    transform: translate(0px, -5px);
}

`

const ImageInput = styled.input`
display: none;
`

const ImageHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

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
width: 25%;

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
padding: 20px 20px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
border-radius:5px;
`

const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 100vh
`