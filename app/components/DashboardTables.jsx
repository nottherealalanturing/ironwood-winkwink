'use client';
import React, { useState, useEffect } from 'react';
import { Tabs } from 'flowbite-react';
import { MdDashboard } from 'react-icons/md';
import { Table } from 'flowbite-react';
import { SettingsIcon } from '../assets/icons';
import { FaFilter } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import DashboardModal from './DashboardModal';
import { useAppSelector } from '@/redux/hooks/hooks';

const Tables = ({ customers, searchValue }) => {
  const [showModal, setshowModal] = useState(false);
  const [tableValues, setTableValues] = useState(customers);

  useEffect(() => {
    if (searchValue === '') {
      setTableValues(customers);
    } else {
      const filteredData = customers.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setTableValues(filteredData);
    }
  }, [customers, searchValue]);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Customer Id</th>
              <th>Collection Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tableValues.map((customer, index) => (
              <tr
                key={index}
                onClick={() => {
                  setshowModal(true);
                }}
              >
                <td>{customer.sn}</td>
                <td>{customer.name}</td>
                <td>{customer.amount}</td>
                <td>{customer.customerId}</td>
                <td>{customer.collectionDate}</td>
                <td>{customer.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DashboardModal showModal={showModal} setshowModal={setshowModal} />
    </>
  );
};

const DashboardTables = ({}) => {
  const { active, overdue, closed, requests } = useAppSelector(
    (state) => state.dashboardSlice
  );
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <div className="w-[70%]">
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-campton font-bold">Loan</p>
          <div className="flex items-center justify-start gap-2">
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
        </div>

        <div role="tablist" className="tabs tabs-lifted ">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Active"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <Tables searchValue={searchValue} customers={active} />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Requests"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <Tables searchValue={searchValue} customers={requests} />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Overdue"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <Tables searchValue={searchValue} customers={overdue} />
          </div>
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Closed"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <Tables searchValue={searchValue} customers={closed} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTables;
