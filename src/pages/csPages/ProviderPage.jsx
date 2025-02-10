import React from "react";
import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import ProviderP from "../../components/cs/Provider";

const ProviderPage = () => {
    return (
        <div className="flex  ">
            <CsSidebar />

            <div className="w-full ">
                <Header />
                <ProviderP />
            </div>
        </div>
    );
};

export default ProviderPage;
