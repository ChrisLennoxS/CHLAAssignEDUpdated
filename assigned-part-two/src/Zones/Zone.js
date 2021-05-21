import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ShiftDiv from '../Components/Text/ShiftDiv';

// title, width, height, shift zone, background color

const Zone = (props) => {
	const [nurseList, setNurseList] = useState([]);
	const [shiftDivList, setShiftDivList] = useState([]);
	

	const getNewShiftDiv = (nurseObj) => {
		const tempShiftName = nurseObj['Nurse'];
		let tempShiftBorder = '';
		let tempShiftBackground = '';

		switch (nurseObj['Shift']) {
			case 'Day':
				tempShiftBorder = '#EB5757';
				tempShiftBackground = '#FFF3F3';
				break;
			case 'Mid':
				tempShiftBorder = '#5AC328';
				tempShiftBackground = '#F6FFF3';
				break;
			case 'Night':
				tempShiftBorder = '#6C57EB';
				tempShiftBackground = '#F4F3FF';
				break;
			case 'Float Pool Day':
				tempShiftBorder = '#B5B15B';
				tempShiftBackground = '#fefefc';
				break;
			case 'Float Pool Night':
				tempShiftBorder = '#A529F1';
				tempShiftBackground = '#FDF3FF';
				break;
			default:
				break;
		}
		return (
			<ShiftDiv
				backgroundColor={tempShiftBackground}
				borderColor={tempShiftBorder}
				color={tempShiftBorder}
				text={tempShiftName}
			/>
		);
	};

	useEffect(() => {
		const tempNurseArray = [];
		nurseList.forEach((nurse) => {
			tempNurseArray.push(getNewShiftDiv(nurse));
		});
		setShiftDivList(tempNurseArray);
	}, [nurseList]);

	useEffect(() => {
		const tempNurseArray = [];
		
		if(props.zoneList.size > 0){
			
			for (let assignment of props.zoneList) {
				tempNurseArray.push(JSON.parse(assignment))
			}
		}
		
		setNurseList(tempNurseArray)

	}, [props.zoneList]);

	return (
		<StyledZone
			style={{
				width: props.width,
				height: props.height,
				backgroundColor: props.backgroundColor,
				overflowY: 'auto',
				marginRight: props.rightMargin,
			}}>
			{shiftDivList.map((data, key) => {
		
				return data;
			})}
		</StyledZone>
	);
};

export default Zone;

Zone.defaultProps = {
	scrollHorizontal: 'none',
	scrollVertical: 'none',
	rightMargin: '0px',
};

const StyledZone = styled.div`
	padding: 5px;

	//white-space: nowrap;

	&::-webkit-scrollbar {
		width: 4px;
		height: 4px;
		background-color: #e7e6e6;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 5px;
		height: 5px;
		width: 4px;
	}
`;
