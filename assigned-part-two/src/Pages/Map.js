import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';
import NavBar from '../Components/NavBar/NavBar';
import CloseButton from '../Images/Logos/CloseButton.svg';
import Zone from '../Zones/Zone';
import Assignment from '../Components/Assignment/Assignment';

const Map = () => {
	const [assignmentList, setAssignmentList] = useState([]);
	const [tempAssignmentsToAdd, setTempAssignmentsToAdd] = useState([]);
	const [newAssignmentCount, setNewAssignmentCount] = useState(0);
	const [zoneBeingAssignedString, setZoneBeingAssignedString] = useState();
	const [zoneBeingAssigned, setZoneBeingAssigned] = useState();
	const [modal, setModalBackground] = useState('hidden');
	const [isVisible, setIsVisible] = useState(false);
	const [clickCount, setClickCount] = useState(0);
	const transition = useTransition(isVisible, {
		from: { marginRight: -360 },
		enter: { marginRight: 0 },
		leave: { marginRight: -360 },
	});

	// zones hold string of assignments since sets cannot immediately check if the object is already in the set
	const [orangeZone, setOrangeZone] = useState(new Set());
	const [yellowZone, setYellowZone] = useState(new Set());
	const [blueZone, setBlueZone] = useState(new Set());
	const [purpleZone, setPurpleZone] = useState(new Set());
	const [charge, setCharge] = useState(new Set());
	const [tl, setTL] = useState(new Set());
	const [breaker, setBreaker] = useState(new Set());
	const [lionThree, setLionThree] = useState(new Set());
	const [lionFour, setLionFour] = useState(new Set());
	const [redZone, setRedZone] = useState(new Set());
	const [pinkZone, setPinkZone] = useState(new Set());
	const [silverZone, setSilverZone] = useState(new Set());
	const [lionTwo, setLionTwo] = useState(new Set());
	const [dischargeLounge, setDischargeLounge] = useState(new Set());
	const [zebraResource, setZebraResource] = useState(new Set());
	const [traumaOne, setTraumaOne] = useState(new Set());
	const [traumaTwo, setTraumaTwo] = useState(new Set());
	const [superTrack, setSuperTrack] = useState(new Set());
	const [zebraTwo, setZebraTwo] = useState(new Set());
	const [zebraOne, setZebraOne] = useState(new Set());
	const [screener, setScreener] = useState(new Set());
	const [triageOne, setTriageOne] = useState(new Set());
	const [sedation, setSedation] = useState(new Set());

	document.body.style.overflowX = 'hidden';
	document.body.style.background = '#fafafa';

	// shows and hides modal
	const showModal = () => {
		if (modal === 'visible') {
			setIsVisible(false);

			setModalBackground('hidden');
		} else {
			setModalBackground('visible');
			setIsVisible(true);
		}
	};

	// loads the current assignments based on the room that was clicked on or the create assignment modal
	const loadAssignments = (zoneToLoad) => {
		console.log(zoneToLoad);
		if (zoneToLoad === 'empty') {
			// When clicking the "Create Assignment button in the nav bar"
			setAssignmentList(
				new Array(
					(
						<Assignment
							id={newAssignmentCount}
							stringifyInfo={''}
							zoneClicked={zoneBeingAssignedString}
							addToList={(value, id) =>
								(tempAssignmentsToAdd[id] = value)
							}></Assignment>
					)
				)
			);
		} else {// When clicking a physical screen
			
				setAssignmentList((assignmentList) => [
					...assignmentList,
					<Assignment
						id={newAssignmentCount}
						stringifyInfo={''}
						zoneClicked={zoneBeingAssignedString}
						addToList={(value, id) =>
							(tempAssignmentsToAdd[id] = value)
						}></Assignment>,
				]);
			
		}
	};

	// saves all of the new assignments created while the modal was open in that single instance
	const saveNewAssignments = () => {
		console.log('testing the save ' + tempAssignmentsToAdd.length);
		tempAssignmentsToAdd.forEach((element) => {
			console.log(element['Nurse']);
			setZone(element);
		});
	};

	// assigns a json object of the new assignment to the room
	const setZone = (assignmentObject) => {
		const tempJSON = JSON.stringify(assignmentObject)
		switch (assignmentObject['ZoneAssigned']) {
			case 'Orange Zone (13-15, 17)':
				setOrangeZone(new Set(orangeZone.add(tempJSON)));
				break;
			case 'Yellow Zone (10-12, 16)':
				setYellowZone(new Set(yellowZone.add(tempJSON)));
				break;
			case 'Blue Zone (8, 9, 30, 31)':
				setBlueZone(new Set(blueZone.add(tempJSON)));
				break;
			case 'Purple Zone (5b, 6a/b, 7)':
				setPurpleZone(new Set(purpleZone.add(tempJSON)));
				break;
			case 'Charge':
				setCharge(new Set(charge.add(tempJSON)));
				break;
			case 'TL':
				setTL(new Set(tl.add(tempJSON)));
				break;
			case 'Breaker':
				setBreaker(new Set(breaker.add(tempJSON)));
				break;
			case 'Red Zone (18-21)':
				setRedZone(new Set(redZone.add(tempJSON)));
				break;
			case 'Trauma (1)':
				setTraumaOne(new Set(traumaOne.add(tempJSON)));
				break;
			case 'Lion 3 Resource (Orange/Yellow)':
				setLionThree(new Set(lionThree.add(tempJSON)));
				break;
			case 'Lion 4 Resource (Red/Silver/Pink)':
				setLionFour(new Set(lionFour.add(tempJSON)));
				break;
			case 'Pink Zone (26, 27, 28, 29)':
				setPinkZone(new Set(pinkZone.add(tempJSON)));
				break;
			case 'Silver Zone (22-25)':
				setSilverZone(new Set(silverZone.add(tempJSON)));
				break;
			case 'Lion 2 Resource (Purple/Blue)':
				setLionTwo(new Set(lionTwo.add(tempJSON)));
				break;
			case 'Discharge Lounge':
				setDischargeLounge(new Set(dischargeLounge.add(tempJSON)));
				break;
			case 'Zebra Resource':
				setZebraResource(new Set(zebraResource.add(tempJSON)));
				break;
			case 'Trauma (2 a/b)':
				setTraumaTwo(new Set(traumaTwo.add(tempJSON)));
				break;
			case 'Supertrack Cheetah':
				setSuperTrack(new Set(superTrack.add(tempJSON)));
				break;
			case 'Zebra 2 (3b - 5a)':
				setZebraTwo(new Set(zebraTwo.add(tempJSON)));
				break;
			case 'Zebra 1 (1a - 3a)':
				setZebraOne(new Set(zebraOne.add(tempJSON)));
				break;
			case 'Screener':
				setScreener(new Set(screener.add(tempJSON)));
				break;
			case 'Triage 1':
				setTriageOne(new Set(orangeZone.add(tempJSON)));
				break;
			case 'Sedation/ Triage 2':
				setSedation(new Set(sedation.add(tempJSON)));
				break;
			default:
				break;
		}
	};

	
	// hides the scrolling function when the create assignment modal is open
	useEffect(() => {
		if (clickCount > 0) {
			showModal();
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	}, [isVisible]);

	// opens the assignment modal 
	useEffect(() => {
		if (isVisible) {
			loadAssignments(zoneBeingAssigned);
		}
	}, [zoneBeingAssignedString]);



	return (
		<>
			<NavBar
				setClickCount={() => setClickCount(clickCount + 1)}
				setIsVisible={(value) => setIsVisible(value)}
				loadAssignments={() => loadAssignments('empty')}></NavBar>

			<div style={{ paddingBottom: '25px', overflowX: 'hidden' }}>
				<div
					style={{
						visibility: modal,
						backgroundColor: 'rgba(222, 223, 224, .5)',
						zIndex: 2,
						height: '95vh',
						width: '100%',
						position: 'fixed',
					}}></div>
				<div>
					{transition((style, item) =>
						item ? (
							<animated.div
								style={{
									visibility: modal,
									overflowY: 'hidden',
									width: '360px',
									height: '95vh',
									backgroundColor: '#FFF',
									float: 'right',
									zIndex: 3,
									position: 'sticky',
									...style,
								}}>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',

										//
										padding: '22px 22px',
									}}>
									<p
										style={{
											marginBottom: '0px',
											fontWeight: 'bold',
											fontSize: '16px',
										}}>
										Create Assignment
									</p>

									<img
										onClick={() => {
											setNewAssignmentCount(0);
											setTempAssignmentsToAdd([]);
											setIsVisible(!isVisible);
											setClickCount(clickCount + 1);
											setZoneBeingAssignedString(
												'Select'
											);
											setAssignmentList([]);
										}}
										alt='Close Button'
										src={CloseButton}
									/>
								</div>
								<AssignmentListDiv>
									{assignmentList.map((data, key) => {
										

										return data;
									})}
									<div style={{ paddingLeft: '22px' }}>
										<p
											onClick={() => {
												setNewAssignmentCount(
													newAssignmentCount + 1
												);

												setAssignmentList(
													(assignmentList) => [
														...assignmentList,
														<Assignment
															id={
																newAssignmentCount +
																1
															}
															zoneClicked={
																zoneBeingAssignedString
															}
															addToList={(
																value,
																uniqueID
															) =>
																(tempAssignmentsToAdd[
																	uniqueID
																] = value)
															}></Assignment>,
													]
												);
											}}
											style={{
												fontSize: '14px',
												fontWeight: '600',
												color: '#713489',
											}}>
											+ Add Assignment
										</p>
										<SaveButton
											onClick={() =>
												saveNewAssignments()
											}>
											Save
										</SaveButton>
									</div>
								</AssignmentListDiv>
							</animated.div>
						) : (
							''
						)
					)}
				</div>
				<div
					className='container'
					style={{
						maxWidth: '850px',
						/*border: 'solid', */ alignItems: 'center',
						justifySelf: 'center',
						marginLeft: 'auto',
						marginRight: 'auto',
					}}>
					<ZoneGrid>
						<div
							style={{
								/*border: 'solid',*/
								marginRight: '20px',
								gridColumnStart: 1,
								display: 'flex',
								justifyContent: 'flex-start',
								gridRowStart: 1,
								gridRowEnd: 7,
								flexDirection: 'column',
								marginTop: '44px',
								marginLeft: '20px',
							}}>
							<div
								onClick={() => {
									setZoneBeingAssigned(orangeZone);
									setZoneBeingAssignedString(
										'Orange Zone (13-15, 17)'
									);

									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}
								style={{
									/*border: 'solid',*/
									gridColumnStart: 1,
									gridColumnEnd: 2,
									gridRowStart: 1,
									gridRowEnd: 4,
								}}>
								<ZoneLabel>Orange Zone (13-15, 17)</ZoneLabel>
								<Zone
									zoneList={orangeZone}
									backgroundColor={'#EF924F'}
									height={'136px'}
									width={'134px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
							<div
								onClick={() => {
									setZoneBeingAssigned(yellowZone);
									setZoneBeingAssignedString(
										'Yellow Zone (10-12, 16)'
									);
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}
								style={{
									/*border: 'solid',*/
									gridColumnStart: 1,
									gridColumnEnd: 2,
									gridRowStart: 4,
								}}>
								<ZoneLabel>Yellow Zone (10-12, 16)</ZoneLabel>
								<Zone
									zoneList={yellowZone}
									backgroundColor={'#E2D152'}
									height={'136px'}
									width={'134px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
							<div
								onClick={() => {
									setZoneBeingAssigned(blueZone);
									setZoneBeingAssignedString(
										'Blue Zone (8, 9, 30, 31)'
									);
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}
								style={{
									/*border: 'solid',*/
									gridColumnStart: 1,
									gridColumnEnd: 2,
								}}>
								<ZoneLabel>Blue Zone (8, 9, 30, 31)</ZoneLabel>
								<Zone
									zoneList={blueZone}
									backgroundColor={'#4F72EF'}
									width={'134px'}
									height={'90px'}
									scrollHorizontal={'auto'}></Zone>
							</div>
							<div
								onClick={() => {
									setZoneBeingAssigned(purpleZone);
									
									setZoneBeingAssignedString(
										'Purple Zone (5b, 6a/b, 7)'
									);
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}
								style={{
									/*border: 'solid',*/
									gridColumnStart: 1,
									gridColumnEnd: 2,
								}}>
								<ZoneLabel>Purple Zone (5b, 6a/b, 7)</ZoneLabel>
								<Zone
									zoneList={purpleZone}
									backgroundColor={'#784FEF'}
									height={'90px'}
									width={'134px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
						</div>

						<div
							onClick={() => {
								setZoneBeingAssigned(charge);
								setZoneBeingAssignedString('Charge');
								setIsVisible(!isVisible);
								setClickCount(clickCount + 1);
							}}
							style={{
								/*border: 'solid',*/
								gridColumnStart: 2,
								gridColumnEnd: 3,
								display: 'flex',
							}}>
							<div>
								<ZoneLabel>Charge</ZoneLabel>
								<Zone
									zoneList={charge}
									backgroundColor={'#E1E4E8'}
									height={'44px'}
									width={'235px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
							<div
								onClick={() => {
									setZoneBeingAssigned(tl);
									setZoneBeingAssignedString('TL');
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}>
								<ZoneLabel>TL</ZoneLabel>
								<Zone
									zoneList={tl}
									backgroundColor={'#E1E4E8'}
									height={'44px'}
									width={'235px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
						</div>

						<div
							onClick={() => {
								setZoneBeingAssigned(breaker);
								setZoneBeingAssignedString('Breaker');
								setIsVisible(!isVisible);
								setClickCount(clickCount + 1);
							}}
							style={{
								/*border: 'solid',*/
								gridColumnStart: 2,
								gridColumnEnd: 3,
							}}>
							<div>
								<ZoneLabel>Breaker</ZoneLabel>
								<Zone
									zoneList={breaker}
									backgroundColor={'#E1E4E8'}
									height={'44px'}
									width={'490px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
						</div>
						<div
							style={{
								/*border: 'solid',*/
								gridColumnStart: 2,
								gridColumnEnd: 3,
								display: 'flex',
							}}>
							<div>
								<ZoneLabel>Yellow Zone (16)</ZoneLabel>
								<div
									style={{
										width: '89px',
										height: '44px',
										backgroundColor: '#E2D152',
										marginRight: '20px',
									}}></div>
							</div>
							<div>
								<ZoneLabel>Orange Zone (17)</ZoneLabel>
								<div
									style={{
										width: '89px',
										height: '44px',
										backgroundColor: '#EF924F',
										marginRight: '20px',
									}}></div>
							</div>
							<div>
								<ZoneLabel>Red Zone (18)</ZoneLabel>
								<div
									style={{
										width: '89px',
										height: '44px',
										backgroundColor: '#D74848',
									}}></div>
							</div>
						</div>

						<div
							onClick={() => {
								setZoneBeingAssigned(redZone);
								setZoneBeingAssignedString('Red Zone (18-21)');
								setIsVisible(!isVisible);
								setClickCount(clickCount + 1);
							}}
							style={{
								/*border: 'solid',*/
								gridColumnStart: 3,
								gridRowStart: 3,
								gridRowEnd: 5,
								marginLeft: '-25%',
								width: '134px',
							}}>
							<div
								style={{
									/*border: 'solid',*/ marginLeft: '-45%',
								}}>
								<ZoneLabel>Red Zone (18-21)</ZoneLabel>
								<Zone
									zoneList={redZone}
									backgroundColor={'#D74848'}
									height={'136px'}
									width={'134px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
							<div
								onClick={() => {
									setZoneBeingAssigned(traumaOne);
									setZoneBeingAssignedString('Trauma (1)');
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}
								style={
									{
										/*border: 'solid' */
									}
								}>
								<ZoneLabel>Trauma (1)</ZoneLabel>
								<Zone
									zoneList={traumaOne}
									backgroundColor={'#E1E4E8'}
									height={'44px'}
									width={'134px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
						</div>

						<div style={{ gridColumnStart: 2 }}>
							<div
								onClick={() => {
									setZoneBeingAssigned(lionThree);
									setZoneBeingAssignedString(
										'Lion 3 Resource (Orange/Yellow)'
									);
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}
								style={
									{
										/*border: 'solid' */
									}
								}>
								<div>
									<ZoneLabelLion>
										Lion 3 Resource (Orange/Yellow)
									</ZoneLabelLion>
									<Zone
										zoneList={lionThree}
										backgroundColor={'#E1E4E8'}
										height={'44px'}
										width={'334px'}
										scrollHorizontal={'auto'}></Zone>
								</div>
								<div
									onClick={() => {
										setZoneBeingAssigned(lionFour);
										setZoneBeingAssignedString(
											'Lion 4 Resource (Red/Silver/Pink)'
										);
										setIsVisible(!isVisible);
										setClickCount(clickCount + 1);
									}}>
									<ZoneLabelLion>
										Lion 4 Resource (Red/Silver/Pink)
									</ZoneLabelLion>
									<Zone
										zoneList={lionFour}
										backgroundColor={'#E1E4E8'}
										height={'44px'}
										width={'334px'}
										scrollHorizontal={'auto'}></Zone>
								</div>
							</div>
						</div>

						<div
							style={{
								gridColumnStart: 2,
								gridRowStart: 5,
							}}>
							<div style={{ display: 'flex' }}>
								<div style={{ marginRight: '-12px' }}>
									<ZoneLabel>Blue Zone (30, 31)</ZoneLabel>
									<div
										style={{
											width: '89px',
											height: '90px',
											backgroundColor: '#4F72EF',
											marginRight: '20px',
										}}></div>
								</div>
								<div
									onClick={() => {
										setZoneBeingAssigned(pinkZone);
										setZoneBeingAssignedString(
											'Pink Zone (26, 27, 28, 29)'
										);
										setIsVisible(!isVisible);
										setClickCount(clickCount + 1);
									}}>
									<ZoneLabel>
										Pink Zone (26, 27, 28, 29)
									</ZoneLabel>
									<Zone
										zoneList={pinkZone}
										backgroundColor={'#F56C85'}
										height={'90px'}
										width={'159px'}
										scrollHorizontal={'auto'}
										rightMargin={'20px'}></Zone>
								</div>
								<div
									onClick={() => {
										setZoneBeingAssigned(silverZone);
										setZoneBeingAssignedString(
											'Silver Zone (22-25)'
										);
										setIsVisible(!isVisible);
										setClickCount(clickCount + 1);
									}}>
									<ZoneLabel>Silver Zone (22-25)</ZoneLabel>
									<Zone
										zoneList={silverZone}
										backgroundColor={'#4A515F'}
										height={'90px'}
										width={'135px'}
										scrollHorizontal={'auto'}></Zone>
								</div>
							</div>
							<div style={{ display: 'flex' }}>
								<div
									onClick={() => {
										setZoneBeingAssigned(lionTwo);
										setZoneBeingAssignedString(
											'Lion 2 Resource (Purple/Blue)'
										);
										setIsVisible(!isVisible);
										setClickCount(clickCount + 1);
									}}>
									<ZoneLabelLion>
										Lion 2 Resource (Purple/Blue)
									</ZoneLabelLion>
									<Zone
										zoneList={lionTwo}
										backgroundColor={'#E1E4E8'}
										height={'44px'}
										width={'201px'}
										scrollHorizontal={'auto'}></Zone>
								</div>
								<div>
									<div
										onClick={() => {
											setZoneBeingAssigned(dischargeLounge);
											setZoneBeingAssignedString(
												'Discharge Lounge'
											);
											setIsVisible(!isVisible);
											setClickCount(clickCount + 1);
										}}>
										<ZoneLabel>Discharge Lounge</ZoneLabel>
										<Zone
											zoneList={dischargeLounge}
											backgroundColor={'#E1E4E8'}
											height={'44px'}
											width={'201px'}
											scrollHorizontal={'auto'}></Zone>
									</div>
									<div
										onClick={() => {
											setZoneBeingAssigned(zebraResource);
											setZoneBeingAssignedString(
												'Zebra Resource'
											);
											setIsVisible(!isVisible);
											setClickCount(clickCount + 1);
										}}
										style={{}}>
										<ZoneLabel>Zebra Resource</ZoneLabel>
										<Zone
											zoneList={zebraResource}
											backgroundColor={'#E1E4E8'}
											height={'44px'}
											width={'201px'}
											scrollHorizontal={'auto'}></Zone>
									</div>
								</div>
							</div>
						</div>
						<div
							style={{
								/*border: 'solid',*/
								gridColumnStart: 3,
								gridRowStart: 5,
								marginLeft: '-25%',
								width: '134px',
							}}>
							<div
								onClick={() => {
									setZoneBeingAssigned(traumaTwo);
									setZoneBeingAssignedString(
										'Trauma (2 a/b)'
									);
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}>
								<ZoneLabel>Trauma (2 a/b)</ZoneLabel>
								<Zone
									zoneList={traumaTwo}
									backgroundColor={'#E1E4E8'}
									height={'44px'}
									width={'134px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
							<div>
								<ZoneLabel>Silver Zone (22)</ZoneLabel>
								<div
									style={{
										width: '134px',
										height: '44px',
										backgroundColor: '#4A515F',
										marginRight: '20px',
									}}></div>
							</div>
							<div
								onClick={() => {
									setZoneBeingAssigned(superTrack);
									setZoneBeingAssignedString(
										'Supertrack Cheetah'
									);
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}>
								<ZoneLabel>Supertrack Cheetah</ZoneLabel>
								<Zone
									zoneList={superTrack}
									backgroundColor={'#DCE1E2'}
									height={'44px'}
									width={'134px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
						</div>

						<div
							style={{
								display: 'flex',
								/*border: 'solid',*/
								gridRowStart: 6,
								gridColumnStart: 2,
							}}>
							<div>
								<ZoneLabel>Purple Zone 5b</ZoneLabel>
								<div
									style={{
										width: '87px',
										height: '90px',
										backgroundColor: '#784FEF',
										marginRight: '20px',
									}}></div>
							</div>
							<div
								onClick={() => {
									setZoneBeingAssigned(zebraTwo);
									setZoneBeingAssignedString(
										'Zebra 2 (3b - 5a)'
									);
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}>
								<ZoneLabel>Zebra 2 (3b - 5a)</ZoneLabel>
								<Zone
									zoneList={zebraTwo}
									backgroundColor={'#5DC35A'}
									height={'90px'}
									width={'155px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
							<div
								onClick={() => {
									setZoneBeingAssigned(zebraOne);
									setZoneBeingAssignedString(
										'Zebra 1 (1a - 3a)'
									);
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}>
								<ZoneLabel>Zebra 1 (1a - 3a)</ZoneLabel>
								<Zone
									zoneList={zebraOne}
									backgroundColor={'#B5B15B'}
									height={'90px'}
									width={'155px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								gridRowStart: 8,
								gridColumnStart: 1,
								gridColumnEnd: 4,
								justifyContent: 'center',
							}}>
							<div
								onClick={() => {
									setZoneBeingAssigned(screener);
									setZoneBeingAssignedString('Screener');
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}>
								<ZoneLabel>Screener</ZoneLabel>
								<Zone
									zoneList={screener}
									backgroundColor={'#E1E4E8'}
									height={'44px'}
									width={'182px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
							<div
								onClick={() => {
									setZoneBeingAssigned(triageOne);
									setZoneBeingAssignedString('Triage 1');
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}>
								<ZoneLabel>Triage 1</ZoneLabel>
								<Zone
									zoneList={triageOne}
									backgroundColor={'#E1E4E8'}
									height={'44px'}
									width={'201px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
							<div
								onClick={() => {
									setZoneBeingAssigned(sedation);
									setZoneBeingAssignedString(
										'Sedation/ Triage 2'
									);
									setIsVisible(!isVisible);
									setClickCount(clickCount + 1);
								}}
								style={{
									display: 'flex',
									flexDirection: 'column',
								}}>
								<ZoneLabel>Sedation/ Triage 2</ZoneLabel>
								<Zone
									zoneList={sedation}
									backgroundColor={'#E1E4E8'}
									height={'44px'}
									width={'201px'}
									scrollHorizontal={'auto'}
									rightMargin={'20px'}></Zone>
							</div>
						</div>
					</ZoneGrid>
				</div>
			</div>
		</>
	);
};

export default Map;

const AssignmentListDiv = styled.div`
	height: 80vh;
	overflow-y: auto;

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

const ZoneLabel = styled.p`
	font-size: 10px;
	font-weight: bold;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	display: block;
	/*border: solid;*/
	margin-top: 12px;
	margin-bottom: 4px;
	width: 120px;
	margin-right: 0;
`;

const ZoneLabelLion = styled.p`
	font-size: 10px;
	font-weight: bold;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	display: block;
	/*border: solid;*/
	margin-top: 12px;
	margin-bottom: 4px;
	width: 220px;
	margin-right: 0;
`;

const ZoneGrid = styled.div`
	display: grid;
	grid-template-columns: 2fr 4fr 1fr;
	grid-template-rows: repeat(1, 2fr);
	overflow-x: scroll;

	&::-webkit-scrollbar {
		display: none;
	}

	/*border: solid;*/
`;

const SaveButton = styled.button`
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

	&:active {
		background-color: rgba(113, 52, 137, 1);
		color: rgba(255, 255, 255, 1);
	}
`;
