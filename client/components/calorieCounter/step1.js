import React from "react";

export default function Step1({ setGender }) {

  const male = "Male";
  const female = "Female";

  return (
    <>
      <div className="flex justify-center py-2 lg:py-4 text-3xl text-center lg:text-4xl text-white">
        <h1> What gender were you born as? </h1>
      </div>
      <div className="w-full bg-gray-200">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-r-full"
          style={{ width: "4%" }}
        >
          {" "}
          0%
        </div>
      </div>
      <div className="flex-col justify-center relative h-1/2 w-full py-16 lg:py-40 bg-gray-100 shadow-lg outline outline-1">
        <div className="flex justify-center">
          <div className="flex justify-between gap-x-4 w-9/12 2xl:w-8/12 py-4">
            <button
              type="button"
              onClick={() => setGender(male)}
              className="inline-flex items-center rounded border border-transparent bg-green-200 px-12 py-3 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 lg:hover:bg-green-400 focus:outline-none focus:bg-amber-400 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            >
              Male
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded border border-transparent bg-green-200 px-12 py-3 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 lg:hover:bg-green-400 focus:outline-none focus:ring-2 focus:bg-amber-400 focus:ring-amber-400 focus:ring-offset-2"
              onClick={() => setGender(female)}
            >
              Female
            </button>
          </div>
        </div>
      </div>
    </>
  );
}