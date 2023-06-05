
import styled from 'styled-components'
import { iButton } from '../../utils/interfaces'



const Button: React.FC<iButton> = ({ onClick, bg, color, title, icon, m }) => {
    return (
        <div>
            <Container
                color={`${color}`}
                m={`${m}`}

                onClick={onClick}
            >
                <Main bg={`${bg}`}>
                    <Icon>
                        {icon}
                    </Icon>
                    <Div>{title}</Div>
                </Main>
            </Container>
        </div>
    )
}

export default Button

const Div = styled.div`
 font-size:12px;
    font-weight: 700;
    opacity: 0.7
`
const Icon = styled.div`
color: #228be6;
margin-top: 3px;
/* margin-right: 3px; */
`

const Main = styled.div<{ bg: string }>`
width: 80px;
padding: 0 5px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid silver;
border-radius: 5px;
height: 35px;
transition: all 350ms;
background-color: ${({ bg }) => bg};
:hover{
    cursor: pointer;
    background-color: #f3f3f3;
    color: #228be6
}
`;
const Container = styled.div < { color: string, m: string }>`
margin: ${({ m }) => m ? "0 5px" : ""};
margin-bottom:20px;
color: ${({ color }) => color};
`