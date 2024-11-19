import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import SuccessGenerate from "../../components/cs/SuccessGeneratePA";

function SuccessGen() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <SuccessGenerate />
      </div>
    </div>
  );
}

export default SuccessGen;
