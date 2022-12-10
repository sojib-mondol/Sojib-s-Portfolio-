import React from 'react';
import coverImg from '../../../assets/cover_img.jpg';

const About = () => {
    return (
        <div className='p-2 ml-4 text-black'>
            <h3 className="text-xl  text-center font-bold">About Me</h3>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">I am Sojib Mondol</h1>
                    <p className="py-6">I am a web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                    <p>Name: <span className='pl-8'>Sojib Mondol</span>
                    </p>
                    <p>Age: <span className='pl-11'>22 years</span>
                    </p>
                    <p>Address: <span className='pl-4'>Madani Avenue, Badda Dhaka 1212, Bangladesh</span></p>
                    <p>Mail: <span className='pl-11'>mdsojibmandol@gmail.com</span></p>
                    <p>Phone: <span className='pl-7'>+88 01795 455036</span></p>
                    <p>Freelance: <span className='pl-2'>Available</span></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <div className="card-body">
                    
                        <img src={coverImg} alt="cover img" />
                    </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-xl  text-center font-bold mb-5">Services</h3>
                <div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        <div className="card card-compact  shadow-xl">
                            <figure><img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Web Design</h2>
                                <p>Pure CSS with Media query responsive web design</p>
                                <p>Bootstrap responsive web design</p>
                                <p>ReactBootstrap responsive web design</p>
                                <p>Tailwind CSS component responsive web design</p>
                            </div>
                        </div>
                        <div className="card card-compact  shadow-xl">
                            <figure><img src="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Web Development</h2>
                                <p>JavaScript, ReactJs, NodeJs web application</p>
                                <p>MongoDB Databse web application</p>
                                <p>Font-end Web Applications</p>
                                <p>Full-stack Web Applications</p>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;