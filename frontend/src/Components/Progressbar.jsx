import React from 'react';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="my-4">
      <div className="text-primary-gray3 text-sm mb-1">{label}</div>
      <div className="bg-primary-gray2 border  h-2.5 w-96">
        <div
          className="bg-primary-Camel border h-2.5 "
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
