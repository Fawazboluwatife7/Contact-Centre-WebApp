import { Link } from "react-router-dom";
import backIcon from "../../assets/csImages/eva_arrow-back-outline.svg";

function EnrolleeInformations() {
  return (
    <div className="w-90 p-1 bg-lightblue -mt-2 mr-4">
        <h3 className="font-bold text-lg font-sans ml-3 mt-3 mb-3">Lagoon is requesting approval for Enrollee LH221121/0</h3>
         <div className="flex justify-end">
         <Link to="/#">
            <button >
            <img src={backIcon} alt="Icon" className="w-6 h-6" />
            </button>
            </Link>
  <h4 className="flex items-center text-[#C61531] font-normal text-[16px] leading-[24px] w-[170px] h-[24px] px-4 py-1 text-left">
    Back to PA Request
  </h4>
</div>

    <div className="p-1 mx-auto bg-white shadow-md space-y-4 w-[1168px] h-[47px]">
    
      <h3 className="font-bold text-lg font-serif mt-1 ml-1">Enrollee Information</h3>
    </div>
    <div className="p-1 mt-1 mx-auto bg-white shadow-md space-y-4 w-[1168px] h-[155px]">
    
   
  </div>
    </div>
  );
}

export default EnrolleeInformations;
