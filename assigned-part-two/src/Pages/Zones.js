import React from 'react';
import styled from 'styled-components';
import NavBar from '../Components/NavBar/NavBar';

const Zones = () => {
	return (
		<>
			<NavBar></NavBar>
			<Background>
				<div className='container' style={{border: 'solid', alignItems: 'center'}}>
					<ZoneGrid>
						<div
							style={{
								border: 'solid',
								gridColumnStart: 1,
								gridColumnEnd: 2,
								gridRowStart: 1,
								gridRowEnd: 4,
							}}>
							<ZoneLabel>Orange Zone (13-15, 17)</ZoneLabel>
							<div
								style={{
									width: '134px',
									height: '136px',
									backgroundColor: '#EF924F',
								}}></div>
						</div>
						<div
							style={{
								border: 'solid',
								gridColumnStart: 2,
								gridColumnEnd: 3,
								display: 'flex',
							}}>
							<div>
								<ZoneLabel>Charge</ZoneLabel>
								<div
									style={{
										width: '235px',
										height: '44px',
										backgroundColor: '#E1E4E8',
										marginRight: '20px',
									}}></div>
							</div>
							<div>
								<ZoneLabel>TL</ZoneLabel>
								<div
									style={{
										width: '235px',
										height: '44px',
										backgroundColor: '#E1E4E8',
									}}></div>
							</div>
						</div>

						<div
							style={{
								border: 'solid',
								gridColumnStart: 2,
								gridColumnEnd: 3,
							}}>
							<div>
								<ZoneLabel>Breaker</ZoneLabel>
								<div
									style={{
										width: '490px',
										height: '44px',
										backgroundColor: '#E1E4E8',
									}}></div>
							</div>
						</div>
						<div
							style={{
								border: 'solid',
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
									}}></div>
							</div>
							<div>
								<ZoneLabel>Orange Zone (17)</ZoneLabel>
								<div
									style={{
										width: '89px',
										height: '44px',
										backgroundColor: '#EF924F',
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
							style={{
								border: 'solid',
								gridColumnStart: 3,
								gridRowStart: 3,
								gridRowEnd: 5,
							}}>
							<ZoneLabel>Red Zone (18-21)</ZoneLabel>
							<div
								style={{
									width: '134px',
									height: '136px',
									backgroundColor: '#D74848',
								}}></div>
							<div style={{ border: 'solid', marginLeft: '40%' }}>
								<ZoneLabel>Trauma (1)</ZoneLabel>
								<div
									style={{
										width: '134px',
										height: '44px',
										backgroundColor: '#E1E4E8',
									}}></div>
							</div>
						</div>
						<div
							style={{
								border: 'solid',
								gridColumnStart: 1,
								gridColumnEnd: 2,
								gridRowStart: 4,
							}}>
							<ZoneLabel>Yellow Zone (10-12, 16)</ZoneLabel>
							<div
								style={{
									width: '134px',
									height: '136px',
									backgroundColor: '#E2D152',
								}}></div>
						</div>
						<div style={{ gridColumnStart: 2 }}>
							<div style={{ border: 'solid' }}>
								<div>
									<ZoneLabel>Lion 3 Resource</ZoneLabel>
									<div
										style={{
											width: '335px',
											height: '44px',
											backgroundColor: '#E1E4E8',
										}}></div>
								</div>
								<div>
									<ZoneLabel>Lion 4 Resource</ZoneLabel>
									<div
										style={{
											width: '334px',
											height: '44px',
											backgroundColor: '#E1E4E8',
										}}></div>
								</div>
							</div>
						</div>

						<div
							style={{
								border: 'solid',
								gridColumnStart: 1,
								gridColumnEnd: 2,
							}}>
							<ZoneLabel>Blue Zone (8, 9, 30, 31)</ZoneLabel>
							<div
								style={{
									width: '134px',
									height: '136px',
									backgroundColor: '#4F72EF',
								}}></div>
						</div>
						<div
							style={{
								border: 'solid',
								gridColumnStart: 1,
								gridColumnEnd: 2,
							}}>
							<ZoneLabel>Purple Zone (5b, 6a/b, 7)</ZoneLabel>
							<div
								style={{
									width: '134px',
									height: '136px',
									backgroundColor: '#784FEF',
								}}></div>
						</div>
						<div
							style={{
								border: 'solid',

								gridColumnStart: 2,
								gridRowStart: 5,
							}}>
							<div style={{ display: 'flex' }}>
								<div>
									<ZoneLabel>Blue Zone (30, 31)</ZoneLabel>
									<div
										style={{
											width: '89px',
											height: '90px',
											backgroundColor: '#4F72EF',
											marginRight: '20px',
										}}></div>
								</div>
								<div>
									<ZoneLabel>
										Pink Zone (26, 27, 28, 29)
									</ZoneLabel>
									<div
										style={{
											width: '159px',
											height: '90px',
											backgroundColor: '#F56C85',
											marginRight: '20px',
										}}></div>
								</div>
								<div>
									<ZoneLabel>Silver Zone (22-25)</ZoneLabel>
									<div
										style={{
											width: '135px',
											height: '90px',
											backgroundColor: '#4A515F',
										}}></div>
								</div>
							</div>
							<div style={{ display: 'flex' }}>
								<div>
									<ZoneLabel>Lion 2 Resource</ZoneLabel>
									<div
										style={{
											width: '201px',
											height: '44px',
											backgroundColor: '#E1E4E8',
											marginRight: '20px',
										}}></div>
								</div>
								<div>
									<div>
										<ZoneLabel>Discharge Lounge</ZoneLabel>
										<div
											style={{
												width: '201px',
												height: '44px',
												backgroundColor: '#E1E4E8',
											}}></div>
									</div>
									<div style={{}}>
										<ZoneLabel>Zebra Resource</ZoneLabel>
										<div
											style={{
												width: '201px',
												height: '44px',
												backgroundColor: '#E1E4E8',
											}}></div>
									</div>
								</div>
							</div>
						</div>
						<div
							style={{
								border: 'solid',
								gridColumnStart: 3,
								gridRowStart: 5,
							}}>
							<div>
								<ZoneLabel>Trauma (2 a/b)</ZoneLabel>
								<div
									style={{
										width: '134px',
										height: '44px',
										backgroundColor: '#E1E4E8',
									}}></div>
							</div>
							<div>
								<ZoneLabel>Silver Zone (22)</ZoneLabel>
								<div
									style={{
										width: '134px',
										height: '44px',
										backgroundColor: '#4A515F',
									}}></div>
							</div>
							<div>
								<ZoneLabel>Supertrack Cheetah</ZoneLabel>
								<div
									style={{
										width: '134px',
										height: '44px',
										backgroundColor: '#DCE1E2',
									}}></div>
							</div>
						</div>

						<div
							style={{
								display: 'flex',
								border: 'solid',
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
									}}></div>
							</div>
							<div>
								<ZoneLabel>Zebra 2 (3b - 5a)</ZoneLabel>
								<div
									style={{
										width: '155px',
										height: '90px',
										backgroundColor: '#5DC35A',
									}}></div>
							</div>
							<div>
								<ZoneLabel>Zebra 2 (3b - 5a)?</ZoneLabel>
								<div
									style={{
										width: '155px',
										height: '90px',
										backgroundColor: '#B5B15B',
									}}></div>
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								border: 'solid',
								gridRowStart: 8,
								gridColumnStart: 1,
								gridColumnEnd: 4
							}}>
							<div>
								<ZoneLabel>Screener</ZoneLabel>
								<div
									style={{
										width: '235px',
										height: '44px',
										backgroundColor: '#E1E4E8',
									}}></div>
							</div>
							<div>
								<ZoneLabel>Triage 1</ZoneLabel>
								<div
									style={{
										width: '235px',
										height: '44px',
										backgroundColor: '#E1E4E8',
									}}></div>
							</div>
							<div>
								<ZoneLabel>Sedation</ZoneLabel>
								<div
									style={{
										width: '235px',
										height: '44px',
										backgroundColor: '#E1E4E8',
									}}></div>
							</div>
						</div>
					</ZoneGrid>
				</div>
			</Background>
		</>
	);
};

export default Zones;

const Background = styled.div`
	background-color: #fafafa;
	width: 100vw;
	height: 95vh;
`;

const ZoneLabel = styled.p`
	font-size: 10px;
	font-weight: bold;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	display: block;
`;

const ZoneGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: repeat(1, 2fr);
	border: solid
`;
