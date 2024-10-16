'use client';
import React from 'react';
import DashboardGridItem from '../components/DashboardGridItem';
import Avatarheads from '../assets/images/avatarheads.png';
import Image from 'next/image';
import DashboardTables from '../components/DashboardTables';
import Reminders from '../components/Reminders';
import { MdArrowDropDown, MdArrowRight } from 'react-icons/md';
import { LoanedOutTRNIcon, RevenueTRNIcon } from '../assets/icons';
import DonutChart from '../components/analytics/DonutChart';
import CandlestickChart from '../components/analytics/CandleStick';

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
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start gap-2 p-2">
          <div className="grid grid-cols-1 gap-2  w-full md:w-[70%] ">
            <div className=" bg-none grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="w-full bg-[#FFFFFF] flex flex-col items-start justify-around px-6 py-8 ">
                <div className="flex items-start justify-between w-full">
                  <p className="text-[#161718] font-campton text-lg font-black">
                    Loan Yield
                  </p>

                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-1 bg-none border rounded-none border-[#B1B2B2] hover:bg-none"
                    >
                      <div className="flex flex-col items-start justify-start gap-0">
                        <p className="font-campton text-base font-normal leading-none text-[#B1B2B2]">
                          Today
                        </p>
                      </div>

                      <MdArrowDropDown color="#161718" />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li>
                        <a>Last Week</a>
                      </li>
                      <li>
                        <a>Last Month</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start justify-start flex-col w-full gap-2">
                  <div className="flex items-start justify-between w-full">
                    <span className="flex items-center justify-start gap-1">
                      <LoanedOutTRNIcon />
                      <div className="flex flex-col items-start justify-start">
                        <p className="font-campton font-bold text-[#161718] text-sm">
                          Loan Out
                        </p>
                        <p className="font-campton font-medium text-[#989898] text-sm">
                          Total Amount Loaned
                        </p>
                      </div>
                    </span>
                    <p className="font-campton font-black text-[#161718] text-base">
                      N 150,000.00
                    </p>
                  </div>
                  <progress
                    className="progress w-full"
                    value="70"
                    max="100"
                  ></progress>
                </div>

                <div className="flex items-start justify-start flex-col w-full gap-2">
                  <div className="flex items-start justify-between w-full">
                    <span className="flex items-center justify-start gap-1">
                      <RevenueTRNIcon />
                      <div className="flex flex-col items-start justify-start">
                        <p className="font-campton font-bold text-[#161718] text-sm">
                          Revenue
                        </p>
                        <p className="font-campton font-medium text-[#989898] text-sm">
                          Total Revenue recieved
                        </p>
                      </div>
                    </span>
                    <p className="font-campton font-black text-[#161718] text-base">
                      N 500,000.00
                    </p>
                  </div>
                  <progress
                    className="progress w-full progress-success "
                    value="70"
                    max="100"
                  ></progress>
                </div>
              </div>
              <div className="w-full bg-[#FFFFFF] flex flex-col items-start justify-around px-6 py-8 ">
                <div className="flex items-start justify-between w-full">
                  <p className="text-[#161718] font-campton text-lg font-black">
                    Statistics
                  </p>

                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-1 bg-none border rounded-none border-[#B1B2B2] hover:bg-none  flex items-center justify-between"
                    >
                      <div className="flex flex-col items-start justify-start gap-0">
                        <p className="font-campton text-base font-normal leading-none text-[#B1B2B2]">
                          View All
                        </p>
                      </div>

                      <MdArrowRight color="#161718" />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li>
                        <a>Last Week</a>
                      </li>
                      <li>
                        <a>Last Month</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <DonutChart />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#FFFFFF] py-6 px-4 overflow-auto flex flex-col items-start justify-start">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 w-full ">
                <p className="font-campton text-[#161718] text-xl font-bold">
                  Revenue Performance
                </p>
                <span>
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-campton text-[#161718] text-xl font-bold">
                      Revenue
                    </p>
                    <p className="text-[#B1B2B2] text-base font-campton font-bold">
                      in thousand
                    </p>
                  </div>
                </span>

                <div className="flex justify-start gap-4 items-start">
                  <button className="font-campton text-xs text-[#FFFFFF] bg-[#002448] border border-[#002448] py-4 px-6">
                    Switch
                  </button>
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn bg-none border rounded-none border-[#B1B2B2] hover:bg-none"
                    >
                      <div className="flex flex-col items-start justify-start gap-0 ">
                        <p className="font-campton text-base font-normal leading-none text-[#B1B2B2]">
                          Today
                        </p>
                      </div>

                      <MdArrowDropDown color="#161718" />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li>
                        <a>Last Week</a>
                      </li>
                      <li>
                        <a>Last Month</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <CandlestickChart />
            </div>
          </div>
          <div className="w-full md:w-[30%] h-full ">
            <Reminders />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
