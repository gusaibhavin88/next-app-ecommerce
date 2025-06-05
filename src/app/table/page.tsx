"use client";

import React from "react";
import PrivateRoute from "../component/privateRoute";

const Dashboard = () => {
  return (
    <PrivateRoute>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John</td>
            <td className="border px-4 py-2">john@example.com</td>
            <td className="border px-4 py-2">Admin</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane</td>
            <td className="border px-4 py-2">jane@example.com</td>
            <td className="border px-4 py-2">User</td>
          </tr>
        </tbody>
      </table>

      <br />
      <div className="grid grid-cols-3 bg-gray-100 font-bold p-2 border-b">
        <div>Name</div>
        <div>Email</div>
        <div>Role</div>
      </div>

      <div className="grid grid-cols-3 p-2 border-b">
        <div>John</div>
        <div>john@example.com</div>
        <div>Admin</div>
      </div>
      <div className="grid grid-cols-3 p-2 border-b">
        <div>Jane</div>
        <div>jane@example.com</div>
        <div>User</div>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between border p-4 rounded bg-white shadow">
          <div>
            <strong>Name:</strong> John
          </div>
          <div>
            <strong>Email:</strong> john@example.com
          </div>
          <div>
            <strong>Role:</strong> Admin
          </div>
        </div>
        <br />

        <div className="flex flex-col sm:flex-row sm:justify-between border p-4 rounded bg-white shadow">
          <div>
            <strong>Name:</strong> Jane
          </div>
          <div>
            <strong>Email:</strong> jane@example.com
          </div>
          <div>
            <strong>Role:</strong> User
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
