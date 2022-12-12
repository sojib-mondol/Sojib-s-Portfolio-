import React from 'react';
import img1 from '../../../../assets/projectsDetailsImg/s1.jpg'
import img2 from '../../../../assets/projectsDetailsImg/s2.jpg'
import img3 from '../../../../assets/projectsDetailsImg/s3.jpg'


const ProDetails1 = () => {
    return (
        <div className='p-2 ml-4 text-black'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                <img className='h-60 border-white-600 border-solid border-8 shadow-xl p-4 rounded-lg' src={img1} alt="details img1" />
                <img className='h-60 border-white-600 border-solid border-8 shadow-xl p-4 rounded-lg' src={img2} alt="details img1" />
                <img className='h-60 border-white-600 border-solid border-8 shadow-xl p-4 rounded-lg' src={img3} alt="details img1" />
            </div>
            <h2>Name of the project: Star Programming School</h2>
            <p>This is a online learning website and tach about IT, Web & Software Development. <br /> About this Project: <br /> </p>
            <p>1. It is react application.</p>
            <p>2. I used firebase auth to authenticate user.</p>
            <p>3. I used React Rounter to visit diffent pages with good user experience.</p>
            <p>4. I created local server to feacth data from it.</p>
            <p>5. I tried to make this web simple, fast and better user experience.</p>
            <p> <span className='text-xl font-bold'>Development tools & technology:</span> HTML/CSS, JavaScript, ReactJS, React Router, React Bootstrap, Google firebase auth, React Components, React Hot Toast etc.</p>
            <a href='https://star-programmer-93a3b.web.app' className="btn btn-outline w-20 mr-3">Live</a>
            <a href='https://github.com/sojib-sudo/Star-Programming-School-Client' className="btn btn-outline w-20 mr-3">Client</a>
            <a href='https://github.com/sojib-sudo/Star-Programming-School-Server' className="btn btn-outline w-20 mr-3">Server</a>
        </div>
    );
};

export default ProDetails1;