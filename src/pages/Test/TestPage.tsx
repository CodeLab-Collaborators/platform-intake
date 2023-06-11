import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../../assets/log.png";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Loading from "../../utils/LoadState";
import { UserData } from "../../global/AtomState";
import { CheckUserRegister } from "../../utils/APIs";
import TimelineElements from "./TimelineElements";



const StartTest = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState<string>("");
	const navigate = useNavigate();

	const [users, setUser] = useRecoilState(UserData);

	return (
		<div>
			{loading ? <Loading /> : null}
			<Container>
				<Wrapper>
					<First>
						<LogoHold>
							<Logo
								alt=""
								src={img1} />
						</LogoHold>
						<SignUpHold>
							<h1>Start Test</h1>
							<div>
								By Clicking the <strong>Start Test Button,</strong> we believe you have read the
								test instruction and you are Perfectly clear with it.
								<br />
								<br />
								All the Best!
							</div>
							<Input
								value={email}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setEmail(e.target.value.toLowerCase());
								}}
								placeholder='Please enter the EMAIL address you used to Register'
								type='text'
							/>
							{email !== "" ? (
								<Button
									style={{ cursor: "pointer" }}
									onClick={() => {
										CheckUserRegister(setUser, setLoading, { email }).then(() => {
											navigate(
												"/auth/test-screen",
											)
										})
									}}>
									{" "}
									Start Test
								</Button>
							) : (
								<Button
									style={{ backgroundColor: "silver", cursor: "not-allowed" }}>
									Start Test
								</Button>
							)}
						</SignUpHold>
					</First>
					<Second>

						<Desc>
							<h2> Hope you've gone through the Instructions!</h2>
							<TimelineElements />

						</Desc>
					</Second>
				</Wrapper>
			</Container>
		</div>
	);
};

export default StartTest;

const Desc = styled.div`
	li {
		display: flex;
		list-style: none;
		margin-bottom: 10px;
		margin-right: 13px;
	}

	h2 {
		font-weight: 700;
		font-size: 14px;
		text-transform: uppercase;
		margin-bottom: 10px;
		margin-top: 20px;
	}

	p {
		margin-top: 0px;
	}

	display: flex;
	align-items: center;
	flex-direction: column;
`;


const Button = styled.button`
	width: 200px;
	height: 50px;
	margin-bottom: 20px;
	border: none;
	outline: none;
	border-radius: 5px;
	background-color: purple;
	color: white;
	font-family: Poppins;
	text-transform: uppercase;
	font-weight: 500;
font-size:18px;

	@media screen and (max-width: 960px) {
		width: 300px;
	}
`;

const Input = styled.input`
	width: 400px;
	height: 50px;
	margin-bottom: 20px;
	border: 1px solid silver;
	outline: 0px;
	border-radius: 5px;
	padding-left: 20px;
	transition: all 340ms;
font-family: Poppins;
	:focus{
		outline: 1px solid purple;
		border: 1px solid purple;
	}

	::placeholder{
		font-family: Poppins;
		color: silver
	}

	@media screen and (max-width: 960px) {
		width: 300px;
	}
`;

const SignUpHold = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	width: 400px;
	height: 400px;
	flex-direction: column;
	margin-left: 30px;
	
	h1 {
		font-weight: 500;
		margin: 0;
		text-transform: uppercase;
		font-size:25px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	p {
		margin-left: 13px;
		margin-right: 13px;
		width: 600px;
		@media screen and (max-width: 960px) {
			width: 300px;
		}
	}

	span {
		color: blue;
		text-decoration: underline;
	}

	div {
	margin-bottom: 10px;
	}
`;

const LogoHold = styled.div`
	width: 130px;
	height: 70px;
	margin-left: 30px;
`;

const Logo = styled.img`
	height: 100px;
	/* width:300px; */
	object-fit: contain;
	margin-top: 10px;
`;

const Image = styled.img`
height: 130px;
margin-top: 10px;
`

const Second = styled.div`
	height: 500px;
margin-left: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const First = styled.div`
	margin-right: 80px;
	height: 500px;
	display: flex;
	flex-direction: column;
`;

const Wrapper = styled.div`
	width: 90%;
	margin: 100px 0px 0px 0px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 1px 1px 10px 1px rgba(218, 218, 218, 0.9);
	height: 80vh;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: poppins;

`;
