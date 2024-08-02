import ContactForm from "./ContactForm";
import { ToastContainer } from "react-toastify";
const SendEmail = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center gap-28 p-40 py-10">
      <ToastContainer position="top-center" theme="colored" />
      <div className="w-1/2 grow-0">
        <h4 className="text-violet-700 tsxt-dm">CONTACT US</h4>
        <h2 className="text-3xl font-semibold my-3">Get In Touch With Us</h2>
        <p className="text-slate-500 text-sm">
          Reach Your Audience Effortlessly with our Email Sender Platform.
          Whether yo're engaging with customers, nurturing leads our intuitive
          tools make it simple to create, customize, and track personalized
          emails.
        </p>
      </div>

      <div className="w-1/2 shrink-0 bg-violet-700 h-[100%] rounded-lg flex items-center justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default SendEmail;
