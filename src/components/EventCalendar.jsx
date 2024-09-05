'use client'

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const events = [
  {
    id: 1,
    title: "test1",
    time: "12:00 PM - 2:00 PM",
    description: "Testing",
  },
  {
    id: 2,
    title: "test2",
    time: "12:00 PM - 2:00 PM",
    description: "Testing",
  },
  {
    id: 3,
    title: "test3",
    time: "12:00 PM - 2:00 PM",
    description: "Testing",
  },
];
const EventCalendar = () => {
    const [value, onChange] = useState(new Date());
    return (
      <div className="bg-white p-4 rounded gap-4">
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold my-4">Events</h1>
          <Image src="/moreDark.png" alt="more dark" width={20} height={20} />
        </div>
        <div className="flex flex-col gap-4 ">
          {events.map((event) => (
            <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blue-300 even:border-t-purple-400" key={event.id}>
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-gray-200 text-xs">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-xs">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default EventCalendar;