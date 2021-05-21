import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropDown from '../DropDown/DropDown';
import InputTitle from '../Text/InputTitle';

const Assignment = (props) => {
	const [newID, setNewID] = useState(props.id);
	const [zone, setZone] = useState('');
	const [nurse, setNurse] = useState('');
	const [nurseToAssign, setNurseToAssign] = useState('Empty');
	const [shift, setShift] = useState('');
	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');
	const [colorNumber, setColorNumber] = useState(0);
	const [shiftType, setShiftType] = useState('Day');

	const newAssignment = {
		Nurse: nurseToAssign,
		Shift: shiftType,
		ZoneAssigned: zone,
		StartTime: startTime,
		EndTime: endTime,
	};

	const getCurrentTime = () => {
		let date = new Date();
		let hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
		let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

		let endHours =
			(((date.getHours() + 8)%24) < 10 ? '0' : '') +
			((date.getHours() + 8) % 24);
		let endMinutes =
			(date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

		setStartTime(hours + ':' + minutes);
		setEndTime(endHours + ':' + endMinutes);

		console.log(((date.getHours() + 8)%24))
		console.log(endTime)
	};

	useEffect(() => {
		switch (colorNumber) {
			case 0:
				setShiftType('Day');
				break;
			case 1:
				setShiftType('Mid');
				break;
			case 2:
				setShiftType('Night');
				break;
			case 3:
				setShiftType('Float Pool Day');
				break;
			case 4:
				setShiftType('Float Pool Night');
				break;
			default:
				break;
		}
	}, [colorNumber]);

	useEffect(() => {
		//console.log("last try " + nurseToAssign + shiftType + zone + startTime + endTime)
		props.addToList(newAssignment, newID);
	}, [nurseToAssign, shiftType, zone, startTime, endTime]);

	useEffect(() => {
		if (nurse === '' || nurse === 'Select') {
		} else {
			
			setNurseToAssign(
				nurse.split(' ')[0] + ' ' + nurse.split(' ')[1][0] + '.'
			);
		}

		//console.log('this is the nure ' + nurse);
	}, [nurse]);

	useEffect(() => {
		getCurrentTime();
	}, []);
	return (
		<div
			style={{
				padding: '22px 22px',
				borderTop: 'solid',
				borderTopWidth: '1px',
				borderColor: 'rgba(118, 118, 118, 0.3)',
			}}>
			<InputTitle title={'Zone'}></InputTitle>
			<DropDown
				getText={(value) => {
					setZone(value);
				}}
				defaultDropDownText={props.zoneClicked}
				type='Zones'
			/>
			<InputTitle title={'Assigned'}></InputTitle>
			<DropDown
				getText={(value) => {
					setNurse(value);
				}}
				type='Nurses'
			/>
			<InputTitle title={'Shift'}></InputTitle>
			<DropDown
				setColorNumber={(value) => {
					setColorNumber(value);
				}}
				getText={(value) => {
					setShift(value);
				}}
				type='Shifts'
			/>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<div>
					<InputTitle title={'Start Time'}></InputTitle>
					<TimeInput
						value={startTime}
						onChange={(value) => setStartTime(value.target.value)}
						type='time'></TimeInput>
				</div>
				<div>
					<InputTitle title={'End Time'}></InputTitle>
					<TimeInput
						value={endTime}
						onChange={(value) => setEndTime(value.target.value)}
						type='time'></TimeInput>
				</div>
			</div>
		</div>
	);
};

const TimeInput = styled.input`
	width: 150px;
	height: 40px;
	border-radius: 10px;
	border-color: rgba(118, 118, 118, 0.3);
	border-width: 1px;
	border-style: solid;

	display: flex;
	align-items: center;
	padding-left: 10px;

	::-webkit-calendar-picker-indicator {
		background: none;
	}
`;

export default Assignment;
