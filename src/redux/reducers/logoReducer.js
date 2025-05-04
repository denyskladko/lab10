import { createSlice } from '@reduxjs/toolkit';

const logoSlice = createSlice({
  name: 'logo',
  initialState: {
    logoPath: '/logo192.png', // Вкажіть коректний шлях до логотипу
  },
  reducers: {},
});

export default logoSlice.reducer;
