import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface NutrientProgress {
  name: string;
  current: number;
  goal: number;
  unit: string;
  color: string;
}

interface NutritionPanelProps {
  dailyCalories?: number;
  nutrients?: NutrientProgress[];
}

const NutritionPanel: React.FC<NutritionPanelProps> = ({
  dailyCalories = 0,
  nutrients = [
    {
      name: "Protein",
      current: 0,
      goal: 0,
      unit: "g",
      color: "bg-blue-500",
    },
    {
      name: "Carbs",
      current: 0,
      goal: 0,
      unit: "g",
      color: "bg-green-500",
    },
    {
      name: "Fat",
      current: 0,
      goal: 0,
      unit: "g",
      color: "bg-yellow-500",
    },
    {
      name: "Fiber",
      current: 0,
      goal: 0,
      unit: "g",
      color: "bg-orange-500",
    },
    {
      name: "Water",
      current: 0,
      goal: 0,
      unit: "L",
      color: "bg-blue-400",
    },
  ],
}) => {
  return (
    <Card
      className="w-full h-full p-6 rounded-lg relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.1)",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(76, 175, 80, 0.05))",
          opacity: 0.5,
        }}
      />
      <div className="relative z-10">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Calculator Gizi
            </h2>
            <div className="mt-2">
              <span className="text-3xl font-bold text-[#2196F3]">
                {dailyCalories.toLocaleString()}
              </span>
              <span className="text-gray-500 ml-2">kcal</span>
            </div>
          </div>

          <div className="space-y-4">
            {nutrients.map((nutrient, index) => {
              const percentage = (nutrient.current / nutrient.goal) * 100;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">
                      {nutrient.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {nutrient.current} / {nutrient.goal} {nutrient.unit}
                    </span>
                  </div>
                  <Progress
                    value={percentage}
                    className="h-2"
                    indicatorClassName={nutrient.color}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Daily Goals
            </h3>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Calories Target</span>
                <span>{dailyCalories.toLocaleString()} kcal</span>
              </div>
              <div className="flex justify-between">
                <span>Protein Target</span>
                <span>60g</span>
              </div>
              <div className="flex justify-between">
                <span>Carbs Target</span>
                <span>300g</span>
              </div>
              <div className="flex justify-between">
                <span>Fat Target</span>
                <span>65g</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NutritionPanel;
