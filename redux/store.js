import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from './slices/dashboardSlice';
import customerSlice from './slices/customerSlice';
import companySlice from './slices/companySlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      dashboardSlice: dashboardSlice,
      customerSlice: customerSlice,
      companySlice: companySlice,
    },
  });
};
