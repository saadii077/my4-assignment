import React from "react";
import Card from "./components/Card";

const page = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 via-gray-100 to-blue-100 min-h-screen">
      <h1 className="text-center text-3xl  font-extrabold mt-8 mb-10 text-gray-800">
        STUDENT IDENTIFICATION CARDS
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-6">
        <Card Name="SAAD" Rollno={1234} day="Monday" Class="GIAIC Quater 2" />
        <br />
        <Card Name="ALI" Rollno={1256} day="Monday" Class="GIAIC Quater 2" />
        <br />
        <Card Name="AHMED" Rollno={8520} day="Monday" Class="GIAIC Quater 2" />
        <br />
      </div>
    </div>
  );
};

export default page;