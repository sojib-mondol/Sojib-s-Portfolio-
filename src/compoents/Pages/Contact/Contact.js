import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faMailchimp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import emailImg from '../../../assets/sendEmail.png'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import './Contat.css'

const SERVICE_ID = "service_in2qxxo";
const TEMPLATE_ID = "template_pmrf2sd";
const USER_ID = "Qy0r38b1aWHh012u_";



const Contact = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };

    return (
        <div className='p-2 ml-4 text-black'>
            <h3 className="text-xl  text-center font-bold mb-5">Get In Touch</h3>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <img src={emailImg} alt="" />
                    <div>
                        <p className="py-6"><FontAwesomeIcon icon={faMailchimp}/> mdsojibmandol@gmail.com <br /> Call: +88 01795-455036 <br />
                        <a href="https://web.facebook.com/sojib369/"><FontAwesomeIcon className='text-2xl mr-4' icon={faFacebook}/></a> <a href="https://github.com/sojib-sudo"><FontAwesomeIcon className='text-2xl mr-4' icon={faGithub}/></a> <a href="https://www.linkedin.com/in/sojib-mondol/"><FontAwesomeIcon className='text-2xl mr-4' icon={faLinkedin}/></a>
                        </p>
                    </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <div className="card-body">
                        
                        <div className='ContactFrom'>
                        
                            <Form onSubmit={handleOnSubmit}>
                                <Form.Field
                                id='form-input-control-email'
                                control={Input}
                                label='Email'
                                name='user_email'
                                placeholder='Email…'
                                required
                                icon='mail'
                                iconPosition='left'
                                />
                                <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                label='Name'
                                name='user_name'
                                placeholder='Name…'
                                required
                                icon='user circle'
                                iconPosition='left'
                                />
                                <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Message'
                                name='user_message'
                                placeholder='Message…'
                                required
                                />
                                <Button type='submit' color='green'>Submit</Button>
                            </Form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;