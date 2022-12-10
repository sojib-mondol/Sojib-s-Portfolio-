import React from 'react';
import Pimg1 from '../../../assets/projects/1.png'
import Pimg2 from '../../../assets/projects/2.png'
import Pimg3 from '../../../assets/projects/3.png'

const Projects = () => {
    return (
        <div className='p-2 ml-4 text-black'>
            <h3 className="text-xl  text-center font-bold mb-5">My Creations</h3>
            <p className='P'>Here is some of my projects</p>
            <div className='mt-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        <div className="card card-compact  shadow-xl">
                            <figure><img src={Pimg1} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Star Programming School</h2>
                                <p>Learning Website</p>
                                <p><span className='font-bold'>Tools & Technology: </span> ReactJS, NodeJs, React Bootstarp, MongoDB, Firebase, Vercel, VS Code</p>
                            <div>
                                <a href='https://star-programmer-93a3b.web.app' className="btn btn-outline w-20 mr-3">Live</a>
                                <a href='https://github.com/sojib-sudo/Star-Programming-School-Client' className="btn btn-outline w-20 mr-3">Client</a>
                                <a href='https://github.com/sojib-sudo/Star-Programming-School-Server' className="btn btn-outline w-20 mr-3">Server</a>
                            </div>
                            </div>
                            
                        </div>
                        <div className="card card-compact  shadow-xl">
                            <figure><img src={Pimg2} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Star Clould Kitchen</h2>
                                <p>Food Services Website</p>
                                <p><span className='font-bold'>Tools & Technology: </span> ReactJS, NodeJs, React Bootstarp, MongoDB, Firebase, Vercel, VS Code</p>
                                <div>
                                    <a href='https://start-cloud-kitchen.web.app' className="btn btn-outline w-20 mr-3">Live</a>
                                    <a href='https://github.com/sojib-sudo/star-clould-kitchen-client' className="btn btn-outline w-20 mr-3">Client</a>
                                    <a href='https://github.com/sojib-sudo/srat-clould-kitchen-server' className="btn btn-outline w-20 mr-3">Server</a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact  shadow-xl">
                            <figure><img src={Pimg3} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">TV-BazarBD</h2>
                                <p>Product Reselling Website</p>
                                <p><span className='font-bold'>Tools & Technology: </span> ReactJS, NodeJs, React Bootstarp, MongoDB, Firebase, Vercel, VS Code</p>
                                <div>
                                    <a href='https://tv-bazarbd.web.app/' className="btn btn-outline w-20 mr-3">Live</a>
                                    <a href='https://github.com/sojib-sudo/tv-bazar-client' className="btn btn-outline w-20 mr-3">Client</a>
                                    <a href='https://github.com/sojib-sudo/tv-bazar-server' className="btn btn-outline w-20 mr-3">Server</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Projects;