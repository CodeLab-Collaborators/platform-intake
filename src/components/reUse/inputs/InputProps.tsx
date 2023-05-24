import { useContext, useState } from 'react'
import styled from 'styled-components'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md"
import { iInPut } from '../../../utils/interfaces'
import { GlobalContext } from '../../../global/GlobalProvider'

const InputProps: React.FC<iInPut> = ({
    name, email, password, confirm,
    name1, email1, password1, confirm1,
    name2, email2, password2, confirm2,

}) => {

    const {
        actualName,
        setActualName,

        actualEmail,
        setActualEmail,

        actualPassword,
        setActualPassword,

        actualConfirm,
        setActualConfirm,


    } = useContext(GlobalContext)

    const [show, setShow] = useState<boolean>(false)
    const [show2, setShow2] = useState<boolean>(false)

    const onShow = () => {
        setShow(!show)
    }

    const onShow2 = () => {
        setShow2(!show2)
    }

    return (
        <Container>
            {
                name ? <InputHolder>
                    <Text>{name1} <p>*</p></Text>
                    <Input
                        placeholder={`${name2}`}
                        value={actualName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setActualName!(e.target.value)
                        }}
                    />
                </InputHolder> : null
            }

            {
                email ? <InputHolder>
                    <Text>{email1} <p>*</p></Text>
                    <Input
                        placeholder={`${email2}`}
                        type='email'
                        value={actualEmail}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setActualEmail!(e.target.value)
                        }}
                    />
                </InputHolder> : null
            }
            {
                password ?
                    <InputHolder>
                        <Text>{password1} <p>*</p></Text>
                        {
                            show ? (
                                <InputHold>
                                    <Input
                                        placeholder={`${password1}`}
                                        type=''
                                        value={actualPassword}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setActualPassword!(e.target.value)
                                        }}
                                    />
                                    <Icon onClick={onShow} />
                                </InputHold>
                            ) : (
                                <InputHold>
                                    <Input
                                        placeholder={`${password1}`}
                                        type='password'
                                        value={actualPassword}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setActualPassword!(e.target.value)
                                        }}
                                    />
                                    <Icon2 onClick={onShow} />
                                </InputHold>
                            )
                        }
                    </InputHolder> : null
            }

            {
                confirm ? <InputHolder>
                    <Text>{confirm2}<p>*</p></Text>
                    {
                        show2 ? (
                            <InputHold>
                                <Input
                                    placeholder={`${confirm2}`}
                                    type=''
                                    value={actualConfirm}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setActualConfirm!(e.target.value)
                                    }}
                                />
                                <Icon onClick={onShow2} />
                            </InputHold>
                        ) : (
                            <InputHold>
                                <Input
                                    placeholder={`${confirm2}`}
                                    type='password'
                                    value={actualConfirm}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setActualConfirm!(e.target.value)
                                    }}
                                />
                                <Icon2 onClick={onShow2} />
                            </InputHold>
                        )
                    }
                </InputHolder> : null
            }
        </Container>
    )
}

export default InputProps



const Icon2 = styled(MdOutlineVisibility)`
position: absolute;
right: 8px;
margin-top:6px;
opacity: 0.5;
`

const Icon = styled(MdOutlineVisibilityOff)`
position: absolute;
right: 8px;
margin-top:6px;
opacity: 0.5;
`

const InputHold = styled.div`
display:flex;
align-items: center;
position:relative;
`

const Input = styled.input`
outline: none;
border:1px solid silver;
border-radius: 4px;
width: 300px;
height: 40px;
padding-left: 10px;
margin-top:5px;
:focus{
    outline:1px solid #228BE6;
    border: 1px solid transparent;
}

::placeholder{
    color: silver
}
`

const Text = styled.div`
display:flex;
font-weight: 700;
color: rgba(0,0,0,0.6);
margin:0;
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
const Container = styled.div`

`