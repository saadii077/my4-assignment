import React from "react";

interface Tprop {
  Name: string;
  Rollno: number;
  day: string;
  Class: string;
}

const Card = (prop: Tprop) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-72 text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h1 className="font-bold text-xl text-gray-700 mb-4">Student ID Card</h1>
      <h1 className="text-gray-600 mb-2">Name:{prop.Name}</h1>
      <h1 className="text-gray-700">Rollno:{prop.Rollno}</h1>
      <h1 className="text-gray-700">Day:{prop.day}</h1>
      <h1 className="text-gray-700">Class:{prop.Class}</h1>
    </div>
  );
};

export default Card;
