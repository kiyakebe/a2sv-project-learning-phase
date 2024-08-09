import Image from "next/image";
const GoogleButton = () => {
  return (
    <div className="w-100 flex justify-center aling-items-center space-x-6 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 mb-14">
      <Image
        src="/google.png"
        alt=""
        className="shrink-0 mr-6"
        width={25}
        height={17}
      />
      Login With Google
    </div>
  );
};

export default GoogleButton;
