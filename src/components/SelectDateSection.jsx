'use client'

import React, {useState} from 'react';
import {DayPicker} from "react-day-picker";
import "react-day-picker/style.css";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import clsx from "clsx";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .regex(/^\+\d{1,15}$/, "Invalid phone number format"),
  specialRequests: z.string().optional(),
});


function SelectDateSection() {
  const [selected, setSelected] = useState();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true)

    try {
      const message = `Name: ${data.name}\nPhone: ${data.phone}\nSpecial requirements: ${data.specialRequests}\nDates: ${formatSelectedDate()}`;
      const res = await fetch(`/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({to: data.name, subject: "Booking form:", text: message})
      });

      if (res.status === 200) {
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (err) {
      console.error('err', err)
    } finally {
      setLoading(false)
    }
  };
  const formatSelectedDate = () => {
    if (!selected?.from || !selected?.to) return "";
    const from = selected.from.toLocaleDateString();
    const to = selected.to.toLocaleDateString();
    return `${from} - ${to}`;
  };

  return (
    <div className={"bg-[#FAF5FF] py-[100px]"}>
      <div className="container">
        <h2 className={"font2 text-[50px] xl:hidden text-black text-center mb-[30px]"}>Booking</h2>
        <div className={"xl:grid flex flex-col items-center xl:grid-cols-[600px_1fr] gap-[30px]"}>
          <div className={clsx("w-fit transition-all", {
            "opacity-[.5] blur-[2px] pointer-events-none": showSuccess || loading
          })}>
            <DayPicker
              mode="range"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
          <div className="text-black w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[40px]  relative"
            >
              {showSuccess && (
                <div className={"absolute top-0 left-0 p-[30px] w-full h-full bg-[#FAF5FF] bg-opacity-50 backdrop-blur-[2px]"}>
                  <div className={"bg-[#fff] rounded-[20px] w-full h-full flex flex-col items-center justify-center text-center"}>
                    <h3 className={"font2 text-[40px] text-[#ABA3D2]"}>Successfully sent</h3>
                    <button onClick={() => setShowSuccess(false)} className={"bg-[#ABA3D2] text-black font2  h-[50px] text-[22px] mt-[15px] px-6 w-fit max-w-full"}>Close</button>
                  </div>
                </div>
              )}

              {/* Date */}
              <div>
                <label className="block font-medium text-[30px] mb-[15px] font2">Date</label>
                <input
                  type="text"
                  value={
                    selected
                      ? `${selected?.from?.toLocaleDateString()} - ${selected?.to?.toLocaleDateString()}`
                      : ""
                  }
                  readOnly
                  className="w-full border-b bg-transparent text-[18px] text-gray py-1 outline-none"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block font-medium text-[30px] mb-[15px] font2">
                  Firstname and Lastname
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Firstname and Lastname"
                  className={`w-full border-b bg-transparent placeholder:text-[#969086] text-[18px] outline-none py-1 ${
                    errors.name ? "border-red" : "border-gray-300"
                  } `}
                />
                {errors.name && (
                  <p className="text-red text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium text-[30px] mb-[15px] font2">Number</label>
                <input
                  type="text"
                  {...register("phone")}
                  placeholder="+186 78654765"
                  className={`w-full border-b bg-transparent placeholder:text-[#969086] text-[18px] outline-none py-1 ${
                    errors.phone ? "border-red" : "border-gray-300"
                  } `}
                />
                {errors.phone && (
                  <p className="text-red text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Special requirements */}
              <div>
                <label className="block font-medium text-[30px] mb-[20px] font2">
                  Special requirements
                </label>
                <textarea
                  {...register("specialRequests")}
                  placeholder="Table by the window, please"
                  className="w-full  border-b bg-transparent placeholder:text-[#969086] text-[18px] py-1 outline-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#ABA3D2] text-black uppercase font-light h-[70px] text-[30px] px-6 md:w-[345px] max-w-full"
              >
                {loading ? 'Loading...' : 'Book'}
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SelectDateSection;