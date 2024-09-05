'use client'


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phoneName: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Bood type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File).nullable({ message: "Image is required!" }).optional(),
});

const TeacherForm = ({ type, data }) => {
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(schema),
    });
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input {...register("name")} />
      {errors.name?.message && <p>{errors.name?.message}</p>}
      <input type="number" {...register("age", { valueAsNumber: true })} />
      {errors.age?.message && <p>{errors.age?.message}</p>}
      <input type="submit" />
    </form>;

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })
    return (
      <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <h1 className="text-xl font-semibold">Create a new teacher</h1>
        <span className="text-xs text-gray-100 font-medium">
          Authentication Information
        </span>
        <div className="flex justify-between gap-4 flex-wrap">
          <InputField
            type="text"
            register={register}
            label="Username"
            error={errors?.username}
            name="username"
            defaultValue={data?.username}
          />
          <InputField
            type="email"
            register={register}
            label="Email"
            error={errors?.email}
            name="email"
            defaultValue={data?.email}
          />
          <InputField
            type="password"
            register={register}
            label="Password"
            error={errors?.password}
            name="password"
            defaultValue={data?.password}
          />
        </div>
        <span className="text-xs text-gray-100 font-medium">
          Personal Information
        </span>
        <div className="flex justify-between gap-4 flex-wrap">
          <InputField
            label="First Name"
            name="firstName"
            type="text"
            register={register}
            error={errors?.firstName}
            defaultValue={data?.firstName}
          />

          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            register={register}
            error={errors?.lastName}
            defaultValue={data?.lastName}
          />
          <InputField
            label="Phone"
            name="phone"
            type="number"
            register={register}
            error={errors?.phone}
            defaultValue={data?.phone}
          />
          <InputField
            label="Address"
            name="address"
            type="text"
            register={register}
            error={errors?.address}
            defaultValue={data?.address}
          />
          <InputField
            label="Blood Type"
            name="bloodType"
            type="text"
            register={register}
            error={errors?.bloodtype}
            defaultValue={data?.bloodtype}
          />
          <InputField
            label="Birthday"
            name="birthday"
            type="date"
            register={register}
            error={errors?.birthday}
            defaultValue={data?.birthday}
          />
          <div className="flex flex-col gap-2 w-full md:w-1/4 ">
            <label className="text-xs text-gray-300">Sex</label>
            <select
             
              {...register("sex")}
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              defaultValue={data?.sex}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            {errors?.sex?.message && (
              <p className="text-xs text-red-400">{errors?.sex?.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4 ">
                    <label className="text-xs text-gray-300" htmlFor='img'>
                        <Image src='/upload.png' alt='' width={28} height={28} />
                        <span>Upload a photo</span>
            </label>
                    <input
                        id='img'
              type='file'
              {...register("img")}
              className="hidden"
              defaultValue={data?.img}
            />
            
            {errors?.img?.message && (
              <p className="text-xs text-red-400">{errors?.img?.message}</p>
            )}
          </div>
        </div>
        <button className="bg-blue-400 text-white p-2 rounded-md">
          {type === "create" ? "Create" : "Update"}{" "}
        </button>
      </form>
    );
}
export default TeacherForm;