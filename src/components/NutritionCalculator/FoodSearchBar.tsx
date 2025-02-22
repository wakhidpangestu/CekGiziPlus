import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface FoodSearchBarProps {
  onFoodSelect?: (food: FoodItem) => void;
  searchResults?: FoodItem[];
  isLoading?: boolean;
}

const defaultSearchResults: FoodItem[] = [
  {
    id: "1",
    name: "Banana",
    calories: 105,
    protein: 1.3,
    carbs: 27,
    fat: 0.3,
  },
  {
    id: "2",
    name: "Chicken Breast",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
  },
  {
    id: "3",
    name: "Brown Rice",
    calories: 216,
    protein: 5,
    carbs: 45,
    fat: 1.8,
  },
];

const FoodSearchBar: React.FC<FoodSearchBarProps> = ({
  onFoodSelect = () => {},
  searchResults = defaultSearchResults,
  isLoading = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowResults(true);
  };

  const handleFoodSelect = (food: FoodItem) => {
    onFoodSelect(food);
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="relative">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search for food items..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 w-full"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
          <Button
            variant="default"
            className="bg-[#2196F3] hover:bg-[#1976D2] text-white"
          >
            Add Custom
          </Button>
        </div>

        {showResults && (
          <Card className="absolute z-10 w-full mt-1 max-h-60 overflow-y-auto bg-white border rounded-md shadow-lg">
            {isLoading ? (
              <div className="p-4 text-center text-gray-500">Loading...</div>
            ) : searchResults.length > 0 ? (
              <ul className="py-2">
                {searchResults.map((food) => (
                  <li
                    key={food.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleFoodSelect(food)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{food.name}</span>
                      <span className="text-sm text-gray-500">
                        {food.calories} kcal
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-center text-gray-500">
                No results found
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

export default FoodSearchBar;
