import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  active: [
    {
      sn: 1,
      name: 'Bamidele Badmus',
      amount: '₦320,000.00',
      customerId: '#1245678904',
      collectionDate: '12-25-23',
      dueDate: '12-25-24',
    },
    {
      sn: 2,
      name: 'Chinedu Okeke',
      amount: '₦150,000.00',
      customerId: '#2345678910',
      collectionDate: '01-10-23',
      dueDate: '01-10-24',
    },
    {
      sn: 3,
      name: 'Aisha Ibrahim',
      amount: '₦200,000.00',
      customerId: '#3456789021',
      collectionDate: '02-15-23',
      dueDate: '02-15-24',
    },
    {
      sn: 4,
      name: 'Funke Adeyemi',
      amount: '₦450,000.00',
      customerId: '#4567890123',
      collectionDate: '03-05-23',
      dueDate: '03-05-24',
    },
    {
      sn: 5,
      name: 'Musa Danjuma',
      amount: '₦120,000.00',
      customerId: '#5678901234',
      collectionDate: '04-10-23',
      dueDate: '04-10-24',
    },
    {
      sn: 6,
      name: 'Tunde Afolabi',
      amount: '₦500,000.00',
      customerId: '#7890123456',
      collectionDate: '06-30-23',
      dueDate: '06-30-24',
    },
    {
      sn: 7,
      name: 'Ngozi Eze',
      amount: '₦220,000.00',
      customerId: '#8901234567',
      collectionDate: '07-25-23',
      dueDate: '07-25-24',
    },
    {
      sn: 8,
      name: 'Ibrahim Usman',
      amount: '₦110,000.00',
      customerId: '#9012345678',
      collectionDate: '08-12-23',
      dueDate: '08-12-24',
    },
    {
      sn: 9,
      name: 'Sola Olowokere',
      amount: '₦600,000.00',
      customerId: '#0123456789',
      collectionDate: '09-15-23',
      dueDate: '09-15-24',
    },
    {
      sn: 10,
      name: 'Emeka Nwankwo',
      amount: '₦350,000.00',
      customerId: '#1123456789',
      collectionDate: '10-05-23',
      dueDate: '10-05-24',
    },
  ],

  overdue: [
    {
      sn: 1,
      name: 'Kudirat Shittu',
      amount: '₦290,000.00',
      customerId: '#3345678901',
      collectionDate: '12-02-22',
      dueDate: '12-02-23',
    },
    {
      sn: 2,
      name: 'Babajide Bello',
      amount: '₦410,000.00',
      customerId: '#5567890123',
      collectionDate: '02-22-23',
      dueDate: '02-22-24',
    },
    {
      sn: 3,
      name: 'Aminu Yusuf',
      amount: '₦170,000.00',
      customerId: '#2234567890',
      collectionDate: '11-22-22',
      dueDate: '11-22-23',
    },
    {
      sn: 4,
      name: 'Grace Johnson',
      amount: '₦125,000.00',
      customerId: '#4456789012',
      collectionDate: '01-18-23',
      dueDate: '01-18-24',
    },
    {
      sn: 5,
      name: 'Samuel Akintunde',
      amount: '₦295,000.00',
      customerId: '#9901234567',
      collectionDate: '06-01-23',
      dueDate: '06-01-24',
    },
    {
      sn: 6,
      name: 'Gbenga Adebayo',
      amount: '₦300,000.00',
      customerId: '#7789012345',
      collectionDate: '04-08-23',
      dueDate: '04-08-24',
    },
    {
      sn: 7,
      name: 'Yetunde Olatunji',
      amount: '₦410,000.00',
      customerId: '#8890123456',
      collectionDate: '05-14-23',
      dueDate: '05-14-24',
    },
    {
      sn: 8,
      name: 'Fatima Suleiman',
      amount: '₦650,000.00',
      customerId: '#0123456781',
      collectionDate: '07-09-23',
      dueDate: '07-09-24',
    },
    {
      sn: 9,
      name: 'Chukwudi Nwosu',
      amount: '₦210,000.00',
      customerId: '#1023456789',
      collectionDate: '11-05-22',
      dueDate: '11-05-23',
    },
    {
      sn: 10,
      name: 'Folake Ajayi',
      amount: '₦275,000.00',
      customerId: '#1123456789',
      collectionDate: '10-12-22',
      dueDate: '10-12-23',
    },
  ],

  closed: [
    {
      sn: 1,
      name: 'Hauwa Abdullahi',
      amount: '₦530,000.00',
      customerId: '#6678901234',
      collectionDate: '03-12-23',
      dueDate: '03-12-24',
    },
    {
      sn: 2,
      name: 'Oladimeji Ogunsanya',
      amount: '₦480,000.00',
      customerId: '#3348901234',
      collectionDate: '06-11-22',
      dueDate: '06-11-23',
    },
    {
      sn: 3,
      name: 'Adetokunbo Awosika',
      amount: '₦310,000.00',
      customerId: '#5567890912',
      collectionDate: '04-01-23',
      dueDate: '04-01-24',
    },
    {
      sn: 4,
      name: 'Damilola Oni',
      amount: '₦415,000.00',
      customerId: '#4456780123',
      collectionDate: '03-20-23',
      dueDate: '03-20-24',
    },
    {
      sn: 5,
      name: 'Aliyu Suleiman',
      amount: '₦290,000.00',
      customerId: '#9987654321',
      collectionDate: '02-10-23',
      dueDate: '02-10-24',
    },
    {
      sn: 6,
      name: 'Folasade Igbinedion',
      amount: '₦150,000.00',
      customerId: '#8887765432',
      collectionDate: '07-05-23',
      dueDate: '07-05-24',
    },
    {
      sn: 7,
      name: 'Gbemi Arinze',
      amount: '₦220,000.00',
      customerId: '#7767890123',
      collectionDate: '05-18-23',
      dueDate: '05-18-24',
    },
    {
      sn: 8,
      name: 'Nkechi Udeh',
      amount: '₦325,000.00',
      customerId: '#6678901235',
      collectionDate: '08-09-22',
      dueDate: '08-09-23',
    },
    {
      sn: 9,
      name: 'Tijani Mohammed',
      amount: '₦405,000.00',
      customerId: '#5567890123',
      collectionDate: '09-11-22',
      dueDate: '09-11-23',
    },
    {
      sn: 10,
      name: 'Omowunmi Oladokun',
      amount: '₦360,000.00',
      customerId: '#4456789012',
      collectionDate: '11-23-22',
      dueDate: '11-23-23',
    },
  ],

  requests: [
    {
      sn: 1,
      name: 'Chika Okonkwo',
      amount: '₦135,000.00',
      customerId: '#1234567890',
      collectionDate: 'Pending',
      dueDate: 'Pending',
    },
    {
      sn: 2,
      name: 'Tayo Adeniran',
      amount: '₦180,000.00',
      customerId: '#2345678901',
      collectionDate: 'Pending',
      dueDate: 'Pending',
    },
    {
      sn: 3,
      name: 'Maryam Abubakar',
      amount: '₦250,000.00',
      customerId: '#3456789012',
      collectionDate: 'Pending',
      dueDate: 'Pending',
    },
    {
      sn: 4,
      name: 'Usman Sani',
      amount: '₦320,000.00',
      customerId: '#4567890123',
      collectionDate: 'Pending',
      dueDate: 'Pending',
    },
    {
      sn: 5,
      name: 'Bose Alabi',
      amount: '₦400,000.00',
      customerId: '#5678901234',
      collectionDate: 'Pending',
      dueDate: 'Pending',
    },
    {
      sn: 6,
      name: 'Dayo Taiwo',
      amount: '₦150,000.00',
      customerId: '#6789012345',
      collectionDate: 'Pending',
      dueDate: 'Pending',
    },
    {
      sn: 7,
      name: 'Segun Babalola',
      amount: '₦230,000.00',
      customerId: '#7890123456',
      collectionDate: 'Pending',
      dueDate: 'Pending',
    },
    {
      sn: 8,
      name: 'Rashidat Mohammed',
      amount: '₦210,000.00',
      customerId: '#8901234567',
      collectionDate: 'Pending',
      dueDate: 'Pending',
    },
    {
      sn: 9,
      name: 'Kenneth Ndukwe',
      amount: '₦330,000.00',
      customerId: '#9012345678',
      collectionDate: 'Pending',
      dueDate: 'Pending',
    },
    {
      sn: 10,
      name: 'Zainab Aliyu',
      amount: '₦185,000.00',
      customerId: '#0123456789',
      collectionDate: 'Pending',
      dueDate: 'Pending',
    },
  ],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addActive: (state, action) => {
      state.active.push(action.payload);
    },
    addOverdue: (state, action) => {
      state.overdue.push(action.payload);
    },
    addClosed: (state, action) => {
      state.closed.push(action.payload);
    },
    addRequest: (state, action) => {
      state.requests.push(action.payload);
    },
  },
});

export const { addActive, addOverdue, addClosed, addRequest } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
