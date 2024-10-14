'use client';

import Link from 'next/link';
import React from 'react';
import {
  DashboardIcon,
  AccountIcon,
  CompanyIcon,
  EmailIcon,
  AnalyticsIcon,
  TransactionsIcon,
  SettingsIcon,
  CustomersIcon,
} from '../assets/icons';
import { usePathname } from 'next/navigation';

const overview = [
  { name: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
  { name: 'Company', path: '/company', icon: CompanyIcon },
  { name: 'Customers', path: '/customers', icon: CustomersIcon },
  { name: 'Messages', path: '/messages', icon: EmailIcon },
  { name: 'Transactions', path: '/transactions', icon: TransactionsIcon },
  { name: 'Analytics', path: '/analytics', icon: AnalyticsIcon },
];
const accounts = [
  { name: 'My Account', path: 'account', icon: AccountIcon },
  { name: 'Settings', path: 'settings', icon: SettingsIcon },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-start justify-start  gap-2 w-full">
      <span className="font-campton text-sm font-bold text-[#B1B2B2]">
        OVERVIEW
      </span>
      <ul className="flex items-start justify-start flex-col gap-5 w-full">
        {overview.map((item, index) => (
          <div
            key={index}
            className={`w-full py-2  ${
              pathname.includes(item.path)
                ? 'bg-[#EBF5FF] border-l-4 border-l-[#FF8D4E] pl-1'
                : ''
            }`}
          >
            <Link
              href={item.path}
              className="flex items-center justify-start gap-4 "
            >
              <item.icon />
              <p className="font-campton text-base font-bold text-[#161718]">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </ul>

      <span className="font-campton text-sm text-[#B1B2B2] font-bold mt-8">
        ACCOUNT
      </span>
      <ul className="flex items-start justify-start flex-col gap-5 w-full">
        {accounts.map((item, index) => (
          <div
            key={index}
            className={`w-full py-2  ${
              pathname.includes(item.path)
                ? 'bg-[#EBF5FF] border-l-4 border-l-[#FF8D4E] pl-1'
                : ''
            }`}
          >
            <Link
              href={item.path}
              className="flex items-center justify-start gap-4"
            >
              <item.icon />
              <p className="font-campton text-base font-bold text-[#161718]">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
