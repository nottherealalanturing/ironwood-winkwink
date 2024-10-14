import Image from 'next/image';
import React from 'react';
import multiavatar from '../../assets/images/multiavatar.png';

const CustomerGridItem = ({ color, text, number }) => {
  return (
    <div className="flex items-start justify-between gap-4 px-4 py-6 bg-[#FFFFFF] shadow-x hover:drop-shadow-lg w-full">
      <div className="flex flex-col items-start justify-start gap-2">
        <p className="text-[#B1B2B2] font-campton font-bold text-base">
          {text}
        </p>
        <p className="text-[#161718]  font-campton font-bold text-base">
          {number}
        </p>
        <Image src={multiavatar} alt="multi" />
      </div>

      <div
        className="rounded-full  w-2 h-2"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default CustomerGridItem;
