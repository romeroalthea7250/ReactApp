import React, { useState } from "react";
import Calendar from "react-calendar";
import { CalendarIcon } from "@heroicons/react/solid";
import "react-calendar/dist/Calendar.css";

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [notesByDate, setNotesByDate] = useState({});
  const [note, setNote] = useState("");

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setNote(notesByDate[newDate.toDateString()] || ""); // Load existing note or empty
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const saveNote = () => {
    setNotesByDate({ ...notesByDate, [date.toDateString()]: note });
  };

  const prevMonth = () => {
    const currentDate = new Date(date);
    currentDate.setMonth(currentDate.getMonth() - 1);
    setDate(currentDate);
  };

  const nextMonth = () => {
    const currentDate = new Date(date);
    currentDate.setMonth(currentDate.getMonth() + 1);
    setDate(currentDate);
  };

  return (
    <section id="calendar" className="bg-gray-100 py-16">
      <div className="container mx-auto flex justify-center items-start gap-12 px-4">

        {/* Calendar Section */}
        <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md transition-all duration-300">
          <div className="flex justify-center mb-4">
            <CalendarIcon className="w-12 h-12 text-gray-700 transform hover:scale-110 transition-all duration-300" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            My Calendar
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Track my schedule here.
          </p>
          <div className="bg-gray-200 p-4 rounded-lg shadow-sm">
            <Calendar
              onChange={handleDateChange}
              value={date}
              view="month"
              className="rounded-lg transition-all duration-300 ease-in-out"
              tileClassName={({ date }) => {
                return notesByDate[date.toDateString()]
                  ? "bg-gray-400 text-white rounded-full transform hover:scale-110 transition-all duration-300"
                  : null;
              }}
            />
          </div>
          <div className="mt-6 text-center text-gray-600">
            <span className="font-semibold">Selected Date:</span> {date.toDateString()}
          </div>
          <div className="mt-8 flex justify-center gap-6">
            <button
              onClick={prevMonth}
              className="text-white bg-gray-700 py-2 px-6 rounded-full hover:bg-gray-500 transition-all duration-300"
            >
              Previous
            </button>
            <button
              onClick={nextMonth}
              className="text-white bg-gray-700 py-2 px-6 rounded-full hover:bg-gray-500 transition-all duration-300"
            >
              Next
            </button>
          </div>
        </div>

        {/* Notes Section */}
        <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Notes for {date.toDateString()}
          </h2>
          <textarea
            value={note}
            onChange={handleNoteChange}
            placeholder="Write your notes here..."
            className="w-full h-40 p-4 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:ring-gray-400 focus:border-gray-400 mb-4 transition-all duration-300"
          ></textarea>
          <button
            onClick={saveNote}
            className="w-full text-white bg-gray-700 py-2 px-6 rounded-lg hover:bg-gray-500 transition-all duration-300"
          >
            Save Note
          </button>
          <p className="text-gray-700 mt-4 text-center">
            {note || "No notes added yet."}
          </p>
        </div>
      </div>
    </section>
  );
}
