'use client';
import React, { useState } from 'react';
import DashboardGridItem from '../components/DashboardGridItem';
import Avatarheads from '../assets/images/avatarheads.png';
import Image from 'next/image';
import DashboardTables from '../components/DashboardTables';
import Reminders from '../components/Reminders';
import { CiSearch } from 'react-icons/ci';
import { FaFilter, FaPlus } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import compavatar from '../assets/images/compavatar.png';
import { useRouter } from 'next/navigation';
import {
  CreditIcon,
  CreditSurgeIcon,
  DebitIcon,
  DebitSurgeIcon,
} from '../assets/icons';
import TransactionModal from '../components/transactions/TransactionModal';

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
  const router = useRouter();

  const [showModal, setshowModal] = useState(false);

  const [step, setStep] = useState(1);

  return (
    <>
      <div className="flex flex-col items-start justify-start w-full h-full">
        <div className="grid grid-cols-4 gap-4">
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
        <div className="w-full flex items-start justify-start gap-2 p-2">
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center justify-start gap-5">
                <p className="text-lg font-campton font-bold">Wallet</p>
              </span>
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

            <div className="grid grid-cols-2 gap-3 my-2">
              <div className="border-[#DBE1E7] border bg-[#F7F8F9] py-4 px-8 flex items-center justify-between shadow-x hover:drop-shadow-lg">
                <span>
                  <CreditIcon />
                  <p className="font-campton text-xs mt-4 mb-2 font-semibold text-[#8A8B8B]">
                    WALLET CREDIT
                  </p>
                  <p className="font-campton text-base font-bold text-[#161718]">
                    N32,000,000
                  </p>
                </span>
                <CreditSurgeIcon />
              </div>

              <div className="border-[#DBE1E7] border bg-[#F7F8F9] py-4 px-8 flex items-center justify-between shadow-x hover:drop-shadow-lg">
                <span>
                  <DebitIcon />
                  <p className="font-campton text-xs font-semibold  mt-4 mb-2 text-[#8A8B8B]">
                    WALLET DEBIT
                  </p>
                  <p className="font-campton text-base font-bold text-[#161718]">
                    N32,000,000
                  </p>
                </span>
                <DebitSurgeIcon />
              </div>
            </div>
            <div className="flex items-center justify-center flex-col gap-4 w-full my-6">
              <button
                className="font-campton font-bold text-base text-[#FFFFFF] bg-[#002448] border border-[#002448] w-1/4 p-6"
                onClick={() => setshowModal(true)}
              >
                Transfer
              </button>
              <button className="font-campton font-bold text-base text-[#002448] bg-[#ffffff] border border-[#002448] p-6 w-1/4">
                Manage Rates
              </button>
            </div>
          </div>
        </div>
        <TransactionModal
          showModal={showModal}
          setshowModal={setshowModal}
          step={step}
          setStep={setStep}
        />
      </div>
    </>
  );
};

export default Dashboard;
