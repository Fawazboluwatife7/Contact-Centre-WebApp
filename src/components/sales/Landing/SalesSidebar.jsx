import { useNavigate, NavLink } from "react-router-dom";


const SalesSidebar = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex">
      <div className="w-[82px] bg-[#121638] col-auto justify-items-center ">
        <div className="cursor-pointer bg-red-500 hover:bg-[#C61531] p-4 mt-[60px]">
          <img src="/Sales Menu@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-4">
          <img src="/Enrollment Menu@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="/ri_customer-service-fill@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="/Client Services@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="/Pharmacy Benefits@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="/icon-park-solid_category-management@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="/Reporting Menu@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="/Ticket Menu@3x.svg" alt="" />
        </div>
        <div className="border-t border-gray-300 mx-4"></div>

        <div className="mt-24 border-t border-gray-200 pt-8">
          <div className=" text-white cursor-pointer hover:bg-[#C61531] p-3"> 
          <svg className="w-8 h-10" fill="#FFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.49 2a1 1 0 0 0-.98.809l-.334 1.714c-.821.31-1.58.744-2.246 1.291l-1.645-.566a1 1 0 0 0-1.191.445L2.586 8.307a1 1 0 0 0 .209 1.255l1.318 1.147C4.045 11.13 4 11.559 4 12s.045.87.113 1.291l-1.318 1.146a1.004 1.004 0 0 0-.21 1.256l1.509 2.614a1 1 0 0 0 1.191.447l1.645-.567a8 8 0 0 0 2.246 1.29l.334 1.714c.092.47.501.809.98.809h3.02a1 1 0 0 0 .98-.809l.334-1.714a8 8 0 0 0 2.246-1.291l1.645.566a1 1 0 0 0 1.191-.445l1.508-2.616a1 1 0 0 0-.209-1.254l-1.318-1.146c.068-.421.113-.85.113-1.291s-.045-.87-.113-1.291l1.318-1.146c.361-.315.448-.841.21-1.256l-1.509-2.614a1 1 0 0 0-1.191-.447l-1.645.566a8 8 0 0 0-2.246-1.289L14.49 2.81a1 1 0 0 0-.98-.81zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8"/></svg>
          </div>
          <div className=" text-white cursor-pointer hover:bg-[#C61531] p-3"> 
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff"><path d="M334.434 206.171c0 13.516-3.435 25.318-10.288 35.397-5.65 8.47-15.12 17.649-28.436 27.534-7.664 5.247-12.711 10.184-15.126 14.823-3.04 5.648-4.54 14.113-4.54 25.409h-42.667c0-17.137 1.824-29.64 5.454-37.504 4.23-9.483 13.407-19.064 27.521-28.743 6.664-5.045 11.503-10.183 14.529-15.425 3.625-5.852 5.449-12.503 5.449-19.966 0-11.899-3.539-20.766-10.594-26.624-5.636-4.228-12.502-6.345-20.569-6.345-13.108 0-22.59 4.339-28.436 13.009-4.236 6.45-6.36 14.719-6.36 24.8v.304H175.01c0-26.422 8.36-46.382 25.09-59.898 14.12-11.283 31.574-16.94 52.34-16.94 18.16 0 34.092 3.533 47.798 10.588 22.803 11.703 34.195 31.572 34.195 59.581m134.9 49.83c0 117.82-95.513 213.333-213.334 213.333-117.819 0-213.332-95.513-213.332-213.334S138.18 42.667 256 42.667 469.334 138.179 469.334 256m-42.667 0c0-94.107-76.561-170.667-170.667-170.667S85.334 161.894 85.334 256 161.894 426.667 256 426.667 426.667 350.106 426.667 256m-170.668 69.333c-14.728 0-26.667 11.938-26.667 26.666s11.94 26.668 26.667 26.668 26.668-11.939 26.668-26.667-11.94-26.666-26.667-26.666" fill-rule="evenodd" stroke="none"/></svg>
          </div>
        </div>
        
        
      </div>
      <div className="bg-white w-[212] border min-h-screen justify-center items-center">
        <img
          src="/SmallLogo.svg"
          alt=""
          className="justify-items-center mt-8 ml-10"
        />
        <NavLink
      to="/SalesDashboard"
      className={({ isActive }) =>
        `mt-14 flex px-10 cursor-pointer group p-2 ${
          isActive ? "bg-red-600" : "hover:bg-[#C61531]"
        }`
      }
    >
      <img
        src="/Dashboard.svg"
        alt="Dashboard"
      />
      <p className="">
        Dashboard
      </p>
    </NavLink>
        <div
            className="mt-2 flex px-10 cursor-pointer p-2 group hover:bg-[#C61531]"
            onClick={() => handleNavigate("/")}
          >
          <img
            src="/carbon_hospital-bed@3x.svg"
            alt=""
            className="group-hover:filter group-hover:brightness-0 group-hover:invert"
          />
          <p className="ml-2 text-black group-hover:text-white">Clients</p>
        </div>

        <div
          className="mt-2 flex px-10 cursor-pointer group hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/enrollees")} // Navigate to /enrollees
        >
          <img src="/people-group@3x.svg" alt=""  className="group-hover:filter group-hover:brightness-0 group-hover:invert" />
          <p className="ml-2 text-black group-hover:text-white">Prospects</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer group hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/")}
        >
          <img src="/uil_invoice@3x.svg" alt="" className="group-hover:filter group-hover:brightness-0 group-hover:invert"  />
          <p className="ml-2 text-black group-hover:text-white">Proposals</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer group hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/")}
        >
          <img src="/uil_invoice@3x.svg" alt="" className="group-hover:filter group-hover:brightness-0 group-hover:invert"/>
          <p className="ml-2  text-black group-hover:text-white">Invoice</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer group hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/")}
        >
          <img src="/Report.svg" alt="" className="group-hover:filter group-hover:brightness-0 group-hover:invert" />
          <p className="ml-2 text-black group-hover:text-white">Tickets</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer group hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/")}
        >
          <img src="/Report.svg" alt="" className="group-hover:filter group-hover:brightness-0 group-hover:invert" />
          <p className="ml-2 text-black group-hover:filter group-hover:brightness-0 group-hover:invert">Reports</p>
        </div>
      </div>
    </div>
  );
};

export default SalesSidebar;
