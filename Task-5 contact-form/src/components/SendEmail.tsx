import ContactForm from "./ContactForm";
import { ToastContainer } from "react-toastify";
import email from "../assets/email.svg";

const SendEmail = () => {
  return (
    <>
      <ToastContainer position="top-center" theme="colored" />
      <div className="w-[100vw] min-h-[100vh] lg:h-[100vh] flex flex-col lg:flex-row items-center lg:justify-center gap-10 lg:gap-28 p-10 lg:p-40 lg:py-10 bg-slate">
        
        <div className="w-1/1 lg:w-1/2 grow-0">
          <h4 className="text-violet-700 tsxt-md">CONTACT US</h4>
          <h2 className="text-3xl font-semibold my-3">Get In Touch With Us</h2>
          <p className="text-slate-500 text-sm">
            Reach Your Audience Effortlessly with our Email Sender Platform.
            Whether yo're engaging with customers, nurturing leads our intuitive
            tools make it simple to create, customize, and track personalized
            emails.
          </p>
          <img className=" hidden lg:block m-2 my-4 w-3/4" src={email} alt="" />
        </div>

        <div className="w-[100%] lg:w-1/2 lg:my-10 shrink-0 bg-violet-700 h-[100%] border lg:border-0 rounded-lg flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default SendEmail;
