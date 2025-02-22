import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface FoodItem {
  id: string;
  name: string;
  calories: number;
  servingSize: string;
  timestamp: string;
}

interface RecentItemsListProps {
  items?: FoodItem[];
  onAddItem?: (item: FoodItem) => void;
}

const RecentItemsList = ({
  items = [
    {
      id: "1",
      name: "Grilled Chicken Breast",
      calories: 165,
      servingSize: "100g",
      timestamp: "2024-03-21T10:30:00Z",
    },
    {
      id: "2",
      name: "Brown Rice",
      calories: 111,
      servingSize: "100g",
      timestamp: "2024-03-21T10:25:00Z",
    },
    {
      id: "3",
      name: "Broccoli",
      calories: 55,
      servingSize: "100g",
      timestamp: "2024-03-21T10:20:00Z",
    },
  ],
  onAddItem = () => {},
}: RecentItemsListProps) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3 text-gray-900">Recent Items</h3>
      <ScrollArea className="h-[200px] w-full rounded-md border">
        <div className="p-4 space-y-4">
          {items.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex justify-between items-center"
            >
              <div>
                <h4 className="font-medium text-gray-900">{item.name}</h4>
                <div className="text-sm text-gray-500">
                  {item.calories} kcal | {item.servingSize}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onAddItem(item)}
                className="hover:bg-blue-50"
              >
                <Plus className="h-4 w-4 text-blue-600" />
              </Button>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default RecentItemsList;
