import React, { useEffect, useState } from "react";
import TicketsGraph from "./TicketsGraph";
import { MdFilterAlt } from "react-icons/md";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Divider,
} from "@mui/material";
import { Star } from "@mui/icons-material";

function DateDropdown({ options, sendNumber, className }) {
    const [dateType, setDateType] = useState("1"); // Remember your choice

    const pickDate = (event) => {
        const number = event.target.value; // Find the number associated wth the dateType  you picked
        setDateType(number); // Remember what you picked
        console.log("Number selected:", number);
        sendNumber(number); // Send the number to the (API)
    };

    return (
        <div>
            <select value={dateType} onChange={pickDate} className={className}>
                <option value="" disabled>
                    Treatment date
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

const SSDashboard = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [totalClaims, setTotalClaims] = useState("");
    const [adjudicated, setAdjudicated] = useState("");
    const [awaitingAdj, setAwaitingAdj] = useState("");
    const [open, setOpen] = useState("");
    const [qualityAssuarance, setQualityAssuarance] = useState("");
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [topProviders, setTopProviders] = useState([]);
    const [batchTotals, setBatchTotals] = useState([]);
    const [startDate, setStartDate] = useState("2024-5-10");
    const [endDate, setEndDate] = useState("2024-10-30");
    const [dateType, setDateType] = useState("1");
    const [groupedData, setGroupedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [manualClaims, setManualClaims] = useState("");
    const [portalCLaims, setPortalClaims] = useState("");

    const dateTypes = [
        { label: "TreatmentDate", value: 1 },
        { label: "Finance on", value: 2 },
        { label: "Encounter month to", value: 3 },
        { label: "Batch received on", value: 6 },
    ];

    async function getDashboardData() {
        setIsLoading(true);
        const response = await fetch(
            `${apiUrl}/api/EnrolleeClaims/GetBatchSumaary?Fromdate=${startDate}&Todate=${endDate}&DateType=${dateType}`,
            {
                method: "GET",
            },
        );

        const data = await response.json();
        console.log(data);

        if (data.status === 200) {
            setItems(data.result); // Assuming `data.result` contains the array of items

            // Ensure `data.result` is used for filtering
            const adjudicatedItems = data.result.filter(
                (item) => item.BatchStatus.toLowerCase() === "adjudicated",
            );

            const awaitingAdjudicationItems = data.result.filter(
                (item) =>
                    item.BatchStatus.toLowerCase() === "awaiting adjudication",
            );

            const open = data.result.filter(
                (item) =>
                    item.BatchStatus.toLowerCase() === "open                ",
            );

            const qualityAssurance = data.result.filter(
                (item) =>
                    item.BatchStatus.toLowerCase() === "quality assurance",
            );
            const manualClm = data.result.filter(
                (item) => item.Claimtype.toLowerCase() === "manual",
            );
            const PortalClm = data.result.filter(
                (item) => item.Claimtype.toLowerCase() === "portal",
            );

            // Calculate the Total
            setTotalItems(
                adjudicatedItems.length +
                    awaitingAdjudicationItems.length +
                    open.length +
                    qualityAssurance.length,
            );

            setAdjudicated(adjudicatedItems.length);
            setAwaitingAdj(awaitingAdjudicationItems.length);
            setOpen(open.length);
            setQualityAssuarance(qualityAssurance.length);
            setManualClaims(manualClm.length);
            setPortalClaims(PortalClm.length);
            setIsLoading(false);

            const sortedItems = data.result.sort(
                (a, b) => b.BatchTotal - a.BatchTotal,
            ); // Sort by BatchTotal descending

            const top10 = sortedItems.slice(0, 10); // Get top 10 providers
            console.log(top10);

            setTopProviders(top10.map((item) => item.Prorider)); // Extract provider names
            setBatchTotals(top10.map((item) => item.BatchTotal));

            console.log("Total Items:", totalItems);
        } else {
            console.error(
                "Failed to fetch data or unexpected response format.",
            );
        }
    }

    async function getDashboardRefreshData() {
        const response = await fetch(
            `${apiUrl}/api/EnrolleeClaims/GetBatchSumaary?Fromdate=${startDate}&Todate=${endDate}&DateType=${dateType}`,
            {
                method: "GET",
            },
        );

        const data = await response.json();
        console.log(data);

        if (data.status === 200) {
            setItems(data.result); // Assuming `data.result` contains the array of items

            // Ensure `data.result` is used for filtering
            const adjudicatedItems = data.result.filter(
                (item) => item.BatchStatus.toLowerCase() === "adjudicated",
            );

            const awaitingAdjudicationItems = data.result.filter(
                (item) =>
                    item.BatchStatus.toLowerCase() === "awaiting adjudication",
            );

            const open = data.result.filter(
                (item) =>
                    item.BatchStatus.toLowerCase() === "open                ",
            );

            const qualityAssurance = data.result.filter(
                (item) =>
                    item.BatchStatus.toLowerCase() === "quality assurance",
            );
            const manualClm = data.result.filter(
                (item) => item.Claimtype.toLowerCase() === "manual",
            );
            const PortalClm = data.result.filter(
                (item) => item.Claimtype.toLowerCase() === "portal",
            );

            // Calculate the Total
            setTotalItems(
                adjudicatedItems.length +
                    awaitingAdjudicationItems.length +
                    open.length +
                    qualityAssurance.length,
            );

            setAdjudicated(adjudicatedItems.length);
            setAwaitingAdj(awaitingAdjudicationItems.length);
            setOpen(open.length);
            setQualityAssuarance(qualityAssurance.length);
            setManualClaims(manualClm.length);
            setPortalClaims(PortalClm.length);

            const sortedItems = data.result.sort(
                (a, b) => b.BatchTotal - a.BatchTotal,
            ); // Sort by BatchTotal descending

            const top10 = sortedItems.slice(0, 10); // Get top 10 providers
            console.log(top10);

            setTopProviders(top10.map((item) => item.Prorider)); // Extract provider names
            setBatchTotals(top10.map((item) => item.BatchTotal));

            console.log("Total Items:", totalItems);
        } else {
            console.error(
                "Failed to fetch data or unexpected response format.",
            );
        }
    }

    useEffect(() => {
        getDashboardData();

        const intervalId = setInterval(
            () => {
                getDashboardRefreshData();
            },
            30 * 60 * 1000,
        );

        return () => clearInterval(intervalId);
    }, []);

    const ranges = [
        {
            dayRange: "08-14",
            min: 8,
            max: 14,
            totalNumberweekend: 0,
            numberOfProvider: new Set(),
            weekDelayed: "1 Wk",
        },
        {
            dayRange: "15-21",
            min: 15,
            max: 21,
            totalNumberweekend: 0,
            numberOfProvider: new Set(),
            weekDelayed: "2 Wks",
        },
        {
            dayRange: "22-28",
            min: 22,
            max: 28,
            totalNumberweekend: 0,
            numberOfProvider: new Set(),
            weekDelayed: "3 Wks",
        },
        {
            dayRange: "29-56",
            min: 29,
            max: 56,
            totalNumberweekend: 0,
            numberOfProvider: new Set(),
            weekDelayed: "4-7 wks",
        },
        {
            dayRange: "57-91 wks",
            min: 57,
            max: 91,
            totalNumberweekend: 0,
            numberOfProvider: new Set(),
            weekDelayed: "8-12 wks",
        },
        {
            dayRange: "Over12",
            min: 92,
            max: Infinity,
            totalNumberweekend: 0,
            numberOfProvider: new Set(),
            weekDelayed: "Over 12",
        },
    ];

    useEffect(() => {
        // Process the data
        items?.forEach((item) => {
            const { DatediffWithweekend, Prorider } = item;

            // Find the range for the current item's DateDiffWithoutWeekend
            const range = ranges.find(
                (r) =>
                    DatediffWithweekend >= r.min &&
                    DatediffWithweekend <= r.max,
            );

            if (range) {
                // Increment totalNumberwithoutweekend
                range.totalNumberweekend += 1;

                // Add provider to the set if it's not null
                if (Prorider) {
                    range.numberOfProvider.add(Prorider);
                }
            }
        });

        // Finalize the output by converting sets to counts
        setTableData(
            ranges.map((range) => ({
                dayRange: range.dayRange,
                totalNumberweekend: range.totalNumberweekend,
                numberOfProvider: range.numberOfProvider.size, // Size of the Set gives the count of unique providers
                weekDelayed: range.weekDelayed,
            })),
        );
    }, [items]);
    console.log(items);
    console.log(tableData);

    //console.log(result);

    // useEffect(() => {
    //     const groupByRange = (data) => {
    //         const ranges = [
    //             { name: "0-10", min: 0, max: 10 },
    //             { name: "11-20", min: 11, max: 20 },
    //             { name: "21-30", min: 21, max: 30 },
    //             { name: "31-90", min: 31, max: 90 },
    //             { name: "Over 90 Days", min: 91, max: Infinity },
    //         ];

    //         // Create an empty object to store grouped results
    //         const grouped = ranges.map((range) => ({
    //             range: range.name,
    //             count: 0,
    //             uniqueProviders: new Set(),
    //         }));

    //         console.log("Grouping Datauuuu:", data);

    //         // Iterate through the API data and assign it to the correct range
    //         data.forEach((item) => {
    //             const { DateDiffWithoutWeekend, Prorider } = item;

    //             if (typeof DateDiffWithoutWeekend !== "number" || !Prorider) {
    //                 console.warn("Invalid item properties:", item);
    //                 return;
    //             }
    //             const rangeGroup = grouped.find(
    //                 (group) =>
    //                     DateDiffWithoutWeekend >= group.min &&
    //                     DateDiffWithoutWeekend <= group.max,
    //             );
    //             if (rangeGroup) {
    //                 rangeGroup.count += 1; // Increment count for the range
    //                 rangeGroup.uniqueProviders.add(Prorider); // Add unique provider
    //             }
    //         });

    //         // Convert Set of unique providers into a count
    //         grouped.forEach((group) => {
    //             group.uniqueProviders = group.uniqueProviders.size;
    //         });

    //         console.log("Grouped Data:", grouped); // Log the entire grouped data
    //         return grouped;
    //     };

    //     if (items.length > 0) {
    //         const grouped = groupByRange(items);
    //         setGroupedData(grouped);
    //         console.log("Final Grouped Data:", grouped); // Log after processing is complete
    //     }
    // }, [items]);

    return (
        <div className="bg-[#1B1464] w-full  h-full">
            <div className=" flex gap-7 py-3 px-3">
                <div className="   rounded-sm">
                    <label className="block text-white   "> Start date</label>
                    <input
                        className=" outline-none bg-[#5f5f8c84] rounded-md py-1 text-white"
                        type="date"
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div>
                    <label className=" block   text-white"> End date</label>
                    <input
                        className=" outline-none bg-[#5f5f8c84] rounded-md py-1 text-white"
                        type="date"
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block  text-white"> Date type</label>
                    <DateDropdown
                        options={dateTypes}
                        sendNumber={setDateType}
                        className=" outline-none bg-[#5f5f8c84] rounded-md py-1 text-white"
                    />
                </div>

                <button
                    className="  bg-[#5f5f8c84] w-[6rem] rounded-md h-8 mt-6 text-white flex justify-center  py-1"
                    onClick={getDashboardData}
                >
                    <MdFilterAlt className=" text-[1.5rem] " />
                    Filter
                </button>
            </div>

            <div className="flex  w-full pt-3 gap-3 rounded-md px-3">
                <div className="flex-1 bg-bl  bg-[#5f5f8c84] border-white h-[18rem] rounded-md">
                    <div>
                        <h1 className="  text-white  px-3 text-[25px]">
                            Claims Warboard
                        </h1>

                        <span className="text-white  px-3 text-[50px]">
                            {items?.length}
                        </span>
                    </div>
                    <div>
                        <h1 className="  text-white  px-3 text-[25px]">
                            No of pending claims
                        </h1>
                        <span className="text-white  px-3 text-[50px]">
                            {totalItems}
                        </span>
                    </div>
                </div>
                <div className="flex-1 bg-bl  bg-[#5f5f8c84] border-white h-[18rem] rounded-md">
                    <div className=" justify-between col columns-2">
                        <div className="">
                            <h1 className="  text-white  py-4 px-3 text-[25px]">
                                Adjudicated
                            </h1>

                            <span className="text-white py-3 px-3 text-[50px]">
                                {adjudicated}
                            </span>
                        </div>
                        <div className="">
                            <h1 className="  text-white py-4  px-3 text-[25px]">
                                A.Adjud
                            </h1>

                            <span className="text-white py-3 px-3 text-[50px]">
                                {awaitingAdj}
                            </span>
                        </div>
                    </div>
                    <div className=" justify-between col columns-2">
                        <div className=" ">
                            <h1 className="  text-white  px-3 text-[25px]">
                                Open
                            </h1>

                            <span className="text-white py-3 px-3 text-[50px]">
                                {open}
                            </span>
                        </div>
                        <div className=" ">
                            <h1 className="  text-white  px-3 text-[25px]">
                                Q.A
                            </h1>

                            <span className="text-white py-3 px-3 text-[50px]">
                                {qualityAssuarance}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex-1  bg-[#5f5f8c84] border-white h-[18rem] rounded-md">
                    <div>
                        <h1 className="  text-white  px-3 text-[25px]">
                            No of providers
                        </h1>

                        <span className="text-white  px-3 text-[50px]">
                            {
                                [
                                    ...new Set(
                                        items?.map((item) => item.Prorider),
                                    ),
                                ].length
                            }
                        </span>
                    </div>
                    <div className="  text-white py-3  text-[25px]">
                        <h1 className="  text-white p px-3 text-[25px]">
                            Avg payment TAT
                        </h1>
                        <span className="text-white py-3 px-3 text-[50px]">
                            0
                        </span>
                    </div>
                </div>
                <div className="flex-1  bg-[#5f5f8c84] border-white h-[18rem] rounded-md">
                    <h1 className="text-xl font-bold px-3 text-white">
                        Claims Summary
                    </h1>
                    <table className="table-auto border-collapse  w-full rounded-md">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border  border-gray-300 px-2">
                                    Days range
                                </th>
                                <th className="border  border-gray-300 px-2">
                                    Weeks
                                </th>
                                <th className="border border-gray-300 px-2">
                                    Number
                                </th>
                                <th className="border border-gray-300 px-2">
                                    Provider
                                </th>
                            </tr>
                        </thead>
                        <tbody className="rounded-md h-[3rem]">
                            {tableData.length > 0 ? (
                                tableData.map((group, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300   px-1 text-white">
                                            {group.dayRange}
                                        </td>
                                        <td className="border border-gray-300   px-1 text-white">
                                            {group.weekDelayed}
                                        </td>
                                        <td className="border border-gray-300  px-1 text-white">
                                            {group.totalNumberweekend}
                                        </td>
                                        <td className="border border-gray-300   px-1 text-white">
                                            {group.numberOfProvider}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="3"
                                        className="text-center py-2 text-gray-500"
                                    >
                                        No data available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex-1  bg-[#5f5f8c84] border-white h-[18rem] rounded-md">
                    <div>
                        <h1 className="  text-white  px-3 text-[25px]">
                            Processing time
                        </h1>
                        <span className="text-white py-3 px-3 text-[50px]">
                            0
                        </span>
                    </div>

                    <div>
                        <h1 className="  text-white  px-3 text-[25px]">
                            No of Providers paid today
                        </h1>
                        <span className="text-white py-3 px-3 text-[50px]">
                            0
                        </span>
                    </div>
                </div>
                <div className="flex-1  bg-[#5f5f8c84] border-white h-[18rem] rounded-md">
                    <div>
                        <h1 className="  text-white  px-3 text-[25px]">
                            No of Manual Claims
                        </h1>
                        <span className="text-white py-3 px-3 text-[50px]">
                            {manualClaims}
                        </span>
                    </div>

                    <div>
                        <h1 className="  text-white  px-3 text-[25px]">
                            No of Portal claims
                        </h1>
                        <span className="text-white py-3 px-3 text-[50px]">
                            {portalCLaims}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex pt-3  gap-3 rounded-md px-3 overflow-y-hidden">
                <div className="flex pt-3 mt-2 gap-3 rounded-md w-full px-0 overflow-y-hidden">
                    {" "}
                    {/* Removed px-3 */}
                    <div className="flex-1 bg-bl bg-[#5f5f8c84]h-[29rem] rounded-md">
                        <TicketsGraph
                            className="w-full h-full"
                            labels={topProviders}
                            batchTotals={batchTotals}
                        />
                    </div>
                </div>
                {/* <div className="flex-1  text-white  border-white h-[18rem] rounded-md">
                    <Card sx={{ backgroundColor: "#5f5f8c84" }}>
                        <CardContent className=" h-[22rem] ">
                            <Typography sx={{ color: "white" }} variant="h6">
                                Recent ratings
                            </Typography>
                            {[
                                { rating: "Excellent", stars: 5 },
                                { rating: "Frustrating", stars: 2 },
                                { rating: "Thanks", stars: 4 },
                                { rating: "Super", stars: 5 },
                                { rating: "Good", stars: 4 },
                            ].map((item, index) => (
                                <Box
                                    key={index}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    my={1}
                                >
                                    <Typography sx={{ color: "white" }}>
                                        {item.rating}
                                    </Typography>
                                    <Box display="flex" alignItems="center">
                                        {[...Array(item.stars)].map((_, i) => (
                                            <Star
                                                key={i}
                                                sx={{ color: "gold" }}
                                            />
                                        ))}
                                    </Box>
                                    <Typography sx={{ color: "white" }}>
                                        1 Sep
                                    </Typography>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-1   border-white h-[22rem] rounded-md">
                    <Card sx={{ backgroundColor: "#5f5f8c84" }}>
                        <CardContent className=" h-[22rem] ">
                            <Typography sx={{ color: "white" }} variant="h6">
                                Agent status
                            </Typography>
                            {[
                                "Alice Kershaw",
                                "Dean Sherwood",
                                "Dijo Martin",
                                "Eve Micheal",
                            ].map((agent, index) => (
                                <Box
                                    key={index}
                                    display="flex"
                                    justifyContent="space-between"
                                    my={1}
                                >
                                    <Typography sx={{ color: "white" }}>
                                        {agent}
                                    </Typography>
                                    <Typography sx={{ color: "white" }}>
                                        Online
                                    </Typography>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </div> */}
            </div>
            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-[#5f5f8c84] rounded-md p-6 w-[66%] shadow-lg flex flex-col items-center justify-center gap-5">
                        <img src="/Loader.gif" alt="" className=" w-16" />
                        <h2 className="text-xl font-bold mb-4 text-white ">
                            Loading...
                        </h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SSDashboard;
