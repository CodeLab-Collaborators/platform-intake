import styled from 'styled-components'
import Swal from "sweetalert2";
import { useCandidate, useCreateCandidate } from '../../../hooks/useCandidate'
import { useState } from 'react'
import { leadershipScore } from '../../../utils/APIs'

const LeadershipScreen = () => {
    const data = useCandidate()
    const mutate = useCreateCandidate()
    const [state, setState] = useState<string>("")
    const [score, setScore] = useState<number>()


    return (
        <MainContainer style={{ padding: "50px 20px" }} >
            <Container>
                <Main>

                    <Display>
                        <Search
                            placeholder='Search for a Particular candidate'
                            value={state}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setState(e.target.value)
                            }}

                        />

                    </Display>
                    {
                        state !== "" ? < Text > Searching for {state}</Text> : <Text>Viewing all Registered Candidates</Text>
                    }

                    <CardHolder>
                        {



                            data
                                ?.filter((el: any) => {
                                    if (state === "") {
                                        return el;
                                    } else if (el.name.toLowerCase().includes(state.toLowerCase())) {
                                        return el;
                                    }
                                })

                                ?.map((props: any) => (
                                    <Card key={props._id} line={props.done ? 'f' : ""} >
                                        <Carded>
                                            <Top>
                                                <Image
                                                    alt=""
                                                    src={props.avatar ? props.avatar : 'https://i.stack.imgur.com/l60Hf.png'}
                                                />
                                                <Profile>
                                                    <Name>{props.name}</Name>
                                                    <Interest>{props.interest}</Interest>
                                                    <Phone>{props.phone}</Phone>
                                                </Profile>
                                            </Top>

                                            <Story>
                                                {props.profile}
                                            </Story>

                                            <Time>
                                                Leadership Scored: {props.leadership}
                                            </Time>

                                            <Score>
                                                <Input
                                                    placeholder='Score'
                                                    type='number'
                                                    onChange={(e: any) => {
                                                        setScore(e.target.value)
                                                    }}
                                                />
                                                {
                                                    props.leadership === 0 ? <Button
                                                        bg="l"
                                                        cur="g"
                                                        onClick={() => {
                                                            leadershipScore(props._id, { leadership: score }).then(() => {
                                                                Swal.fire({
                                                                    title: `${props.name} Leadership score has been entered successfully!`,
                                                                    icon: "success",
                                                                    timer: 3000,
                                                                    timerProgressBar: true,
                                                                }).then(() => {
                                                                    mutate()
                                                                })
                                                            })


                                                        }}

                                                    >Score</Button>
                                                        :
                                                        <Button
                                                            bg=""
                                                            cur=""
                                                            disabled

                                                        >Scored</Button>
                                                }
                                            </Score>
                                        </Carded>
                                    </Card>
                                ))}



                    </CardHolder>
                </Main>
            </Container>
        </MainContainer>
    )
}

export default LeadershipScreen




const Button = styled.button<{ bg: string, cur: string }>`
padding: 10px 20px;
margin: 10px;
transition: all 350ms;
background-color: ${({ bg }) => bg ? "purple" : "silver"};
color: white;
border-radius: 3px;
text-decoration: none;
font-weight: 600;
font-size: 10px;
outline: none;
border: 0;
font-family: Poppins;
:hover{
    cursor: ${({ cur }) => cur ? "pointer" : "not-allowed"} ;
    transform: translate(0, 5px);
}
&.active{
background-color: darkorange;
color: black
}
`


const Input = styled.input`
width: 70px;
height: 30px;
border: 1px solid silver;
border-radius:3px;
font-family: Poppins;
padding-left: 10px;

::placeholder{
    color: silver;
    font-family: Poppins;
}
`
const Score = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
align-items: center;
`

const Search = styled.input`
width: 300px;
height: 40px;
border: 1px solid silver;
border-radius:3px;
font-family: Poppins;
padding-left: 10px;

::placeholder{
    color: silver;
    font-family: Poppins;
}
`

const Display = styled.div`
display: flex;
justify-content: center;

margin-bottom: 20px;
`

const Time = styled.div`
padding: 10px;
font-size: 10px;
font-weight: 600;
`

const Story = styled.div`
padding: 10px;
font-size: 13px;
`


const Phone = styled.div`
font-size: 10px;
font-weight: 500;
line-height: 1;
`

const Interest = styled.div`
font-size: 8px;
font-weight: 600;
line-height: 1;
flex:1;
width: 120px;
margin-top: 1px;
color: silver;
`

const Name = styled.div`
text-transform: uppercase;
font-size: 10px;
font-weight: 600;
line-height: 1;
width: 120px;
`

const Profile = styled.div`
margin-left: 5px;
height: 50px;
flex-direction: column;
display: flex;
padding:0;
`

const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
border: 1px solid black;
object-fit: cover;
`

const Top = styled.div`
display: flex;
padding: 20px 0;
margin-left: 10px
`

const Carded = styled.div`
width: 200px;
min-height: 300px;
background-color: white;
color: black;
transform: translate(10px, -10px);
border:1px solid silver;
`

const Card = styled.div<{ line: string }>`
width: 200px;
min-height: 300px;
border:1px solid;
border-color: ${({ line }) => line ? "green" : "red"};
transition: all 350ms;
margin: 15px;

:hover{
    cursor: pointer;
    transform: translate(0, -5px);
}
`

const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 0px;
justify-content: center;

`
const Text = styled.div`
font-size: 12px;
font-weight: 600;
text-transform: uppercase;
margin-left: 10px;
margin-bottom: 10px;
text-align: center;
`

const Main = styled.div`
width: 96%;
display: flex;
flex-direction:column;

`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;;
min-height: 70vh;
`

const MainContainer = styled.div`


`