import React from 'react'
import '../../assets/styles/Home.css'
import bg from '../../assets/images/bg.jpg'

const Home = () => {
  return (
    <div className="home__container">
		{/* <h1 className='home__title'>Connecting Campus Talent with Career Opportunities</h1>
		<div className="button__container">
			<button className="button student">Singup</button>
			<button className="button recruiter">Explore</button>
		</div> */}
		<div className="content">
			<div className="left">
					<h1>SkillShow upload your remsume get hired </h1>
					<div className="btn__div">
					<button className="btnLeft">Signup</button>
					<button className="btnRight">Explore</button>
					</div>
			</div>
		
				<img src={bg} className='bg' alt="" />
		
		</div>

	</div>
  )
}

export default Home