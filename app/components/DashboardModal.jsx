'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import bammod from '../assets/images/dmodal.png';
import Image from 'next/image';
import DashboardModalTable from './DashboardModalTable';

const DashboardModal = ({
  showModal,
  setshowModal,
  isActive = true,
  name = 'Bamidele Badmus',
  customerId = '#1245678904',
  phoneNumber = '08137414139',
}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      {/* <Button onClick={() => setshowModal(true)}>Toggle modal</Button> */}
      <Modal
        show={showModal}
        onClose={() => {
          setshowModal(false);
          setShowDetails(false);
        }}
      >
        <Modal.Header className="border-none"></Modal.Header>
        <Modal.Body>
          {showDetails ? (
            <div className="flex items-start justify-start flex-col w-full">
              <p className="text-[#161718] font-campton text-2xl font-semibold">
                LOAN REPAYMENT
              </p>

              <DashboardModalTable setShowDetails={setShowDetails} />
            </div>
          ) : (
            <div className="flex flex-col items-start justify-start p-4 w-full">
              <div className="flex items-start justify-start gap-4 border-b border-b-[#DBE1E7] w-full pb-4">
                <Image src={bammod} alt="person" />
                <div className="flex flex-col items-start justify-start">
                  <p className="font-campton text-lg font-bold text-[#161718]">
                    {name}
                  </p>
                  <p className="font-campton text-base font-medium text-[#8A8B8B]">
                    {customerId}
                  </p>
                  <p className="font-campton text-lg font-bold text-[#161718]">
                    {phoneNumber}
                  </p>
                </div>
                <p className="px-2 py-1 bg-[#E8F8EC] text-[#34A853] rounded-lg">
                  {isActive ? 'Active' : 'Inactive'}
                </p>
              </div>

              <div className="flex flex-col justify-start items-start border-b border-b-[#DBE1E7] w-full py-4 gap-4 ">
                <p className="text-[#989898] font-campton text-sm font-semibold">
                  LOAN INFORMATION
                </p>
                <span>
                  <p className="text-[#989898] font-campton text-xs font-semibold">
                    Loan Status:
                  </p>
                  <p className="text-[#000000] font-campton text-xs font-semibold">
                    Renewal
                  </p>
                </span>
                <span>
                  <p className="text-[#989898] font-campton text-xs font-semibold">
                    Loan Purpose:
                  </p>
                  <p className="text-[#000000] font-campton text-xs font-semibold">
                    Fixed Asset
                  </p>
                </span>
                <span>
                  <p className="text-[#989898] font-campton text-xs font-semibold">
                    Amount Collected:
                  </p>
                  <p className="text-[#000000] font-campton text-xs font-semibold">
                    N 320,000.00 (Three hundred and twenty thousand Naira only)
                  </p>
                </span>
                <span>
                  <p className="text-[#989898] font-campton text-xs font-semibold">
                    Revenue (To be paid monthly):
                  </p>
                  <p className="text-[#000000] font-campton text-xs font-semibold">
                    N 33,200.00 (Three thousand two hundred Naira only)
                  </p>
                </span>
                <span>
                  <p className="text-[#989898] font-campton text-xs font-semibold">
                    Date Collected:
                  </p>
                  <p className="text-[#000000] font-campton text-xs font-semibold">
                    25th December, 2022. 12:23PM
                  </p>
                </span>
                <span>
                  <p className="text-[#989898] font-campton text-xs font-semibold">
                    Date Due
                  </p>
                  <p className="text-[#000000] font-campton text-xs font-semibold">
                    25th December, 2024. 12:23PM
                  </p>
                </span>
                <span>
                  <p className="text-[#989898] font-campton text-xs font-semibold">
                    Loan Tenor:
                  </p>
                  <p className="text-[#000000] font-campton text-xs font-semibold">
                    24 months
                  </p>
                </span>
              </div>

              <div className="flex flex-col justify-start items-start w-full pt-4 gap-4 ">
                <p className="text-[#989898] font-campton text-sm font-semibold">
                  PAYMENT PROGRESS
                </p>
                <progress
                  className="progress w-full"
                  value="70"
                  max="100"
                ></progress>
              </div>

              <div className="flex w-full justify-end items-start">
                <button
                  className="font-campton text-xs text-[#002448] underline py-1"
                  onClick={() => {
                    setShowDetails(true);
                    console.log('hello', showDetails);
                  }}
                >
                  See Details
                </button>
              </div>

              <div className="flex w-full justify-center gap-4 items-start">
                <button className="font-campton text-xs text-[#FFFFFF] bg-[#002448] border border-[#002448] py-2 px-4">
                  Set Reminder
                </button>
                <button className="font-campton text-xs text-[#002448] bg-[#ffffff] border border-[#002448] py-2 px-4">
                  Message
                </button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DashboardModal;
