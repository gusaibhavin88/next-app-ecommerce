"use client";

import React from "react";
import PrivateRoute from "../component/privateRoute";

const Dashboard = () => {
  return (
    <PrivateRoute>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">User Information Form</h2>

        <form className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-6">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Gender
            </label>
            <select className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 123-456-7890"
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Country
            </label>
            <select className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={1}
              placeholder="Type your message..."
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
