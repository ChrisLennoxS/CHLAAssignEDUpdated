import React from 'react';
import styled from 'styled-components';

// used to hold the map view names and also the shifts
const ShiftDiv = (props) => {
	return (
		<ColoredBox
			style={{
				borderColor: props.borderColor,
				backgroundColor: props.backgroundColor,
			}}>
			<p
				style={{
					fontSize: '12px',
					marginBottom: '0px',
					fontWeight: '600',
					color: props.color,
					
				}}>
				{props.text}
			</p>
		</ColoredBox>
	);
};

export default ShiftDiv;

const ColoredBox = styled.div`
	border: solid;
	border-width: 1px;
	border-radius: 5px;
	padding: 2px 4px;
	overflow-x: hidden;
	overflow-y: hidden;
	display: inline-block;
	margin-right: 4px;
	height: 24px;
`;
