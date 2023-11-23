import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { IoHourglassOutline } from "react-icons/io5";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import dataTest from "./test.json";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import Loading from "../LoadState";
import pix from "../../assets/ani.gif";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserData } from "../../global/AtomState";
import { useQuestions } from "../../hooks/useCandidate";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const AllQuestion = () => {
  const user = useRecoilValue(UserData);
  const questions = useQuestions();

  const [answer, setAnswer] = useState({});
  const [min, setMin] = React.useState(0);
  const [secs, setSecs] = React.useState(0);
  const [User, setUser] = useRecoilState(UserData);

  const url = "https://interview-zu4p.onrender.com";

  const [loading, setLoading] = useState(false);

  const pickAnswer = (e: any) => {
    setAnswer({
      ...answer,
      [e.target.name]: e.target.value,
    });
  };

  let correctAnswer: any = [];
  let score = 0;
  let status = "";

  const StartTimer = () => {
    const CountDown = Date.now() + 240000;

    const timer = setInterval(() => {
      const nowTime = Date.now();
      let distance = CountDown - nowTime;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(timer);
        setMin(0);
        setSecs(0);

        for (let i = 0; i < dataTest.length; i++) {
          correctAnswer.push(dataTest[i].answer);

          if (correctAnswer[i] === Object.values(answer)[i]) {
            score++;
          }
        }

        console.log("first answer: ", answer);

        if (score >= 5) status = "Excellent";
        else status = "Can still do Better";
      } else {
        setMin(minutes);
        setSecs(seconds);
      }
    }, 1000);
  };

  const submitTest = async () => {
    setLoading(true);

    for (let i = 0; i < questions.length; i++) {
      correctAnswer.push(questions[i].answer);

      if (correctAnswer[i] === Object.values(answer)[i]) {
        score++;
      }
    }

    if (score >= 5) status = "Excellent";
    else status = "Can still do Better";

    let date = new Date();
    let d =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    let t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    let data = {
      result_status: status,
      result_score: score,
      exam_date: d + " " + t,
      total_marks: `${10 * score}`,
      total_Question: "10",
    };
    console.log("showing: ", answer);
    console.log("correctAnswer: ", correctAnswer);
    axios
      .patch(`${url}/api/logical-score/${user._id}`, {
        logic: score * 10,
      })
      .then(() => {
        Swal.fire({
          title: "You have Concluded your IQ test.",
          icon: "success",
          text: `your score is : ${score * 10}`,
        })
          .then(() => {
            setUser({});
            clearInterval(min);
            setMin(0);
            setSecs(0);
            setLoading(false);
          })
          .then(() => {
            window.location.assign("/auth/start-test");
          });
      });
  };

  useEffect(() => {
    StartTimer();
  }, []);

  return (
    <Container>
      {/* <Loading /> */}
      {loading ? <Loading /> : null}
      <Wrapper>
        <Top>
          <DetailText>
            <Container1>
              <Top1>
                <Title>Interview Test Dashboard</Title>
                <Title>
                  {" "}
                  {moment(Date.now()).format("dddd")},{" "}
                  {moment(Date.now()).format("MMM Do YY")}
                </Title>
              </Top1>
              <TopCard>
                <Content>
                  <SubTitle>
                    <Rower>
                      <Row1>
                        <DetCard>
                          <CrdHold>
                            <Tit>
                              {" "}
                              <AiTwotoneCalendar
                                color="white"
                                size="15px"
                                style={{
                                  marginTop: "-10px",
                                }}
                              />{" "}
                              <span>Starts</span>{" "}
                            </Tit>
                            <Cont>{moment(Date.now()).format("LLLL")}</Cont>
                          </CrdHold>
                        </DetCard>
                        <DetCard>
                          <CrdHold>
                            <Tit>
                              {" "}
                              <MdOutlineAlignHorizontalLeft
                                color="white"
                                size="15px"
                                style={{
                                  marginTop: "-10px",
                                }}
                              />{" "}
                              <span>Total Questions</span>{" "}
                            </Tit>
                            <Cont>10</Cont>
                          </CrdHold>
                        </DetCard>
                      </Row1>
                      <Row1>
                        <DetCard>
                          <CrdHold>
                            <Tit>
                              {" "}
                              <IoHourglassOutline
                                color="white"
                                size="15px"
                                style={{
                                  marginTop: "-10px",
                                }}
                              />{" "}
                              <span>Finish Time</span>{" "}
                            </Tit>
                            <Cont>
                              {moment(Date.now() + 240000).format("LLLL")}
                            </Cont>
                          </CrdHold>
                        </DetCard>
                        <DetCard>
                          <CrdHold>
                            <Tit>
                              {" "}
                              <BiTimeFive
                                color="white"
                                size="15px"
                                style={{
                                  marginTop: "-10px",
                                }}
                              />{" "}
                              <span>Duration</span>{" "}
                            </Tit>
                            <Cont
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              4mins
                              <Cont
                                style={{
                                  marginLeft: "100px",
                                  // fontWeight: "bold",
                                  fontSize: "15px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {min}mins :{" "}
                                {min === 0 && secs <= 30 ? (
                                  <div style={{ color: "red" }}>{secs}</div>
                                ) : (
                                  <div>{secs}secs</div>
                                )}
                              </Cont>
                            </Cont>
                          </CrdHold>
                        </DetCard>
                      </Row1>
                    </Rower>
                  </SubTitle>
                </Content>

                <Image src={pix} />
              </TopCard>

              <br />
            </Container1>
          </DetailText>
        </Top>

        <Buttom>
          <InstQues>
            <QuestTitle> Interview Questions</QuestTitle>
            <Instruct>
              This is a simple Test from CodeLab, All the BEST
            </Instruct>
          </InstQues>

          {questions?.map((props: any, i: any) => (
            <MainQuestions key={props._id}>
              <QuestionHold>
                <No>{i + 1}.</No>
                <Question>
                  <Quest>{props.question}</Quest>
                  <Answers>
                    <Ans>
                      <input
                        type={"radio"}
                        id={props.a}
                        name={i + 1}
                        value={props.a}
                        onChange={(e) => {
                          pickAnswer(e);
                        }}
                      />
                      <label htmlFor={props.a}>{props.a}</label>
                    </Ans>
                    <Ans>
                      <input
                        type={"radio"}
                        id={props.b}
                        name={i + 1}
                        value={props.b}
                        onChange={(e) => {
                          pickAnswer(e);
                        }}
                      />
                      <label htmlFor={props.b}>{props.b}</label>
                    </Ans>
                    <Ans>
                      <input
                        type={"radio"}
                        name={i + 1}
                        id={props.c}
                        value={props.c}
                        onChange={(e) => {
                          pickAnswer(e);
                        }}
                      />
                      <label htmlFor={props.c}>{props.c}</label>
                    </Ans>
                    <Ans>
                      <input
                        type={"radio"}
                        name={i + 1}
                        id={props.d}
                        value={props.d}
                        onChange={(e) => {
                          pickAnswer(e);
                        }}
                      />
                      <label htmlFor={props.d}>{props.d}</label>
                    </Ans>
                  </Answers>
                </Question>
              </QuestionHold>
            </MainQuestions>
          ))}

          <MyButton
            onClick={() => {
              submitTest();
              console.log("Picking...@");
            }}
          >
            Submit
          </MyButton>
        </Buttom>
      </Wrapper>

      {/* <TimerCount b={min === 0 && secs <= 30 ? "red" : "purple"}>
        <h6 style={{ margin: "0" }}>Timer</h6>
        {min === 0 && secs <= 30 ? (
          <div style={{ display: "flex", alignItems: "center", color: "red" }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                margin: "0",
              }}
            >
              {min} :{" "}
              {min === 0 && secs <= 30 ? (
                <div style={{ color: "red" }}>{secs}</div>
              ) : (
                <div>{secs}</div>
              )}
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                margin: "0",
              }}
            >
              {min} :<div>{secs}</div>
            </div>
          </div>
        )}
      </TimerCount> */}

      <div
        style={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
        }}
      >
        <CountdownCircleTimer
          isPlaying
          duration={240}
          colors={["#83529A", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          size={150}
        >
          {({ remainingTime }) =>
            remainingTime === 0 ? (
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "900",
                  color: "#f30606",
                }}
              >
                Time Up
              </div>
            ) : (
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  color: "purple",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "40px", lineHeight: 1 }}>
                  {remainingTime}
                </div>
                <span style={{ fontSize: "20px" }}>
                  {" "}
                  {remainingTime < 2 ? "sec" : "secs"} Left
                </span>
              </div>
            )
          }
        </CountdownCircleTimer>
      </div>
    </Container>
  );
};

