import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuItems: ['Home', 'About', 'Contact'], // Початкові значення
  },
  reducers: {},
});

export default menuSlice.reducer;
