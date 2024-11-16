import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import CsEnrolles from "../../components/cs/CsEnrollees";

function EnrolleesPage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <CsEnrolles />
      </div>
    </div>
  );
}

export default EnrolleesPage;
