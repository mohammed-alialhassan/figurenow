import React, { useState } from "react";


export default function Step2() {

    return (
        <>
            <div className="flex justify-center lg:py-2 text-3xl text-center lg:text-4xl text-white">
            <h1> What age group best represents you? </h1>
          </div>
          <div className="flex-col justify-center relative h-1/2 w-full py-8 lg:py-28 bg-gray-100 shadow-lg outline outline-1">
            <div className="flex justify-around">
            <div className="flex justify-between gap-x-4 w-full px-3 lg:px-0 lg:w-9/12 pt-4">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-green-200 px-6 py-2 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  11 - 20
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-green-200 px-6 py-2 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  21 - 30
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-green-200 px-6 py-2 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  31 - 40
                </button>
              </div>
            </div>
            <div className="flex justify-around">
            <div className="flex justify-between gap-x-4 w-full px-3 lg:px-0 lg:w-9/12 pt-12">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-green-200 px-6 py-2 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  41 - 50
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-green-200 px-6 py-2 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  51 - 60
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-green-200 px-6 py-2 lg:px-24 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  61 - 70
                </button>
              </div>
            </div>
          </div>
        </>
    )
}