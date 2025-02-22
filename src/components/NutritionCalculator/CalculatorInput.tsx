import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CalculationResult {
  bmi: number;
  category: string;
  dailyCalories: number;
  protein: number;
  carbs: number;
  fats: number;
}

const CalculatorInput = ({
  onCalculate,
}: {
  onCalculate: (result: CalculationResult) => void;
}) => {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "male",
    activityLevel: "moderate",
  });

  const calculateNutrition = () => {
    const age = Number(formData.age);
    const weight = Number(formData.weight);
    const height = Number(formData.height);
    const isMale = formData.gender === "male";

    // BMI Calculation
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // BMI Category
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    // Base Metabolic Rate (BMR) using Mifflin-St Jeor Equation
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr = isMale ? bmr + 5 : bmr - 161;

    // Activity Multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      very: 1.725,
      extra: 1.9,
    };

    const dailyCalories =
      bmr *
      activityMultipliers[
        formData.activityLevel as keyof typeof activityMultipliers
      ];

    // Macronutrient Distribution
    const protein = (dailyCalories * 0.25) / 4; // 25% of calories from protein (4 calories per gram)
    const carbs = (dailyCalories * 0.55) / 4; // 55% of calories from carbs (4 calories per gram)
    const fats = (dailyCalories * 0.2) / 9; // 20% of calories from fat (9 calories per gram)

    onCalculate({
      bmi: Number(bmi.toFixed(1)),
      category,
      dailyCalories: Math.round(dailyCalories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fats: Math.round(fats),
    });
  };

  return (
    <Card
      className="w-full p-6 relative overflow-hidden"
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
            "linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05))",
          opacity: 0.5,
        }}
      />
      <div className="relative z-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Calculate Your Nutrition Needs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={formData.age}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, age: e.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                value={formData.gender}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, gender: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Enter your weight"
                value={formData.weight}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, weight: e.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="Enter your height"
                value={formData.height}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, height: e.target.value }))
                }
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="activity-level">Activity Level</Label>
              <Select
                value={formData.activityLevel}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, activityLevel: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">
                    Sedentary (little or no exercise)
                  </SelectItem>
                  <SelectItem value="light">
                    Light Active (light exercise 1-3 days/week)
                  </SelectItem>
                  <SelectItem value="moderate">
                    Moderate Active (moderate exercise 3-5 days/week)
                  </SelectItem>
                  <SelectItem value="very">
                    Very Active (hard exercise 6-7 days/week)
                  </SelectItem>
                  <SelectItem value="extra">
                    Extra Active (very hard exercise & physical job)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={calculateNutrition}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
            size="lg"
          >
            Calculate Nutrition Needs
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CalculatorInput;
