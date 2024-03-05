import Loader from "@/components/commonComponents/Loader";
import { useGetMe } from "@/hooks/UserHooks";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Admin = () => {
  const { data, isLoading } = useGetMe();
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>

      <div className="wrapper flex justify-center items-center py-10">
        <h2 className=" text-xl font-medium">Welcome back {data.userName} !</h2>
      </div>

      <div className="chart1">
        <Bar
          data={{
            labels: ["Hotels"],
            datasets: [
              {
                backgroundColor: "rgba(155, 50, 50, 0.8)",
                label: "Categories",
                data: [3],
              },
              {
                backgroundColor: "rgba(50, 50, 155, 0.8)",
                label: "Facilities",
                data: [9],
              },
              {
                backgroundColor: "rgba(155, 155, 50, 0.8)",
                label: "Services",
                data: [12],
              },
              {
                backgroundColor: "rgba(50, 155, 155, 0.8)",
                label: "Hotels",
                data: [16],
              },
              {
                backgroundColor: "rgba(155, 50, 155, 0.8)",
                label: "Users",
                data: [14],
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default Admin;
