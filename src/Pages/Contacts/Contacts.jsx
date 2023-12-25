import Lottie from "lottie-react";

import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import message from './redMessage.json'

const Contacts = () => {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hwr2z8n', 'template_91y2knf', formRef.current, 'MDQM7e05aLhUovbTq')
      .then((result) => {
        setSuccess (true)
          console.log(result.text);
      }, (error) => {
        setError(true)
          console.log(error.text);
      });
  };
  const formRef = useRef()
  return (
    <div className="my-32" id="contacts">
      <h2 className="text-3xl text-center font-semibold">Contact</h2>
      <h5 className="text-center text-sm text-gray-400 font-semibold mb-5">
        Contact with me
      </h5>
      <div className="flex flex-col items-center justify-center lg:flex-row-reverse">
        <div className="hero">
          <div className="hero-content flex-col ">
            <div className="card w-full lg:w-[900px] max-w-sm shadow-2xl bg-base-100">
              <form ref={formRef} onSubmit={sendEmail} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="name"
                    placeholder="abc"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email@gmail.com"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    className="textarea textarea-bordered"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-red-700 text-white">Send Message</button>
                  {error &&  "Error! Try again"}
                  {success && "Your message has been sent"}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[500px] lg:w-[550px]">
          <Lottie loop={true} animationData={message}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
