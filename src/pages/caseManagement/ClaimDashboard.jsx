import React, { useEffect, useState } from "react";
import { MdFilterAlt } from "react-icons/md";

function DateDropdown({ options, sendNumber, className }) {
    const [dateType, setDateType] = useState("1");

    const pickDate = (event) => {
        const number = event.target.value;
        setDateType(number);
        console.log("Number selected:", number);
        sendNumber(number);
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

const ClaimDashboard = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [open, setOpen] = useState("");

    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [startDate, setStartDate] = useState("2024-11-12");
    const [endDate, setEndDate] = useState("2024-12-29");
    const [dateType, setDateType] = useState("1");
    const [isLoading, setIsLoading] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [totalUnpaidCLaims, setUnpaidCLaims] = useState("");
    const [uniqueProvidersAboveFiveDays, setUniqueProvidersAboveFiveDays] =
        useState("");
    const [totalUnpaidClaimValue, setTotalUnpaidClaimValue] = useState("");
    const [claimAboveFiveDaysDuration, setClaimAboveFiveDaysDuration] =
        useState("");
    const [totalClaimValueAboveFiveDays, setTotalClaimValueAboveFiveDays] =
        useState("");

    const dateTypes = [
        { label: "TreatmentDate", value: 1 },
        { label: "Finance on", value: 2 },
        { label: "Encounter month to", value: 3 },
        { label: "Batch received on", value: 6 },
    ];

    const [claimsOperationsTAT, setClaimsOperationsTAT] = useState(0);
    const [internalControlTAT, setInternalControlTAT] = useState(0);
    const [financeTAT, setFinanceTAT] = useState(0);
    const [turnAroundTAT, setTurnAroundTAT] = useState(0);

    useEffect(() => {
        getDashboardData();

        const today = new Date();
        const end = today.toISOString().split("T")[0];

        const pastDate = new Date();
        pastDate.setDate(today.getDate() - 30);
        const start = pastDate.toISOString().split("T")[0];

        setStartDate(start);
        setEndDate(end);
    }, []);

    async function getDashboardData() {
        setIsLoading(true);
        const response = await fetch(
            `${apiUrl}/api/EnrolleeClaims/GetBatchSumaary?Fromdate=${startDate}&Todate=${endDate}&DateType=${dateType}`,
            {
                method: "GET",
            },
        );

    }
    
    const data = await response.json();
    if (data.status === 200) {
        const validStatuses = [
            "Awaiting Adjudication",
            "Open",
            "Quality Assurance",
            "Adjudicated",
        ];

        const filteredData = data.result.filter((item) =>
            validStatuses.includes(item.BatchStatus),
        );
        setItems(filteredData);

        setTurnAroundTAT(data);

        const totalUnits = filteredData.reduce(
            (sum, item) => sum + (item.Units || 0),
            0,
        );

        const totalBatchTotal = filteredData.reduce(
            (sum, item) => sum + (item.BatchTotal || 0),
            0,
        );

        // Format the total with commas (e.g., 997,252.5)
        const formattedTotal = totalBatchTotal.toLocaleString("en-US", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
        });
        const unitsTotal = totalUnits.toLocaleString("en-US", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
        });

        const filteredItems = filteredData.reduce(
            (sum, item) =>
                item.DateDiffWithoutWeekend > 5
                    ? sum + (item.Units || 0)
                    : sum,
            0,
        );

        const formattedfilteredItems =
            filteredItems.toLocaleString("en-US");

        // Get the total number of such items
        setClaimAboveFiveDaysDuration(formattedfilteredItems);


    return <div>ClaimDashboard</div>;
};

export default ClaimDashboard;
