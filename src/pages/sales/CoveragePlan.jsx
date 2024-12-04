import { Link } from 'react-router-dom';
import CoveragePlanTable from '../../components/sales/CoveragePlanTable';

const CoveragePlan = () => {
  return (
    <div className="container mx-auto p-2">
      <div className=" mx-auto py-2 px-4 rounded-lg ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Leadway Assurance - Coverage Plan</h1>
          <Link to="/SalesDashboard/clients-profile" className="text-red-500 font-bold">Back To Profile
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-14">
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
