import React from 'react';
import pdfimage from '../../assets/images/pdf.png';
import Image from 'next/image';

const StaffPreview = ({ staff }) => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start border-b border-b-[#DBE1E7] w-full py-4 gap-4 shadow-x hover:drop-shadow-lg">
        <span>
          <p className="text-[hsl(210,100%,14%)] font-campton text-sm font-semibold">
            {staff.name}-{staff.position}
          </p>
          <p className="font-campton text-[#161718] text-sm font-normal ">
            {staff.employedSince}
          </p>
        </span>
        <p className="text-[#161718] font-campton text-base font-semibold">
          Personal Information
        </p>
        <span>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            Name:
          </p>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold">
            {staff.name}-{staff.position}
          </p>
        </span>
        <span>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            Phone No:
          </p>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold">
            {staff.phone}
          </p>
        </span>

        <span>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            Email:
          </p>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold">
            {staff.email}
          </p>
        </span>

        <span>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            Address:
          </p>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold">
            {staff.address}
          </p>
        </span>

        <span>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            Line Manager:
          </p>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold">
            {staff.lineManager}
          </p>
        </span>

        <span>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            Document:
          </p>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold flex items-center justify-start gap-2">
            <Image src={pdfimage} alt="pdf" /> {staff.document}
          </p>
        </span>
      </div>
    </div>
  );
};

export default StaffPreview;
