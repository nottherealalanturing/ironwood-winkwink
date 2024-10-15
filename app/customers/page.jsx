'use client';
import React from 'react';
import DashboardGridItem from '../components/DashboardGridItem';
import Avatarheads from '../assets/images/avatarheads.png';
import Image from 'next/image';
import DashboardTables from '../components/DashboardTables';
import Reminders from '../components/Reminders';
import { CiSearch } from 'react-icons/ci';
import { FaFilter, FaPlus } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import compavatar from '../assets/images/compavatar.png';
import { useRouter } from 'next/navigation';
import CustomerGridItem from '../components/customer/CustomerGridItem';

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
];

const Dashboard = ({}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-start justify-start w-full h-full">
        <div className="grid grid-cols-4 gap-4 w-full">
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
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center justify-start gap-5">
                <p className="text-lg font-campton font-bold">All Customers</p>
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
                <FaPlus /> Add Customers
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {customersList.map((customer, index) => (
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
