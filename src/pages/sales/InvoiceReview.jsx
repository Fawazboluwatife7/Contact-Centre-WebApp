import React, { useState } from "react";
import { Link } from "react-router-dom";
import InvoiceModal from "../../components/sales/InvoiceModal";

function InvoiceReview() {
  const [formData, setFormData] = useState({
    clientName: "FBN Client",
    phoneNumber: "08035911412",
    email: "r.olutope@gmail.com",
    address: "35, Marina Road",
    brokerName: "Broker Name",
    policyStartDate: "28/10/2022",
    businessSector: "Financial",
    invoiceItems: [
      { id: 1, productClass: "Magnum", unitAmount: 250000, numberOfLives: 100 },
      { id: 2, productClass: "Pro", unitAmount: 250000, numberOfLives: 100 },
      { id: 3, productClass: "Gold", unitAmount: 250000, numberOfLives: 100 },
      { id: 4, productClass: "Pro Max", unitAmount: 250000, numberOfLives: 100 },
    ],
    paymentPlan: "Annually",
  });
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  const handleAddInvoice = () => {
    setFormData((prev) => ({
      ...prev,
      invoiceItems: [
        ...prev.invoiceItems,
        { id: Date.now(), productClass: "", unitAmount: 0, numberOfLives: 0 },
      ],
    }));
  };

  const calculateTotalPremium = () =>
    formData.invoiceItems.reduce(
      (acc, item) => acc + item.unitAmount * item.numberOfLives,
      0
    );

  const handleGenerateClick = () => {
    setShowInvoiceModal(true);
  };

  const handleCloseModal = () => {
    setShowInvoiceModal(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-2">
      {showInvoiceModal && <InvoiceModal onClose={handleCloseModal} />}
      <div className="relative mr-auto mb-5 text-black text-3xl">
        Invoice - Smiths Hospital
      </div>
      {/* Header Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex">
          {/* Image Section */}
          <div className="flex flex-col items-center w-1/4 border-r-2">
            <img src="/Finance & Settlement@3x.svg" alt="Building" className="w-32 h-32 object-contain mb-4 brightness-50" />
            <h2 className="text-lg font-semibold text-gray-800">Leadway Assurance</h2>
          </div>

          {/* Details Section */}
          <div className="pl-6 w-3/4">
            {/* First Row */}
            <div className="grid grid-cols-4 gap-4 pb-4 border-b">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-semibold text-gray-800">Leadway Assurance</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Broker</p>
                <p className="font-semibold text-gray-800">Broker Name</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Policy Start Date</p>
                <p className="font-semibold text-gray-800">28/10/2022</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Business Sector</p>
                <p className="font-semibold text-gray-800">Financial</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-4 gap-4 pt-4 pb-4 border-b">
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-semibold text-gray-800">01 700 2002</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-semibold text-gray-800">info@leadway.com</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-semibold text-gray-800">121/123 Funsho Williams Avenue, Iponri</p>
              </div>
            </div>

            {/* Update Profile Button */}
            <div className="pt-4">
              <Link to='/SalesDashboard/update-profile'>
                <button className="bg-red-100 border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">

        {/* Invoice Section */}
        <div>
          <table className="w-full text-left table-auto border-collapse border border-gray-200">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2">S/N</th>
                <th className="px-4 py-2">Product Class</th>
                <th className="px-4 py-2">Unit Amount</th>
                <th className="px-4 py-2">Number of Lives</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {formData.invoiceItems.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 odd:bg-white even:bg-gray-50"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.productClass}</td>
                  <td className="px-4 py-2">{item.unitAmount.toLocaleString()}</td>
                  <td className="px-4 py-2">{item.numberOfLives}</td>
                  <td className="px-4 py-2">
                    {(item.unitAmount * item.numberOfLives).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-right px-4 py-2 font-bold">
                  Total Premium:
                </td>
                <td className="px-4 py-2 font-bold">
                  ₦{calculateTotalPremium().toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>

          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleAddInvoice}
          >
            Add Another Item
          </button>
        </div>

        {/* Payment Plan and Actions */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <label htmlFor="paymentPlan" className="block mb-2 font-medium">
              Payment Plan:
            </label>
            <select
              id="paymentPlan"
              name="paymentPlan"
              value={formData.paymentPlan}
              onChange={(e) =>
                setFormData({ ...formData, paymentPlan: e.target.value })
              }
              className="border border-gray-300 rounded px-4 py-2"
            >
              <option value="Annually">Annually</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <button className="bg-red-500 text-white px-12 py-2 rounded">
              Update
            </button>
            <button 
              onClick={handleGenerateClick} 
              className="bg-red-100 border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceReview;
