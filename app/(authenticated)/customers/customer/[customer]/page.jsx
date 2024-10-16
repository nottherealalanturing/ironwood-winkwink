'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { MdModeEdit } from 'react-icons/md';
import compavatar from '../../../../assets/images/staffavatar.png';
import Payouts from '@/app/components/staff/Payouts';
import History from '@/app/components/staff/History';
import CustomerGridItem from '@/app/components/customer/CustomerGridItem';
import PersonalInfo from '@/app/components/customer/PersonalInfo';

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

const customersList = [
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '002',
    personalInformation: {
      name: 'Adeboye Badmus',
      customerID: '002',
      loanMedium: 'Manually',
      loanStatus: 'Settled',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        dateIssued: '12-08-2022',
        month: 'June',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        dateIssued: '15-05-2022',
        month: 'June',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        dateIssued: '01-09-2022',
        month: 'June',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        dateIssued: '20-11-2022',
        month: 'June',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        dateIssued: '05-01-2023',
        month: 'June',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
  {
    customerID: '001',
    personalInformation: {
      name: 'Bamidele Badmus',
      customerID: '001',
      loanMedium: 'Website',
      loanStatus: 'Active',
      email: 'bamidelbadmus@gmail.com',
      accountNumber: '#1234',
      phone: '08066756057',
      occupation: 'Assistant Lecturer',
      organization: 'Ahmadu Bello University, Zaria',
      organizationAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      residentialAddress: 'Plot 33, Abubakar Tafawa Balewa Way, Abuja',
      meansOfIdentification: 'NIN',
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
        month: 'July',
        dateIssued: '12-08-2022',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 303,000.00',
        month: 'July',
        dateIssued: '12-08-2022',
        dateDue: '12-08-2023',
        status: 'Active',
      },
      {
        amount: 'N 200,000.00',
        month: 'July',
        dateIssued: '15-05-2022',
        dateDue: '15-05-2023',
        status: 'Active',
      },
      {
        amount: 'N 250,000.00',
        month: 'July',
        dateIssued: '01-09-2022',
        dateDue: '01-09-2023',
        status: 'Active',
      },
      {
        amount: 'N 180,000.00',
        month: 'July',
        dateIssued: '20-11-2022',
        dateDue: '20-11-2023',
        status: 'Active',
      },
      {
        amount: 'N 280,000.00',
        month: 'July',
        dateIssued: '05-01-2023',
        dateDue: '05-01-2024',
        status: 'Active',
      },
    ],
  },
];

const getCustomerById = (id) => {
  return customersList.find((customer) => customer.staffID === id) || null;
};

const Customer = ({ params }) => {
  const customer = getCustomerById(params.staff);

  return (
    <div className="flex flex-col items-start justify-start gap-2 w-full">
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

      <div className="flex items-start justify-between gap-2 w-full">
        <div className={'w-full bg-[#ffffff]'}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-14 px-5">
            <span className="flex items-center justify-start gap-2">
              <Image src={compavatar} alt="temp" />

              <div className="flex flex-col items-start justify-start gap-1">
                <p className="font-campton text-[#161718] font-bold text-lg">
                  {customer.personalInformation.name}
                </p>
                <p className="font-campton text-[#8A8B8B] font-bold text-base text-ellipsis">
                  {customer.personalInformation.email}
                </p>
                <div className="flex w-full justify-start gap-4 items-start">
                  <button className="font-campton text-xs text-[#FFFFFF] bg-[#002448] border border-[#002448] py-2 px-4">
                    Set Reminder
                  </button>
                  <button className="font-campton text-xs text-[#002448] bg-[#ffffff] border border-[#002448] py-2 px-4 flex items-center justify-center gap-2">
                    <MdModeEdit /> Edit KYC
                  </button>
                </div>
              </div>
            </span>
            <div className="flex items-center justify-start gap-2">
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
                  customer?.personalInformation?.loanMedium === 'Website'
                    ? ' text-[#002448] bg-[#CCD3DA]'
                    : 'text-[#9747FF] bg-[#F3EBFF]'
                }`}
              >
                {customer?.personalInformation?.loanMedium}
              </p>
            </div>
          </div>

          <div role="tablist" className="tabs tabs-lifted ">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab focus:ring-0"
              aria-label="Personal Info"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <PersonalInfo customer={customer.personalInformation} />
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab focus:ring-0"
              aria-label="Payout"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6 overflow-auto"
            >
              <Payouts payouts={customer.payouts} />
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab focus:ring-0"
              aria-label="History"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6 overflow-auto"
            >
              <History history={customer.history} />
            </div>
          </div>
        </div>
        {/*  <Reminders showReminder={showReminder} /> */}
      </div>
    </div>
  );
};

export default Customer;
