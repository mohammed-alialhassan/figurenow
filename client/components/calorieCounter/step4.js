import React, { useState } from "react";

export default function step4({ settingActiveRate }) {
  let stationary = 1.075;
  let sedentary = 1.2;
  let lightlyActive = 1.375;
  let moderatelyActive = 1.55;
  let veryActive = 1.725;
  let extremelyActive = 1.9;

  return (
    <>
      <div className="flex justify-center py-2 lg:py-4 text-3xl text-center lg:text-4xl text-white">
        <h1> How active is your daily life? </h1>
      </div>
      <div className="w-full bg-gray-200">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-r-full"
          style={{ width: "60%" }}
        >
          {" "}
          60%
        </div>
      </div>
      <div className="flex-col justify-center relative h-1/2 w-full py-8 lg:py-28 bg-gray-100 shadow-lg outline outline-1">
        <div className="flex justify-around">
          <div className="flex justify-between gap-x-4 w-full px-3 lg:px-0 lg:w-9/12 pt-4">
            <button
              type="button"
              className="inline-flex items-center rounded border border-transparent bg-green-200 px-5 py-2 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-green-400 focus:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              onClick={() => settingActiveRate(stationary)}
            >
              Stationary
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded border border-transparent bg-green-200 px-5 py-2 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-green-400 focus:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              onClick={() => settingActiveRate(sedentary)}
            >
              Sedentary
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded border border-transparent bg-green-200 px-5 py-2 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-green-400 focus:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              onClick={() => settingActiveRate(lightlyActive)}
            >
              Lightly
            </button>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex justify-between gap-x-4 w-full px-3 lg:px-0 lg:w-9/12 pt-12">
            <button
              type="button"
              className="inline-flex items-center rounded border border-transparent bg-green-200 px-5 py-2 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-green-400 focus:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              onClick={() => settingActiveRate(moderatelyActive)}
            >
              Moderately
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded border border-transparent bg-green-200 px-8 py-2 lg:px-28 lg:py-4 text-base font-medium text-green-700 hover:bg-green-400 focus:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              onClick={() => settingActiveRate(veryActive)}
            >
              Very
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded border border-transparent bg-green-200 px-2 py-2 lg:px-20 lg:py-4 text-base font-medium text-green-700 hover:bg-green-400 focus:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              onClick={() => settingActiveRate(extremelyActive)}
            >
              Extremely
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
