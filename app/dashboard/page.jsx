import React from 'react';
import DashboardGridItem from '../components/DashboardGridItem';
import Avatarheads from '../assets/images/avatarheads.png';
import Image from 'next/image';
import DashboardTables from '../components/DashboardTables';
import Reminders from '../components/Reminders';

const griditems = [
  {
    text: 'TOTAL AMOUNT',
    total_amount: 'N300,000,000',
    percentage: '12.5',
    isProfit: true,
  },
  {
    text: 'TOTAL REVENUE',
    total_amount: 'N700,000.00',
    percentage: '0.8',
    isProfit: true,
  },
  {
    text: 'TOTAL CUSTOMERS',
    total_amount: '1,567',
    percentage: '10.8',
    isProfit: false,
  },
];
const Dashboard = ({}) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start w-full h-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {griditems.map(
            ({ text, total_amount, percentage, isProfit }, index) => (
              <DashboardGridItem
                text={text}
                total_amount={total_amount}
                percentage={percentage}
                isProfit={isProfit}
                key={index}
              />
            )
          )}
          <div className="flex items-start justify-between gap-4 px-4 py-6 bg-[#FFFFFF]">
            <div className="flex flex-col items-start justify-start">
              <p className="font-campton font-semibold text-sm text-[#B1B2B2]">
                {'ACTIVE LOANS'}
              </p>
              <p className="font-campton font-black text-xl text-[#161718]">
                {'344'}
              </p>

              <div className="flex items-center justify-start w-[200px]">
                <Image
                  alt="tesr"
                  src={Avatarheads}
                  className="inline-block  rounded-full"
                  fill={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start justify-start gap-2 p-2 overflow-auto">
          <DashboardTables />
          <div className="w-full md:w-[30%] h-full">
            <Reminders />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
