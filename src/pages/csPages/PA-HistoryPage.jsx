import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import History from "../../components/cs/PA-History";

function paHistory() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <History />
      </div>
    </div>
  );
}

export default paHistory;
