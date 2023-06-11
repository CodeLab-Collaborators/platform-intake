import styled from 'styled-components'
import moment from 'moment'
import LeftScreenPage from './LeftScreenPage'
import AllQuestion from '../utils/Questions/AllQuestions'

const TestPage = () => {
    return (
        <Wrapper>
            <Container w="0px" >
                <Main>

                    <Top>
                        <Title>Dashboard</Title>
                        <Title> {moment(Date.now()).format('dddd')}, {moment(Date.now()).format("MMM Do YY")}</Title>
                    </Top>
                    <ViewScreen>

                        <RightScreen>
                            <br />

                            <AllQuestion />

                        </RightScreen>
                        <LeftScreen>
                            <LeftScreenPage />
                        </LeftScreen>

                    </ViewScreen>
                </Main>
            </Container>
        </Wrapper>
    )
}

export default TestPage


const Title = styled.div``

const Top = styled.div`

 display:none;

@media screen and (max-width: 800px) {
    display:flex;
justify-content: space-between;
margin: 0 10px;
margin-bottom: 20px;
margin-top: 20px;
font-size: 9px;
font-weight: 900;
}
`

const LeftScreen = styled.div`
flex: .2;
display: flex;
justify-content: center;
@media screen and (max-width: 800px) {
 
}
`

const RightScreen = styled.div`
flex: .8;

background-color: #F6F6FA;
border-left: 1px solid rgba(0,0,0,0.1);
border-right: 1px solid rgba(0,0,0,0.1);
display: flex;
align-items: center;
flex-direction: column;


background: radial-gradient(
    rgba(103, 68, 2, 0.2) 8%,
    transparent 2%
);
background-position: 0% 0%;
background-size: 3vmin 3vmin;


@media screen and (max-width: 800px) {
    flex:1
}
`


const ViewScreen = styled.div`
width: 100%;
display: flex;
justify-content: center;

@media screen and (max-width: 800px) {
    flex-direction: column-reverse;
}
`


const Main = styled.div`
width:100%;
`

const Container = styled.div<{ w: string }>`
width:calc(100% - ${({ w }) => w});
min-height: calc(100vh - 122px);
display:flex;
transition: all 360ms;

@media screen and (max-width: 425px) {
width: calc(100VW - 30px);
}

`

const Wrapper = styled.div`
width: 100%;
display:flex;
justify-content: flex-end;
padding-top: 0px;
background-color: #f8f8f8;
height:100%;
padding-top: 70px;
/* padding-bottom:100px; */
 /* background: radial-gradient(
    rgba(103, 68, 2, 0.2) 8%,
    transparent 2%
);
background-position: 0% 0%;
background-size: 3vmin 3vmin; */
`