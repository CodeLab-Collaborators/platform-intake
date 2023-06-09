import { useState } from "react"
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import Button from '../../components/static/Button'

import Swal from "sweetalert2";
import { registerUser } from "../../utils/APIs"
import Loading from "../../utils/LoadState";
import { useCreateCandidate } from "../../hooks/useCandidate";


const SignUp = () => {
    const navigate = useNavigate()
    const mutate = useCreateCandidate()

    const [image, setImage] = useState<string>("")
    const [avatar, setAvatar] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [interest, setInterest] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [profile, setProfile] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const onHandle = (e: any) => {
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
        setAvatar(file)
        setImage(save)

    }

    const formData = new FormData()
    formData.append('email', email)
    formData.append('interest', interest)
    formData.append('phone', phone)
    formData.append('address', address)
    formData.append('profile', profile)
    formData.append('name', name)
    formData.append('avatar', avatar)



    return (
        <div style={{ padding: "100px 0px" }}>
            {
                loading ? <Loading /> : null
            }
            <Container>
                <Main>
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


                    <InputHolder>
                        <Text>Name <p>*</p></Text>
                        <Input
                            placeholder={`Enter your name`}
                            required
                            value={name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setName(e.target.value)
                            }}
                        />
                    </InputHolder>

                    <InputHolder>
                        <Text>Email <p>*</p></Text>
                        <Input
                            placeholder={`Enter your Email`}
                            type='email'
                            required
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </InputHolder>

                    <InputHolder>
                        <Text>Interest <p>*</p></Text>
                        <Input
                            placeholder={`Enter your Interest`}
                            type='text'
                            required
                            value={interest}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setInterest(e.target.value)
                            }}
                        />
                    </InputHolder>

                    <InputHolder>
                        <Text>Phone Number <p>*</p></Text>
                        <Input
                            placeholder={`Enter your Phone`}
                            type='text'
                            required
                            value={phone}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPhone(e.target.value)
                            }}
                        />
                    </InputHolder>

                    <InputHolder>
                        <Text>Address <p>*</p></Text>
                        <Input
                            placeholder={`Enter your Address`}
                            type='address'
                            required
                            value={address}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setAddress(e.target.value)
                            }}
                        />
                    </InputHolder>

                    <InputHolder>
                        <Text>Profile <p>*</p></Text>
                        <InputArea
                            placeholder={`Enter your Profile`}
                            // type='textarea'
                            required
                            value={profile}
                            onChange={(e: any) => {
                                setProfile(e.target.value)
                            }}
                        />
                    </InputHolder>


                    <br />
                    <ButtonHolder>
                        <Space />
                        <Button
                            title="Sign Up"
                            bg="purple"
                            m=''
                            color="white"
                            onClick={() => {
                                setLoading(true)
                                registerUser(setLoading, formData).then(() => {
                                    Swal.fire({
                                        title: `User has been registered successfully`,
                                        icon: "success",
                                        timer: 3000,
                                        timerProgressBar: true,
                                    }).then(() => {
                                        navigate("/")
                                    })
                                })
                                mutate()
                            }}
                        />
                    </ButtonHolder>
                </Main>
            </Container>
        </div>
    )
}

export default SignUp


const InputArea = styled.textarea`
outline: none;
border:1px solid silver;
border-radius: 4px;
width: 280px;
height: 185px;
resize: none;
padding-left: 10px;
padding-top: 10px;
margin-top:5px;
font-size: 12px;

:focus{
    outline:1px solid #228BE6;
    border: 1px solid transparent;
}

::placeholder{
    color: silver;
    font-family: Poppins;
}
`

const Input = styled.input`
outline: none;
border:1px solid silver;
border-radius: 4px;
width: 280px;
height: 35px;
padding-left: 10px;
margin-top:5px;
font-size: 12px;
:focus{
    outline:1px solid #228BE6;
    border: 1px solid transparent;
}

::placeholder{
    color: silver;
    font-family: Poppins;
}
`

const Text = styled.div`
display:flex;
font-weight: 700;
color: rgba(0,0,0,0.6);
margin:0;

font-size: 12px;
p{
    margin-left: 3px;
    margin-top:0;
    margin-bottom:0;
    color: red
}
`
const InputHolder = styled.div`
margin: 10px 0;
`

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

const ButtonHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Main = styled.div`
padding: 10px 20px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
border-radius:5px;
`

const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
min-height: 120vh
`