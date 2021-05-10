import React from 'react';
import styled from 'styled-components';
import Modal from '../Components/Modal/Modal';
import InputTitle from '../Components/Text/InputTitle';
import ModalTitle from '../Components/Text/ModalTitle';
import TextInput from '../Components/Text/TextInput';

const CreatePassword = () => {
	const modalHeight = '404px';
    const modalWidth = '382px';

	const content = (
		<>
			<ModalTitle title='Create Password'></ModalTitle>
			<p style={{marginTop:'-1%', marginBottom: '-.25%', fontSize: '14px'}}>Your password must be at least 8 characters with 1 uppercase.</p>
			<InputTitle title='Password'></InputTitle>
			<TextInput type='password'></TextInput>
			<InputTitle title='Confirm New Password'></InputTitle>
			<TextInput type='password'></TextInput>
			<Update onClick={() => {}}>Update</Update>
		</>
	);

	return <Modal content={content} modalHeight={modalHeight} modalWidth={modalWidth}></Modal>;
};

export default CreatePassword;

const Update = styled.button`
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
