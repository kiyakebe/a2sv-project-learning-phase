import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const schema = z.object({
  name: z
    .string({
      required_error: "Name field is required",
    })
    .min(4, {
      message: "Name has to be at least 4 characters",
    }),
  email: z
    .string({
      required_error: "Email field is required",
      invalid_type_error: "Name must be a string",
    })
    .email({ message: "Invalid Email" })
    .toLowerCase(),
  password: z
    .string({
      required_error: "Password field is required",
    })
    .min(6, {
      message: "Password has to be at least 6 characters",
    }),
});

const toast_alert = (message: string) =>
    toast.success(message, { theme: "light", autoClose: 2000 });

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    toast_alert("Email sent successfully")
  };

  return (
    <form
      className="max-w-sm mx-auto bg-slate-50 p-5 py-8 rounded-md w-3/4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your name
        </label>
        <input
          type="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          "
          placeholder="John Doe"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
          >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="email@somewhere.com"
          {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
          >
          Your password
        </label>
        <input
          type="password"
          id="password"
          placeholder="************"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("password")}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        className="text-white bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-100 px-5 py-2.5 text-center w-[100%]
        "
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
