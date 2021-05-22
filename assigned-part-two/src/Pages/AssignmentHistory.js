import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropDown from '../Components/DropDown/DropDown';
import NavBar from '../Components/NavBar/NavBar';
import InputTitle from '../Components/Text/InputTitle';
import { Assignments } from '../json/Assignments';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap';


const AssignmentHistory = () => {
	document.body.style.overflowX = 'hidden';

	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const assignmentsPerPage = 10;

	const [currentNurse, setCurrentNurse] = useState('Select');
	const [currentZone, setCurrentZone] = useState('Orange Zone (13-15, 17)');
	const [startDate, setStartDate] = useState('Select');
	const [endDate, setEndDate] = useState('');

	const pages = [];
	// calculates the number of pages needed
	for (let i = 1; i < Math.ceil(data.length / assignmentsPerPage); i++) {
		pages.push(i);
	}


	const indexOfLastItem = currentPage * assignmentsPerPage;
	const indexOfFirstItem = indexOfLastItem - assignmentsPerPage;

	const columns = [
		{ dataField: 'Nurse', text: 'Nurse' },
		{ dataField: 'Zone', text: 'Zone' },
		{ dataField: 'Date', text: 'Date' },
		{ dataField: 'Start', text: 'Start' },
		{ dataField: 'End', text: 'End' },
	];

	useEffect(() => {

		const tempArray = [];
		Assignments.forEach((info, key) => {
			tempArray.push(info);
		});
		setData(tempArray);
	}, []);

	useEffect(() => {
		//case 1: name and date only
		//case 2: all fields

		let tempArray = [];
		if (currentNurse !== 'Select' && currentNurse !== '' && startDate !== "Select" && endDate!== "Select" && currentZone !== "Select") {
			tempArray = Assignments.filter((obj) => {
				let day = parseInt(obj.Date.split('/')[1])
				let month = (parseInt(obj.Date.split('/')[0]))%12
				let year = parseInt(obj.Date.split('/')[2])
				let tempDate = new Date(year,month-1, day)
				return obj.Nurse === currentNurse && obj.Zone === currentZone && (tempDate >= new Date(startDate)) && (tempDate <= new Date(endDate));
			});
		}
		else if (currentNurse !== 'Select' && currentNurse !== '' && startDate !== "Select" && endDate!== "Select") {
			tempArray = Assignments.filter((obj) => {
				let day = parseInt(obj.Date.split('/')[1])
				let month = (parseInt(obj.Date.split('/')[0]))%12
				let year = parseInt(obj.Date.split('/')[2])
				let tempDate = new Date(year,month-1, day)
				return (obj.Nurse === currentNurse) && (tempDate >= new Date(startDate)) && (tempDate <= new Date(endDate));
			});
		}
		setData(tempArray);
	}, [startDate, currentZone, currentNurse]);

	return (
		<>
			<NavBar></NavBar>
			<div
				className='container'
				style={{ overflowX: 'hidden', height: '92vh' }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: '2%',
						overflowX: 'hidden',
					}}>
					<PageTitle>Assignment History</PageTitle>
					<Export onClick={() => {}}>Export</Export>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<div>
						<InputTitle title='Nurse'></InputTitle>
						<DropDown
							getText={(value) => {
								setCurrentNurse(value);
							}}
							width={'220px'}
							type='Nurses'
						/>
					</div>
					<div>
						<InputTitle title='Zone'></InputTitle>
						<DropDown
							getText={(value) => {
								setCurrentZone(value);
							}}
							width={'220px'}
							type='Zones'
						/>
					</div>
					<div>
						<InputTitle title='Date'></InputTitle>
						<DropDown
							width={'220px'}
							type='Calendar'
							setStartDate={(value) => setStartDate(value)}
							setEndDate={(value) => setEndDate(value)}
						/>
					</div>
				</div>
				<div style={{ maxHeight: '584px' }}>
					<div>
						<BootstrapTable
							keyField='id'
							data={data}
							columns={columns}
							pagination={paginationFactory()}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}>
						<p style={{ paddingLeft: '10px' }}>Showing Items</p>
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

