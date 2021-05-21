import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Zones } from '../../json/Zones';
import { Nurses } from '../../json/Nurses';
import { Shifts } from '../../json/Shifts';
import DropDownArrow from '../../Images/Logos/DropDownArrow.svg';
import ShiftDiv from '../Text/ShiftDiv';
import Calendar from './DropDownCalendar';

//Types: shifts, calendar, assignee
// Width, height
// return function prop

const DropDown = (props) => {
	const [selectedValue, setSelectedValue] = useState(
		props.defaultDropDownText
	);
	const [dropDownDisplay, setDropDownDisplay] = useState('none');
	const [list, setList] = useState('');
	const [clickCount, setClickCount] = useState(0);
	const textColor =
		selectedValue === 'Select' ? 'rgba(51, 51, 51, 0.5)' : '#000';
	const topMargin = props.type === 'Shifts' && clickCount > 0 ? '8px' : '0px';

	const displayOptions = () => {
		dropDownDisplay === 'none'
			? setDropDownDisplay('block')
			: setDropDownDisplay('none');
	};

	useEffect(() => {
		if (props.type === 'Zones') {
			setList(
				Zones.map((data, key) => {
					return (
						<Option
							onClick={() => {
								setSelectedValue(data);
								setClickCount(clickCount + 1);
							}}>
							<p
								style={{
									marginBottom: '0px',
									fontSize: '14px',
								}}>
								{data}
							</p>
						</Option>
					);
				})
			);
		} else if (props.type === 'Nurses') {
			setList(
				Nurses.map((data, key) => {
					return (
						<Option
							onClick={() => {
								setSelectedValue(
									data['firstName'] + ' ' + data['lastName']
								);
								setClickCount(clickCount + 1);
							}}>
							<p
								style={{
									marginBottom: '0px',
									fontSize: '14px',
								}}>
								{data['firstName'] + ' ' + data['lastName']}
							</p>
						</Option>
					);
				})
			);
		} else if (props.type === 'Shifts') {
			setList(
				Shifts.map((data, key) => {
					const id = key;
					return (
						<Option
							onClick={() => {
								props.setColorNumber(id);
								setSelectedValue(
									<ShiftDiv
										backgroundColor={
											data[Object.keys(data)[0]][
												'backgroundColor'
											]
										}
										borderColor={
											data[Object.keys(data)[0]][
												'borderColor'
											]
										}
										color={
											data[Object.keys(data)[0]][
												'borderColor'
											]
										}
										text={Object.keys(data)}
									/>
								);
								setClickCount(clickCount + 1);
							}}>
							<ShiftDiv
								backgroundColor={
									data[Object.keys(data)[0]][
										'backgroundColor'
									]
								}
								borderColor={
									data[Object.keys(data)[0]]['borderColor']
								}
								color={
									data[Object.keys(data)[0]]['borderColor']
								}
								text={Object.keys(data)}
							/>
						</Option>
					);
				})
			);
		} else if (props.type === 'Calendar') {
			return setList(
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div
						style={{
							height: '190px',
							overflowY: 'hidden',
							margin: '0px auto',
							marginBottom: '2px',
							
						}}>
						<Calendar
							style={{ width: '140px' }}
							setStartDate={(value) => {
								props.setStartDate(value);
							}}
							setEndDate={(value) => {
								props.setEndDate(value);
							}}></Calendar>
					</div>
				</div>
			);
		}
	}, []);

	useEffect(() => {
		if (clickCount > 0) {
			displayOptions();
		}
		props.getText(selectedValue);
	}, [selectedValue]);

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<StyledDropDown
				style={{ width: props.width }}
				onClick={() => displayOptions()}>
				<>
					<p
						style={{
							color: textColor,
							marginBottom: '0px',
							paddingTop: topMargin,
							fontSize:
								selectedValue.length > 25 ? '12px' : '14px',
						}}>
						{selectedValue}
					</p>

					<img alt='DropDown Arrow' src={DropDownArrow} />
				</>
			</StyledDropDown>
			<div className='dropdown'>
				<DropDownContent
					style={{ display: dropDownDisplay, width: props.width }}>
					<InnerBox style={{ width: props.width }}>{list}</InnerBox>
				</DropDownContent>
			</div>
		</div>
	);
};

export default DropDown;

const StyledDropDown = styled.div`
	height: 40px;
	margin-bottom: 1%;
	border-radius: 10px;
	border-color: rgba(118, 118, 118, 0.3);
	border-width: 1px;
	border-style: solid;
	padding: 0px 8px 0px 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const DropDownContent = styled.div`
	display: display;
	width: 316px;
	height: 200px;
	z-index: 1;
	position: absolute;
	border-radius: 5px;
	border-color: rgba(118, 118, 118, 0.3);
	border-width: 1px;
	border-style: solid;
	padding: 0px 8px 10px 0px;
	background-color: #fff;
`;

const InnerBox = styled.div`
	display: block;
	width: 316px;
	height: 190px;

	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 4px;
		background-color: #e7e6e6;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 5px;
		height: 55px;
		width: 4px;
	}
`;

const Option = styled.div`
	border-radius: 5px;
	height: 47px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	&:hover {
		background-color: #fcf7ff;
	}
`;

DropDown.defaultProps = {
	defaultDropDownText: 'Select',
	getText: () => {},
	width: '316px',
	setStartDate: () => {},
	setEndDate: () => {},
};
