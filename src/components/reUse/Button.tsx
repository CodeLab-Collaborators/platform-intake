import React from 'react'
import styled from 'styled-components'
import { iBut } from '../../utils/interfaces'
import { Link } from 'react-router-dom'




const Button: React.FC<iBut> = ({ ll, link, mmm, bg, title, tc, onClick }) => {
    return (
        <div>
            {
                link ? (
                    <Link to="/dashboard/send-messages" style={{ textDecoration: "none" }}>
                        <Container bg={`${bg}`} mmm={`${mmm}`} onClick={onClick}>
                            <Main tc={`${tc}`}>{title}</Main>
                        </Container>
                    </Link>
                ) : (
                    <Container bg={`${bg}`} mmm={`${mmm}`} onClick={onClick}>
                        <Main tc={`${tc}`}>{title}</Main>
                    </Container>
                )
            }
        </div>
    )
}

export default Button

const Main = styled.div<{ tc: string }>`
font-size: 12px;
font-weight: 900;
text-transform: uppercase;
color: ${({ tc }) => tc};
text-align: center;

@media screen and (max-width: 500px){
font-size: 8px;
}
`
const Container = styled.div<{ bg: string, mmm: string }>`
padding: 8px 14px;
background-color: ${({ bg }) => bg};
border-radius: 3px;
margin: 0 ${({ mmm }) => mmm ? '5px' : '0px'};
transition: all 350ms;
display: flex;
justify-content: center;
align-items: center;
:hover{
    cursor: pointer;
    transform: scale(1.04);
}


@media screen and (max-width: 500px){
padding: 7px 10px;
border-radius: 2px;
}
`