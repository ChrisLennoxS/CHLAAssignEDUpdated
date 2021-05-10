import React, { useState } from 'react';
import styled from 'styled-components';
import assignedLogo from '../../Images/Logos/assigned.svg';
import { HiMenu } from 'react-icons/hi';

const NavBar = () => {
	const [ showDropDown, setShowDropDown ] = useState(false);

	return (
		<NavigationBar>
			<img src={assignedLogo} alt='assignED Logo' />
			<StyledButton onClick={() => setShowDropDown(!showDropDown)}>
				<HamburgerDropDown></HamburgerDropDown>
			</StyledButton>
		</NavigationBar>
	);
};

export default NavBar;

const StyledButton = styled.button`
	border: none;
	background-color: transparent;
`;

const HamburgerDropDown = styled(HiMenu)`
	color: '#713489';
	height: 14;
`;

const NavigationBar = styled.nav`
	background-color: '#FFF';
	width: 100vw;
	height: 5vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2%;
`;
