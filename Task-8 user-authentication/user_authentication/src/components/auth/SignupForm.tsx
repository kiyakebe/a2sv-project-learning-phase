"use client";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import axios from "axios";

import { useRouter } from "next/navigation";
import GoogleButton from "./GoogleButton";

const schema = z
  .object({
    name: z
      .string({
        required_error: "Name field is required",
      })
      .min(6, {
        message: "Name has to be at least 6 characters",
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
    confirmPassword: z.string({
      required_error: "Confirm Password field is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

const toast_alert = (message: string) =>
  toast.success(message, { theme: "light", autoClose: 2000 });

type FormData = z.infer<typeof schema>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const router = useRouter();

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    axios
      .post("https://akil-backend.onrender.com/signup", data)
      .then((res) => {
        if (res.status === 200) {
          toast_alert("Successfull sent OTP!");
          router.push("/api/auth/emailVerification/" + data.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      className="mx-auto p-5 rounded-md w-full lg:w-7/12 border border-slate-200 bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-center mb-5 text-3xl font-poppins font-bold text-slate-800">Signup Today</h2>
      <GoogleButton />
      <p className="text-center w-full border-b-[3px] my-8 relative ">
      <span className="bg-white absolute w-1/2 h-4 translate-x-[-50%] left-[50%] bottom-[-0.2rem]">Or Signup with Email</span>
      </p>

      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-slate-600"
        >
          Full Name
        </label>
        <input
          type="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          "
          placeholder="Enter Full Name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-slate-600"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-slate-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-slate-600"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Enter Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="text-white mb-4 bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-100 px-5 py-2.5 text-center w-[100%]
        "
      >
        Continue
      </button>
      <p className="block mb-2 text-sm font-medium text-slate-600">
        Alrady have an account?
        <Link href="/api/auth/signin" className="ml-3 text-violet-500">
          Login
        </Link>
      </p>
      <p className="text-sm text-slate-400 mt-2">
        By clicking Continue, you acknowledge thet you have read and accepted
        out{" "}
        <Link href={"/auth/signup"} className="text-violet-500">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href={"/auth/signup"} className="text-violet-500">
          Privacy Policy
        </Link>{" "}
      </p>
    </form>
  );
};

export default SignupForm;
