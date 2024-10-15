import React from 'react';

const History = ({ history }) => {
  return (
    <div className="flex flex-col items-start justify-start overflow-auto">
      {history.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full py-2"
        >
          <div className="flex flex-col items-start justify-start gap-2">
            <p className="text-[#989898] font-campton text-xs font-semibold">
              {item?.month}
            </p>
            <div className="flex items-center justify-start gap-4">
              <p className="text-[#989898] font-campton text-xs font-semibold">
                Amount:{' '}
                <span className="text-[#212121] font-campton text-xs font-semibold">
                  {item.amount}
                </span>
              </p>
              <p className="text-[#989898] font-campton text-xs font-semibold">
                Date Issued:{' '}
                <span className="text-[#212121] font-campton text-xs font-semibold">
                  {item.dateIssued}
                </span>
              </p>
              <p className="text-[#989898] font-campton text-xs font-semibold">
                Date Due:{' '}
                <span className="text-[#212121] font-campton text-xs font-semibold">
                  {item.dateDue}
                </span>
              </p>
            </div>
          </div>

          <p
            className={`font-campton p-2 font-bold text-sm ${
              item.status === 'Active'
                ? 'text-[#34A853] bg-[#E8F8EC]'
                : 'bg-[#FFFAEB] text-[#FBBC05]'
            }`}
          >
            {item.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default History;
