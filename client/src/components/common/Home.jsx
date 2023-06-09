import React from 'react'
import '../../assets/styles/Home.css'

const Home = () => {
  return (
    <div style={{
		backgroundImage:"url('https://res.cloudinary.com/duaob0aso/image/upload/v1682232556/home_bg_image_final_lisx0v.jpg')",
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		
		}} className="home__container">
		<h1 className='home__title'>Connecting Campus Talent with Career Opportunities</h1>
		<div className="button__container">
			<button className="button student">I am a Student</button>
			<button className="button recruiter">I am a Recruiter</button>
		</div>
	</div>
  )
}

export default Home