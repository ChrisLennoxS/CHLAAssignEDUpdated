import React from 'react';
import styled from 'styled-components';
import NavBar from '../Components/NavBar/NavBar';
import InputTitle from '../Components/Text/InputTitle';
import TextInput from '../Components/Text/TextInput';

const Account = () => {
	return (
		<>
			<NavBar></NavBar>
			<div className='container'>
				<div>
					<PageTitle>Account Settings</PageTitle>
				</div>
				<div style={{display:'flex', justifyContent: 'space-between'}}>
					<div>
						<InputTitle title='First Name'></InputTitle>
                        <p>Meredith</p>
					</div>
					<div>
						<InputTitle title='Last Name'></InputTitle>
                        <p>Grey</p>
					</div>
					<div>
						<InputTitle title='Email Address'></InputTitle>
                        <p>m.grey@chla.com</p>
					</div>
				</div>
				<div>
					<div style={{display:'inline-block'}}>
						<InputTitle title='Password' />
						<TextInput type='password'></TextInput>
					</div>
                    <Update onClick={() => {}}>Update</Update>
				</div>
			</div>
		</>
	);
};

export default Account;

const PageTitle = styled.p`
	font-size: 16px;
	font-weight: 800;
`;

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
    margin-left: 2%;
	&:active {
		background-color: rgba(113, 52, 137, 1);
		color: rgba(255, 255, 255, 1);
	}
`;
