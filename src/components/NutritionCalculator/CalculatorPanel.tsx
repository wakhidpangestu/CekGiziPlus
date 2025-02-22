import React from "react";
import FoodSearchBar from "./FoodSearchBar";
import RecentItemsList from "./RecentItemsList";
import { Card } from "@/components/ui/card";

interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface DailyEntry {
  id: string;
  name: string;
  calories: number;
  servingSize: string;
  timestamp: string;
}

interface CalculatorPanelProps {
  onFoodSelect?: (food: FoodItem) => void;
  onRecentItemAdd?: (item: DailyEntry) => void;
  searchResults?: FoodItem[];
  recentItems?: DailyEntry[];
  isLoading?: boolean;
}

const CalculatorPanel: React.FC<CalculatorPanelProps> = ({
  onFoodSelect = () => {},
  onRecentItemAdd = () => {},
  searchResults = [],
  recentItems = [],
  isLoading = false,
}) => {
  return (
    <Card className="w-full h-full bg-white p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Food Calculator
        </h2>
        <FoodSearchBar
          onFoodSelect={onFoodSelect}
          searchResults={searchResults}
          isLoading={isLoading}
        />
      </div>

      <div className="mt-6">
        <RecentItemsList items={recentItems} onAddItem={onRecentItemAdd} />
      </div>
    </Card>
  );
};

export default CalculatorPanel;
