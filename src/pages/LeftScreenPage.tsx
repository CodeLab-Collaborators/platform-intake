import styled from 'styled-components'

import { useRecoilValue } from "recoil"
import { UserData } from '../global/AtomState'

const LeftScreenPage = () => {
  const userData: any = useRecoilValue(UserData)



  return (
    <Container>
      <Image src={userData?.avatar} />

      <Title>
        {userData?.name}
      </Title>
      <Job>{userData?.interest}</Job>
      <Job1 >{userData?.address}</Job1 >
      <Job1 >{userData?.phone}</Job1 >

      <br />
      <Profile >{userData?.profile}</Profile >
    </Container>
  )
}

export default LeftScreenPage


const Container = styled.div`
display:flex;
align-items: center;
flex-direction: column;
margin-bottom: 20px;
margin-top: 20px;
width: 100%;
position: fixed;
z-index: 10px;
@media screen and (max-width: 450px){
width: calc(100vw - 30px);

}
`

const Job1 = styled.div`
font-size: 10px;
color: black;

`
const Job = styled.div`
font-size: 12px;
color: silver;

`

const Profile = styled.div`
font-size: 12px;
color: gray;
width: 200px;
margin-top: 10px;


`

const Title = styled.div`
margin-top: 5px;
font-weight: 700;
`

const Image = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;
background-color: rgba(0,0,0,0.1);
border: 1px solid purple;
margin-top: 10px;
object-fit: cover;
`
