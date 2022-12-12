import React from 'react';
import img1 from '../../../../assets/projectsDetailsImg/t1.jpg'
import img2 from '../../../../assets/projectsDetailsImg/t2.jpg'
import img3 from '../../../../assets/projectsDetailsImg/t3.jpg'

const ProDetails3 = () => {
    return (
        <div className='p-2 ml-4 text-black'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                <img className='h-60 border-white-600 border-solid border-8 shadow-xl p-4 rounded-lg' src={img1} alt="details img1" />
                <img className='h-60 border-white-600 border-solid border-8 shadow-xl p-4 rounded-lg' src={img2} alt="details img1" />
                <img className='h-60 border-white-600 border-solid border-8 shadow-xl p-4 rounded-lg' src={img3} alt="details img1" />
            </div>
            <h2>Name of the project: TV-BazarBD</h2>
            <p>This is a Used product(TV) reselling website. Where we can buy & sell used TV.<br /> About this Project: <br /> </p>
            <p>1. This is a Reacj website, for the backend I used node js.</p>
            <p>2. I used MongoDB database.</p>
            <p>3. For design I used daisyUI Tailwind library.</p>
            <p>4. For Athuntication I used Google firebase auth. And 3 types of login system 1.buyers, 2. sellers, 3. Admin</p>
            <p>5. This web site is full Resposive & User friendly. </p>
            <p> <span className='text-xl font-bold'>Development tools & technology:</span> HTML/CSS, JavaScript, ReactJS, React Router, Tailwind, Google firebase auth, React Components, React Hot Toast etc.</p>
            <a href='https://tv-bazarbd.web.app/' className="btn btn-outline w-20 mr-3">Live</a>
            <a href='https://github.com/sojib-sudo/tv-bazar-client' className="btn btn-outline w-20 mr-3">Client</a>
            <a href='https://github.com/sojib-sudo/tv-bazar-server' className="btn btn-outline w-20 mr-3">Server</a>
        </div>
    );
};

export default ProDetails3;