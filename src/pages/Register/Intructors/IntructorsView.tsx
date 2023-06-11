import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { NavLink, } from "react-router-dom"

const InstructorsView: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Container>
                <Buttons>
                    <NavButton to="/instructors" >Main View</NavButton>
                    <NavButton to="/instructors/logical">Logical Score</NavButton>
                    <NavButton to="/instructors/leadership">Leadership Score</NavButton>
                    <NavButton to="/instructors/psychological">Psychological Score</NavButton>
                </Buttons>

                <div>
                    {children}
                </div>
            </Container>
        </div>
    )
}

export default InstructorsView


const NavButton = styled(NavLink)`
padding: 10px 20px;
margin: 10px;
transition: all 350ms;
background-color: purple;
color: white;
border-radius: 3px;
text-decoration: none;
font-weight: 600;
font-size: 12px;
:hover{
    cursor: pointer;
    transform: translate(0, -5px);
}
&.active{
background-color: darkorange;
color: black
}
`

const Buttons = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const Container = styled.div`
padding-top: 100px;

`
