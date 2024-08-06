"use client";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import Link from "next/link";

const schema = z.object({
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

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    toast_alert("Email sent successfully");
  };

  return (
    <form
      className="mx-auto p-5 rounded-md w-full lg:w-7/12 border border-slate-200 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-semibold text-center mb-4 text-2xl">Welcome Back,</h2>
      <span className="w-full mb-4 before:block before:absolute before:-inset-1 before:bottom-[1rem] before:top-[1rem] before:bg-slate-50 relative inline-block">
        <p className="w-full relative border-b border-slate-300"></p>
      </span>
      <div className="mb-6">
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
          placeholder="Enter email address"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-slate-600"
        >
          Enter Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="text-white mb-4 bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-100 px-5 py-2.5 text-center w-[100%]
        "
      >
        Login
      </button>
      <p className="block mb-2 text-sm font-medium text-slate-600">
        Don't have an account?
        <Link href="/auth/signup" className="ml-3 text-violet-500">
          Singup
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
