import React from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useAppContext } from '../context/appContext';

import main from '../assets/images/main.svg';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
	const { user } = useAppContext();

	return (
		<>
			{user && <Navigate to='/' />}
			<Wrapper>
				<nav>
					<Logo />
				</nav>
				<div className='container page'>
					<div className='info'>
						<h1>
							job <span>tracking</span> app
						</h1>
						<p>
							lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quisquam,quidem. lorem ipsum dolor sit amet consectetur
							adipisicing elit. Quisquam,quidem. lorem ipsum dolor sit amet
							consectetur adipisicing elit. Quisquam,quidem123.
						</p>
						<Link to='/register' className='btn btn-hero'>
							Login/Register
						</Link>
					</div>
					<img src={main} alt='job hunt' className='img main-img' />
				</div>
			</Wrapper>
		</>
	);
};

export default Landing;
