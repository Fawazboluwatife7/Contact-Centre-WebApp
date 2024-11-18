import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import ProviderP from "../../components/cs/Provider";

function ProviderPageComp() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <ProviderP />
      </div>
    </div>
  );
}

export default ProviderPageComp;
