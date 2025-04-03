import React from 'react';
import logo from '../../assets/Logo/LeadWay-Icon.png'

const InvoiceModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-8 max-w-4xl mx-auto shadow-lg rounded-lg">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Invoice Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Invoice</h1>
            <p>Date: Sep 18, 2022</p>
            <p>Invoice: #001234</p>
            <p>Ref: #27753-A</p>
          </div>
          <div className="text-right">
            <img src={logo} alt="Leadway Health" className="h-12" />
          </div>
        </div>

        {/* Billing and Payment Information */}
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="font-bold">BILL TO</h2>
            <p>Smiths Hospital</p>
            <p>121, Funsho Williams Avenue, Iponri,</p>
            <p>Lagos, Nigeria</p>
          </div>
          <div>
            <h2 className="font-bold">PAY TO</h2>
            <p>Leadway Health</p>
            <p>121/123, Funsho Williams Avenue, Iponri,</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        {/* Invoice Items */}
        <table className="w-full mb-8">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">S/N</th>
              <th className="text-left py-2">Product Class</th>
              <th className="text-left py-2">Unit Amount</th>
              <th className="text-left py-2">Number of Lives</th>
              <th className="text-left py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 4 }).map((_, index) => (
              <tr className="border-b" key={index}>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">Magnum</td>
                <td className="py-2">250,000</td>
                <td className="py-2">100</td>
                <td className="py-2">₦250,000</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Payment Details */}
        <div className="mb-8">
          <h2 className="font-bold">PAYMENT DETAILS</h2>
          <p>Account Number: 2036177455</p>
          <p>Account Name: Leadway Health LTD</p>
          <p>Bank: First Bank Limited</p>
        </div>

        {/* Totals */}
        <div className="flex justify-between mb-8">
          <div className="w-1/2"></div>
          <div className="w-1/2 text-right">
            <div className="flex justify-between">
              <span className="font-bold">Subtotal:</span>
              <span>₦0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Tax (7.5%):</span>
              <span>₦0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Total:</span>
              <span>₦1,000,000</span>
            </div>
          </div>
        </div>

        {/* Thank you and Send Button */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-black">Thank you!</span>
          <button onClick={onClose} className="bg-red-600 text-white py-2 px-12 rounded">Send</button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
