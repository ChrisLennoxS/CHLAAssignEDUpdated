import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import InputTitle from '../Components/Text/InputTitle'

const Account = () => {
    return (
        <>
        <NavBar></NavBar>
        <div className='container'>
				<div></div>
				<div>
					<div><InputTitle title='First Name'></InputTitle></div>
					<div><InputTitle title='Last Name'></InputTitle></div>
					<div><InputTitle title='Email Address'></InputTitle></div>
				</div>
				<div></div>
			</div>
        </>
    )
}

export default Account
