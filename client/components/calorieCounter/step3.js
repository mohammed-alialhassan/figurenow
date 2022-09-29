import React, { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

export default function Step3() {
  return (
    <>
      <div className="flex justify-center lg:py-2 text-3xl text-center lg:text-4xl text-white">
        <h1> Please enter your weight and height down below </h1>
      </div>
      <div className="flex-col justify-center relative h-1/2 w-full py-16 lg:py-40 bg-gray-100 shadow-lg outline outline-1">
        <div className="flex justify-center">
          <div className="flex justify-between gap-x-2 w-11/12 2xl:w-9/12 py-4">
            <div className="flex-col w-5/12 lg:w-5/12 justify-center">
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-gray-700"
              >
                Weight
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="weight"
                  name="weight"
                  id="weight"
                  className="block w-full rounded-md border-red-300 pr-10 text-black placeholder-gray-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="In lbs please!"
                  aria-invalid="true"
                  aria-describedby="weight-error"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <p className="mt-2 text-sm text-red-600" id="weight-error">
                You must enter a valid weight.
              </p>
            </div>

            <div className="flex-row w-6/12 justify-center">
              <label
                htmlFor="height"
                className="block text-sm font-medium text-gray-700"
              >
                Height
              </label>
              <div className="flex gap-x-2 justify-center">
                <div className="relative mt-1  rounded-md shadow-sm">
                <input
                  type="height"
                  name="height"
                  id="height"
                  className="block w-full rounded-md border-red-300 pr-10 text-black placeholder-gray-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Never find"
                  aria-invalid="true"
                  aria-describedby="height-error"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="height"
                  name="height"
                  id="height"
                  className="block w-full rounded-md border-red-300 pr-10 text-black placeholder-gray-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Big botty fish"
                  aria-invalid="true"
                  aria-describedby="height-error"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
              </div>
              
              <p className="mt-2 text-sm text-red-600" id="weight-error">
                Your password must be less than 4 characters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
