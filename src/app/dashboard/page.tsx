import React from "react";
import PrivateRoute from "../component/privateRoute";

const Dashboard = () => {
  return (
    <PrivateRoute>
      <div>Dashboard</div>
    </PrivateRoute>
  );
};

export default Dashboard;
