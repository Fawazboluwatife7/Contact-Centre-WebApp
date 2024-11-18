import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import ProviderDetails from "../../components/cs/ProviderDetails";

function ProviderPageComp() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <ProviderDetails />
      </div>
    </div>
  );
}

export default ProviderPageComp;
