'use client';
import React, { useState } from 'react';
import Reminders from '@/app/components/Reminders';
import Image from 'next/image';
import compavatar from '../../../assets/images/staffavatar.png';
import StaffPreview from '@/app/components/staff/Staffpreview';
import Payouts from '@/app/components/staff/Payouts';
import History from '@/app/components/staff/History';
import CustomerPreview from '@/app/components/staff/Customerpreview';
import DashboardGridItem from '@/app/components/DashboardGridItem';
import Avatarheads from '../../../assets/images/avatarheads.png';
import { useParams } from 'next/navigation';

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
        month: 'August',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'August',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'August',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'August',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'August',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'August',
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
        month: 'August',
        dateDue: '15-01-2024',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'August',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '05-09-2022',
        month: 'August',
        dateDue: '05-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 150,000.00',
        dateIssued: '10-07-2022',
        month: 'August',
        dateDue: '10-07-2023',
        status: 'Closed',
      },
      {
        amount: 'N 220,000.00',
        dateIssued: '25-05-2022',
        month: 'August',
        dateDue: '25-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 190,000.00',
        dateIssued: '12-03-2022',
        month: 'August',
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
        month: 'August',
        dateDue: '05-02-2024',
        status: 'Active',
      },
      {
        amount: 'N 350,000.00',
        dateIssued: '10-12-2022',
        month: 'August',
        dateDue: '10-12-2023',
        status: 'Active',
      },
      {
        amount: 'N 300,000.00',
        dateIssued: '15-10-2022',
        month: 'August',
        dateDue: '15-10-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '20-08-2022',
        month: 'August',
        dateDue: '20-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '25-06-2022',
        month: 'August',
        dateDue: '25-06-2023',
        status: 'Closed',
      },
      {
        amount: 'N 150,000.00',
        dateIssued: '30-04-2022',
        month: 'August',
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
        month: 'August',
        dateDue: '10-02-2024',
        status: 'Active',
      },
      {
        amount: 'N 120,000.00',
        dateIssued: '15-12-2022',
        month: 'August',
        dateDue: '15-12-2023',
        status: 'Active',
      },
      {
        amount: 'N 100,000.00',
        dateIssued: '20-10-2022',
        month: 'August',
        dateDue: '20-10-2023',
        status: 'Active',
      },
      {
        amount: 'N 80,000.00',
        dateIssued: '25-08-2022',
        month: 'August',
        dateDue: '25-08-2023',
        status: 'Closed',
      },
      {
        amount: 'N 60,000.00',
        dateIssued: '30-06-2022',
        month: 'August',
        dateDue: '30-06-2023',
        status: 'Closed',
      },
      {
        amount: 'N 40,000.00',
        dateIssued: '05-05-2022',
        month: 'August',
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
        month: 'August',
        dateDue: '10-02-2024',
        status: 'Active',
      },
      {
        amount: 'N 120,000.00',
        dateIssued: '15-12-2022',
        month: 'August',
        dateDue: '15-12-2023',
        status: 'Active',
      },
      {
        amount: 'N 100,000.00',
        dateIssued: '20-10-2022',
        month: 'August',
        dateDue: '20-10-2023',
        status: 'Active',
      },
      {
        amount: 'N 80,000.00',
        dateIssued: '25-08-2022',
        month: 'August',
        dateDue: '25-08-2023',
        status: 'Closed',
      },
      {
        amount: 'N 60,000.00',
        dateIssued: '30-06-2022',
        month: 'August',
        dateDue: '30-06-2023',
        status: 'Closed',
      },
      {
        amount: 'N 40,000.00',
        dateIssued: '05-05-2022',
        month: 'August',
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
        month: 'August',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'August',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'August',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'August',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'August',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'August',
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
        month: 'August',
        dateDue: '15-01-2024',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'August',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '05-09-2022',
        month: 'August',
        dateDue: '05-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 150,000.00',
        dateIssued: '10-07-2022',
        month: 'August',
        dateDue: '10-07-2023',
        status: 'Closed',
      },
      {
        amount: 'N 220,000.00',
        dateIssued: '25-05-2022',
        month: 'August',
        dateDue: '25-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 190,000.00',
        dateIssued: '12-03-2022',
        month: 'August',
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
        month: 'August',
        dateDue: '05-02-2024',
        status: 'Active',
      },
      {
        amount: 'N 350,000.00',
        dateIssued: '10-12-2022',
        month: 'August',
        dateDue: '10-12-2023',
        status: 'Active',
      },
      {
        amount: 'N 300,000.00',
        dateIssued: '15-10-2022',
        month: 'August',
        dateDue: '15-10-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '20-08-2022',
        month: 'August',
        dateDue: '20-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '25-06-2022',
        month: 'August',
        dateDue: '25-06-2023',
        status: 'Closed',
      },
      {
        amount: 'N 150,000.00',
        dateIssued: '30-04-2022',
        month: 'August',
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
        month: 'August',
        dateDue: '10-02-2024',
        status: 'Active',
      },
      {
        amount: 'N 120,000.00',
        dateIssued: '15-12-2022',
        month: 'August',
        dateDue: '15-12-2023',
        status: 'Active',
      },
      {
        amount: 'N 100,000.00',
        dateIssued: '20-10-2022',
        month: 'August',
        dateDue: '20-10-2023',
        status: 'Active',
      },
      {
        amount: 'N 80,000.00',
        dateIssued: '25-08-2022',
        month: 'August',
        dateDue: '25-08-2023',
        status: 'Closed',
      },
      {
        amount: 'N 60,000.00',
        dateIssued: '30-06-2022',
        month: 'August',
        dateDue: '30-06-2023',
        status: 'Closed',
      },
      {
        amount: 'N 40,000.00',
        dateIssued: '05-05-2022',
        month: 'August',
        dateDue: '05-05-2023',
        status: 'Closed',
      },
    ],
  },
];
const getStaffById = (id) => {
  return staffList.find((staff) => staff.staffID === id) || null;
};

