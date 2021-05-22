import React from 'react';
import styled from 'styled-components';

// acts a styled label
const InputTitle = (props) => {
	const header = props.title;
	return (
		<div>
			<InputName>{header}</InputName>
		</div>
	);
};

export default InputTitle;

const InputName = styled.h3`
	font-size: 12px;
	color: rgba(51, 51, 51, 0.5);
    
`;
