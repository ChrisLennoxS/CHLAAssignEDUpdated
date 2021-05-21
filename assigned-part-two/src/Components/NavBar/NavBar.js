import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import assignedLogo from '../../Images/Logos/assigned.svg';
import { HiMenu } from 'react-icons/hi';
import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircle from '../../Images/Logos/AccountCircle.svg';
import Clock from '../../Images/Logos/Clock.svg';
import CreateAssignment from '../../Images/Logos/CreateAssignment.svg';
import LogOut from '../../Images/Logos/LogOut.svg';
import MapPin from '../../Images/Logos/MapPin.svg';
import CloseButton from '../../Images/Logos/CloseButton.svg';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
	const [showDropDown, setShowDropDown] = useState(false);
	const [clickCount, setClickCount] = useState(0);

	const open = (
		<div
			style={{
				width: '40px',
				height: '40px',
				display: 'center',
				justifyContent: 'center',
				alignItems: 'center',
				paddingTop: '11px',
				paddingRight: '13px',
			}}>
			<HamburgerDropDown
				onClick={() => {
					props.setClickCount();
					setClickCount(clickCount + 1);
				}}
				style={{
					padding: '0px',

					backgroundColor: '#FFF',
					zIndex: 4,
				}}></HamburgerDropDown>
		</div>
	);

	const close = (
		<img
			style={{ marginLeft: '-26px', marginTop: '5px' }}
			onClick={() => {
				setClickCount(clickCount + 1);
			}}
			alt='Close Button'
			src={CloseButton}
		/>
	);

	const [dropIcon, setDropIcon] = useState(open);

	useEffect(() => {
		if (clickCount > 0 && clickCount % 2 !== 0) {
			setDropIcon(close);
			setShowDropDown(true);
		} else {
			setDropIcon(open);
			setShowDropDown(false);
		}
	}, [clickCount]);

	return (
		<NavigationBar>
			<img src={assignedLogo} alt='assignED Logo' />

			<div>
				<StyledButton>
					<Dropdown show={showDropDown}>
						<DropDownArea
							className='DropDownArrow'
							data-bs-auto-close={false}
							style={{
								padding: '0px',
								backgroundColor: 'transparent',
								border: 'none',
								width: '20px',
							}}
							variant='success'
							id='dropdown-basic'>
							{dropIcon}
						</DropDownArea>

						<Dropdown.Menu
							id='optionMenu'
							style={{
								width: '273px',
								height: '231px',
								padding: '0px',

								marginTop: '10px',
							}}>
							<Dropdown.Item
								className='dropDownOption'
								style={{ height: '45px' }}
								href='#/action-1'>
								<Option
									onClick={() => {
										props.loadAssignments();
										props.setIsVisible(true);
										setClickCount(clickCount + 1);
									}}>
									<Logo
										alt='Create Assignment Logo'
										src={CreateAssignment}
									/>
									Create Assignment
								</Option>
							</Dropdown.Item>
							<Link
								to='/zones'
								style={{
									color: 'inherit',
									textDecoration: 'none',
								}}
								id='navBarMapViewLink'
								href='/'>
								<Dropdown.Item
									className='dropDownOption'
									style={{ height: '45px' }}
									href='#/action-2'>
									<Option>
										<Logo
											alt='Assignments Logo'
											src={MapPin}
										/>
										Assignments
									</Option>
								</Dropdown.Item>
							</Link>
							<Link
								to='/assignment-history'
								style={{
									color: 'inherit',
									textDecoration: 'none',
								}}
								id='navBarMapViewLink'
								href='/assignment-history'>
								<Dropdown.Item
									className='dropDownOption'
									style={{ height: '45px' }}
									href='#/action-3'>
									<Option>
										<Logo
											alt='Assignment History Logo'
											src={Clock}
										/>
										Assignment History
									</Option>
								</Dropdown.Item>
							</Link>
							<Link
								to='/account'
								style={{
									color: 'inherit',
									textDecoration: 'none',
								}}
								id='navBarMapViewLink'
								href='/account'>
								<Dropdown.Item
									className='dropDownOption'
									style={{ height: '45px' }}
									href='#/action-3'>
									<Option>
										<Logo
											alt='Account Logo'
											src={AccountCircle}
										/>
										Account
									</Option>
								</Dropdown.Item>
							</Link>
							<Link
								to='/'
								style={{
									color: 'inherit',
									textDecoration: 'none',
								}}
								id='navBarMapViewLink'
								href='/'>
								<Dropdown.Item
									className='dropDownOption'
									href='#/action-3'>
									<Option>
										<Logo alt='Log Out Logo' src={LogOut} />
										Log Out
									</Option>
								</Dropdown.Item>
							</Link>
						</Dropdown.Menu>
					</Dropdown>
				</StyledButton>
			</div>
		</NavigationBar>
	);
};

export default NavBar;

const DropDownArea = styled(DropdownToggle)`
	&:focus {
		outline: none !important;

		box-shadow: none !important;
	}
	&::after {
		display: none;
	}
`;

const Logo = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 12px;
	margin-left: 12px;

	&:hover {
		color: #713489;
	}
`;

const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	padding-left: 0;
`;

const HamburgerDropDown = styled(HiMenu)`
	color: #713489;
	height: 18px;
	width: 18px;
	margin-left: -30px;

	//margin-bottom: -177%;
	//margin-left: 72%;
`;

const NavigationBar = styled.nav`
	background-color: #fff;
	width: 100%;
	height: 5vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0 0 22px;
	position: sticky;
	top: 0;
	right: 0;
	left: 0;
`;

const Option = styled.div`
	border-radius: 5px;
	height: 45px;
	display: flex;
	font-size: 17px;
	font-weight: 500;
	align-items: center;
	padding-left: 10px;
	&:hover {
		color: #713489;
	}
`;

NavBar.defaultProps = {
	setClickCount: () => {},
};
