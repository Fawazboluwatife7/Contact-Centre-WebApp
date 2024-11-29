import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";

// Register necessary chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const SatisfactionChart = () => {
  // Step 1: Define Satisfaction Levels Data
  const [satisfactionData] = useState([
    { label: "Poor", value: 10 },
    { label: "Fair", value: 20 },
    { label: "Good", value: 30 },
    { label: "Very Good", value: 40 },
    { label: "Excellent", value: 50 },
  ]);

  // Step 2: Chart.js Data
  const chartData = {
    labels: satisfactionData.map((item) => item.label),
    datasets: [
      {
        data: satisfactionData.map((item) => item.value),
        backgroundColor: satisfactionData.map((_, index) =>
          `rgba(220, 53, 69, ${0.3 + index * 0.1})` // Dynamic opacity for gradient effect
        ),
      },
    ],
  };

  // Step 3: Chart.js Options for Customization
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // No legend needed
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 12 },
          color: "#6B7280",
        },
      },
      y: {
        grid: {
          color: "#E5E7EB", // Light gray grid lines
        },
        ticks: {
          stepSize: 10,
          color: "#6B7280",
        },
      },
    },
  };

  // Step 4: Define Marker Position
  const markerPosition = satisfactionData.reduce((acc, item, index) => {
    if (item.label === "Excellent") {
      return index; // Example: Place marker at "Excellent"
    }
    return acc;
  }, 0);

  return (
    <div className="p-3 border bg-white">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Enrollee Satisfaction</h2>
      <div className="relative rounded-lg p-4 h-64">
        {/* Satisfaction Labels */}
        <div className="flex justify-between text-gray-500 text-sm font-medium mb-4">
          {satisfactionData.map((item) => (
            <span key={item.label} className={`${item.label === "Excellent" ? "text-red-600" : ""}`}>
              {item.label}
            </span>
          ))}
        </div>

        {/* Step 5: Bar Chart */}
        <div className="relative w-full h-48">
          <Bar data={chartData} options={chartOptions} />
          {/* Step 6: Marker */}
          <div
            className="absolute -top-6 left-[calc(10%*3)] transform -translate-x-1/2 w-4 h-4 border-2 border-red-600 bg-white rounded-full"
            style={{
              left: `${(markerPosition / (satisfactionData.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionChart;