const Staff = ({ params }) => {
  const staff = getStaffById(params.staff);
  const [showReminder, setShowReminder] = useState(true);
  const paramss = useParams();

  console.log('pram', paramss);

  return (
    <div className="flex flex-col items-start justify-start gap-2 w-full">
      <div className="grid grid-cols-4 gap-4">
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
      <div className="flex items-start justify-between gap-2 w-full">
        <div className={`${showReminder ? 'w-[70%]' : 'w-full'} bg-[#ffffff]`}>
          <div className="flex items-center justify-start gap-2 py-14 px-5">
            <Image src={compavatar} alt="temp" />

            <div className="flex flex-col items-start justify-start gap-1">
              <p className="font-campton text-[#161718] font-bold text-lg">
                {staff.staffDetails.name}
              </p>
              <p className="font-campton text-[#8A8B8B] font-bold text-base text-ellipsis">
                {staff.staffDetails.email}
              </p>
              <div className="flex w-full justify-start gap-4 items-start">
                <button className="font-campton text-xs text-[#FFFFFF] bg-[#002448] border border-[#002448] py-2 px-4">
                  Assign Right
                </button>
                <button className="font-campton text-xs text-[#002448] bg-[#ffffff] border border-[#002448] py-2 px-4">
                  Message
                </button>
              </div>
            </div>
          </div>

          <div role="tablist" className="tabs tabs-lifted ">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab focus:ring-0"
              aria-label="Staff"
              onClick={() => setShowReminder(true)}
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <StaffPreview staff={staff.staffDetails} />
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab focus:ring-0"
              aria-label="Customer"
              onClick={() => setShowReminder(false)}
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <CustomerPreview staff={staff.staffDetails} />
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab focus:ring-0"
              aria-label="Payout"
              onClick={() => setShowReminder(false)}
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <Payouts payouts={staff.payouts} />
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab focus:ring-0"
              aria-label="History"
              onClick={() => setShowReminder(false)}
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <History history={staff.history} />
            </div>
          </div>
        </div>
        <Reminders showReminder={showReminder} />
      </div>
    </div>
  );
};

export default Staff;
