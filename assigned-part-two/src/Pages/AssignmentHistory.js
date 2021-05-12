import React from 'react';
import styled from 'styled-components';
import NavBar from '../Components/NavBar/NavBar';
import InputTitle from '../Components/Text/InputTitle';

const AssignmentHistory = () => {
	return (
		<>
			<NavBar></NavBar>
			<div className='container'>
				<div style={{display:'flex', justifyContent:'space-between', alignItems: 'center', marginBottom: '2%'}}>
					<PageTitle>Assignment History</PageTitle>
                    <Export onClick={() => {}}>Update</Export>
				</div>
				<div style={{display:'flex', justifyContent: 'space-between'}}>
					<div>
						<InputTitle title='Nurse'></InputTitle>
                        <p>Meredith</p>
					</div>
					<div>
						<InputTitle title='Zone'></InputTitle>
                        <p>Grey</p>
					</div>
					<div>
						<InputTitle title='Date'></InputTitle>
                        <p>m.grey@chla.com</p>
					</div>
				</div>
				<div>
					<div style={{display:'inline-block'}}>
						
					</div>
                    
				</div>
			</div>
		</>
	);
};

export default AssignmentHistory;

const PageTitle = styled.p`
	font-size: 16px;
	font-weight: 800;
`;

const Export = styled.button`
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