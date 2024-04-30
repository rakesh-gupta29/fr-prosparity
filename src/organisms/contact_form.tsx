import React, { useState } from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MasterBtn } from 'atoms/buttons'

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name is required.')
    .max(30, 'First Name can not be more than 30 characters.'),

  lastName: z
    .string()
    .min(1, 'Last Name is required.')
    .max(30, 'Last Name can not be more than 30 characters.'),

  email: z
    .string()
    .email('Invalid email address.')
    .min(1, 'Email is required.'),
  phone: z.string().length(10, 'Phone number should be of 10 digits.'),
  message: z.string(),
})

export type FormFieldSchema = z.infer<typeof formSchema>

export default function Form() {
  const [isLoading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFieldSchema>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormFieldSchema> = async (data) => {
    setLoading(true)
    const res = await fetch('')
    if (res.ok) {
      console.log(data)
      console.log('form has been submitted')
    } else {
      console.error('Form error')
    }
    reset()
    setLoading(false)
  }

  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg">
      <section className="">
        <div>
          <div className="rounded-xl md:rounded-2xl lg:rounded-3xl xl:rounded-[32px]  border-[3px] border-solid border-opacity-20 border-white form-wrapper">
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-screen-sm mx-auto grid  gap-4 p-10  md:gap-7"
            >
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="grid gap-1 text-base md:text-lg"
                  >
                    <input
                      className="pl-6 outline-none focus-visible:outline-none  focus-visible:bg-white focus-visible:text-black focus-visible:placeholder-black focus-visible:placeholder-opacity-30   focus:bg-white focus:text-black focus:placeholder-black focus:placeholder-opacity-30 text-white border-white border-1 border-solid focus-visible:borde-opacity-100 border-opacity-50 rounded lg:rounded-lg w-full placeholder:text-white placeholder:text-opacity-60 font-regular  bg-transparent text-base xl:text-lg  py-4"
                      id="firstName"
                      placeholder="Enter First Name"
                      {...register('firstName')}
                    />
                    {errors.email && (
                      <span className="">{errors.firstName?.message}</span>
                    )}
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="grid gap-1 text-base md:text-lg"
                  >
                    <input
                      className="pl-6 outline-none focus-visible:outline-none  focus-visible:bg-white focus-visible:text-black focus-visible:placeholder-black focus-visible:placeholder-opacity-30   focus:bg-white focus:text-black focus:placeholder-black focus:placeholder-opacity-30 text-white border-white border-1 border-solid focus-visible:borde-opacity-100 border-opacity-50 rounded lg:rounded-lg w-full placeholder:text-white placeholder:text-opacity-60 font-regular  bg-transparent text-base xl:text-lg  py-4"
                      id="lastName"
                      placeholder="Enter Last Name"
                      {...register('lastName')}
                    />
                    {errors.email && (
                      <span className="">{errors.lastName?.message}</span>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="grid gap-1 text-base md:text-lg"
                >
                  <div className="outline-none focus-visible:outline-none  focus-within:bg-white focus-within:text-black focus-within:placeholder-black focus-within:placeholder-opacity-30   focus:bg-white focus:text-black focus:placeholder-black focus:placeholder-opacity-30 text-white border-white border-1 border-solid focus-visible:borde-opacity-100 focus-within:stroke-black stroke-white border-opacity-50 rounded lg:rounded-lg w-full placeholder:text-white placeholder:text-opacity-60 font-regular  bg-transparent text-base xl:text-lg pl-5  pr-3 flex gap-3">
                    <div className="grid place-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M7.03662 9.5L12.0366 13L17.0366 9.5"
                          stroke="inherit"
                          stroke-opacity="0.9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.03662 17.5V7.5C2.03662 6.39543 2.93205 5.5 4.03662 5.5H20.0366C21.1412 5.5 22.0366 6.39543 22.0366 7.5V17.5C22.0366 18.6046 21.1412 19.5 20.0366 19.5H4.03662C2.93205 19.5 2.03662 18.6046 2.03662 17.5Z"
                          stroke="inherit"
                          stroke-opacity="0.9"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>

                    <input
                      className=" text-inherit  focus-visible:placeholder-black focus-visible:placeholder-opacity-30 placeholder-opacity-30 placeholder-white flex-1 w-full border-none outline-none focus:outline-none focus-visible:outline-none  placeholder:text-white placeholder:text-opacity-60 font-regular  bg-transparent text-base xl:text-lg  py-5"
                      id="email"
                      type="email"
                      inputMode="email"
                      placeholder="Please enter your email address"
                      {...register('email')}
                    />
                  </div>
                  {errors.email && (
                    <span className="">{errors.email?.message}</span>
                  )}
                </label>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="grid gap-1 text-base md:text-lg"
                >
                  <input
                    className="pl-6 outline-none focus-visible:outline-none  focus-visible:bg-white focus-visible:text-black focus-visible:placeholder-black focus-visible:placeholder-opacity-30   focus:bg-white focus:text-black focus:placeholder-black focus:placeholder-opacity-30 text-white border-white border-1 border-solid focus-visible:borde-opacity-100 border-opacity-50 rounded lg:rounded-lg w-full placeholder:text-white placeholder:text-opacity-60 font-regular  bg-transparent text-base xl:text-lg  py-4"
                    type="number"
                    id="phone"
                    inputMode="numeric"
                    placeholder="Please enter your phone number"
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <span className="">{errors.phone?.message}</span>
                  )}
                </label>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="grid gap-1 text-sm md:text-lg"
                >
                  <textarea
                    rows={7}
                    cols={5}
                    id="message"
                    className="pl-6 outline-none focus-visible:outline-none  focus-visible:bg-white focus-visible:text-black focus-visible:placeholder-black focus-visible:placeholder-opacity-30   focus:bg-white focus:text-black focus:placeholder-black focus:placeholder-opacity-30 text-white border-white border-1 border-solid focus-visible:borde-opacity-100 border-opacity-50 rounded lg:rounded-lg w-full placeholder:text-white placeholder:text-opacity-60 font-regular  bg-transparent text-base xl:text-lg  py-4"
                    placeholder="Hey. say something"
                    {...register('message')}
                  />
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="rounded-full py-3 px-7  bg-[#3AF779] border-1 border-solid border-[#0B373C] text-[#0B373C] hover:outline-[#3AF779] outline outline-2 outline-solid outline-offset-2 outline-transparent hover:text-blueGreen focus-visible:outline-[#3AF779] transition-all duration-300 ease-in-out
               text-base md:text-lg xl:text-xl font-regular font-semibold  tracking-wide "
                >
                  Contact us
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  )
}
