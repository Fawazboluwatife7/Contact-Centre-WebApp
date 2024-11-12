import React from "react";
import CsSidebar from "../../components/cs/csSideBar";
import CsDashboard from "../../components/cs/csDashboard";
import Header from "../../components/cs/Header";

function CsDashboardLayoutPage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <CsDashboard />
      </div>
    </div>
  );
}

export default CsDashboardLayoutPage;
