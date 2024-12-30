import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const TicketsGraph = ({ labels, batchTotals }) => {
    // Data for the chart

    const data = {
        labels: labels || [], // X-axis labels from props
        datasets: [
            {
                label: "Batch Totals",
                data: batchTotals || [], // Y-axis values from props
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                ],
                borderWidth: 0,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        aspectRatio: 6,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    color: "#fff", // White text for legend
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#fff", // White text for X-axis
                },
            },
            y: {
                ticks: {
                    color: "#fff", // White text for Y-axis
                },
            },
        },
    };

    return (
        <div className="bg-[#5f5f8c84] flex-col items-start border-white py-[1rem]  px-[1rem] rounded-md flex justify-center overflow-x-hidden">
            <h2 className="text-white text-[25px] mb-3">
                Provider Batch Totals
            </h2>
            <Bar data={data} options={options} width={200} height={50} />
        </div>
    );
};

export default TicketsGraph;
