import { ToastContainer } from "react-toastify";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <ToastContainer position="top-center" theme="colored" />
      {children}
    </div>
  );
};

export default layout;
