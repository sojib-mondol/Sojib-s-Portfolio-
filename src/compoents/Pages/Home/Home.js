import React from 'react';
import profileImg from '../../../assets/sojib_img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen  text-black">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={profileImg} alt='profile-pic' className="max-w-sm rounded-lg " />
                <div>
                <h1 className="text-5xl font-bold">Hi, I am Sojib Mondol</h1>
                <p className="py-6">I am a MERN Stack Developer and JavaScript Expert. I can provide clean code and pixel perfect design.</p>
               
                <div className='text-4xl '>
                    <a className='mr-4' href="https://web.facebook.com/sojib369/">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a className='mr-4' href="https://github.com/sojib-sudo">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a className='mr-4' href="https://www.linkedin.com/in/sojib-mondol/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </div>


                <a href='https://drive.google.com/file/d/1Ck3ugHVsvw2KozwHWwuS8L_ZooXF8f4G/view?usp=sharing' className="mt-6 btn btn-outline">Download Resume</a>
                </div>
            </div>
        </div>

        <div>
            <About></About>
        </div>
        <div className='mt-20'>
            <Projects></Projects>
        </div>
        <div className='mt-20'>
            <Contact></Contact>
        </div>

        </div>
    );
};

export default Home;