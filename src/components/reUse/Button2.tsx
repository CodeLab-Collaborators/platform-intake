import React from 'react'
import styled from 'styled-components'
import { iButton } from '../../utils/interfaces'


const Button2: React.FC<iButton> = ({ title, onClick, bg, tx, br }) => {
    return (
      <Div>
            <Container
          bg={`${bg}`}
          tx={`${tx}`}
          br={`${bg}`}
                onClick={onClick}
            >
                <Main>{title}</Main>
            </Container>
      </Div>
    )
}

export default Button2

const Main = styled.div``

const Container = styled.div<{ bg: string, br: string, tx: string }>`
background-color: ${({ bg }) => bg};
border-radius: 8px;
border: ${({ br }) => br ? "2px solid #272b3a" : "2px solid #FC531F"};
color: ${({ tx }) => tx};
transition: all 350ms;
margin: 10px;
font-size: 15px;
font-weight: 900;
text-transform: uppercase;
padding: 15px 35px;
transition: all 350ms;

:hover{
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
}

@media screen and (max-width: 600px){
   font-size: 10px;
   padding: 13px 22px;
}

`

const Div = styled.div`
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .8;
  }
}

`