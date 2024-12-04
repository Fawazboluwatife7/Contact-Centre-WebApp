import { Link } from 'react-router-dom';
import CoveragePlanTable from '../../components/sales/CoveragePlanTable';

const CoveragePlan = () => {
  return (
    <div className="container mx-auto p-2">
      <div className=" mx-auto py-2 px-4 rounded-lg ">
        <div className="flex justify-between items-center mb-">
          <h1 className="text-2xl font-bold mb-14">Leadway Assurance - Coverage Plan</h1>

          {/* back to profile link and Back Arrow */}
            <div className="flex items-center space-x-2 cursor-pointer">
            {/* Backward Arrow Icon */}
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
              <path d="M18.75 7.5003H3.925l4.5375-5.45a1.2516 1.2516 0 0 0-1.925-1.6l-6.25 7.5a1.5 1.5 0 0 0-.1125.1875c0 .0625 0 .1-.0875.1625a1.25 1.25 0 0 0-.0875.45 1.25 1.25 0 0 0 .0875.45c0 .0625 0 .1.0875.1625q.0494.098.1125.1875l6.25 7.5a1.25 1.25 0 0 0 .9625.45 1.2496 1.2496 0 0 0 1.1959-1.6208 1.25 1.25 0 0 0-.2334-.4292l-4.5375-5.45H18.75a1.25 1.25 0 1 0 0-2.5" fill="#C61531"/>
            </svg>
           {/* back to profile Text Link */}
        <Link to="/SalesDashboard/clients-profile" className="mb-1 text-[#C61531] text-[19px] font-[Product Sans] font-bold">Back To Profile</Link>
      </div>

        </div>
        <div className="grid grid-cols-3 gap-4 mb-10">
         <div className="bg-gray-500 p-8 h-60 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Pro Max</h2>
                <p className='text-white'>Leadway Assurance</p>
              </div>
              <div className="text-right">
                <button className="mt-2 bg-white text-gray-600 py-2 px-4 rounded">View</button>   
                <p className="text-sm text-gray-600 text-white">Exp: Feb 28 2023</p> 
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-sm text-white">75 Principals</p>
                <p className="text-sm text-white">180 Dependents</p>
              </div>
              <p className="text-sm text-white">Policy No: 10001234</p>
            </div>
          </div>  
          <div className="bg-pink-400 p-8 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Max</h2>
                <p className='text-white'>Leadway Assurance</p>
              </div>
              <div className="text-right">
                <button className="mt-2 bg-white text-gray-600 py-2 px-4 rounded">View</button>   
                <p className="text-sm text-gray-600 text-white">Exp: Feb 28 2023</p> 
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-sm text-white">75 Principals</p>
                <p className="text-sm text-white">180 Dependents</p>
              </div>
              <p className="text-sm text-white">Policy No: 10001234</p>
            </div>
          </div> 
          <div className="bg-orange-500 p-8 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Pro</h2>
                <p className='text-white'>Leadway Assurance</p>
              </div>
              <div className="text-right">
                <button className="mt-2 bg-white text-gray-600 py-2 px-4 rounded">View</button>   
                <p className="text-sm text-gray-600 text-white">Exp: Feb 28 2023</p> 
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-sm text-white">75 Principals</p>
                <p className="text-sm text-white">180 Dependents</p>
              </div>
              <p className="text-sm text-white">Policy No: 10001234</p>
            </div>
          </div> 
        </div>
        <CoveragePlanTable />
      </div>
    </div>
  );
};

export default CoveragePlan;
