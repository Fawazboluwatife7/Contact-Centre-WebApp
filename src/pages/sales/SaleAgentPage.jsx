import React from "react";
import SaleAgentForm from '../../components/sales/SaleAgentForm'

const SaleAgentPage = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-full">
        <main className="w-full p-4 flex-1 ">
          <SaleAgentForm />
        </main>
      </div>
    </div>
  );
};

export default SaleAgentPage;
