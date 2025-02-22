import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface ProfileData {
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  schoolName: string;
  grade: string;
  studentId: string;
}

interface ProfileSectionProps {
  isFirstTime?: boolean;
  profileData?: ProfileData;
  onSave?: (data: ProfileData) => void;
}

const defaultProfileData: ProfileData = {
  age: 12,
  weight: 45,
  height: 150,
  activityLevel: "moderate",
  schoolName: "",
  grade: "",
  studentId: "",
};

const ProfileSection: React.FC<ProfileSectionProps> = ({
  isFirstTime = true,
  profileData = defaultProfileData,
  onSave = () => {},
}) => {
  const [editMode, setEditMode] = useState(isFirstTime);
  const [formData, setFormData] = useState<ProfileData>(profileData);

  const handleInputChange = (
    field: keyof ProfileData,
    value: string | number,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "activityLevel" ? value : Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setEditMode(false);
  };

  return (
    <Card className="w-full bg-white p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Profile Information
        </h2>
        {!isFirstTime && !editMode && (
          <Button
            variant="outline"
            onClick={() => setEditMode(true)}
            className="text-[#2196F3] border-[#2196F3] hover:bg-[#2196F3] hover:text-white"
          >
            Edit Profile
          </Button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="schoolName">School Name</Label>
            <Input
              id="schoolName"
              type="text"
              value={formData.schoolName}
              onChange={(e) => handleInputChange("schoolName", e.target.value)}
              disabled={!editMode}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="grade">Grade</Label>
            <Select
              disabled={!editMode}
              value={formData.grade}
              onValueChange={(value) => handleInputChange("grade", value)}
            >
              <SelectTrigger id="grade">
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Grade 7</SelectItem>
                <SelectItem value="8">Grade 8</SelectItem>
                <SelectItem value="9">Grade 9</SelectItem>
                <SelectItem value="10">Grade 10</SelectItem>
                <SelectItem value="11">Grade 11</SelectItem>
                <SelectItem value="12">Grade 12</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="studentId">Student ID</Label>
            <Input
              id="studentId"
              type="text"
              value={formData.studentId}
              onChange={(e) => handleInputChange("studentId", e.target.value)}
              disabled={!editMode}
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              disabled={!editMode}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              value={formData.weight}
              onChange={(e) => handleInputChange("weight", e.target.value)}
              disabled={!editMode}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              value={formData.height}
              onChange={(e) => handleInputChange("height", e.target.value)}
              disabled={!editMode}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="activity-level">Activity Level</Label>
            <Select
              disabled={!editMode}
              value={formData.activityLevel}
              onValueChange={(value) =>
                handleInputChange("activityLevel", value)
              }
            >
              <SelectTrigger id="activity-level">
                <SelectValue placeholder="Select activity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary</SelectItem>
                <SelectItem value="light">Light Active</SelectItem>
                <SelectItem value="moderate">Moderate Active</SelectItem>
                <SelectItem value="very">Very Active</SelectItem>
                <SelectItem value="extra">Extra Active</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {editMode && (
          <div className="flex justify-end space-x-2">
            {!isFirstTime && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setFormData(profileData);
                  setEditMode(false);
                }}
              >
                Cancel
              </Button>
            )}
            <Button
              type="submit"
              className="bg-[#2196F3] hover:bg-[#1976D2] text-white"
            >
              Save Profile
            </Button>
          </div>
        )}
      </form>
    </Card>
  );
};

export default ProfileSection;
