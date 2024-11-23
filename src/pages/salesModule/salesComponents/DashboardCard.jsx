import React from "react";

const DashboardCard = ({ value, description, iconUrl, bgColor }) => {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg shadow-md ${bgColor}`} style={{ width: '292px', height: '132px' }}>
      <div>
        <div className="text-4xl font-bold text-white" style={{ fontFamily: 'Product Sans', fontSize: '60px', lineHeight: '72.78px' }}>{value}</div>
        <div className="text-white" style={{ fontFamily: 'Product Sans', fontSize: '14px', lineHeight: '16.41px' }}>{description}</div>
      </div>
      <img src={iconUrl} alt="icon" className="w-16 h-16" />
    </div>
  );
};

export default DashboardCard