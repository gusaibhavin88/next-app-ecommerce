"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import tempImg from "../../../public/globe.svg";
import { useDispatch } from "react-redux";
import { signUpAction } from "@/redux/action/authAction";

const signUpSchema = zod.object({
  email: zod.string().min(1, "EMail is required"),
  password: zod.string().min(1, "Password is required"),
  name: zod.string().min(1, "Name is required"),
  profileImage: zod.custom<File | undefined>(
    (file) => file instanceof File || file === undefined,
    {
      message: "Image is required",
    }
  ),
});

type SignUp = zod.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const dispatch = useDispatch<any>();
  const {
    reset,
    register,
    formState: { errors },
    setValue,
    watch,
    handleSubmit,
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const onSubmit = (data: SignUp) => {
    const formData = new FormData();

    for (let [key, value] of Object.entries(data)) {
      if (key !== "profileImage") {
        formData.append(key, value);
      } else {
        formData.append("avatar", value as Blob);
      }
    }
    dispatch(signUpAction(formData));
  };

  const selectedImage = watch("profileImage");

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target.files?.[0];

    if (file) {
      setValue("profileImage", file);
    }
  };

  const clearImage = () => {
    setValue("profileImage", undefined, { shouldValidate: true });
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
        <div className="mb-4 w-full max-w-sm ">
          <label className="text-sm font-bold text-gray-700">Name</label>
          <input
            type="name"
            {...register("name")}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500   bg-amber-50"
          />
          {errors?.name?.message && <p>{errors?.name?.message}</p>}
        </div>

        <div className="mb-4 flex gap-2 w-full max-w-sm items-center">
          <div className="relative w-[50px] h-[50px] shrink-0">
            <Image
              alt="fsf"
              src={selectedImage ? URL.createObjectURL(selectedImage) : tempImg}
              width={50}
              height={50}
            />
            <button
              type="button"
              onClick={clearImage}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full shadow"
            >
              ✕
            </button>
          </div>

          <input
            type="file"
            onChange={onChangeImage}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500   bg-amber-50"
          />
          {errors?.profileImage?.message && (
            <p>{errors?.profileImage?.message}</p>
          )}
        </div>

        <button className="border w-[100px] self-center  rounded-md   bg-amber-200">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
