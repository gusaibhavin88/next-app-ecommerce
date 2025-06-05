"use client";

import { signInAction } from "@/redux/action/authAction";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import zod from "zod";

const signInSchema = zod.object({
  email: zod.string().min(1, "EMail is required"),
  password: zod.string().min(1, "Password is required"),
});

type signInDto = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const dispatch = useDispatch<any>();
  const {
    reset,
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({ resolver: zodResolver(signInSchema) });

  const onSubmit = (data: signInDto) => {
    dispatch(signInAction(data)).then((response: any) => {});
  };

  return (
    <div className="flex items-center justify-center    p-9 bg-amber-100 rounded-2xl border-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  w-full    gap-2"
      >
        <div className="mb-4 w-full max-w-sm ">
          <label className="text-sm font-bold text-gray-700">Email</label>
          <input
            type="email"
            {...register("email")}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500   bg-amber-50"
          />
          {errors?.email && <p>{errors?.email?.message}</p>}
        </div>
        <div className="mb-4 w-full max-w-sm ">
          <label className="text-sm font-bold text-gray-700">Password</label>
          <input
            type="password"
            {...register("password")}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500   bg-amber-50"
          />
          {errors?.password?.message && <p>{errors?.password?.message}</p>}
        </div>

        <button className="border w-[100px] self-center  rounded-md   bg-amber-200">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
