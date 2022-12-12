import React from 'react';
import img1 from '../../../../assets/projectsDetailsImg/f1.jpg'
import img2 from '../../../../assets/projectsDetailsImg/f2.jpg'
import img3 from '../../../../assets/projectsDetailsImg/f3.jpg'

const ProDetails2 = () => {
    return (
        <div className='p-2 ml-4 text-black'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                <img className='h-60 border-white-600 border-solid border-8 shadow-xl p-4 rounded-lg' src={img1} alt="details img1" />
                <img className='h-60 border-white-600 border-solid border-8 shadow-xl p-4 rounded-lg' src={img2} alt="details img1" />
                <img className='h-60 border-white-600 border-solid border-8 shadow-xl p-4 rounded-lg' src={img3} alt="details img1" />
            </div>
            <h2>Name of the project: Star Cloud Kitchen</h2>
            <p>This is a online food service website. After login a user can add reviws for the the food and can add serveics.<br /> About this Project: <br /> </p>
            <p>1. It is react application.</p>
            <p>2. I used firebase auth to authenticate user.</p>
            <p>3. I used React Rounter to visit diffent pages with good user experience.</p>
            <p>4. I created local server to feacth data from it.</p>
            <p>5. I tried to make this web simple, fast and better user experience.</p>
            <p> <span className='text-xl font-bold'>Development tools & technology:</span> HTML/CSS, JavaScript, ReactJS, React Router, Tailwind, Google firebase auth, React Components, React Hot Toast etc.</p>
            <a href='https://start-cloud-kitchen.web.app' className="btn btn-outline w-20 mr-3">Live</a>
            <a href='https://github.com/sojib-sudo/star-clould-kitchen-client' className="btn btn-outline w-20 mr-3">Client</a>
            <a href='https://github.com/sojib-sudo/srat-clould-kitchen-server' className="btn btn-outline w-20 mr-3">Server</a>
        </div>
    );
};

export default ProDetails2;