"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Fill the OTP code correctly",
  }),
});

const EmailVerificationForm = ({ email }: { email: string }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    const newData = { email: email.replace('%40','@'), otp: data.pin };
    console.log(newData);
    axios
      .post("https://akil-backend.onrender.com/verify-email", newData)
      .then((res) => {
        console.log(res.data);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Verify Email</h1>
        <p className="text-[15px] mb-12 text-slate-500 text-justify">
          We have sent a verification code to the email address you provided. To
          complete the verification process, please enter the code hare.
        </p>
      </header>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP
                    maxLength={4}
                    className="w-[100%] bg-slate-400"
                    {...field}
                  >
                    <InputOTPGroup className="flex items-center justify-between gap-3 w-full">
                      <InputOTPSlot
                        index={0}
                        className="w-16 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border-2 border-violet-200 hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 placeholder-gray-300 focus:placeholder-transparent"
                      />
                      <InputOTPSlot
                        index={1}
                        className="w-16 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border-2 border-violet-200 hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 placeholder-gray-300 focus:placeholder-transparent"
                      />
                      <InputOTPSlot
                        index={2}
                        className="w-16 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border-2 border-violet-200 hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 placeholder-gray-300 focus:placeholder-transparent"
                      />
                      <InputOTPSlot
                        index={3}
                        className="w-16 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border-2 border-violet-200 hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 placeholder-gray-300 focus:placeholder-transparent"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="text-white mb-4 bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-100 px-5 py-2.5 text-center w-[100%]"
          >
            Continue
          </button>
        </form>
      </Form>

      <div className="text-sm text-slate-500 mt-4">
        Didn't receive code?
        <a
          className="font-medium text-indigo-500 hover:text-indigo-600"
          href="#0"
        >
          Resend
        </a>
      </div>
    </div>
  );
};

export default EmailVerificationForm;
