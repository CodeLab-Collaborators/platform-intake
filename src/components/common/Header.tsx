import React, { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalProvider'
import styled from 'styled-components'

const Header = () => {
    const { userState } = useContext(GlobalContext)

    return (
        <div>
            <Container>
                <Main>
                    <Logo>Looo</Logo>
                    <NavSide>
                        <Profile />
                        <Start>
                            <Name>name</Name>
                            <Log>LogOut</Log>
                        </Start>
                    </NavSide>
                </Main>
            </Container>
        </div>
    )
}

export default Header

const Start = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const Log = styled.div`
margin: 0 5px;
padding: 6px 15px;
background-color: #fff;
transition:all 350ms ;
color: #0241b7;
border-radius: 3px;
font-weight: 900;
font-size: 12px;
text-transform: uppercase;

`

const Name = styled.div`
margin: 0 5px
`

const Profile = styled.div``

const NavSide = styled.div`
display: flex;
`

const Logo = styled.div`
font-size: 20px;
font-weight: 700;

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
background-color: #0241b7;
color:white;
height: 70px
`