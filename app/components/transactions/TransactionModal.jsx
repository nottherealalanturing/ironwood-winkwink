'use client';
import React, { useState } from 'react';
import { Modal, Select } from 'flowbite-react';
import Image from 'next/image';
import successImg from '../../assets/images/transsuccess.png';
const TransactionModal = ({ showModal, setshowModal, step, setStep }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [bank, setBank] = useState('');
  const [amount, setAmount] = useState('');
  const [accountName, setAccountName] = useState('');
  const [description, setDescription] = useState('');
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
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
                <Select
                  className="bg-[#F7F8F9] w-2/3 border border-[#DBE1E7] text-[#21304D] text-base font-campton rounded-none"
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                >
                  <option value="">Select Bank</option>
                  <option value="GT BANK">GT BANK</option>
                  <option value="UBA">UBA</option>
                  <option value="ACCESS BANK">ACCESS BANK</option>
                  <option value="UNITY BANK">UNITY BANK</option>
                  <option value="FIRST BANK">FIRST BANK</option>
                </Select>

                <input
                  type="text"
                  className="p-4 bg-[#F7F8F9] w-2/3 border border-[#DBE1E7] text-[#21304D] text-base font-campton"
                  placeholder="Amount (NGN)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <input
                  type="text"
                  className="p-4 bg-[#F7F8F9] w-2/3 border border-[#DBE1E7] text-[#21304D] text-base font-campton"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <div className="flex items-center justify-center flex-col gap-4 w-full my-6">
                  <button
                    className="font-campton font-bold text-base text-[#FFFFFF] bg-[#002448] border border-[#002448] w-2/4 py-4 px-6"
                    onClick={() => setStep(2)}
                    disabled={
                      !accountNumber || !bank || !amount || !description
                    } // Disable button if any input is empty
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
                  {amount || 'N 300,000.00'} to{' '}
                  {accountName || 'Bamidele Badmus Abdulhameed'} -{' '}
                  {accountNumber || '0534528732'} {bank || 'GT Bank'}.
                </p>

                <div className="grid grid-cols-4 gap-2 px-20 ">
                  <input
                    type="text"
                    maxLength={1}
                    className=" text-center p-4 bg-[#F7F8F9] w-full border border-[#DBE1E7] text-[#21304D] text-2xl font-campton"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className=" text-center p-4 bg-[#F7F8F9] w-full border border-[#DBE1E7] text-[#21304D] text-2xl font-campton"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className=" text-center p-4 bg-[#F7F8F9] w-full border border-[#DBE1E7] text-[#21304D] text-2xl font-campton"
                  />
                  <input
                    type="text"
                    maxLength={1}
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
                  You have successfully transfered N {amount} to {accountNumber}{' '}
                  - {bank}
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
