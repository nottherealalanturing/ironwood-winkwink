'use client';
import React from 'react';
import DashboardGridItem from '../../components/DashboardGridItem';
import Avatarheads from '../../assets/images/avatarheads.png';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { FaFilter, FaPlus } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import compavatar from '../../assets/images/compavatar.png';
import { useRouter } from 'next/navigation';

const griditems = [
  {
    text: 'TOTAL AMOUNT',
    total_amount: 'N300,000,000',
    percentage: '12.5',
    isProfit: true,
  },
  {
    text: 'TOTAL REVENUE',
    total_amount: 'N700,000.00',
    percentage: '0.8',
    isProfit: true,
  },
  {
    text: 'TOTAL CUSTOMERS',
    total_amount: '1,567',
    percentage: '10.8',
    isProfit: false,
  },
];

const staffList = [
  {
    staffID: '001',
    staffDetails: {
      name: 'Abdul-Hameed Badmus',
      email: 'abdulhammedbadmus@ironwood.com',
      phone: '+2349056787659',
      position: 'Loan Officer',
      employedSince: '12th October, 2020',
      address: 'Sir Stanza Street, Narayi Pipeline, Kaduna State',
      lineManager: 'Gabriel Dunsin Natheniel',
      document: 'Badmus+National+ID.pdf',
    },
    payouts: [
      {
        date: '12-12-2022',
        bank: 'Zenith Bank',
        accountNo: '3456789809',
        accountName: 'Bamidele Badmus',
        status: 'Successful',
        amountPaid: 'N 300,000.00',
      },
      {
        date: '12-12-2022',
        bank: 'Zenith Bank',
        accountNo: '3456789809',
        accountName: 'Bamidele Badmus',
        status: 'Successful',
        amountPaid: 'N 300,000.00',
      },
      {
        date: '20-11-2022',
        bank: 'First Bank',
        accountNo: '1234567890',
        accountName: 'Chukwuma Nnaji',
        status: 'Successful',
        amountPaid: 'N 200,000.00',
      },
      {
        date: '15-12-2022',
        bank: 'UBA',
        accountNo: '4567890123',
        accountName: 'Fatima Musa',
        status: 'Successful',
        amountPaid: 'N 350,000.00',
      },
      {
        date: '05-01-2023',
        bank: 'GTBank',
        accountNo: '9876543210',
        accountName: 'Abdul-Hameed Badmus',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '18-02-2023',
        bank: 'Access Bank',
        accountNo: '5678901234',
        accountName: 'Abdul-Hameed Badmus',
        status: 'Successful',
        amountPaid: 'N 320,000.00',
      },
    ],
    history: [
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    staffID: '002',
    staffDetails: {
      name: 'Chioma Okafor',
      email: 'chiomaokafor@ironwood.com',
      phone: '+2348034567890',
      position: 'Credit Analyst',
      employedSince: '3rd March, 2021',
      address: '15 Awolowo Road, Ikoyi, Lagos State',
      lineManager: 'Oluwaseun Adeleke',
      document: 'Okafor+Drivers+License.pdf',
    },
    payouts: [
      {
        date: '28-02-2023',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '31-01-2023',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '31-12-2022',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '30-11-2022',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '31-10-2022',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '30-09-2022',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
    ],
    history: [
      {
        amount: 'N 250,000.00',
        dateIssued: '15-01-2023',
        dateDue: '15-01-2024',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '05-09-2022',
        dateDue: '05-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 150,000.00',
        dateIssued: '10-07-2022',
        dateDue: '10-07-2023',
        status: 'Closed',
      },
      {
        amount: 'N 220,000.00',
        dateIssued: '25-05-2022',
        dateDue: '25-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 190,000.00',
        dateIssued: '12-03-2022',
        dateDue: '12-03-2023',
        status: 'Closed',
      },
    ],
  },
  {
    staffID: '003',
    staffDetails: {
      name: 'Oluwaseun Adebayo',
      email: 'oluwaseunadebayo@ironwood.com',
      phone: '+2347012345678',
      position: 'Risk Manager',
      employedSince: '17th July, 2019',
      address: '7 Akin Adesola Street, Victoria Island, Lagos State',
      lineManager: 'Chinyere Okonkwo',
      document: 'Adebayo+International+Passport.pdf',
    },
    payouts: [
      {
        date: '28-02-2023',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
      {
        date: '31-01-2023',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
      {
        date: '31-12-2022',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
      {
        date: '30-11-2022',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
      {
        date: '31-10-2022',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
      {
        date: '30-09-2022',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
    ],
    history: [
      {
        amount: 'N 400,000.00',
        dateIssued: '05-02-2023',
        dateDue: '05-02-2024',
        status: 'Active',
      },
      {
        amount: 'N 350,000.00',
        dateIssued: '10-12-2022',
        dateDue: '10-12-2023',
        status: 'Active',
      },
      {
        amount: 'N 300,000.00',
        dateIssued: '15-10-2022',
        dateDue: '15-10-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '20-08-2022',
        dateDue: '20-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '25-06-2022',
        dateDue: '25-06-2023',
        status: 'Closed',
      },
      {
        amount: 'N 150,000.00',
        dateIssued: '30-04-2022',
        dateDue: '30-04-2023',
        status: 'Closed',
      },
    ],
  },
  {
    staffID: '004',
    staffDetails: {
      name: 'Aminu Yusuf',
      email: 'aminuyusuf@ironwood.com',
      phone: '+2348098765432',
      position: 'Customer Service',
      employedSince: '5th May, 2022',
      address: '23 Ibrahim Taiwo Road, Kano State',
      lineManager: 'Fatima Ibrahim',
      document: 'Yusuf+Voters+Card.pdf',
    },
    payouts: [
      {
        date: '28-02-2023',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '31-01-2023',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '31-12-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '30-11-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '31-10-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '30-09-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
    ],
    history: [
      {
        amount: 'N 150,000.00',
        dateIssued: '10-02-2023',
        dateDue: '10-02-2024',
        status: 'Active',
      },
      {
        amount: 'N 120,000.00',
        dateIssued: '15-12-2022',
        dateDue: '15-12-2023',
        status: 'Active',
      },
      {
        amount: 'N 100,000.00',
        dateIssued: '20-10-2022',
        dateDue: '20-10-2023',
        status: 'Active',
      },
      {
        amount: 'N 80,000.00',
        dateIssued: '25-08-2022',
        dateDue: '25-08-2023',
        status: 'Closed',
      },
      {
        amount: 'N 60,000.00',
        dateIssued: '30-06-2022',
        dateDue: '30-06-2023',
        status: 'Closed',
      },
      {
        amount: 'N 40,000.00',
        dateIssued: '05-05-2022',
        dateDue: '05-05-2023',
        status: 'Closed',
      },
    ],
  },
  {
    staffID: '005',
    staffDetails: {
      name: 'Ngozi Eze',
      email: 'ngozieze@ironwood.com',
      phone: '+2348123456789',
      position: 'Marketing Manager',
      employedSince: '20th January, 2018',
      address: '5 Okpara Avenue, Enugu State',
      lineManager: 'Chukwudi Nnamani',
      document: 'Eze+National+ID.pdf',
    },
    payouts: [
      {
        date: '28-02-2023',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '31-01-2023',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '31-12-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '30-11-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '31-10-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '30-09-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
    ],
    history: [
      {
        amount: 'N 150,000.00',
        dateIssued: '10-02-2023',
        dateDue: '10-02-2024',
        status: 'Active',
      },
      {
        amount: 'N 120,000.00',
        dateIssued: '15-12-2022',
        dateDue: '15-12-2023',
        status: 'Active',
      },
      {
        amount: 'N 100,000.00',
        dateIssued: '20-10-2022',
        dateDue: '20-10-2023',
        status: 'Active',
      },
      {
        amount: 'N 80,000.00',
        dateIssued: '25-08-2022',
        dateDue: '25-08-2023',
        status: 'Closed',
      },
      {
        amount: 'N 60,000.00',
        dateIssued: '30-06-2022',
        dateDue: '30-06-2023',
        status: 'Closed',
      },
      {
        amount: 'N 40,000.00',
        dateIssued: '05-05-2022',
        dateDue: '05-05-2023',
        status: 'Closed',
      },
    ],
  },

  {
    staffID: '006',
    staffDetails: {
      name: 'Abdul-Hameed Badmus',
      email: 'abdulhammedbadmus@ironwood.com',
      phone: '+2349056787659',
      position: 'Loan Officer',
      employedSince: '12th October, 2020',
      address: 'Sir Stanza Street, Narayi Pipeline, Kaduna State',
      lineManager: 'Gabriel Dunsin Natheniel',
      document: 'Badmus+National+ID.pdf',
    },
    payouts: [
      {
        date: '12-12-2022',
        bank: 'Zenith Bank',
        accountNo: '3456789809',
        accountName: 'Bamidele Badmus',
        status: 'Successful',
        amountPaid: 'N 300,000.00',
      },
      {
        date: '12-12-2022',
        bank: 'Zenith Bank',
        accountNo: '3456789809',
        accountName: 'Bamidele Badmus',
        status: 'Successful',
        amountPaid: 'N 300,000.00',
      },
      {
        date: '20-11-2022',
        bank: 'First Bank',
        accountNo: '1234567890',
        accountName: 'Chukwuma Nnaji',
        status: 'Successful',
        amountPaid: 'N 200,000.00',
      },
      {
        date: '15-12-2022',
        bank: 'UBA',
        accountNo: '4567890123',
        accountName: 'Fatima Musa',
        status: 'Successful',
        amountPaid: 'N 350,000.00',
      },
      {
        date: '05-01-2023',
        bank: 'GTBank',
        accountNo: '9876543210',
        accountName: 'Abdul-Hameed Badmus',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '18-02-2023',
        bank: 'Access Bank',
        accountNo: '5678901234',
        accountName: 'Abdul-Hameed Badmus',
        status: 'Successful',
        amountPaid: 'N 320,000.00',
      },
    ],
    history: [
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    staffID: '007',
    staffDetails: {
      name: 'Chioma Okafor',
      email: 'chiomaokafor@ironwood.com',
      phone: '+2348034567890',
      position: 'Credit Analyst',
      employedSince: '3rd March, 2021',
      address: '15 Awolowo Road, Ikoyi, Lagos State',
      lineManager: 'Oluwaseun Adeleke',
      document: 'Okafor+Drivers+License.pdf',
    },
    payouts: [
      {
        date: '28-02-2023',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '31-01-2023',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '31-12-2022',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '30-11-2022',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '31-10-2022',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
      {
        date: '30-09-2022',
        bank: 'Access Bank',
        accountNo: '0123456789',
        accountName: 'Chioma Okafor',
        status: 'Successful',
        amountPaid: 'N 280,000.00',
      },
    ],
    history: [
      {
        amount: 'N 250,000.00',
        dateIssued: '15-01-2023',
        dateDue: '15-01-2024',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '05-09-2022',
        dateDue: '05-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 150,000.00',
        dateIssued: '10-07-2022',
        dateDue: '10-07-2023',
        status: 'Closed',
      },
      {
        amount: 'N 220,000.00',
        dateIssued: '25-05-2022',
        dateDue: '25-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 190,000.00',
        dateIssued: '12-03-2022',
        dateDue: '12-03-2023',
        status: 'Closed',
      },
    ],
  },
  {
    staffID: '008',
    staffDetails: {
      name: 'Oluwaseun Adebayo',
      email: 'oluwaseunadebayo@ironwood.com',
      phone: '+2347012345678',
      position: 'Risk Manager',
      employedSince: '17th July, 2019',
      address: '7 Akin Adesola Street, Victoria Island, Lagos State',
      lineManager: 'Chinyere Okonkwo',
      document: 'Adebayo+International+Passport.pdf',
    },
    payouts: [
      {
        date: '28-02-2023',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
      {
        date: '31-01-2023',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
      {
        date: '31-12-2022',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
      {
        date: '30-11-2022',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
      {
        date: '31-10-2022',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
      {
        date: '30-09-2022',
        bank: 'GTBank',
        accountNo: '2345678901',
        accountName: 'Oluwaseun Adebayo',
        status: 'Successful',
        amountPaid: 'N 450,000.00',
      },
    ],
    history: [
      {
        amount: 'N 400,000.00',
        dateIssued: '05-02-2023',
        dateDue: '05-02-2024',
        status: 'Active',
      },
      {
        amount: 'N 350,000.00',
        dateIssued: '10-12-2022',
        dateDue: '10-12-2023',
        status: 'Active',
      },
      {
        amount: 'N 300,000.00',
        dateIssued: '15-10-2022',
        dateDue: '15-10-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '20-08-2022',
        dateDue: '20-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '25-06-2022',
        dateDue: '25-06-2023',
        status: 'Closed',
      },
      {
        amount: 'N 150,000.00',
        dateIssued: '30-04-2022',
        dateDue: '30-04-2023',
        status: 'Closed',
      },
    ],
  },
  {
    staffID: '009',
    staffDetails: {
      name: 'Aminu Yusuf',
      email: 'aminuyusuf@ironwood.com',
      phone: '+2348098765432',
      position: 'Customer Service',
      employedSince: '5th May, 2022',
      address: '23 Ibrahim Taiwo Road, Kano State',
      lineManager: 'Fatima Ibrahim',
      document: 'Yusuf+Voters+Card.pdf',
    },
    payouts: [
      {
        date: '28-02-2023',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '31-01-2023',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '31-12-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '30-11-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '31-10-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
      {
        date: '30-09-2022',
        bank: 'UBA',
        accountNo: '3456789012',
        accountName: 'Aminu Yusuf',
        status: 'Successful',
        amountPaid: 'N 180,000.00',
      },
    ],
    history: [
      {
        amount: 'N 150,000.00',
        dateIssued: '10-02-2023',
        dateDue: '10-02-2024',
        status: 'Active',
      },
      {
        amount: 'N 120,000.00',
        dateIssued: '15-12-2022',
        dateDue: '15-12-2023',
        status: 'Active',
      },
      {
        amount: 'N 100,000.00',
        dateIssued: '20-10-2022',
        dateDue: '20-10-2023',
        status: 'Active',
      },
      {
        amount: 'N 80,000.00',
        dateIssued: '25-08-2022',
        dateDue: '25-08-2023',
        status: 'Closed',
      },
      {
        amount: 'N 60,000.00',
        dateIssued: '30-06-2022',
        dateDue: '30-06-2023',
        status: 'Closed',
      },
      {
        amount: 'N 40,000.00',
        dateIssued: '05-05-2022',
        dateDue: '05-05-2023',
        status: 'Closed',
      },
    ],
  },
];

const Dashboard = ({}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-start justify-start w-full h-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {griditems.map(
            ({ text, total_amount, percentage, isProfit }, index) => (
              <DashboardGridItem
                text={text}
                total_amount={total_amount}
                percentage={percentage}
                isProfit={isProfit}
                key={index}
              />
            )
          )}
          <div className="flex items-start justify-between gap-4 px-4 py-6 bg-[#FFFFFF]">
            <div className="flex flex-col items-start justify-start">
              <p className="font-campton font-semibold text-sm text-[#B1B2B2]">
                {'ACTIVE LOANS'}
              </p>
              <p className="font-campton font-black text-xl text-[#161718]">
                {'344'}
              </p>

              <div className="flex items-center justify-start w-[200px]">
                <Image
                  alt="tesr"
                  src={Avatarheads}
                  className="inline-block  rounded-full"
                  fill={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-start justify-start gap-2 p-2">
          <div className="w-full">
            <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between w-full">
              <span className="flex items-center justify-start gap-5">
                <p className="text-lg font-campton font-bold">All Staff List</p>
                <div className="flex flex-col md:flex-row items-center justify-start gap-2">
                  <label
                    htmlFor="search"
                    className="bg-[#ffffff] p-1 flex items-center justify-start active:outline-none active:border-none"
                  >
                    <input
                      type="text"
                      id="search"
                      placeholder="Search"
                      className="border-none bg-none"
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
                    >
                      <li>
                        <a>A-Z</a>
                      </li>
                      <li>
                        <a>Z-A</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </span>
              <button className="font-campton text-base font-bold text-[#FFFFFF] bg-[#002448] border border-[#002448] py-2 px-4 flex items-center justify-center gap-2">
                <FaPlus /> Create Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {staffList.map((staff, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center md:flex-row md:justify-between bg-[#F7F8F9] p-3"
                  onClick={() => router.push(`company/staff/${staff.staffID}`)}
                >
                  <div className="flex flex-col items-start justify-start gap-1">
                    <p className="font-campton text-[#161718] font-bold text-base">
                      {staff.staffDetails.name}
                    </p>
                    <p className="font-campton text-[#8A8B8B] font-bold text-[11px] text-ellipsis">
                      {staff.staffDetails.email}
                    </p>
                    <div className="flex items-center justify-start gap-2">
                      <Image src={compavatar} alt="temp" />
                      <p className="bg-[#F3EBFF] p-1 ">
                        {staff.staffDetails.position}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#002448] rounded-full p-2 text-[#FFFFFF] text-sm ">
                    100
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
