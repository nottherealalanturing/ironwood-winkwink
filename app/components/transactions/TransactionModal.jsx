'use client';
import React, { useState } from 'react';
import { Modal, Select } from 'flowbite-react';
import Image from 'next/image';
import successImg from '../../assets/images/transsuccess.png';
const TransactionModal = ({ showModal, setshowModal, step, setStep }) => {
  const [accountState, setAccountState] = useState({
    amount: null,
    accountName: null,
    accountNumber: null,
    bankName: null,
  });
  return (
    <>
      <Modal
        show={showModal}
        onClose={() => {
          setshowModal(false);
          setStep(1);
        }}
      >
        <Modal.Header className="border-none"></Modal.Header>
        <Modal.Body>
          {step === 1 && (
            <div className="flex flex-col items-start justify-start w-full">
              <p className="border-b border-b-[#DBE1E7] text-xl font-campton font-bold w-full my-4">
                TRANSFER MONEY
              </p>

              <div className="flex flex-col items-center justify-center w-full gap-4">
                <input
                  type="text"
                  className="p-4 bg-[#F7F8F9] w-2/3 border border-[#DBE1E7] text-[#21304D] text-base font-campton"
                  placeholder="Account Number"
                />
                <Select className=" bg-[#F7F8F9] w-2/3 border border-[#DBE1E7] text-[#21304D] text-base font-campton rounded-none">
                  <option>GT BANK</option>
                  <option>UBA</option>
                  <option>ACCESS BANK</option>
                  <option>UNITY BANK</option>
                  <option>FIRST BANK</option>
                </Select>

                <input
                  type="text"
                  className="p-4 bg-[#F7F8F9] w-2/3 border border-[#DBE1E7] text-[#21304D] text-base font-campton"
                  placeholder="Amount (NGN)"
                />
                <input
                  type="text"
                  className="p-4 bg-[#F7F8F9] w-2/3 border border-[#DBE1E7] text-[#21304D] text-base font-campton"
                  placeholder="Description "
                />

                <div className="flex items-center justify-center flex-col gap-4 w-full my-6">
                  <button
                    className="font-campton font-bold text-base text-[#FFFFFF] bg-[#002448] border border-[#002448] w-2/4 py-4 px-6"
                    onClick={() => setStep(2)}
                  >
                    Transfer
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col items-start justify-start w-full">
              <p className="border-b border-b-[#DBE1E7] text-xl font-campton font-bold w-full my-4">
                CONFIRM TRANSFER
              </p>

              <div className="flex flex-col items-center justify-center w-full gap-4">
                <p>
                  Enter your four-digit pin to transfer{' '}
                  {accountState?.amount || 'N 300,000.00'} to{' '}
                  {accountState?.accountName || 'Bamidele Badmus Abdulhameed'} -{' '}
                  {accountState?.accountNumber || '0534528732'}{' '}
                  {accountState?.bankName || 'GT Bank'}.
                </p>

                <div className="grid grid-cols-4 gap-2 px-20 ">
                  <input
                    type="text"
                    className=" text-center p-4 bg-[#F7F8F9] w-full border border-[#DBE1E7] text-[#21304D] text-2xl font-campton"
                  />
                  <input
                    type="text"
                    className=" text-center p-4 bg-[#F7F8F9] w-full border border-[#DBE1E7] text-[#21304D] text-2xl font-campton"
                  />
                  <input
                    type="text"
                    className=" text-center p-4 bg-[#F7F8F9] w-full border border-[#DBE1E7] text-[#21304D] text-2xl font-campton"
                  />
                  <input
                    type="text"
                    className=" text-center p-4 bg-[#F7F8F9] w-full border border-[#DBE1E7] text-[#21304D] text-2xl font-campton"
                  />
                </div>

                <div className="flex items-center justify-center flex-col gap-4 w-full my-6">
                  <button
                    className="font-campton font-bold text-base text-[#FFFFFF] bg-[#002448] border border-[#002448] w-2/4 py-4 px-6"
                    onClick={() => setStep(3)}
                  >
                    Confirm Transfer
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center justify-center w-full">
              <Image src={successImg} alt="succesimag" />

              <div className="flex flex-col items-center justify-center w-full gap-6">
                <p className="text-center font-campton font-bold text-[#161718] text-xl py-2">
                  Transfer Successful
                </p>
                <p className="text-center font-campton font-semibold text-[#161718] text-lg">
                  You have successfully transfered N 300,000.00 to Bamidele
                  Badmus Abdulahameed - 0522763442 GT Bank
                </p>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TransactionModal;
