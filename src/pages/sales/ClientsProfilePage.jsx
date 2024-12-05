import { useState, useEffect } from 'react';

const ClientsProfilePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('#menu-button') && !event.target.closest('#dropdown')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center py-12 px-4 md:px-20">
      <div className="relative mr-auto mb-5 text-black font-bold text-3xl">Clients</div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative">
            <select className="block appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>Search By: Name</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 3a7 7 0 1 1-7 7 7 7 0 0 1 7-7zm0-1a8 8 0 1 0 8 8 8 0 0 0-8-8zm-1 10h2v2h-2zm0-8h2v6h-2z" />
              </svg>
            </div>
          </div>

          <input type="text" className="flex-grow bg-gray-100 border border-gray-300 rounded py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Enter search term..." />

          <button className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700">Find</button>
        </div>
      </div>

      <div className="w-full mt-8">
        <h2 className="text-base font-semibold text-gray-400 mb-4">Recent search result:</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="py-4 px-6 flex items-center space-x-3">
                  <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
                  <span>Smiths Hospital</span>
                </td>
                <td className="py-4 px-6">smith@hospital.com</td>
                <td className="py-4 px-6">Corporate</td>
                <td className="py-4 px-6">01786568</td>
                <td className="py-4 px-6">Broker Name</td>
                <td className="py-4 px-6">22 Aug 2022</td>
                <td className="py-4 px-6 text-right">
                  <div className="relative inline-block text-left">
                    <button id="menu-button" className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleDropdown}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <circle cx="5" cy="12" r="2.5"></circle>
                        <circle cx="12" cy="12" r="2.5"></circle>
                        <circle cx="19" cy="12" r="2.5"></circle>
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div id="dropdown" className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                        <ul className="py-1">
                          <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 1</a></li>
                          <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 2</a></li>
                          <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 3</a></li>
                          <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 4</a></li>
                          <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 5</a></li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="py-4 px-6 flex items-center space-x-3">
                  <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
                  <span>Smiths Hospital</span>
                </td>
                <td className="py-4 px-6">smith@hospital.com</td>
                <td className="py-4 px-6">Corporate</td>
                <td className="py-4 px-6">01786568</td>
                <td className="py-4 px-6">Broker Name</td>
                <td className="py-4 px-6">22 Aug 2022</td>
                <td className="py-4 px-6 text-right">
                  <div className="relative inline-block text-left">
                    <button id="menu-button" className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleDropdown}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <circle cx="5" cy="12" r="2.5"></circle>
                        <circle cx="12" cy="12" r="2.5"></circle>
                        <circle cx="19" cy="12" r="2.5"></circle>
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div id="dropdown" className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                        <ul className="py-1">
                          <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 1</a></li>
                          <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 2</a></li>
                          <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 3</a></li>
                          <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 4</a></li>
                          <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Option 5</a></li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientsProfilePage;