export default AllQuestion;

const Rower = styled.div`
  display: flex;
`;

const TimerCount = styled.div<{ b: string }>`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: white;
  position: fixed;
  border: 1px solid ${({ b }) => b};
  left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: 50px;
`;

const MyButton = styled.div`
  height: 35px;
  width: 120px;
  background-color: purple;
  color: white;
  border: none;
  margin-top: 15px;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  :hover {
    transform: translate(0, 5px);
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
  overflow: hidden;
  right: 0px;
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  margin-bottom: 30px;
`;

const Row1 = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DetCard = styled.div`
  height: 80px;
  width: 300px;
  margin: 0 15px 12px 0;
  background-color: #521379;
  display: flex;
  align-items: center;
  border-radius: 3px;
color: white;
font-weight: 700;
  @media (max-width: 500px) {
    margin: 5px 0;
  }
`;

const CrdHold = styled.div`
  padding: 0 20px;
  font-size: 13px;
`;

const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  span {
    font-size: 13px;
    margin-bottom: 10px;
  }

  button {
    height: 30px;
    width: 120px;
    font-family: poppins;
    background-color: transparent;
    border: 1px solid #1da1f2;
    color: #000;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    margin-right: 10px;
    /* border: none; */
    cursor: pointer;
  }
`;

const Tit = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    margin-left: 5px;
    font-size: 12px;
    text-transform: uppercase;
  }
`;
const Cont = styled.div`
font-weight: normal;
font-size: 12px;
text-transform: uppercase;
`;

const Buttom = styled.div`
  width: 620px;
  margin: 0 15px 12px 0;

  @media (max-width: 600px) {
    width: 90%;
    margin: 5px 0;
  }
`;
const InstQues = styled.div`
  margin-bottom: 20px;
`;
const QuestTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
`;
const Instruct = styled.div`
  font-size: 11px;
  color: gray;
`;
const MainQuestions = styled.div`
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 6px;
`;
const QuestionHold = styled.div`
  display: flex;
  padding: 15px;
  font-size: 14px;
`;
const No = styled.div`
  margin-right: 10px;
`;
const Question = styled.div``;
const Quest = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
`;
const Answers = styled.div``;
const Ans = styled.div`
  margin-left: -3px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  label{
    margin-left: 5px;
    margin-top: 2px;
    font-weight: 500;
  };
`;


const Container1 = styled.div`
width: 100%;
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

const Top1 = styled.div`
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