{
    /* <div className="p-4">
                                <select
                                    value={selectedRemark}
                                    onChange={handleSelectProcedurex} // Now properly updates selectedRemark
                                    className="w-[15rem] p-2 border rounded-md"
                                >
                                    <option value="">Select</option>
                                    <option value="1">Consultation</option>
                                    <option value="2">Investigations</option>
                                    <option value="3">Pharmacy</option>
                                    <option value="4">Admitted</option>
                                    <option value="5">Immunization</option>
                                    <option value="6">Procedures</option>
                                    <option value="7">Observation</option>
                                </select>

                                {selectedRemark && (
                                    <div className="mt-4 p-4 border rounded-m">
                                        <div className="flex flex-col mr-10">
                                            {procedures.map((proc, index) => (
                                                <div
                                                    key={index}
                                                    className="flex space-x-4 mt-2 relative"
                                                >
                                                   
                                                    <div className="flex flex-col mr-10">
                                                        <label className="font-semibold">
                                                            Procedure Code
                                                        </label>
                                                        <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                                            <img
                                                                src={search}
                                                                alt="Search Icon"
                                                                className="h-6 w-6 absolute left-2"
                                                            />
                                                            <input
                                                                type="text"
                                                                placeholder="Search procedure code"
                                                                className="w-full h-full outline-none border-none  pl-9"
                                                                value={
                                                                    proc.code
                                                                }
                                                                onChange={(e) =>
                                                                    handleSearchChangeProcedure(
                                                                        index,
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                     
                                                        {proc.filteredResults
                                                            .length > 0 && (
                                                            <div className="">
                                                                <ul className="border border-gray-300 w-[240px] mt-[4.5rem] bg-white shadow-lg rounded-md absolute z-10">
                                                                    {proc.filteredResults
                                                                        .slice(
                                                                            0,
                                                                            5,
                                                                        )
                                                                        .map(
                                                                            (
                                                                                procedure,
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        procedure.ProcedureCode
                                                                                    }
                                                                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                                                                    onClick={() =>
                                                                                        handleSelectProcedures(
                                                                                            index,
                                                                                            procedure,
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        procedure.ProcedureCode
                                                                                    }{" "}
                                                                                    -{" "}
                                                                                    {
                                                                                        procedure.ProcedureDescription
                                                                                    }
                                                                                </li>
                                                                            ),
                                                                        )}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col ">
                                                        <label className="font-semibold">
                                                            Procedure
                                                            Description
                                                        </label>
                                                        <div className="w-[765px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                                            <input
                                                                type="text"
                                                                placeholder="Procedure description"
                                                                className="w-full h-full outline-none border-none px-2"
                                                                value={
                                                                    proc.description
                                                                }
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedRemark === "3" && (
                                    <div className="mt-4 p-4 border rounded-md bg-white">
                                        <h2 className="text-lg font-semibold mb-2">
                                            Pharmacy Details
                                        </h2>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium">
                                                    Quantity
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full border p-2 rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">
                                                    Dosage Value
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full border p-2 rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium whitespace-nowrap">
                                                    Daily Quantity
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full border p-2 rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">
                                                    Period
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full border p-2 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {selectedRemark === "4" && (
                                    <div className="mt-4 p-4 border rounded-md bg-white">
                                        <h2 className="text-lg font-semibold mb-2">
                                            Admission Details
                                        </h2>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium">
                                                    Admission Date
                                                </label>
                                                <input
                                                    type="date"
                                                    className="w-full border p-2 rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">
                                                    Discharge Date
                                                </label>
                                                <input
                                                    type="date"
                                                    className="w-full border p-2 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {selectedRemark === "7" && (
                                    <div className="mt-4 p-4 border rounded-md bg-white">
                                        <h2 className="text-lg font-semibold mb-2">
                                            Observation Details
                                        </h2>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium">
                                                    Start Time
                                                </label>
                                                <input
                                                    type="time"
                                                    className="w-full border p-2 rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">
                                                    End Time
                                                </label>
                                                <input
                                                    type="time"
                                                    className="w-full border p-2 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div> */
}
