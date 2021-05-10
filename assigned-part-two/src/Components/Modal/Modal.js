import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
	return (
		<Background >
			<ModalWrapper style={{height: props.modalHeight, width: props.modalWidth}}>
				{props.content}
			</ModalWrapper>
		</Background>
	);
};

export default Modal;

const Background = styled.div`
	width: 100vw;
	height: 100vh;
	background: '#E5E5E5';
	position: fixed;
	display: flex;
	justify-content: center;
	z-index: 2;
    
`;

const ModalWrapper = styled.div`
	width: 448px;
	
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: grid;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 3;
	border-radius: 10px;
    margin-top: 15%;
    padding: 2.5% 5%;
    overflow: hidden;
`;

