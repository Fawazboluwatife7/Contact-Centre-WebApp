import CsSidebar from "../../components/cs/csSideBar";
import EnrolleeInformations from "../../components/cs/EnrolleeInformations";
import Header from "../../components/cs/Header";

function EnrolleInformationsPage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        < EnrolleeInformations/>
      </div>
    </div>
  );
}

export default EnrolleInformationsPage;
