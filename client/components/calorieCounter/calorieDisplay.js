import React, { useState } from "react";

export default function CalorieDisplay({info, age, weight, height, activeRate, goal}) {

    
    let netWeight = 13.75 * Math.round(weight.weight);
        let netHeight = 5.003 * Math.round(height.height);
        let netage = 6.75 * Math.round(age.age);
        let calories = 66.5 + netWeight + netHeight - netage;
        let bmr = calories * activeRate.activeRate;
        let targetCalories = Math.round(bmr * goal.goal);

  return (
    <>
      <div className="flex justify-center py-2 lg:py-4 text-3xl text-center lg:text-4xl text-white">
        <h1> Here are your daily targets! </h1>
      </div>
      <div className="flex-col justify-center relative h-1/2 w-full py-16 lg:py-40 bg-gray-100 shadow-lg outline outline-1">
        <div className="flex justify-center">
          <div className="flex-row justify-center">
            <h2 className="text-slate-400 text-sm lg:text-xl text-center">
              {" "}
              {info.gender}{" "} {activeRate.activeRate} bmr {bmr}
            </h2>
            <h2 className="text-slate-400 text-sm lg:text-xl text-center">
                {age.age} {height.height} goal {goal.goal}
            </h2>
            <h2 className="text-slate-400 text-sm lg:text-xl text-center">
                {weight.weight} target {targetCalories}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}