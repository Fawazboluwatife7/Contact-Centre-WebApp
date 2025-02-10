import React from "react";
import CreateNewTicket from "../../components/cs/TicketComponent/CreateNewTicket";
import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";

function CreateNewTicketPage() {
    return (
        <div className="flex  ">
            <CsSidebar />

            <div className="w-full ">
                <Header />
                <CreateNewTicket />
            </div>
        </div>
    );
}

export default CreateNewTicketPage;
