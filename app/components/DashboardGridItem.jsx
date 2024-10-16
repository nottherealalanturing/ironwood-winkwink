import React from 'react';
import { MdArrowDropUp } from 'react-icons/md';
import { MdArrowDropDown } from 'react-icons/md';
import { DashboardGridGraph } from '../assets/icons';

const DashboardGridItem = ({ text, total_amount, percentage, isProfit }) => {
  return (
    <div className="flex items-start justify-between gap-4 px-4 py-6 bg-[#FFFFFF] shadow-x hover:drop-shadow-lg">
      <div className="flex flex-col items-start justify-start">
        <p className="font-campton font-semibold text-sm text-[#B1B2B2]">
          {text}
        </p>
        <p className="font-campton font-black text-sm md:text-xl text-[#161718]">
          {total_amount}
        </p>
        {isProfit ? (
          <div className="flex items-center justify-start p-1 bg-[#E2F3E7]">
            <MdArrowDropUp color="#34A853" />
            <p className="text-xs font-medium text-[#34A853]">+{percentage}%</p>
          </div>
        ) : (
          <div className="flex items-center justify-start p-1 bg-[#FCE5E3]">
            <MdArrowDropDown color="#34A853" />
            <p className="text-xs font-medium text-[#34A853]">-{percentage}%</p>
          </div>
        )}
      </div>
      <div className="hidden md:block">
        <DashboardGridGraph />
      </div>
    </div>
  );
};

export default DashboardGridItem;
