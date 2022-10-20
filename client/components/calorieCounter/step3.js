import React, { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

export default function Step3({ setWeight, settingHeight }) {
  const [weight, settingWeight] = useState(0);
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);

  return (
    <>
      <div className="flex justify-center py-2 lg:py-4 text-3xl text-center lg:text-4xl text-white">
        <h1> Please enter your weight down below </h1>
      </div>
      <div className="w-full bg-gray-200">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-r-full"
          style={{ width: "40%" }} 
        >
          {" "}
          40%
        </div>
      </div>
      <div className="flex-col justify-center relative h-1/2 w-full py-16 lg:py-40 bg-gray-100 shadow-lg outline outline-1">
        <div className="flex justify-center">
          <div className="flex justify-between gap-x-2 w-11/12 2xl:w-9/12 py-4">
            <div className="flex-col w-5/12 lg:w-5/12 justify-center">
              <label
                htmlFor="weight"
                className="block text-lg font-medium text-gray-700"
              >
                Weight
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="weight"
                  name="weight"
                  id="weight"
                  onChange={(event) => {
                    settingWeight(event.target.value);
                    setWeight(event.target.value); 
                  }}
                  className="block w-full py-1 lg:py-3 rounded-md border-red-300 pr-10 text-black placeholder-gray-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Pounds (lbs)"
                  aria-invalid="true"
                  aria-describedby="weight-error"
                />
              </div>
            </div>

            <div className="flex-row w-6/12 lg:w-5/12 justify-center">
              <label
                htmlFor="height"
                className="block text-lg font-medium text-gray-700"
              >
                Height
              </label>
              <div className="flex gap-x-2 lg:w-10/12 justify-between">
                <div className="relative mt-1  rounded-md shadow-sm">
                  <input
                    type="ft"
                    name="ft"
                    id="ft"
                    onChange={(event) => setFeet(event.target.value)}
                    className="block w-full py-1 lg:py-3  rounded-md border-red-300  text-black placeholder-gray-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    placeholder="Feet (ft)"
                    aria-invalid="true"
                    aria-describedby="ft-error"
                  />
                </div>

                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="inch"
                    name="inch"
                    id="inch"
                    onChange={(event) => {
                      setInches(event.target.value);
                      settingHeight(feet, inches);
                    }}
                    className="block w-full py-1 lg:py-3  rounded-md border-red-300  text-black placeholder-gray-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    placeholder="Inches (in)"
                    aria-invalid="true"
                    aria-describedby="inch-error"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
