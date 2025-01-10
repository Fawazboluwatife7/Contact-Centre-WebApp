import React, { useEffect, useState } from "react";

const ClaimSideDashboard = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const [lastMonthPaidClaims, setLastMonthPaidClaims] = useState("");
    const [currentMonthPaidClaims, setCurrentMonthPaidClaims] = useState("");
    const [thrirtyDaysPaidBatches, setThrirtyDaysPaidBatches] = useState("");

    useEffect(() => {
        const today = new Date();
        const end = today.toISOString().split("T")[0];

        const pastDate = new Date();
        pastDate.setDate(today.getDate() - 30);
        const start = pastDate.toISOString().split("T")[0];

        // Update state

        if (start.trim() && end.trim()) {
            getBatchTotalOfTheLastThirtyDays(start, end);
        }
        getLastMonthBatchTotal();
        getMonthlyCurrentPaidBatchTotal();
    }, []);

    async function getLastMonthBatchTotal() {
        const today = new Date();
        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            2,
        );
        const lastDayOfPreviousMonth = new Date(
            previousMonth.getFullYear(),
            previousMonth.getMonth() + 1,
            1,
        );

        const start = previousMonth.toISOString().split("T")[0];
        const end = lastDayOfPreviousMonth.toISOString().split("T")[0];
        console.log("Last month start date:", start);
        console.log("Last month end date:", end);

        try {
            // Fetch data from the API
            const response = await fetch(
                `${apiUrl}/api/EnrolleeClaims/GetBatchSumaary?Fromdate=${start}&Todate=${end}&DateType=2`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            // Check if the data is valid
            if (!data || !data.result) {
                console.error("Invalid API response:", data);
                return 0;
            }

            const paidItems = data.result.filter(
                (item) =>
                    item.BatchStatus === "Paid" &&
                    item.PaidDate &&
                    new Date(item.PaidDate) >= previousMonth &&
                    new Date(item.PaidDate) <= lastDayOfPreviousMonth,
            );

            // Sum up BatchTotal for the filtered items
            const totalBatchTotal = paidItems.reduce(
                (sum, item) => sum + (item.BatchTotal || 0),
                0,
            );
            console.log(
                `Total Paid Batch Amount last month: ${totalBatchTotal}`,
            );
            setLastMonthPaidClaims(totalBatchTotal.toLocaleString("en-US"));
        } catch (error) {
            console.error("Error fetching data from API:", error);
            return 0;
        }
    }

    async function getMonthlyCurrentPaidBatchTotal() {
        const today = new Date();
        const firstDayOfMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            1,
        );
        const firsttDate = firstDayOfMonth.toLocaleDateString("en-CA");

        const PresentDate = today.toLocaleDateString("en-CA");

        console.log("FirstDate:", firsttDate);
        console.log("EndDate:", PresentDate);

        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeClaims/GetBatchSumaary?Fromdate=${firsttDate}&Todate=${PresentDate}&DateType=2`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            if (!data || !data.result) {
                console.error("Invalid API response:", data);
                return 0;
            }

            const paidItems = data.result.filter(
                (item) => item.BatchStatus === "Paid",
            );

            console.log("current month total items", paidItems.length);

            const totalBatchTotal = paidItems.reduce(
                (sum, item) => sum + (item.BatchTotal || 0),
                0,
            );

            console.log(`Total Paid Batch Amount: ${totalBatchTotal}`);
            setCurrentMonthPaidClaims(totalBatchTotal.toLocaleString("en-US"));
        } catch (error) {
            console.error("Error fetching data from API:", error);
            return 0;
        }
    }

    async function getBatchTotalOfTheLastThirtyDays(fromDate, toDate) {
        console.log("startzz", fromDate), console.log("endzzz", toDate);

        const response = await fetch(
            `${apiUrl}/api/EnrolleeClaims/GetBatchSumaary?Fromdate=${fromDate}&Todate=${toDate}&DateType=2`,
            {
                method: "GET",
            },
        );
        const data = await response.json();

        const paymentItems = data.result.filter(
            (item) => item.BatchStatus === "Payment Requisition",
        );

        // Count the number of paid items
        const paymentCount = paymentItems.length;

        console.log("number of p r", paymentCount);

        // Calculate the total BatchTotal for paid items
        const tpaymentTotal = paymentItems.reduce(
            (sum, item) => sum + item.BatchTotal,
            0,
        );

        setThrirtyDaysPaidBatches(tpaymentTotal.toLocaleString("en-US"));
    }

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                getLastMonthBatchTotal();
                getMonthlyCurrentPaidBatchTotal();
                getBatchTotalOfTheLastThirtyDays();
            },
            30 * 60 * 1000,
        );

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-[#1B1464] w-full  h-[100vh]">
            <div className="justify-between flex">
                <img
                    src="/leadway_health_logo-dashboard.png"
                    alt=""
                    className=" w-[10rem] h-[5rem]"
                />
            </div>

            <div className="flex  w-full pt-3 gap-3 rounded-md px-3">
                <div className="flex-1 bg-bl  bg-[#5f5f8c84] border-white h-[28rem] rounded-md">
                    <div>
                        <h1 className="  text-white  py-4 px-3 text-[51px] pt-[3rem]  underline">
                            Total paid claims for last month
                        </h1>

                        <h1 className="  text-white  py-4 px-3 text-[90px]">
                            #{lastMonthPaidClaims}
                        </h1>
                    </div>
                </div>
                <div className="flex-1 bg-bl  bg-[#5f5f8c84] border-white h-[28rem] rounded-md">
                    <div className="">
                        <div className="">
                            <h1 className="  text-white  py-2 px-3 text-[51px] pt-[3rem]  underline">
                                Total Paid claims for this month
                            </h1>
                            <h1 className="  text-white  py-2 px-3 text-[90px] ">
                                {currentMonthPaidClaims}
                            </h1>
                        </div>
                    </div>
                </div>
                {/* <div className="flex-1 bg-bl  bg-[#5f5f8c84] border-white h-[28rem] rounded-md">
                    <div className="">
                        <div className="">
                            <h1 className="  text-white  py-2 px-3 text-[45px] pt-[3rem] underline">
                                Payment Requisition in the last 30 days:
                            </h1>
                            <h1 className="  text-white  py-2 px-3 text-[70px] ">
                                #{thrirtyDaysPaidBatches}
                            </h1>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ClaimSideDashboard;
