import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function FeedbackForm() {
  const form = useRef();
  const [clicked, setClicked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // generate a five digit number for the contact_number variable

    emailjs
      .sendForm(
        "service_k16cvro",
        "template_f9xo4zo",
        form.current,
        "64h9KO3hkbHfqHIHP"
      )
      .then(
        (result) => {
            setClicked(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {clicked ? (
        <h1 className="text-white text-center text-2xl lg:text-3xl mt-6 py-4 ">
          {" "}
          Thank you for your feedback!
        </h1>
      ) : (
        <>
          <h1 className="text-white text-center text-2xl lg:text-3xl mt-6 py-4 ">
            Please Leave Your Feedback Below!{" "}
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <label
              htmlFor="name"
              className="block mb-1 text-sm lg:text-base font-medium text-white"
            >
              Name
            </label>
            <div className="pb-2">
              <input
                type="text"
                name="user_name"
                id="name"
                className="block w-full rounded-md border-gray-300 lg:h-9 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter name here..."
              />
            </div>

            <label
              htmlFor="email"
              className="block text-sm lg:text-base mt-2 mb-1 font-medium text-white"
            >
              Email
            </label>
            <div className=" flex flex-col">
              <input
                type="text"
                name="user_email"
                id="email"
                className="block w-full rounded-md lg:h-9 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter email address..."
              />
              <label
                htmlFor="message"
                className="block text-sm mt-4 lg:text-base font-medium text-white"
              >
                Add your feedback
              </label>
              <div className="mt-1">
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="Type your message here..."
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="inline-flex mt-2 self-center items-center rounded-md border border-transparent bg-green-200 px-3 py-2 text-sm font-medium leading-4 text-green-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>

            {/*<input type="submit" value="Send" /> */}
          </form>
        </>
      )}
    </>
  );
}
