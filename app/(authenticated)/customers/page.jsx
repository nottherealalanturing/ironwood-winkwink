'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { FaFilter, FaPlus } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import compavatar from '../../assets/images/compavatar.png';
import { useRouter } from 'next/navigation';
import CustomerGridItem from '../../components/customer/CustomerGridItem';
import { useAppSelector } from '@/redux/hooks/hooks';
import { toast } from 'react-toastify';

const griditems = [
  {
    text: 'ACTIVE LOANS',
    number: '334',
    color: '#34A853',
  },
  {
    text: 'INACTIVE LOANS',
    number: '33',
    color: '#1B7CFC',
  },
  {
    text: 'DUE LOANS',
    number: '433',
    color: '#FBBC05',
  },
  {
    text: 'DEFAULTED LOANS',
    number: '133',
    color: '#EB4335',
  },
];
const Dashboard = ({}) => {
  const router = useRouter();
  const { customers } = useAppSelector((state) => state.customerSlice);
  const notify = () => toast.error("Can't create customer at this time!");

  const [searchValue, setSearchValue] = useState('');
  const [customerList, setCustomerList] = useState(customers);

  useEffect(() => {
    if (searchValue === '') {
      setCustomerList(customers);
    } else {
      const filteredData = customers.filter((item) =>
        item?.personalInformation.name
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setCustomerList(filteredData);
    }
  }, [customers, searchValue]);
  return (
    <>
      <div className="flex flex-col items-start justify-start w-full h-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {griditems.map(({ text, color, number }, index) => (
            <CustomerGridItem
              color={color}
              number={number}
              text={text}
              key={index}
            />
          ))}
        </div>
        <div className="w-full flex items-start justify-start gap-2 p-2">
          <div className="w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full">
              <span className="flex items-center justify-start gap-5">
                <p className="text-lg font-campton font-bold">All Customers</p>
                <div className="flex flex-col items-start md:flex-row md:items-center justify-start gap-2">
                  <label
                    htmlFor="search"
                    className="bg-[#ffffff] p-1 flex items-center justify-start active:outline-none active:border-none"
                  >
                    <input
                      type="text"
                      id="search"
                      placeholder="Search"
                      className="border-none bg-none"
                      onChange={(e) => {
                        setSearchValue(e.target.value);
                      }}
                      value={searchValue}
                    />
                    <CiSearch />
                  </label>
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-1 bg-[#002448] text-[#ffffff] "
                    >
                      <FaFilter color="#ffffff" size={10} /> Filter{' '}
                      <MdArrowDropDown color="#ffffff" />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    ></ul>
                  </div>
                </div>
              </span>
              <button
                className="font-campton text-base font-bold text-[#FFFFFF] bg-[#002448] border border-[#002448] py-2 px-4 flex items-center justify-center gap-2"
                onClick={notify}
              >
                <FaPlus /> Add Customers
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {customerList.map((customer, index) => (
                <div
                  key={index}
                  className="flex  items-center justify-between bg-[#F7F8F9] p-3 shadow-x hover:drop-shadow-lg"
                  onClick={() =>
                    router.push(
                      `customers/customer/${customer?.personalInformation?.customerID}`
                    )
                  }
                >
                  <div className="flex flex-col items-start justify-start gap-1">
                    <div className="flex items-start justify-start gap-2">
                      <Image src={compavatar} alt="temp" />
                      <span>
                        <p className="font-campton text-[#161718] font-bold text-base">
                          {customer?.personalInformation?.name}
                        </p>
                        <p className="font-campton text-[#8A8B8B] font-bold text-[11px] text-ellipsis">
                          {customer?.personalInformation?.customerID}
                        </p>
                      </span>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <p className="text-nowrap font-campton font-bold text-xs ">
                        Loan Status:
                      </p>
                      <p
                        className={`bg-[#F3EBFF] p-1 font-campton font-bold text-xs text-nowrap rounded-sm ${
                          customer?.personalInformation?.loanStatus === 'Active'
                            ? 'text-[#34A853] bg-[#E8F8EC]'
                            : 'text-[#d0545c7e] bg-[#E8F8EC]'
                        }`}
                      >
                        {customer?.personalInformation?.loanStatus}
                      </p>

                      <p
                        className={`bg-[#F3EBFF] p-1 font-campton font-bold text-xs text-nowrap rounded-sm ${
                          customer?.personalInformation?.loanMedium ===
                          'Website'
                            ? ' text-[#002448] bg-[#CCD3DA]'
                            : 'text-[#9747FF] bg-[#F3EBFF]'
                        }`}
                      >
                        {customer?.personalInformation?.loanMedium}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
