import React, { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalProvider'
import styled from 'styled-components'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
    const { userState }: any = useContext(GlobalContext)
    console.log((userState?.name!))
    return (
        <div>
            <Container>
                <Main>
                    <Link to="/"><Logo src={logo} /></Link>

                    <Button to="/sign-up" >Register</Button>

                </Main>
            </Container>
        </div>
    )
}

export default Header

const Logo = styled.img`
font-size: 20px;
font-weight: 700;
height:50px;

`

const Button = styled(Link)`
text-decoration: none;
font-weight: 700;
text-transform: uppercase;
font-size: 12px;
padding: 10px 20px;
border-radius: 3px;
background: #fff;
color: black;
transition: all 350ms;
:hover{
    cursor: pointer;
    transform: translate(0, -5px);
}
`


const Main = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:90%;
`

const Container = styled.div`
display: flex;
justify-content: center;
width:100%;
background-color: black;
color:white;
height: 70px;
position: fixed;
z-index: 100
`