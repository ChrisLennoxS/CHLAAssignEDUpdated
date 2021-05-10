import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Components/Modal/Modal';
import InputTitle from '../Components/Text/InputTitle';
import ModalTitle from '../Components/Text/ModalTitle';
import TextInput from '../Components/Text/TextInput';
import assignedLogo from '../Images/Logos/assigned.svg';

const ResetPassword = () => {
	const [emailSent, setEmailSent] = useState(false);
	const [modalHeight, setModalHeight] = useState('405px');
	const modalWidth = '423px';

	const content =
		emailSent === false ? (
			<>
				<img src={assignedLogo} alt='assignED Logo' />
				<ModalTitle title='Reset Password'></ModalTitle>
				<p>
					Enter the email address connected to your account. We will
					email a temporary password to access your account
				</p>
				<InputTitle title='Email Address'></InputTitle>
				<TextInput type='email'></TextInput>
				<Send
					onClick={() => {
						setEmailSent(!emailSent);
						setModalHeight('295px');
					}}>
					Send
				</Send>
			</>
		) : (
			<>
				<img
					style={{ marginBottom: '5%' }}
					src={assignedLogo}
					alt='assignED Logo'
				/>
				<ModalTitle title='Email Sent'></ModalTitle>
				<p>
					A temporary password has been sent to m.grey@chla.com. Use
					the new password to login.
				</p>
				<p>Didn't receive an email. Resend</p>
			</>
		);
	return (
		<Modal
			content={content}
			modalHeight={modalHeight}
			modalWidth={modalWidth}></Modal>
	);
};

export default ResetPassword;

const Send = styled.button`
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
