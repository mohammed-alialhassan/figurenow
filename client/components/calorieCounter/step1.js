import React, { useState } from "react";


export default function Step1({ stepCounter, setStepCounter }) {

    return (
        <>
            <div className="flex justify-center lg:py-2 text-3xl text-center lg:text-4xl text-white">
            <h1> What gender were you born as? </h1>
          </div>
          <div className="flex-col justify-center relative h-1/2 w-full py-16 lg:py-40 bg-gray-100 shadow-lg outline outline-1">
            <div className="flex justify-center">
              <div className="flex justify-between gap-x-4 w-9/12 2xl:w-8/12 py-4">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-green-200 px-12 py-3 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  Male
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-green-200 px-12 py-3 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  Female
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-x-3 justify-center lg:gap-x-0.5 w-8/12 lg:w-4/12 rounded bg-inherit">
              <button
                type="button"
                className="inline-flex items-center rounded border border-transparent bg-green-100 px-6 py-2 lg:px-10 lg:py-3 text-xs font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              >
                Back
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded border border-transparent bg-green-100 px-6 py-2 lg:px-10 lg:py-3 text-xs font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              >
                Next
              </button>
            </div>
          </div>
        </>
    )
}