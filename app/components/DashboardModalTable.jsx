import React from 'react';

const payments = [
  { month: 'January', date: '23-01-2023', status: 'Paid' },
  { month: 'February', date: '23-01-2023', status: 'Paid' },
  { month: 'March', date: '23-01-2023', status: 'Paid' },
  { month: 'April', date: '23-01-2023', status: 'Paid' },
  { month: 'May', date: '23-01-2023', status: 'Paid' },
  { month: 'June', date: '23-01-2023', status: 'Paid' },
  { month: 'July', date: '23-01-2023', status: 'Paid' },
  { month: 'August', date: '23-01-2023', status: 'Paid' },
  { month: 'September', date: '23-01-2023', status: 'Paid' },
  { month: 'October', date: '23-01-2023', status: 'Paid' },
  { month: 'November', date: '23-01-2023', status: 'Paid' },
  { month: 'December', date: '23-01-2023', status: 'Paid' },
  { month: 'January', date: '23-01-2024', status: 'Paid' },
  { month: 'February', date: '23-01-2024', status: 'Paid' },
  { month: 'March', date: '23-01-2024', status: 'Paid' },
  { month: 'April', date: '23-01-2024', status: 'Paid' },
  { month: 'May', date: '23-01-2024', status: 'Paid' },
  { month: 'June', date: '23-01-2024', status: 'Paid' },
  { month: 'July', date: '23-01-2024', status: 'Paid' },
  { month: 'August', date: '23-01-2024', status: 'Paid' },
  { month: 'September', date: '23-01-2024', status: 'Paid' },
  { month: 'October', date: '23-01-2024', status: 'Paid' },
  { month: 'November', date: '23-01-2024', status: 'Paid' },
  { month: 'December', date: '23-01-2024', status: 'Unpaid' },
];

const DashboardModalTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <thead>
          <tr className="bg-[#002448]">
            <th className="text-[#FFFFFF] font-campton font-extrabold text-base">
              MONTH
            </th>
            <th className="text-[#FFFFFF] font-campton font-extrabold text-base">
              DATE
            </th>
            <th className="text-[#FFFFFF] font-campton font-extrabold text-base">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.map(({ month, date, status }, index) => (
            <tr
              key={index}
              onClick={() => {
                setshowModal(true);
              }}
            >
              <td>{month}</td>
              <td>{date}</td>
              <td>
                <p
                  className={`${
                    status === 'Paid'
                      ? 'bg-[#E8F8EC] text-[#34A853]'
                      : 'bg-[#e69292] text-[#ff2e2e]'
                  } px-2 py-1 w-1/2 text-center rounded-md`}
                >
                  {status}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardModalTable;
