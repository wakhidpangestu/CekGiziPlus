import React, { useState } from "react";
import CalculatorInput from "./NutritionCalculator/CalculatorInput";
import NutritionPanel from "./NutritionCalculator/NutritionPanel";

interface HomeProps {
  isFirstTimeUser?: boolean;
}

const Home: React.FC<HomeProps> = () => {
  const [nutritionData, setNutritionData] = useState({
    dailyCalories: 2000,
    nutrients: [
      {
        name: "Protein",
        current: 0,
        goal: 60,
        unit: "g",
        color: "bg-blue-500",
      },
      {
        name: "Carbs",
        current: 0,
        goal: 300,
        unit: "g",
        color: "bg-green-500",
      },
      {
        name: "Fat",
        current: 0,
        goal: 65,
        unit: "g",
        color: "bg-yellow-500",
      },
    ],
  });

  const handleCalculation = (result: any) => {
    setNutritionData({
      dailyCalories: result.dailyCalories,
      nutrients: [
        {
          name: "Protein",
          current: result.protein,
          goal: result.protein,
          unit: "g",
          color: "bg-blue-500",
        },
        {
          name: "Carbs",
          current: result.carbs,
          goal: result.carbs,
          unit: "g",
          color: "bg-green-500",
        },
        {
          name: "Fat",
          current: result.fats,
          goal: result.fats,
          unit: "g",
          color: "bg-yellow-500",
        },
      ],
    });
  };

  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <CalculatorInput onCalculate={handleCalculation} />
          </div>
          <div className="lg:col-span-1">
            <NutritionPanel
              dailyCalories={nutritionData.dailyCalories}
              nutrients={nutritionData.nutrients}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
