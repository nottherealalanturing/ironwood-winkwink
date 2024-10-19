'use client';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customer = [
  {
    sn: 1,
    name: 'Bamidele Badmus',
    amount: '₦320,000.00',
    time: '4',
  },
  {
    sn: 2,
    name: 'Chinedu Okeke',
    amount: '₦150,000.00',
    time: '4',
  },
  {
    sn: 3,
    name: 'Aisha Ibrahim',
    amount: '₦200,000.00',
    time: '4',
  },
  {
    sn: 4,
    name: 'Funke Adeyemi',
    amount: '₦450,000.00',
    time: '4',
  },
  {
    sn: 5,
    name: 'Musa Danjuma',
    amount: '₦120,000.00',
    time: '4',
  },
  {
    sn: 6,
    name: 'Tunde Afolabi',
    amount: '₦500,000.00',
    time: '4',
  },
  {
    sn: 7,
    name: 'Ngozi Eze',
    amount: '₦220,000.00',
    time: '4',
  },
  /* 
  {
    sn: 8,
    name: 'Ibrahim Usman',
    amount: '₦110,000.00',
    time: '4',
  },
  {
    sn: 9,
    name: 'Sola Olowokere',
    amount: '₦600,000.00',
    time: '4',
  },
  {
    sn: 10,
    name: 'Emeka Nwankwo',
    amount: '₦350,000.00',
    time: '4',
  }, */
];

const Reminders = ({ showReminder = true }) => {
  const notify = () => toast('Reminder sent!');

  return (
    <div
      className={` flex flex-col items-center justify-start overflow-auto bg-[#ffffff] p-4 ${
        showReminder ? 'flex' : 'hidden'
      }`}
    >
      <p className="text-[#161718] font-campton font-extrabold text-lg self-start pl-4">
        Reminders
      </p>
      <div className="grid grid-cols-1 gap-2">
        {customer.map((item) => (
          <div
            key={item.sn}
            className="flex items-center w-full justify-between gap-2 bg-[#F7F8F9] border border-[#DBE1E7] p-2"
          >
            <div className="flex flex-col items-start justify-start">
              <p className="font-campton text-sm font-bold text-[#212121]">
                {item.name}
              </p>
              <p className="font-campton text-sm font-medium text-[#989898]">
                Due in {item.time} weeks
              </p>
              <p className="font-campton text-sm font-extrabold">
                {item.amount}
              </p>
            </div>
            <button
              className="font-campton text-[#ffffff] text-sm p-4 bg-[#002448]"
              onClick={notify}
            >
              Send Reminder
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reminders;
