import React from 'react';

const Payouts = ({ payouts }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <thead>
          <tr className="bg-[#002448]">
            <th className="text-[#FFFFFF] font-campton font-extrabold text-base">
              Date
            </th>
            <th className="text-[#FFFFFF] font-campton font-extrabold text-base">
              Bank
            </th>
            <th className="text-[#FFFFFF] font-campton font-extrabold text-base">
              Acc. No.
            </th>
            <th className="text-[#FFFFFF] font-campton font-extrabold text-base">
              Acc. Name.
            </th>
            <th className="text-[#FFFFFF] font-campton font-extrabold text-base">
              Status
            </th>
            <th className="text-[#FFFFFF] font-campton font-extrabold text-base">
              Amount Paid
            </th>
          </tr>
        </thead>
        <tbody>
          {payouts.map(
            (
              { date, accountNo, accountName, bank, status, amountPaid },
              index
            ) => (
              <tr
                key={index}
                onClick={() => {
                  setshowModal(true);
                }}
              >
                <td className="text-nowrap">{date}</td>
                <td>{accountNo}</td>
                <td>{accountName}</td>
                <td>{bank}</td>

                <td>
                  <p
                    className={`${
                      status === 'Successful'
                        ? 'bg-[#E8F8EC] text-[#34A853]'
                        : 'bg-[#e69292] text-[#ff2e2e]'
                    } px-2 py-1  text-center rounded-md`}
                  >
                    {status}
                  </p>
                </td>
                <td>{amountPaid}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Payouts;
