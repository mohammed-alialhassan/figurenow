import React, { useState } from "react";
import Image from 'next/future/image';

export default function Step5({ settingGoal }) {
  let loseWeight = 0.8;
  let buildMuscle = 1.1;
  let transform = 0.95;

  return (
    <>
      <div className="flex justify-center py-2 lg:py-4 text-3xl text-center lg:text-4xl text-white">
        <h1> What is your main goal? </h1>
      </div>
      <div className="w-full bg-gray-100">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-r-full"
          style={{ width: "80%" }}
        >
          {" "}
          80%
        </div>
      </div>
      <div className="flex-col justify-center relative h-1/2 w-full py-16 lg:py-36 bg-gray-100 shadow-lg outline outline-1">
        <div className="flex justify-between gap-x-4 lg:gap-x-2 w-12/12 2xl:w-10/12 py-2 px-5  lg:px-32 lg:pr-36 2xl:pr-2">
          <h1 className="text-lg lg:text-3xl"> Lose weight </h1>
          <h1 className="text-lg lg:text-3xl"> Build muscle </h1>
          <h1 className="text-lg lg:text-3xl"> Transform! </h1>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-between gap-x-4 w-11/12 2xl:w-10/12 py-4">
            <div className="flex-col justify-center rounded border border-transparent bg-green-200 px-3 py-4 lg:px-12 lg:py-4 text-sm lg:text-base font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
              <Image
                src="https://images.unsplash.com/photo-1638183395699-2c0db5b6afbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className=""
                alt=""
                onClick={() => settingGoal(loseWeight)}
                width={150}
                height={128}
              />
            </div>
            <div className="inline-flex items-center rounded border border-transparent bg-green-200 px-3 py-4 lg:px-12 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
              <Image
                src="https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className=""
                alt=""
                onClick={() => settingGoal(buildMuscle)}
                width={150}
                height={128}
              />
            </div>
            <div className="inline-flex items-center rounded border border-transparent bg-green-200 px-3 py-4 lg:px-12 lg:py-4 text-base font-medium text-green-700 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
              <Image
                src="https://images.unsplash.com/photo-1575052814074-c05122e0a17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className=""
                alt=""
                onClick={() => settingGoal(transform)}
                width={150}
                height={128}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
