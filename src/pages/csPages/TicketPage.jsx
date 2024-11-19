import Ticket from "../../components/cs/TicketComponent/Ticket";
import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";

function TicketPage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <Ticket />
      </div>
    </div>
  );
}

export default TicketPage;
