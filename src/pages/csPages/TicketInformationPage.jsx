import React from "react";
import TicketInformation from "../../components/cs/TicketComponent/TicketInformation";
import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";

function TicketInformationPage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <TicketInformation />
      </div>
    </div>
  );
}

export default TicketInformationPage;
