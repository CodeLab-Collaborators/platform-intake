import styled from 'styled-components'
import { useCandidate } from '../hooks/useCandidate'
import moment from "moment"

const View = () => {
  const data = useCandidate();

  return (
    <MainContainer style={{ padding: "100px 20px" }}>
      <Container>
        <Main>
          <Text>Viewing all Registered Candidates</Text>

          <CardHolder>
            {data?.map((props: any) => (
              <Card key={props._id} line={props.done ? "f" : ""}>
                <Carded>
                  <Top>
                    <Image
                      alt=""
                      src={
                        props.avatar
                          ? props.avatar
                          : "https://i.stack.imgur.com/l60Hf.png"
                      }
                    />
                    <Profile>
                      <Name>{props.name}</Name>
                      <Interest>{props.interest}</Interest>
                      <Phone>{props.phone}</Phone>
                    </Profile>
                  </Top>

                  <Story>
                    {props.profile.length > 200 ? (
                      <div>
                        {props.profile.substring(0, 200)}... <br />
                        <strong>More content, hidden!</strong>
                      </div>
                    ) : (
                      props.profile
                    )}
                  </Story>
                  <div style={{ flex: "1" }} />
                  <Time>{moment(props.createdAt).fromNow()}</Time>
                  <Coded>
                    <span>Registration Code:</span> {props.code}
                  </Coded>
                </Carded>
              </Card>
            ))}
          </CardHolder>
        </Main>
      </Container>
    </MainContainer>
  );
};

export default View;

const Coded = styled.div`
  padding: 0 10px;
  font-size: 12px;
  font-weight: 600;
  padding-bottom: 20px;

  span {
    color: silver;
    font-size: 10px;
  }
`;

const Time = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  font-size: 10px;
  font-weight: 600;
`;

const Story = styled.div`
  padding: 10px;
  font-size: 10px;
`;

const Phone = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
`;

const Interest = styled.div`
  font-size: 8px;
  font-weight: 600;
  line-height: 1;
  flex: 1;
  width: 120px;
  margin-top: 1px;
  color: silver;
`;

const Name = styled.div`
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  width: 120px;
`;

const Profile = styled.div`
  margin-left: 5px;
  height: 50px;
  flex-direction: column;
  display: flex;
  padding: 0;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  object-fit: cover;
`;

const Top = styled.div`
  display: flex;
  padding: 20px 0;
  margin-left: 10px;
`;

const Carded = styled.div`
  width: 200px;
  min-height: 300px;
  background-color: white;
  color: black;
  /* transform: translate(5px, -5px); */
  display: flex;
  flex-direction: column;
  border: 1px solid silver;
  transition: all 200ms;
  &:hover {
    transform: translate(5px, -5px);
  }
`;

const Card = styled.div<{ line: string }>`
  width: 200px;
  min-height: 300px;
  border: 1px solid;
  border-color: ${({ line }) => (line ? "green" : "red")};
  transition: all 350ms;
  margin: 15px;
  :hover {
    cursor: pointer;
    transform: translate(0, -5px);
  }
`;

const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 50px;
justify-content: center;

`
const Text = styled.div`
font-size: 12px;
font-weight: 600;
text-transform: uppercase;
margin-left: 10px;
`

const Main = styled.div`
width: 96%;
display: flex;
flex-direction:column;

`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
min-height: 70vh;
`

const MainContainer = styled.div`

background: radial-gradient(
    rgba(103, 68, 2, 0.2) 8%,
    transparent 2%
);
background-position: 0% 0%;
background-size: 3vmin 3vmin;
`