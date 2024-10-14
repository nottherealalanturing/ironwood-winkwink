import React from 'react';

const PersonalInfo = ({ customer }) => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start border-b border-b-[#DBE1E7] w-full py-4 gap-4 shadow-x hover:drop-shadow-lg">
        <p className="text-[#161718] font-campton text-base font-semibold">
          WORK DETAILS
        </p>
        <span>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold">
            Phone:
          </p>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            {customer.phone}
          </p>
        </span>
        <span>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold">
            Occupation:
          </p>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            {customer.occupation}
          </p>
        </span>

        <span>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold">
            Company/ Organization:
          </p>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            {customer.organization}
          </p>
        </span>

        <span>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold">
            Company/ Organization Address:
          </p>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            {customer.organizationAddress}
          </p>
        </span>

        <span>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold">
            Residential Address:
          </p>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            {customer.residentialAddress}
          </p>
        </span>

        <span>
          <p className="text-[#8A8B8B] font-campton text-sm font-semibold flex items-center justify-start gap-2">
            Means Of Identification:
          </p>
          <p className="text-[#161718] font-campton text-sm font-semibold">
            {customer.meansOfIdentification}
          </p>
        </span>
      </div>
    </div>
  );
};

export default PersonalInfo;
