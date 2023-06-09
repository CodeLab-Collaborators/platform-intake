import styled from 'styled-components'
import moment from 'moment'
import pix from "../assets/ani.gif"
import { Link } from "react-router-dom"



const RightScreenPage = () => {
    const userData: any = {}

    return (
        <Container>
            <Top>
                <Title>Dashboard</Title>
                <Title> {moment(Date.now()).format('dddd')}, {moment(Date.now()).format("MMM Do YY")}</Title>
            </Top>
            <TopCard>
                <Content>

                    <TopHead>Welcome back {userData?.userName}</TopHead>

                    <SubTitle>  {
                        userData?.motivate ? <div>{userData?.motivate}</div> : <div>Please go to Update profile and add, what daily MOTIVATEs you!</div>
                    }</SubTitle>

                    <Action
                        to="/dashboard/credit-account"
                    >Credit your Account</Action>
                </Content>

                <Image src={pix} />
            </TopCard>


            <br />

        </Container>
    )
}

export default RightScreenPage



const Action = styled(Link)`
text-decoration: none;
font-weight: 900;
font-size:12px;
text-transform: uppercase;
background-color: #FC531F;
color: white;
display: flex;
justify-content: center;
align-items:center;
height: 40px;
text-align: center;
transition: all 350ms;
border-radius: 3px;
margin-bottom: 10px;
padding: 5px;
:hover{
    cursor: pointer;
    transform: scale(0.97);
}
`


const Container = styled.div`
width: 70%;
padding-bottom: 20px;
/* top:10px; */
`

const Image = styled.img`
height: 250px;
margin-top:-80px ;

@media screen and (max-width: 450px){
    height:230px
  }

@media screen and (max-width: 400px){
    height:150px
  }
`

const SubTitle = styled.div`
font-size: 14px;
opacity: 0.7;
padding:10px 0px;
text-align: left;
`


const TopHead = styled.div`
font-weight: 700;
`

const Content = styled.div`
@media screen and (max-width: 450px){
    margin-top: -10px;
    margin-bottom: 10px;
  }
`

const TopCard = styled.div`
padding: 0 20px;
background-color: #F7E5E9;
margin-top: 80px;
display:flex;
border-radius: 5px;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

@media screen and (max-width: 600px){
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`

const Title = styled.div``

const Top = styled.div`
font-weight: 900;
font-size: 13px;
display: flex;
justify-content: space-between;
margin: 0 10px;
margin-top: 20px;
margin-bottom: 30px;
@media screen and(max-width: 800px) {
    display:none;
}

`