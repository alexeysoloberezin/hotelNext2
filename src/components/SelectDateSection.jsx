'use client'

import React, {useState} from 'react';
import {DayPicker} from "react-day-picker";
import "react-day-picker/style.css";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import clsx from "clsx";
import Animation from "@/components/Animation";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  eventType: z.string().min(1, "Please select an event type"),
  email: z
    .string()
    .min(1, "Email is required"),
});


function SelectDateSection() {
  const [selected, setSelected] = useState();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
    watch
  } = useForm({
    resolver: zodResolver(schema),
  });
  const eventType = watch("eventType");

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const message = `Name: ${data.name}\nEmail: ${data.email}\nType: ${data.eventType}\nDates: ${formatSelectedDate()}`;
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

  const [toggle, setToggle] = useState(false)
  const formatSelectedDate = () => {
    if (!selected?.from || !selected?.to) return "";
    const from = selected.from.toLocaleDateString();
    const to = selected.to.toLocaleDateString();
    return `${from} - ${to}`;
  };

  return (
    <div className={"bg-[#FAF5FF] py-[100px]"}>
      <div className="container">
        <Animation>
          <h4
            className={"mb-[25px] font-croisan text-black text-center sm:text-[50px] !leading-[1.2] text-[40px] "}>Book
            Here</h4>
        </Animation>
        <div className={"xl:grid flex flex-col items-center xl:grid-cols-[520px_1fr] gap-[30px]"}>
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
              className="flex flex-col md:gap-[40px] gap-[12px]  relative"
            >
              {showSuccess && (
                <div
                  className={"absolute top-0 left-0 p-[30px] w-full h-full bg-[#FAF5FF] bg-opacity-50 backdrop-blur-[2px]"}>
                  <div
                    className={"bg-[#fff] rounded-[20px] w-full h-full flex flex-col items-center justify-center text-center"}>
                    <h3 className={"font2 text-[40px] text-[#ABA3D2]"}>Successfully sent</h3>
                    <button onClick={() => setShowSuccess(false)}
                            className={"bg-[#ABA3D2] text-black font2  h-[50px] text-[22px] mt-[15px] px-6 w-fit max-w-full"}>Close
                    </button>
                  </div>
                </div>
              )}

              {/* Date */}


              {/* Name */}
              <div className={'bg-[#fff] p-[10px] rounded-[8px]'}>
                <label className="block  md:text-[30px] text-[20px] mb-[15px] uppercase">
                  NAME
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="ENTER YOUR NAME"
                  className={`w-full border-t bg-transparent placeholder:text-[#969086] md:text-[25px] text-[20px] outline-none py-1 ${
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
              <div className={'bg-[#fff] p-[10px] rounded-[8px]'}>
                <label className="block  md:text-[30px] text-[20px] mb-[15px] uppercase">EMAIL</label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="EXAMPLE@GMAIL.COM"
                  className={`w-full border-t bg-transparent placeholder:text-[#969086] md:text-[25px] text-[20px] outline-none py-1 ${
                    errors.email ? "border-red" : "border-gray-300"
                  } `}
                />
                {errors.email && (
                  <p className="text-red text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className={'bg-[#fff] p-[10px] rounded-[8px]'}>
                <label className="block  md:text-[30px] text-[20px] mb-[15px] uppercase">Date</label>
                <input
                  type="text"
                  value={
                    selected
                      ? `${selected?.from?.toLocaleDateString()} - ${selected?.to?.toLocaleDateString()}`
                      : ""
                  }
                  readOnly
                  className="w-full border-t bg-transparent md:text-[25px] text-[20px] text-gray py-1 outline-none"
                />
              </div>

              <div className={'bg-[#fff] p-[10px] rounded-[8px]'}>
                <label onClick={(e) => setToggle(!toggle)}
                       className="block  md:text-[30px] flex justify-between pr-[5px] cursor-pointer items-center text-[20px] mb-[15px] uppercase">EVENT
                  TYPE
                  <svg style={{transform: toggle ? 'rotate(180deg)' : ''}}  width="16" height="10" viewBox="0 0 16 10"
                       fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.9999 0.607578C15.9999 0.464153 15.9462 0.317376 15.8419 0.207306C15.6334 -0.0128355 15.2922 -0.0128355 15.0837 0.207306L7.94701 7.74212L0.914574 0.317375C0.706064 0.0972347 0.364868 0.0972347 0.156359 0.317375C-0.0521507 0.537517 -0.0521507 0.897747 0.156359 1.11789L7.5679 8.94622C7.77641 9.16636 8.11761 9.16636 8.32612 8.94622L15.8419 1.01115C15.9493 0.897747 15.9999 0.754338 15.9999 0.607578Z"
                      fill="black"/>
                  </svg>
                </label>
                <div className={clsx(`space-y-[10px] border-t pt-[10px] ${toggle ? 'hidden' : ''}`)}>
                  <div className={"myRadio"}>
                    <input
                      type="radio"
                      id={'item_1'}
                      value="WEDDINGS"
                      {...register("eventType", {required: "Please select an event type"})}
                    />
                    <label htmlFor="item_1">WEDDINGS</label>
                  </div>
                  <div className={"myRadio"}>
                    <input
                      type="radio"
                      id={'item_2'}
                      value="CORPORATE EVENTS"
                      {...register("eventType")}
                    />
                    <label htmlFor="item_2">CORPORATE EVENTS</label>
                  </div>
                  <div className={"myRadio"}>
                    <input
                      type="radio"
                      id={'item_3'}
                      value="BIRTHDAYS"
                      {...register("eventType")}
                    />
                    <label htmlFor="item_3">BIRTHDAYS</label>
                  </div>
                  {errors.eventType && (
                    <p className="text-red text-sm mt-1">
                      {errors.eventType.message}
                    </p>
                  )}
                </div>
                {toggle && (
                  <div className={'border-t md:text-[25px] text-[20px] pt-[10px] opacity-[.6]'}>{eventType}</div>
                )}

              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#ABA3D2] text-[#5747A6] border border-[#5747A6] rounded-[50px] uppercase font-bold h-[70px] text-[30px] px-6 md:w-[345px] max-w-full"
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