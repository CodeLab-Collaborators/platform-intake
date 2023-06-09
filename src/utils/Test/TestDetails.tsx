import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { IoHourglassOutline } from "react-icons/io5";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import axios from "axios";
import moment from "moment";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";
import { UserData } from "../../global/AtomState";
import { TestData } from "../Questions/TestData2";

const url: string = "https://school-code.onrender.com";

const DetailsTest = () => {
    const { id } = useParams();
    const user = useRecoilValue(UserData);
    const Navigate = useNavigate();

    const [answer, setAnswer] = useState([] as any[]);
    const [testData, setTestData] = useState({} as any);
    const [load, setLoad] = useState(false);

    const fetchData = async () => {
        const newURL = `${url}/api/test/${id}/viewing-option`;
        await axios.get(newURL).then((res) => {
            console.log("Reading Data: ", res);
            setTestData(res!.data!.data);
        });
    };

    const onRadioButtonChange = (e: any) => {
        setAnswer({
            ...answer,
            [e.target.name]: e.target.value,
        });
    };

    let correctAnswer: string[] = [];
    let score = 0;
    let status = "";

    const submitTest = async () => {
        setLoad(true);
        for (let i = 0; i < testData?.mainTest?.length; i++) {
            correctAnswer.push(testData?.mainTest[i].answer);

            if (correctAnswer[i] === Object.values(answer)[i]) {
                score++;
            }
        }

        if (score >= 3) status = "Pass";
        else status = "Fail";

        const newURL = `${url}/api/performance/${user._id}/create-student-performance`;
        axios
            .post(newURL, {
                right: score,
                testCode: testData.testCode,
            })
            .then(() => {
                setLoad(false);
                Swal.fire({
                    icon: "success",
                    title: "Your Test Have Been Submitted.",
                }).then(() => {
                    Navigate("/student-dashboard");
                });
            });
        correctAnswer = [];
    };

    React.useEffect(() => {
        fetchData();
    }, []);
    return (
        <Container>
            <Wrapper>
                <Top>
                    <DetailText>
                        <h4>Test Detail</h4>
                        <span>Mid-Term Test - {testData?.testTitle}</span>
                    </DetailText>
                    <Row1>
                        <DetCard>
                            <CrdHold>
                                <Tit>
                                    {" "}
                                    <AiTwotoneCalendar color="#90A1C0" size="15px" />{" "}
                                    <span>Starts</span>{" "}
                                </Tit>
                                <Cont>
                                    {moment(testData?.createdAt).format(
                                        "dddd, MMMM Do YYYY, h:mm:ss a",
                                    )}
                                </Cont>
                            </CrdHold>
                        </DetCard>
                        <DetCard>
                            <CrdHold>
                                <Tit>
                                    {" "}
                                    <BiTimeFive color="#90A1C0" size="15px" />{" "}
                                    <span>Duration - Test Code</span>{" "}
                                </Tit>
                                <Cont>
                                    {testData?.time} - {testData?.testCode}
                                </Cont>
                            </CrdHold>
                        </DetCard>
                    </Row1>
                    <Row1>
                        <DetCard>
                            <CrdHold>
                                <Tit>
                                    {" "}
                                    <IoHourglassOutline color="#90A1C0" size="15px" />{" "}
                                    <span>Finish Time</span>{" "}
                                </Tit>
                                <Cont>
                                    {moment(testData?.createdAt).format(
                                        "dddd, MMMM Do YYYY, h:mm:ss a",
                                    )}
                                </Cont>
                            </CrdHold>
                        </DetCard>
                        <DetCard>
                            <CrdHold>
                                <Tit>
                                    {" "}
                                    <MdOutlineAlignHorizontalLeft
                                        color="#90A1C0"
                                        size="15px"
                                    />{" "}
                                    <span>Total Questions</span>{" "}
                                </Tit>
                                <Cont>{testData?.mainTest?.length}</Cont>
                            </CrdHold>
                        </DetCard>
                    </Row1>
                </Top>
                <Buttom>
                    <InstQues>
                        <QuestTitle> Mid-Term {testData?.testTitle} Questions</QuestTitle>
                        <Instruct>{testData?.instruction}</Instruct>
                    </InstQues>

                    {TestData?.map((props: any, i: any) => (
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
                                                    onRadioButtonChange(e);
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
                                                    onRadioButtonChange(e);
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
                                                    onRadioButtonChange(e);
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
                                                    onRadioButtonChange(e);
                                                }}
                                            />
                                            <label htmlFor={props.d}>{props.d}</label>
                                        </Ans>
                                    </Answers>
                                </Question>
                            </QuestionHold>
                        </MainQuestions>
                    ))}

                    {load ? (
                        <MyButton
                            style={{
                                backgroundColor: "silver",
                                cursor: "not-allowed",
                                color: "black",
                            }}
                        >
                            Loading...
                        </MyButton>
                    ) : (
                        <MyButton
                            onClick={() => {
                                submitTest();
                            }}
                        >
                            Submit
                        </MyButton>
                    )}
                </Buttom>

                <Answers> </Answers>
            </Wrapper>
        </Container>
    );
};

export default DetailsTest;

const MyButton = styled.div`
	height: 45px;
	width: 160px;
	background-color: #0fbbfe;
	color: white;
	border: none;
	margin-top: 15px;
	border-radius: 3px;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 350ms;

	:hover {
		transform: scale(1.05);
	}
`;

const Container = styled.div`
	/* width: 100%; */
	width: calc(100vw - 230px);
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;
	padding-bottom: 80px;
	padding-top: 70px;

	background-color: #f7f9fc;
	/* background-color: gold; */
	overflow: hidden;
	position: absolute;
	right: 0px;
	// top: 50px;

	@media screen and (max-width: 1100px) {
		width: 95%;
	}
	@media screen and (max-width: 1005px) {
		width: 100%;
	}

	/* background-color: #352b1e; */
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
	background-color: #fff;
	display: flex;
	align-items: center;

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
		margin-top: 2px;
	}
`;
const Cont = styled.div``;
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
`;
const Answers = styled.div``;
const Ans = styled.div`
	margin-left: -3px;
	margin-bottom: 10px;
`;