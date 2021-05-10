import React from 'react';
import styled from 'styled-components';
import Modal from '../Components/Modal/Modal';
import InputTitle from '../Components/Text/InputTitle';
import ModalTitle from '../Components/Text/ModalTitle';
import TextInput from '../Components/Text/TextInput';
import assignedLogo from '../Images/Logos/assigned.svg';

const LogIn = () => {
	const modalHeight = '461px';
	const modalWidth = '423px';

	const content = (
		<>
			<img src={assignedLogo} alt='assignED Logo' />
			<ModalTitle title='Sign In'></ModalTitle>
			<InputTitle title='Email Address'></InputTitle>
			<TextInput type='email'></TextInput>
			<InputTitle title='Password'></InputTitle>
			<TextInput type='password'></TextInput>
			<SignIn onClick={() => {}}>Send</SignIn>
			<p>Forgot Password?</p>
		</>
	);

	return (
		<Modal
			content={content}
			modalHeight={modalHeight}
			modalWidth={modalWidth}></Modal>
	);
};

export default LogIn;

const SignIn = styled.button`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 14px;
	font-weight: 600;
	background-color: '#DEDFE0';
	height: 44px;
	width: 85px;
	border: none;
	border-radius: 5px;
	margin-top: 2%;

	&:active {
		background-color: rgba(113, 52, 137, 1);
		color: rgba(255, 255, 255, 1);
	}
`;
